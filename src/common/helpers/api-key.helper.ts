import { createHmac, randomInt } from 'node:crypto'
import process from 'node:process'

const API_KEY_PREFIX = 'Saya'
const FALLBACK_SECRET = 'shnwazdev-jiosaavn-api'

type ApiKeyPayload = {
  apiKey: string
  randomNumber: string
  issuedAt: string
  prefix: typeof API_KEY_PREFIX
}

const getSecret = () => process.env.API_KEY_SECRET || FALLBACK_SECRET

const signApiKey = (randomNumber: string, issuedAt: string) =>
  createHmac('sha256', getSecret())
    .update(`${API_KEY_PREFIX}.${randomNumber}.${issuedAt}`)
    .digest('base64url')
    .slice(0, 24)

export const createApiKey = (): ApiKeyPayload => {
  const randomNumber = String(randomInt(100_000_000, 1_000_000_000))
  const issuedAt = Date.now().toString(36)
  const signature = signApiKey(randomNumber, issuedAt)

  return {
    apiKey: `${API_KEY_PREFIX}-${randomNumber}-${issuedAt}-${signature}`,
    randomNumber,
    issuedAt,
    prefix: API_KEY_PREFIX
  }
}

export const isValidApiKey = (apiKey?: string | null) => {
  if (!apiKey) return false

  const [prefix, randomNumber, issuedAt, signature, ...extra] = apiKey.trim().split('-')

  if (extra.length > 0 || prefix !== API_KEY_PREFIX || !/^\d{9}$/.test(randomNumber) || !issuedAt || !signature) {
    return false
  }

  return signature === signApiKey(randomNumber, issuedAt)
}
