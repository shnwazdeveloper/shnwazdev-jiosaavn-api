import { Hono } from 'hono'
import app from './server.js'

const vercelApp = new Hono()
vercelApp.route('/', app)

export default vercelApp
