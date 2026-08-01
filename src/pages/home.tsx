import { Hono } from 'hono'

export const Home = new Hono()

const API_NAME = 'ShnwazDev JioSaavn API'
const REPOSITORY_URL = 'https://github.com/shnwazdeveloper/shnwazdev-jiosaavn-api'
const DESCRIPTION =
  'ShnwazDev JioSaavn API is an unofficial TypeScript API for songs, albums, artists, playlists, search, and recommendations.'

type RouteItem = {
  method: string
  path: string
  description: string
}

type RouteGroup = {
  name: string
  count: number
  routes: RouteItem[]
}

const features = [
  {
    label: 'S',
    title: 'Search Engine',
    body: 'Global and scoped search routes for songs, albums, artists, playlists, and top-query results.'
  },
  {
    label: 'B',
    title: 'Browse Feeds',
    body: 'Home, charts, channels, genres, moods, music plus, radio, city modules, and editorial promos.'
  },
  {
    label: 'K',
    title: 'API Key Tab',
    body: 'Generate a fresh Saya key from the website and use it on every protected /api route.'
  },
  {
    label: 'V',
    title: 'Vercel Ready',
    body: 'The API runs through a native Vercel serverless function entry and ships compiled TypeScript files.'
  },
  {
    label: 'O',
    title: 'OpenAPI 3.1',
    body: 'Interactive documentation and a generated schema are available from the same deployment.'
  },
  {
    label: 'L',
    title: 'Lyrics + Podcasts',
    body: 'Lyrics, synced lyrics, podcast shows, episodes, trending data, and share/ringtone utilities.'
  }
]

const stats = [
  ['47 Music Routes', 'Albums, artists, browse, lyrics, playlists, podcasts, search, songs, and trending'],
  ['No App Limit', 'No app rate limiter is installed in the project'],
  ['OpenAPI 3.1', 'Schema generated from the deployed routes'],
  ['Vercel Native', 'Single serverless function for website and API']
]

