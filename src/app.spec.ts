import { describe, expect, it } from 'vitest'
import { App } from './app.js'

describe('App API key routes', () => {
  const app = new App([]).getApp()

  it('generates a public Sh.Qre style API key', async () => {
    const response = await app.request('/apikey')
    const body = (await response.json()) as { success: boolean; data: { apiKey: string; code: string } }

    expect(response.status).toBe(200)
    expect(response.headers.get('cache-control')).toBe('no-store, max-age=0')
    expect(body.success).toBe(true)
    expect(body.data.apiKey).toMatch(/^Sh\.[A-Za-z0-9]{3}$/)
    expect(body.data.code).toMatch(/^[A-Za-z0-9]{3}$/)
  })

  it('protects API routes without a key', async () => {
    const response = await app.request('/api/endpoints')

    await expect(response.json()).resolves.toEqual({
      success: false,
      message: 'valid API key required, generate one at /apikey'
    })
    expect(response.status).toBe(401)
  })

  it('accepts generated API keys on protected API routes', async () => {
    const keyResponse = await app.request('/apikey')
    const { data } = (await keyResponse.json()) as { data: { apiKey: string } }

    const response = await app.request('/api/endpoints', {
      headers: { 'X-API-Key': data.apiKey }
    })

    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toMatchObject({ success: true })
  })

  it('requires admin secret to revoke and restore keys', async () => {
    const keyResponse = await app.request('/apikey')
    const { data } = (await keyResponse.json()) as { data: { apiKey: string } }

    // Revoke without admin secret should fail (403)
    const unauthRevoke = await app.request('/apikey/revoke', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apiKey: data.apiKey })
    })
    expect(unauthRevoke.status).toBe(403)

    // Revoke with admin secret should succeed (200)
    const authRevoke = await app.request('/apikey/revoke', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apiKey: data.apiKey, adminSecret: 'shnwazdev-admin' })
    })
    expect(authRevoke.status).toBe(200)

    // Validate key is now revoked
    const checkVal = await app.request(`/apikey/validate?key=${data.apiKey}`)
    const checkBody = (await checkVal.json()) as { success: boolean; valid: boolean; revoked: boolean }
    expect(checkBody.valid).toBe(false)
    expect(checkBody.revoked).toBe(true)

    // Restore key as admin
    const restoreRes = await app.request('/api/admin/unrevoke', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apiKey: data.apiKey, adminSecret: 'shnwazdev-admin' })
    })
    expect(restoreRes.status).toBe(200)

    // Validate key is active again
    const postRestoreVal = await app.request(`/apikey/validate?key=${data.apiKey}`)
    const postRestoreBody = (await postRestoreVal.json()) as { success: boolean; valid: boolean }
    expect(postRestoreBody.valid).toBe(true)
  })
})


