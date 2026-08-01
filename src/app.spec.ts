import { describe, expect, it } from 'vitest'
import { App } from './app.js'

describe('App API key routes', () => {
  const app = new App([]).getApp()

  it('generates a public Saya API key', async () => {
    const response = await app.request('/apikey')
    const body = (await response.json()) as { success: boolean; data: { apiKey: string; randomNumber: string } }

    expect(response.status).toBe(200)
    expect(response.headers.get('cache-control')).toBe('no-store, max-age=0')
    expect(body.success).toBe(true)
    expect(body.data.apiKey).toMatch(/^Saya-\d{9}-[a-z0-9]+-[\w-]{24}$/)
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
})