const routeGroups: RouteGroup[] = [
  {
    name: 'Album',
    count: 1,
    routes: [{ method: 'GET', path: '/api/albums', description: 'Retrieve an album by ID or link' }]
  },
  {
    name: 'Artists',
    count: 6,
    routes: [
      { method: 'GET', path: '/api/artists', description: 'Retrieve artists by ID or link' },
      { method: 'GET', path: '/api/artists/{id}', description: 'Retrieve artist by ID' },
      { method: 'GET', path: '/api/artists/{id}/albums', description: "Retrieve artist's albums" },
      { method: 'GET', path: '/api/artists/{id}/related', description: 'Retrieve related artists' },
      { method: 'GET', path: '/api/artists/{id}/songs', description: "Retrieve artist's songs" },
      { method: 'GET', path: '/api/artists/by-name', description: 'Retrieve artist by name' }
    ]
  },
  {
    name: 'Browse',
    count: 16,
    routes: [
      { method: 'GET', path: '/api/channels', description: 'Retrieve channels' },
      { method: 'GET', path: '/api/channels/{id}', description: 'Retrieve channel detail' },
      { method: 'GET', path: '/api/charts', description: 'Retrieve JioSaavn charts' },
      { method: 'GET', path: '/api/discover', description: 'Retrieve discover channels' },
      { method: 'GET', path: '/api/genres', description: 'Retrieve genre channels' },
      { method: 'GET', path: '/api/home', description: 'Retrieve the JioSaavn home feed' },
      {
        method: 'GET',
        path: '/api/home/artist-recommendations',
        description: 'Retrieve home artist radio recommendations'
      },
      { method: 'GET', path: '/api/home/city-modules', description: 'Retrieve home city modules' },
      { method: 'GET', path: '/api/home/modules', description: 'Retrieve home feed module metadata' },
      { method: 'GET', path: '/api/home/promos', description: 'Retrieve editorial promo groups' },
      { method: 'GET', path: '/api/moods', description: 'Retrieve mood channels' },
      { method: 'GET', path: '/api/music-plus', description: 'Retrieve music plus channels' },
      { method: 'GET', path: '/api/radio', description: 'Retrieve radio stations' },
      { method: 'GET', path: '/api/radio/{id}', description: 'Retrieve a radio station detail payload' },
      { method: 'GET', path: '/api/radio/artists', description: 'Retrieve artist radio recommendations' },
      { method: 'GET', path: '/api/radio/featured', description: 'Retrieve featured radio stations' }
    ]
  },
  {
    name: 'Lyrics',
    count: 3,
    routes: [
      { method: 'GET', path: '/api/lyrics', description: 'Retrieve lyrics by song name' },
      { method: 'GET', path: '/api/lyrics/{id}', description: 'Retrieve lyrics by song or lyrics ID' },
      { method: 'GET', path: '/api/lyrics/{id}/sync', description: 'Retrieve synced lyrics payload' }
    ]
  },
  {
    name: 'Playlist',
    count: 1,
    routes: [{ method: 'GET', path: '/api/playlists', description: 'Retrieve a playlist by ID or link' }]
  },
  {
    name: 'Podcasts',
    count: 3,
    routes: [
      { method: 'GET', path: '/api/episodes/{id}', description: 'Retrieve a podcast episode by ID' },
      { method: 'GET', path: '/api/podcasts', description: 'Retrieve a podcast by show ID, token, link, or query' },
      { method: 'GET', path: '/api/podcasts/{id}', description: 'Retrieve a podcast by ID or token' }
    ]
  },
  {
    name: 'Search',
    count: 6,
    routes: [
      { method: 'GET', path: '/api/search', description: 'Global search' },
      { method: 'GET', path: '/api/search/albums', description: 'Search for albums' },
      { method: 'GET', path: '/api/search/artists', description: 'Search for artists' },
      { method: 'GET', path: '/api/search/playlists', description: 'Search for playlists' },
      { method: 'GET', path: '/api/search/songs', description: 'Search for songs' },
      { method: 'GET', path: '/api/search/top-query', description: 'Search for the top query bucket' }
    ]
  },
  {
    name: 'Songs',
    count: 5,
    routes: [
      { method: 'GET', path: '/api/songs', description: 'Retrieve songs by ID or link' },
      { method: 'GET', path: '/api/songs/{id}', description: 'Retrieve song by ID' },
      { method: 'GET', path: '/api/songs/{id}/ringtone', description: 'Retrieve ringtone preview details' },
      { method: 'GET', path: '/api/songs/{id}/share', description: 'Retrieve a shareable song link' },
      { method: 'GET', path: '/api/songs/{id}/suggestions', description: 'Retrieve song suggestions' }
    ]
  },
  {
    name: 'Trending',
    count: 6,
    routes: [
      { method: 'GET', path: '/api/trending', description: 'Retrieve all browse feeds in one response' },
      { method: 'GET', path: '/api/trending/albums', description: 'Retrieve trending albums' },
      { method: 'GET', path: '/api/trending/artists', description: 'Retrieve trending artists' },
      { method: 'GET', path: '/api/trending/playlists', description: 'Retrieve trending playlists' },
      { method: 'GET', path: '/api/trending/podcasts', description: 'Retrieve trending podcasts' },
      { method: 'GET', path: '/api/trending/songs', description: 'Retrieve trending songs' }
    ]
  }
]

const exampleJson = `{
  "success": true,
  "data": {
    "songs": { "results": [...] },
    "albums": { "results": [...] },
    "artists": { "results": [...] },
    "playlists": { "results": [...] }
  }
}`

