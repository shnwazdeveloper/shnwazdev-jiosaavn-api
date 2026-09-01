import { describe, expect, it } from 'vitest'
import { App } from './app.js'

describe('App routes', () => {
  const app = new App([]).getApp()

  it('serves health check', async () => {
    const response = await app.request('/health')
    const body = (await response.json()) as { success: boolean; message: string; api: string }

    expect(response.status).toBe(200)
    expect(body.success).toBe(true)
    expect(body.message).toBe('ok')
    expect(body.api).toBe('ShnwazDev JioSaavn API')
  })

  it('serves endpoints index openly without an API key', async () => {
    const response = await app.request('/api/endpoints')
    const body = (await response.json()) as { success: boolean; data: unknown[] }

    expect(response.status).toBe(200)
    expect(body.success).toBe(true)
    expect(Array.isArray(body.data)).toBe(true)
  })

  it('serves limits metadata', async () => {
    const response = await app.request('/api/limits')
    const body = (await response.json()) as { success: boolean; data: { appRateLimit: string } }

    expect(response.status).toBe(200)
    expect(body.success).toBe(true)
    expect(body.data.appRateLimit).toBe('none')
  })
})



