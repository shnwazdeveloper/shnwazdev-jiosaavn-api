import { createHmac, randomInt } from 'node:crypto'
import process from 'node:process'

const API_KEY_PREFIX = 'Sh.'
const LEGACY_PREFIX = 'Saya'
const FALLBACK_SECRET = 'shnwazdev-jiosaavn-api'

const revokedKeys = new Set<string>()

export type ApiKeyPayload = {
  apiKey: string
  code3Digit: string
  randomNumber: string
  issuedAt: string
  prefix: typeof API_KEY_PREFIX
}

const getSecret = () => process.env.API_KEY_SECRET || FALLBACK_SECRET

const signApiKey = (code3Digit: string, randomNumber: string, issuedAt: string, prefix = API_KEY_PREFIX) =>
  createHmac('sha256', getSecret())
    .update(`${prefix}.${code3Digit}.${randomNumber}.${issuedAt}`)
    .digest('base64url')
    .slice(0, 24)

const signLegacyApiKey = (randomNumber: string, issuedAt: string) =>
  createHmac('sha256', getSecret())
    .update(`${LEGACY_PREFIX}.${randomNumber}.${issuedAt}`)
    .digest('base64url')
    .slice(0, 24)

export const createApiKey = (): ApiKeyPayload => {
  const code3Digit = String(randomInt(100, 1000))
  const randomNumber = String(randomInt(100_000_000, 1_000_000_000))
  const issuedAt = Date.now().toString(36)
  const signature = signApiKey(code3Digit, randomNumber, issuedAt)

  return {
    apiKey: `${API_KEY_PREFIX}${code3Digit}-${randomNumber}-${issuedAt}-${signature}`,
    code3Digit,
    randomNumber,
    issuedAt,
    prefix: API_KEY_PREFIX
  }
}

export const revokeApiKey = (apiKey: string): boolean => {
  if (!apiKey || typeof apiKey !== 'string') return false
  const trimmed = apiKey.trim()
  revokedKeys.add(trimmed)
  return true
}

export const isApiKeyRevoked = (apiKey: string): boolean => {
  if (!apiKey) return false
  return revokedKeys.has(apiKey.trim())
}

export const isValidApiKey = (apiKey?: string | null): boolean => {
  if (!apiKey) return false
  const trimmed = apiKey.trim()

  if (revokedKeys.has(trimmed)) {
    return false
  }

  const parts = trimmed.split('-')
  if (parts.length !== 4) {
    return false
  }

  const [prefixWithCode, randomNumber, issuedAt, signature] = parts

  if (!/^\d{9}$/.test(randomNumber) || !issuedAt || !signature) {
    return false
  }

  if (prefixWithCode.startsWith('Sh.')) {
    const code3Digit = prefixWithCode.slice(3)
    if (!/^\d{3}$/.test(code3Digit)) {
      return false
    }
    return signature === signApiKey(code3Digit, randomNumber, issuedAt)
  }

  if (prefixWithCode === LEGACY_PREFIX) {
    return signature === signLegacyApiKey(randomNumber, issuedAt)
  }

  return false
}