const apiKeyScript = `
(() => {
  const panel = document.querySelector('[data-api-key-panel]')
  if (!panel) return

  const keyOutput = panel.querySelector('[data-key-output]')
  const randomOutput = panel.querySelector('[data-random-output]')
  const statusOutput = panel.querySelector('[data-key-status]')
  const generatedAtOutput = panel.querySelector('[data-generated-at]')
  const generateButton = panel.querySelector('[data-generate-key]')
  const copyButtons = panel.querySelectorAll('[data-copy-target]')

  const setStatus = (message) => {
    if (statusOutput) statusOutput.textContent = message
  }

  const setKey = (apiKey, randomNumber) => {
    if (keyOutput) keyOutput.textContent = apiKey
    if (randomOutput) randomOutput.textContent = randomNumber
    if (generatedAtOutput) generatedAtOutput.textContent = new Date().toLocaleTimeString()

    panel.querySelectorAll('[data-key-template]').forEach((item) => {
      const template = item.getAttribute('data-key-template') || ''
      item.textContent = template.replaceAll('{key}', apiKey).replaceAll('{encodedKey}', encodeURIComponent(apiKey))
    })
  }

  const generateKey = async () => {
    if (generateButton) generateButton.setAttribute('disabled', 'true')
    setStatus('Generating...')

    try {
      const response = await fetch('/apikey', { cache: 'no-store' })
      if (!response.ok) throw new Error('Request failed')

      const body = await response.json()
      setKey(body.data.apiKey, body.data.randomNumber)
      setStatus('Ready')
    } catch {
      setStatus('Try again')
    } finally {
      if (generateButton) generateButton.removeAttribute('disabled')
    }
  }

  copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const target = panel.querySelector(button.getAttribute('data-copy-target') || '')
      const value = target ? target.textContent.trim() : ''
      if (!value) return

      await navigator.clipboard.writeText(value)
      const original = button.textContent
      button.textContent = 'Copied'
      window.setTimeout(() => {
        button.textContent = original
      }, 1200)
    })
  })

  generateButton?.addEventListener('click', generateKey)
  generateKey()
})()
`

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const renderStats = () =>
  stats
    .map(
      ([title, body]) => `
        <div class="stat">
          <strong>${escapeHtml(title)}</strong>
          <span>${escapeHtml(body)}</span>
        </div>`
    )
    .join('')

const renderFeatures = () =>
  features
    .map(
      (feature) => `
        <article class="feature">
          <span class="feature-badge">${escapeHtml(feature.label)}</span>
          <h3>${escapeHtml(feature.title)}</h3>
          <p>${escapeHtml(feature.body)}</p>
        </article>`
    )
    .join('')

const renderRouteGroups = () =>
  routeGroups
    .map(
      (group) => `
        <section class="route-group" aria-labelledby="route-${escapeHtml(group.name.toLowerCase())}">
          <div class="route-head">
            <h3 id="route-${escapeHtml(group.name.toLowerCase())}">${escapeHtml(group.name)}</h3>
            <span>${group.count}</span>
          </div>
          <div class="route-list">
            ${group.routes
              .map(
                (route) => `
                  <a class="route-row" href="${escapeHtml(route.path.replaceAll('{id}', 'id'))}">
                    <span class="method">${escapeHtml(route.method)}</span>
                    <code>${escapeHtml(route.path)}</code>
                    <span>${escapeHtml(route.description)}</span>
                  </a>`
              )
              .join('')}
          </div>
        </section>`
    )
    .join('')

