import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'
import { ExtendedEndpointList } from '#modules/extended/controllers'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import { Home } from './pages/home.js'
import type { Routes } from '#common/types'
import type { HTTPException } from 'hono/http-exception'

const API_NAME = 'ShnwazDev JioSaavn API'
const API_OWNER = 'shnwazdev'
const API_REPOSITORY = 'https://github.com/shnwazdeveloper/shnwazdev-jiosaavn-api'
const API_LIMITS = {
  appRateLimit: 'none',
  requestWindow: 'unlimited by the app',
  hostLimits: 'Vercel plan and upstream JioSaavn availability can still apply.'
}

const BASE_ENDPOINTS: Array<{ method: string; path: string; description: string }> = [
  { method: 'GET', path: '/health', description: 'Health check for monitors and Vercel uptime checks.' },
  { method: 'GET', path: '/api', description: 'API metadata with documentation and OpenAPI links.' },
  { method: 'GET', path: '/api/endpoints', description: 'Machine-readable list of available API endpoints.' },
  { method: 'GET', path: '/api/limits', description: 'API limit metadata for clients and dashboards.' },
  { method: 'GET', path: '/api/search?query={query}', description: 'Search songs, albums, artists, and playlists.' },
  { method: 'GET', path: '/api/search/songs?query={query}', description: 'Search songs with pagination.' },
  { method: 'GET', path: '/api/search/albums?query={query}', description: 'Search albums with pagination.' },
  { method: 'GET', path: '/api/search/artists?query={query}', description: 'Search artists with pagination.' },
  { method: 'GET', path: '/api/search/playlists?query={query}', description: 'Search playlists with pagination.' },
  { method: 'GET', path: '/api/songs?ids={ids}', description: 'Fetch one or more songs by comma-separated IDs.' },
  { method: 'GET', path: '/api/songs?link={url}', description: 'Fetch a song from a JioSaavn song URL.' },
  { method: 'GET', path: '/api/songs/{id}', description: 'Fetch a single song by ID.' },
  { method: 'GET', path: '/api/songs/{id}/suggestions', description: 'Fetch recommendations for a song.' },
  { method: 'GET', path: '/api/albums?id={id}', description: 'Fetch album details by ID or link.' },
  { method: 'GET', path: '/api/artists?id={id}', description: 'Fetch artist details by ID or link.' },
  { method: 'GET', path: '/api/artists/{id}/songs', description: 'Fetch songs by artist ID.' },
  { method: 'GET', path: '/api/artists/{id}/albums', description: 'Fetch albums by artist ID.' },
  { method: 'GET', path: '/api/playlists?id={id}', description: 'Fetch playlist details by ID or link.' }
]

const ENDPOINTS = [...BASE_ENDPOINTS, ...ExtendedEndpointList].sort((a, b) => a.path.localeCompare(b.path))

const EndpointModel = z.object({
  method: z.string().openapi({ example: 'GET' }),
  path: z.string().openapi({ example: '/api/search?query=Believer' }),
  description: z.string().openapi({ example: 'Search songs, albums, artists, and playlists.' })
})

const LimitModel = z.object({
  appRateLimit: z.string().openapi({ example: 'none' }),
  requestWindow: z.string().openapi({ example: 'unlimited by the app' }),
  hostLimits: z.string().openapi({ example: 'Vercel plan and upstream JioSaavn availability can still apply.' })
})

export class App {
  private app: OpenAPIHono

