import process from 'node:process'
import { serve } from '@hono/node-server'
import app from './server.js'

const port = Number(process.env.PORT || 3000)

serve({
  fetch: app.fetch,
  port
})

console.info(`ShnwazDev JioSaavn API running at http://localhost:${port}`)