const styles = `
:root {
  color-scheme: dark;
  --bg: #101114;
  --bg-soft: #15181d;
  --panel: #191d24;
  --panel-2: #20252e;
  --text: #f6f7fb;
  --muted: #aeb6c6;
  --line: #303743;
  --glass: rgba(25, 29, 36, 0.6);
  --glass-strong: rgba(32, 37, 46, 0.74);
  --cyan: #61d4ff;
  --green: #8de36c;
  --coral: #ff8a7a;
  --amber: #ffd166;
  --violet: #b59cff;
}

* { box-sizing: border-box; }

html {
  min-height: 100%;
  scroll-behavior: smooth;
}

body {
  min-height: 100%;
  margin: 0;
  font-family: Manrope, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  letter-spacing: 0;
  color: var(--text);
  background: linear-gradient(180deg, #101114 0%, #15181d 48%, #0f1013 100%);
  line-height: 1.55;
  overflow-x: hidden;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.18;
  background-image:
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: linear-gradient(180deg, black, transparent 75%);
}

a { color: inherit; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes floatPanel {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  background: rgba(16,17,20,0.72);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  animation: slideDown 420ms ease both;
}

.topbar-inner,
.section {
  width: min(100% - 32px, 1180px);
  margin-inline: auto;
}

.topbar-inner {
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  text-decoration: none;
  font-weight: 850;
}

.mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  flex: 0 0 auto;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 8px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  font-size: 0.82rem;
}

.brand span:last-child { overflow-wrap: anywhere; }

.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  flex-wrap: wrap;
}

.nav a,
.button {
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 0 14px;
  text-decoration: none;
  font-weight: 750;
  color: #edf3ff;
  background: rgba(255,255,255,0.04);
  white-space: nowrap;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;
}

.nav a:hover,
.button:hover {
  border-color: rgba(255,255,255,0.26);
  background: rgba(255,255,255,0.1);
  transform: translateY(-2px);
}

.hero {
  min-height: calc(100svh - 68px);
  display: grid;
  align-items: center;
  gap: 34px;
  grid-template-columns: minmax(0, 1.02fr) minmax(320px, 0.78fr);
  padding-block: 58px 34px;
}

.eyebrow {
  width: max-content;
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(141,227,108,0.28);
  border-radius: 999px;
  padding: 7px 12px;
  color: #c9f7b8;
  background: rgba(141,227,108,0.08);
  font-size: 0.82rem;
  font-weight: 850;
  text-transform: uppercase;
  overflow-wrap: anywhere;
}

h1,
h2,
h3 {
  margin: 0;
  letter-spacing: 0;
  line-height: 1.04;
}

h1 {
  max-width: 780px;
  margin-top: 20px;
  font-size: 5.1rem;
}

.lead {
  max-width: 720px;
  margin: 22px 0 0;
  color: var(--muted);
  font-size: 1.16rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.button.primary {
  border-color: rgba(255,255,255,0.28);
  background: rgba(246,247,251,0.9);
  color: #101114;
}

.button.secondary { background: rgba(255,255,255,0.06); }

.button:disabled {
  cursor: progress;
  opacity: 0.66;
  transform: none;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 42px;
}

.stat,
.feature,
.route-row,
.console {
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  background: var(--glass);
  backdrop-filter: blur(18px) saturate(120%);
  -webkit-backdrop-filter: blur(18px) saturate(120%);
  transition:
    transform 220ms ease,
    border-color 220ms ease,
    background 220ms ease;
}

.stat {
  min-height: 112px;
  padding: 16px;
  animation: fadeUp 520ms ease both;
}

.stat:nth-child(2) { animation-delay: 70ms; }
.stat:nth-child(3) { animation-delay: 140ms; }
.stat:nth-child(4) { animation-delay: 210ms; }

.stat:hover,
.feature:hover,
.route-row:hover {
  transform: translateY(-4px);
  border-color: rgba(255,255,255,0.24);
  background: var(--glass-strong);
}

.stat strong {
  display: block;
  margin-bottom: 7px;
  color: #ffffff;
  font-size: 1rem;
}

.stat span,
.feature p,
.section-copy,
.route-row span:last-child,
.footer {
  color: var(--muted);
}

.console {
  align-self: center;
  overflow: hidden;
  background: var(--glass-strong);
  animation: floatPanel 6s ease-in-out infinite;
}

.console-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 46px;
  padding: 0 16px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  color: #dbe8f8;
  font-weight: 850;
}

.lights {
  display: flex;
  gap: 7px;
}

.light {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--coral);
}

.light:nth-child(2) { background: var(--amber); }
.light:nth-child(3) { background: var(--green); }

pre {
  margin: 0;
  padding: 20px;
  overflow-x: auto;
  color: #eaf5ff;
  font-size: 0.92rem;
  line-height: 1.55;
}

code { font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; }

.route { color: var(--cyan); }
.key { color: var(--amber); }
.value { color: var(--green); }
.note { color: var(--muted); }

.section { padding-block: 64px; }

.api-key-tab {
  display: grid;
  gap: 18px;
}

.tab-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}

.tab {
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,0.16);
  border-radius: 8px;
  padding: 0 14px;
  background: rgba(255,255,255,0.06);
  color: #edf3ff;
  font-weight: 850;
}

.tab[aria-selected="true"] {
  border-color: rgba(97,212,255,0.5);
  background: rgba(97,212,255,0.13);
  color: #d8f5ff;
}

.key-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.86fr) minmax(300px, 0.64fr);
  gap: 16px;
  align-items: stretch;
}

.key-panel,
.key-usage {
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  background: var(--glass);
  backdrop-filter: blur(18px) saturate(120%);
  -webkit-backdrop-filter: blur(18px) saturate(120%);
}

.key-panel {
  padding: 20px;
}

.key-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.key-state {
  color: var(--green);
  font-weight: 850;
}

.key-output {
  min-height: 58px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(255,255,255,0.11);
  border-radius: 8px;
  padding: 14px;
  background: rgba(0,0,0,0.18);
  color: #f8fbff;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.key-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 14px;
  color: var(--muted);
  font-size: 0.9rem;
}

.copy-grid {
  display: grid;
  gap: 10px;
  margin-top: 16px;
}

.copy-line {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
}

.copy-line code {
  min-height: 44px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  padding: 10px 12px;
  background: rgba(255,255,255,0.045);
  color: #dbe8f8;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.copy-button {
  width: 82px;
  min-height: 44px;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 8px;
  background: rgba(246,247,251,0.9);
  color: #101114;
  font-weight: 900;
}

.key-usage {
  padding: 20px;
}

.key-usage h3 {
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.key-usage pre {
  border-radius: 8px;
  background: rgba(0,0,0,0.2);
}

.section-head {
  max-width: 780px;
  margin-bottom: 26px;
}

h2 { font-size: 3rem; }

.section-copy {
  margin: 13px 0 0;
  max-width: 690px;
  font-size: 1.03rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.feature {
  min-height: 210px;
  padding: 22px;
  animation: fadeUp 560ms ease both;
}

.feature:nth-child(2) { animation-delay: 70ms; }
.feature:nth-child(3) { animation-delay: 140ms; }
.feature:nth-child(4) { animation-delay: 210ms; }
.feature:nth-child(5) { animation-delay: 280ms; }
.feature:nth-child(6) { animation-delay: 350ms; }

.hero > div,
.section-head,
.route-group {
  animation: fadeUp 560ms ease both;
}

.feature-badge {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  margin-bottom: 18px;
  border-radius: 8px;
  color: #101114;
  background: var(--amber);
  font-weight: 850;
}

.feature:nth-child(2) .feature-badge { background: var(--cyan); }
.feature:nth-child(3) .feature-badge { background: var(--green); }
.feature:nth-child(4) .feature-badge { background: var(--coral); }
.feature:nth-child(5) .feature-badge { background: var(--violet); }
.feature:nth-child(6) .feature-badge { background: #f3f6ff; }

.feature h3 {
  margin-bottom: 10px;
  font-size: 1.12rem;
}

.feature p { margin: 0; }

.route-groups {
  display: grid;
  gap: 24px;
}

.route-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 10px;
}

.route-head h3 { font-size: 1.35rem; }

.route-head span {
  display: grid;
  place-items: center;
  min-width: 34px;
  height: 34px;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px;
  color: #101114;
  background: #f3f6ff;
  font-weight: 900;
}

.route-list {
  display: grid;
  gap: 8px;
}

.route-row {
  display: grid;
  grid-template-columns: 74px minmax(0, 0.82fr) minmax(220px, 1fr);
  align-items: center;
  gap: 12px;
  padding: 13px 15px;
  text-decoration: none;
}

.method {
  width: 56px;
  border-radius: 7px;
  padding: 5px 0;
  text-align: center;
  color: #081014;
  background: #f3f6ff;
  font-size: 0.78rem;
  font-weight: 900;
}

.route-row code {
  overflow-wrap: anywhere;
  color: #f8fbff;
}

.footer {
  width: min(100% - 32px, 1180px);
  margin: 0 auto;
  padding: 26px 0 38px;
  border-top: 1px solid rgba(255,255,255,0.08);
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.footer a {
  color: var(--cyan);
  text-decoration: none;
  font-weight: 850;
}

@media (max-width: 920px) {
  .hero {
    min-height: auto;
    grid-template-columns: 1fr;
    padding-top: 42px;
  }

  h1 { font-size: 3.5rem; }
  h2 { font-size: 2.35rem; }

  .stats,
  .feature-grid,
  .key-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .route-row {
    grid-template-columns: 72px minmax(0, 1fr);
  }

  .route-row span:last-child {
    grid-column: 2;
  }
}

@media (max-width: 640px) {
  .topbar-inner {
    align-items: flex-start;
    flex-direction: column;
    padding-block: 14px;
  }

  .nav { justify-content: flex-start; }

  .nav a,
  .button {
    min-height: 36px;
    padding-inline: 11px;
    font-size: 0.92rem;
  }

  .stats,
  .feature-grid,
  .key-grid {
    grid-template-columns: 1fr;
  }

  .copy-line {
    grid-template-columns: 1fr;
  }

  .copy-button {
    width: 100%;
  }

  .route-row {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .route-row span:last-child {
    grid-column: auto;
  }

  h1 { font-size: 2.45rem; }
  h2 { font-size: 2rem; }
  .lead { font-size: 1rem; }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 1ms !important;
  }
}`

