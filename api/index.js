import { handle } from '@hono/node-server/vercel'
import app from '../dist/index.js'

const handler = handle(app)

export default handler
export const GET = handler
export const POST = handler
export const PUT = handler
export const PATCH = handler
export const DELETE = handler
export const OPTIONS = handler