  constructor(routes: Routes[]) {
    this.app = new OpenAPIHono()

    this.initializeGlobalMiddlewares()
    this.initializeRoutes(routes)
    this.initializeUtilityRoutes()
    this.initializeSwaggerUI()
    this.initializeRouteFallback()
    this.initializeErrorHandler()
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      route.initRoutes()
      this.app.route('/api', route.controller)
    })

    this.app.route('/', Home)
  }

  private initializeUtilityRoutes() {
    this.app.openapi(
      createRoute({
        method: 'get',
        path: '/health',
        tags: ['Meta'],
        summary: 'Health check',
        description: 'Returns the running status of the ShnwazDev JioSaavn API.',
        operationId: 'healthCheck',
        responses: {
          200: {
            description: 'API is healthy',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({ example: true }),
                  message: z.string().openapi({ example: 'ok' }),
                  api: z.string().openapi({ example: API_NAME }),
                  version: z.string().openapi({ example: '1.0.0' })
                })
              }
            }
          }
        }
      }),
      (ctx) => ctx.json({ success: true, message: 'ok', api: API_NAME, version: '1.0.0' })
    )

    this.app.openapi(
      createRoute({
        method: 'get',
        path: '/api/endpoints',
        tags: ['Meta'],
        summary: 'List endpoints',
        description: 'Returns a compact list of available endpoints for clients and website integrations.',
        operationId: 'listEndpoints',
        responses: {
          200: {
            description: 'Available endpoints',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({ example: true }),
                  data: z.array(EndpointModel)
                })
              }
            }
          }
        }
      }),
      (ctx) => ctx.json({ success: true, data: ENDPOINTS })
    )

    this.app.openapi(
      createRoute({
        method: 'get',
        path: '/api/limits',
        tags: ['Meta'],
        summary: 'Show API limits',
        description:
          'Returns limit metadata. This project does not add an app-level rate limiter; provider and upstream limits can still apply.',
        operationId: 'showLimits',
        responses: {
          200: {
            description: 'Limit metadata',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({ example: true }),
                  data: LimitModel
                })
              }
            }
          }
        }
      }),
      (ctx) => ctx.json({ success: true, data: API_LIMITS })
    )

    this.app.get('/api', (ctx) => {
      const origin = new URL(ctx.req.url).origin

      return ctx.json({
        success: true,
        data: {
          name: API_NAME,
          owner: API_OWNER,
          repository: API_REPOSITORY,
          docs: `${origin}/docs`,
          openapi: `${origin}/swagger`,
          health: `${origin}/health`,
          endpoints: `${origin}/api/endpoints`,
          limits: `${origin}/api/limits`,
          limitPolicy: API_LIMITS
        }
      })
    })
  }

  private initializeGlobalMiddlewares() {
    this.app.use(logger())
    this.app.use(prettyJSON())
    this.app.use(cors())
  }

  private initializeSwaggerUI() {
    this.app.doc31('/swagger', (c) => {
      const { protocol: urlProtocol, hostname, port } = new URL(c.req.url)
      const protocol = c.req.header('x-forwarded-proto') ? `${c.req.header('x-forwarded-proto')}:` : urlProtocol

      return {
        openapi: '3.1.0',

        info: {
          version: '1.0.0',
          title: API_NAME,
          description:
            'ShnwazDev JioSaavn API is an unofficial TypeScript API for songs, albums, artists, playlists, search, and recommendations from JioSaavn.'
        },
        servers: [{ url: `${protocol}//${hostname}${port ? `:${port}` : ''}`, description: 'Current environment' }]
      }
    })

    this.app.get(
      '/docs',
      apiReference({
        pageTitle: `${API_NAME} Documentation`,
        theme: 'deepSpace',
        isEditable: false,
        layout: 'modern',
        darkMode: true,
        metaData: {
          applicationName: API_NAME,
          author: API_OWNER,
          creator: API_OWNER,
          publisher: API_OWNER,
          robots: 'index, follow',
          description:
            'ShnwazDev JioSaavn API is an unofficial wrapper written in TypeScript for JioSaavn songs, albums, artists, playlists, search, and recommendations.'
        },
        url: '/swagger'
      })
    )
  }

  private initializeRouteFallback() {
    this.app.notFound((ctx) => {
      return ctx.json({ success: false, message: 'route not found, check docs at /docs' }, 404)
    })
  }

  private initializeErrorHandler() {
    this.app.onError((err, ctx) => {
      const error = err as HTTPException
      return ctx.json({ success: false, message: error.message }, error.status || 500)
    })
  }

  public getApp() {
    return this.app
  }
}