Home.get('/', (c) => {
  return c.html(`<!doctype html>
<html lang="en">
  <head>
    <title>${escapeHtml(API_NAME)}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <meta name="description" content="${escapeHtml(DESCRIPTION)}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${escapeHtml(API_NAME)}">
    <meta property="og:description" content="${escapeHtml(DESCRIPTION)}">
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="${escapeHtml(API_NAME)}">
    <meta property="twitter:description" content="${escapeHtml(DESCRIPTION)}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>${styles}</style>
  </head>
  <body>
    <header class="topbar">
      <div class="topbar-inner">
        <a class="brand" href="/" aria-label="${escapeHtml(API_NAME)}">
          <span class="mark">SD</span>
          <span>${escapeHtml(API_NAME)}</span>
        </a>
        <nav class="nav" aria-label="Main navigation">
          <a href="#api-key">API Key</a>
          <a href="/docs">Docs</a>
          <a href="/swagger">OpenAPI</a>
          <a href="/health">Status</a>
          <a href="${REPOSITORY_URL}" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="section hero">
        <div>
          <span class="eyebrow">Unofficial + No App Rate Limit</span>
          <h1>Build faster with the ShnwazDev JioSaavn API</h1>
          <p class="lead">
            Access albums, artists, browse feeds, lyrics, playlists, podcasts, search, songs, and trending routes
            through clean JSON responses, OpenAPI docs, and a Vercel-ready serverless API.
          </p>
          <div class="actions">
            <a class="button primary" href="/docs">Open Docs</a>
            <a class="button secondary" href="#api-key">Generate API Key</a>
            <a class="button secondary" href="/swagger">View OpenAPI</a>
            <a class="button secondary" href="/api/endpoints">Endpoint Index</a>
            <a class="button secondary" href="/api/limits">API Limits</a>
          </div>

          <div class="stats">
            ${renderStats()}
          </div>
        </div>

        <aside class="console" aria-label="API response preview">
          <div class="console-head">
            <span>GET /api/search</span>
            <span class="lights" aria-hidden="true">
              <span class="light"></span>
              <span class="light"></span>
              <span class="light"></span>
            </span>
          </div>
          <pre><code><span class="route">GET /api/search?query=Believer</span>

${escapeHtml(exampleJson)}

<span class="note">Docs: /docs  Schema: /swagger  Limits: /api/limits</span></code></pre>
        </aside>
      </section>

      <section class="section api-key-tab" id="api-key" data-api-key-panel>
        <div class="section-head">
          <div class="tab-list" role="tablist" aria-label="API key tools">
            <span class="tab" role="tab" aria-selected="true">API Key</span>
            <a class="tab" role="tab" aria-selected="false" href="/docs">Docs</a>
            <a class="tab" role="tab" aria-selected="false" href="/swagger">OpenAPI</a>
          </div>
          <h2>Generate your API key in real time</h2>
          <p class="section-copy">
            Click generate to receive a fresh Saya key from <code>/apikey</code>. Use it on every protected
            <code>/api/*</code> request.
          </p>
        </div>

        <div class="key-grid">
          <div class="key-panel">
            <div class="key-toolbar">
              <span class="key-state" data-key-status>Ready</span>
              <button class="button primary" type="button" data-generate-key>Generate Key</button>
            </div>
            <code class="key-output" id="generated-api-key" data-key-output>Generating...</code>
            <div class="key-meta">
              <span>Prefix: <strong>Saya</strong></span>
              <span>Random number: <strong data-random-output>...</strong></span>
              <span>Generated: <strong data-generated-at>...</strong></span>
            </div>
            <div class="copy-grid" aria-label="Copy API key examples">
              <div class="copy-line">
                <code id="copy-header" data-key-template="X-API-Key: {key}">X-API-Key: ...</code>
                <button class="copy-button" type="button" data-copy-target="#copy-header">Copy</button>
              </div>
              <div class="copy-line">
                <code id="copy-bearer" data-key-template="Authorization: Bearer {key}">Authorization: Bearer ...</code>
                <button class="copy-button" type="button" data-copy-target="#copy-bearer">Copy</button>
              </div>
              <div class="copy-line">
                <code id="copy-query" data-key-template="?apikey={encodedKey}">?apikey=...</code>
                <button class="copy-button" type="button" data-copy-target="#copy-query">Copy</button>
              </div>
            </div>
          </div>

          <aside class="key-usage" aria-label="API key request example">
            <h3>Use it fast</h3>
            <pre><code><span class="route">GET /api/search/songs?query=Kesariya</span>
<span class="key" data-key-template="X-API-Key: {key}">X-API-Key: ...</span>

<span class="note">Or append the key:</span>
<span class="route" data-key-template="/api/search/songs?query=Kesariya&amp;apikey={encodedKey}">/api/search/songs?query=Kesariya&amp;apikey=...</span></code></pre>
          </aside>
        </div>
      </section>

      <section class="section" id="features">
        <div class="section-head">
          <h2>Clean API surface for music apps</h2>
          <p class="section-copy">
            The website, metadata, docs, and API responses are branded for shnwazdev while keeping the route structure
            simple to host and extend on Vercel.
          </p>
        </div>
        <div class="feature-grid">
          ${renderFeatures()}
        </div>
      </section>

      <section class="section" id="endpoints">
        <div class="section-head">
          <h2>All requested endpoints</h2>
          <p class="section-copy">
            Use these routes from your deployed Vercel URL. Query details and live testing are also available in the docs.
          </p>
        </div>
        <div class="route-groups">
          ${renderRouteGroups()}
        </div>
      </section>
    </main>

    <footer class="footer">
      <span>Built with Hono, TypeScript, OpenAPI, and Vercel.</span>
      <a href="${REPOSITORY_URL}" target="_blank" rel="noreferrer">shnwazdev repo</a>
    </footer>
    <script>${apiKeyScript}</script>
  </body>
</html>`)
})
