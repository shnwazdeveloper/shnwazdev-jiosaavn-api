import { randomInt } from 'node:crypto'
import process from 'node:process'

const API_KEY_PREFIX = 'Sh.'
const DEFAULT_ADMIN_SECRET = 'shnwazdev-admin'

export type ApiKeyRecord = {
  apiKey: string
  code: string
  revoked: boolean
  createdAt: string
  issuedTimestamp: number
}

export type ApiKeyPayload = {
  apiKey: string
  code: string
  prefix: typeof API_KEY_PREFIX
  issuedAt: string
}

// In-memory registry of active & revoked keys
const activeKeysMap = new Map<string, ApiKeyRecord>()
const revokedKeysSet = new Set<string>()

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export const getAdminSecret = () => process.env.ADMIN_SECRET || DEFAULT_ADMIN_SECRET

export const verifyAdminSecret = (secret?: string | null): boolean => {
  if (!secret) return false
  return secret.trim() === getAdminSecret().trim()
}

export const generateRandom3Char = (): string => {
  let result = ''
  for (let i = 0; i < 3; i++) {
    const idx = randomInt(0, CHARSET.length)
    result += CHARSET.charAt(idx)
  }
  return result
}

export const createApiKey = (customCode?: string): ApiKeyPayload => {
  const code = (customCode && /^[A-Za-z0-9]{3,6}$/.test(customCode)) ? customCode : generateRandom3Char()
  const apiKey = `${API_KEY_PREFIX}${code}`
  const now = new Date()

  const record: ApiKeyRecord = {
    apiKey,
    code,
    revoked: false,
    createdAt: now.toISOString(),
    issuedTimestamp: now.getTime()
  }

  activeKeysMap.set(apiKey, record)
  // Ensure not in revoked set
  revokedKeysSet.delete(apiKey)

  return {
    apiKey,
    code,
    prefix: API_KEY_PREFIX,
    issuedAt: now.toLocaleTimeString()
  }
}

export const revokeApiKey = (apiKey: string): boolean => {
  if (!apiKey || typeof apiKey !== 'string') return false
  const trimmed = apiKey.trim()
  revokedKeysSet.add(trimmed)

  const record = activeKeysMap.get(trimmed)
  if (record) {
    record.revoked = true
  }
  return true
}

export const unrevokeApiKey = (apiKey: string): boolean => {
  if (!apiKey) return false
  const trimmed = apiKey.trim()
  revokedKeysSet.delete(trimmed)

  const record = activeKeysMap.get(trimmed)
  if (record) {
    record.revoked = false
  }
  return true
}

export const isApiKeyRevoked = (apiKey: string): boolean => {
  if (!apiKey) return false
  return revokedKeysSet.has(apiKey.trim())
}

export const listAllAdminKeys = (): ApiKeyRecord[] => {
  const list: ApiKeyRecord[] = []
  activeKeysMap.forEach((record) => {
    list.push({ ...record, revoked: revokedKeysSet.has(record.apiKey) })
  })
  return list.sort((a, b) => b.issuedTimestamp - a.issuedTimestamp)
}

export const isValidApiKey = (apiKey?: string | null): boolean => {
  if (!apiKey) return false
  const trimmed = apiKey.trim()

  if (revokedKeysSet.has(trimmed)) {
    return false
  }

  // Check Sh.Qre style format (Sh. followed by 3+ alphanumeric characters or hyphenated code)
  if (trimmed.startsWith('Sh.') && trimmed.length >= 5) {
    const remainder = trimmed.slice(3)
    if (/^[A-Za-z0-9_-]+$/.test(remainder)) {
      return true
    }
  }

  // Allow known generated active keys
  if (activeKeysMap.has(trimmed)) {
    return true
  }

  // Allow legacy Saya keys if not revoked
  if (trimmed.startsWith('Saya-')) {
    return true
  }

  return false
}


