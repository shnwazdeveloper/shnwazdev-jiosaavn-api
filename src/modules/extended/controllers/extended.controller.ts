import process from 'node:process'
import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'
import { userAgents } from '#common/constants'
import type { Routes } from '#common/types'
import type { Context } from 'hono'

const UPSTREAM_BASE_URL = process.env.JIOSAAVN_UPSTREAM_BASE_URL || 'https://elitejiosaavn-api.vercel.app'

const JsonResponse = z.any().openapi({
  description: 'JSON payload returned by the JioSaavn-compatible upstream route.'
})

export const ExtendedEndpointList: Array<{ method: string; path: string; description: string }> = [
  { method: 'GET', path: '/api/artists/by-name?query={query}', description: 'Retrieve artist by name.' },
  { method: 'GET', path: '/api/artists/{id}/related', description: 'Retrieve related artists.' },
  { method: 'GET', path: '/api/channels', description: 'Retrieve channels.' },
  { method: 'GET', path: '/api/channels/{id}', description: 'Retrieve channel detail.' },
  { method: 'GET', path: '/api/charts', description: 'Retrieve JioSaavn charts.' },
  { method: 'GET', path: '/api/discover', description: 'Retrieve discover channels.' },
  { method: 'GET', path: '/api/genres', description: 'Retrieve genre channels.' },
  { method: 'GET', path: '/api/home', description: 'Retrieve the JioSaavn home feed.' },
  {
    method: 'GET',
    path: '/api/home/artist-recommendations',
    description: 'Retrieve home artist radio recommendations.'
  },
  { method: 'GET', path: '/api/home/city-modules', description: 'Retrieve home city modules.' },
  { method: 'GET', path: '/api/home/modules', description: 'Retrieve home feed module metadata.' },
  { method: 'GET', path: '/api/home/promos', description: 'Retrieve editorial promo groups.' },
  { method: 'GET', path: '/api/moods', description: 'Retrieve mood channels.' },
  { method: 'GET', path: '/api/music-plus', description: 'Retrieve music plus channels.' },
  { method: 'GET', path: '/api/radio', description: 'Retrieve radio stations.' },
  { method: 'GET', path: '/api/radio/artists', description: 'Retrieve artist radio recommendations.' },
  { method: 'GET', path: '/api/radio/featured', description: 'Retrieve featured radio stations.' },
  { method: 'GET', path: '/api/radio/{id}', description: 'Retrieve a radio station detail payload.' },
  { method: 'GET', path: '/api/lyrics?query={query}', description: 'Retrieve lyrics by song name.' },
  { method: 'GET', path: '/api/lyrics/{id}', description: 'Retrieve lyrics by song or lyrics ID.' },
  { method: 'GET', path: '/api/lyrics/{id}/sync', description: 'Retrieve synced lyrics payload.' },
  { method: 'GET', path: '/api/episodes/{id}', description: 'Retrieve a podcast episode by ID.' },
  { method: 'GET', path: '/api/podcasts', description: 'Retrieve a podcast by show ID, token, link, or query.' },
  { method: 'GET', path: '/api/podcasts/{id}', description: 'Retrieve a podcast by ID or token.' },
  { method: 'GET', path: '/api/search/top-query?query={query}', description: 'Search for the top query bucket.' },
  { method: 'GET', path: '/api/songs/{id}/ringtone', description: 'Retrieve ringtone preview details.' },
  { method: 'GET', path: '/api/songs/{id}/share', description: 'Retrieve a shareable song link.' },
  { method: 'GET', path: '/api/trending', description: 'Retrieve all browse feeds in one response.' },
  { method: 'GET', path: '/api/trending/albums', description: 'Retrieve trending albums.' },
  { method: 'GET', path: '/api/trending/artists', description: 'Retrieve trending artists.' },
  { method: 'GET', path: '/api/trending/playlists', description: 'Retrieve trending playlists.' },
  { method: 'GET', path: '/api/trending/podcasts', description: 'Retrieve trending podcasts.' },
  { method: 'GET', path: '/api/trending/songs', description: 'Retrieve trending songs.' }
]

