import { describe, expect, it } from 'vitest'
import { App } from './app.js'

describe('App API key routes', () => {
  const app = new App([]).getApp()

  it('generates a public Sh. API key with 3-digit code', async () => {
    const response = await app.request('/apikey')
    const body = (await response.json()) as { success: boolean; data: { apiKey: string; code3Digit: string; randomNumber: string } }

    expect(response.status).toBe(200)
    expect(response.headers.get('cache-control')).toBe('no-store, max-age=0')
    expect(body.success).toBe(true)
    expect(body.data.apiKey).toMatch(/^Sh\.\d{3}-\d{9}-[a-z0-9]+-[\w-]{24}$/)
    expect(body.data.code3Digit).toMatch(/^\d{3}$/)
    expect(body.data.randomNumber).toMatch(/^\d{9}$/)
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

  it('validates and revokes API keys correctly', async () => {
    const keyResponse = await app.request('/apikey')
    const { data } = (await keyResponse.json()) as { data: { apiKey: string } }

    // Validate active key
    const valResponse = await app.request(`/apikey/validate?key=${data.apiKey}`)
    const valBody = (await valResponse.json()) as { success: boolean; valid: boolean }
    expect(valBody.valid).toBe(true)

    // Revoke key
    const revokeResponse = await app.request('/apikey/revoke', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apiKey: data.apiKey })
    })
    expect(revokeResponse.status).toBe(200)

    // Check revoked status
    const postRevokeVal = await app.request(`/apikey/validate?key=${data.apiKey}`)
    const postRevokeBody = (await postRevokeVal.json()) as { success: boolean; valid: boolean; revoked: boolean }
    expect(postRevokeBody.valid).toBe(false)
    expect(postRevokeBody.revoked).toBe(true)

    // Access with revoked key should fail
    const rejectedResponse = await app.request('/api/endpoints', {
      headers: { 'X-API-Key': data.apiKey }
    })
    expect(rejectedResponse.status).toBe(401)
  })
})

