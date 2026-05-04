import { ExtendedController } from '#modules/extended/controllers'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const payload = { success: true, data: [{ id: '3IoDK8qI' }] }
const nativeFetch = globalThis.fetch

describe('ExtendedController', () => {
  let controller: ExtendedController
  let fetchMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    controller = new ExtendedController()
    controller.initRoutes()

    fetchMock = vi.fn(() => Promise.resolve(new Response(JSON.stringify(payload))))
    vi.stubGlobal('fetch', fetchMock)
  })

  afterEach(() => {
    vi.stubGlobal('fetch', nativeFetch)
  })

  it('proxies static extended endpoints with query params', async () => {
    const response = await controller.controller.request('/trending/songs?limit=2&page=1')

    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual(payload)

    const [url, init] = fetchMock.mock.calls[0] as [URL, RequestInit]
    expect(url.toString()).toBe('https://elitejiosaavn-api.vercel.app/api/trending/songs?limit=2&page=1')
    expect(init.headers).toMatchObject({ Accept: 'application/json' })
  })

  it('proxies dynamic extended endpoints with path params', async () => {
    const response = await controller.controller.request('/songs/3IoDK8qI/share?quality=high')

    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual(payload)

    const [url] = fetchMock.mock.calls[0] as [URL, RequestInit]
    expect(url.toString()).toBe('https://elitejiosaavn-api.vercel.app/api/songs/3IoDK8qI/share?quality=high')
  })
})