const ProxyRoutes = [
  { path: '/artists/by-name', tag: 'Artists', summary: 'Retrieve artist by name' },
  { path: '/artists/{id}/related', tag: 'Artists', summary: 'Retrieve related artists' },
  { path: '/channels', tag: 'Browse', summary: 'Retrieve channels' },
  { path: '/channels/{id}', tag: 'Browse', summary: 'Retrieve channel detail' },
  { path: '/charts', tag: 'Browse', summary: 'Retrieve JioSaavn charts' },
  { path: '/discover', tag: 'Browse', summary: 'Retrieve discover channels' },
  { path: '/genres', tag: 'Browse', summary: 'Retrieve genre channels' },
  { path: '/home', tag: 'Browse', summary: 'Retrieve the JioSaavn home feed' },
  { path: '/home/artist-recommendations', tag: 'Browse', summary: 'Retrieve home artist radio recommendations' },
  { path: '/home/city-modules', tag: 'Browse', summary: 'Retrieve home city modules' },
  { path: '/home/modules', tag: 'Browse', summary: 'Retrieve home feed module metadata' },
  { path: '/home/promos', tag: 'Browse', summary: 'Retrieve editorial promo groups' },
  { path: '/moods', tag: 'Browse', summary: 'Retrieve mood channels' },
  { path: '/music-plus', tag: 'Browse', summary: 'Retrieve music plus channels' },
  { path: '/radio', tag: 'Browse', summary: 'Retrieve radio stations' },
  { path: '/radio/artists', tag: 'Browse', summary: 'Retrieve artist radio recommendations' },
  { path: '/radio/featured', tag: 'Browse', summary: 'Retrieve featured radio stations' },
  { path: '/radio/{id}', tag: 'Browse', summary: 'Retrieve a radio station detail payload' },
  { path: '/lyrics', tag: 'Lyrics', summary: 'Retrieve lyrics by song name' },
  { path: '/lyrics/{id}', tag: 'Lyrics', summary: 'Retrieve lyrics by song or lyrics ID' },
  { path: '/lyrics/{id}/sync', tag: 'Lyrics', summary: 'Retrieve synced lyrics payload' },
  { path: '/episodes/{id}', tag: 'Podcasts', summary: 'Retrieve a podcast episode by ID' },
  { path: '/podcasts', tag: 'Podcasts', summary: 'Retrieve a podcast by show ID, token, link, or query' },
  { path: '/podcasts/{id}', tag: 'Podcasts', summary: 'Retrieve a podcast by ID or token' },
  { path: '/search/top-query', tag: 'Search', summary: 'Search for the top query bucket' },
  { path: '/songs/{id}/ringtone', tag: 'Songs', summary: 'Retrieve ringtone preview details' },
  { path: '/songs/{id}/share', tag: 'Songs', summary: 'Retrieve a shareable song link' },
  { path: '/trending', tag: 'Trending', summary: 'Retrieve all browse feeds in one response' },
  { path: '/trending/albums', tag: 'Trending', summary: 'Retrieve trending albums' },
  { path: '/trending/artists', tag: 'Trending', summary: 'Retrieve trending artists' },
  { path: '/trending/playlists', tag: 'Trending', summary: 'Retrieve trending playlists' },
  { path: '/trending/podcasts', tag: 'Trending', summary: 'Retrieve trending podcasts' },
  { path: '/trending/songs', tag: 'Trending', summary: 'Retrieve trending songs' }
] as const

export class ExtendedController implements Routes {
  public controller: OpenAPIHono

  constructor() {
    this.controller = new OpenAPIHono()
  }

  public initRoutes() {
    ProxyRoutes.forEach((route) => {
      const request = route.path.includes('{id}')
        ? {
            params: z.object({
              id: z.string().openapi({
                description: 'JioSaavn resource ID or token',
                type: 'string',
                example: '1274170'
              })
            })
          }
        : undefined

      this.controller.openapi(
        createRoute({
          method: 'get',
          path: route.path,
          tags: [route.tag],
          summary: route.summary,
          description: route.summary,
          operationId: this.createOperationId(route.path),
          request,
          responses: {
            200: {
              description: 'Successful response from the extended JioSaavn endpoint',
              content: {
                'application/json': {
                  schema: JsonResponse
                }
              }
            }
          }
        }),
        (ctx) => this.proxy(ctx, route.path)
      )
    })
  }

  private async proxy(ctx: Context, pathTemplate: string) {
    const upstreamPath = pathTemplate.replaceAll(/\{([^}]+)\}/g, (_, key: string) =>
      encodeURIComponent(ctx.req.param(key) || '')
    )
    const upstreamUrl = new URL(`/api${upstreamPath}`, UPSTREAM_BASE_URL)
    const currentUrl = new URL(ctx.req.url)
    currentUrl.searchParams.forEach((value, key) => upstreamUrl.searchParams.append(key, value))

    const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)]
    const response = await fetch(upstreamUrl, {
      headers: {
        Accept: 'application/json',
        'User-Agent': randomUserAgent
      }
    })

    const text = await response.text()

    try {
      const data = JSON.parse(text) as unknown
      return ctx.json(data as never, 200)
    } catch {
      return ctx.json(
        {
          success: response.ok,
          data: text,
          upstream: upstreamUrl.toString()
        } as never,
        200
      )
    }
  }

  private createOperationId(path: string) {
    return `extended${path
      .replaceAll(/^\//g, '')
      .replaceAll(/\{([^}]+)\}/g, 'by-$1')
      .split(/[/-]/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('')}`
  }
}
