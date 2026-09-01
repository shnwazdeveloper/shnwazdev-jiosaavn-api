import { Hono } from 'hono'

export const Home = new Hono()

const API_NAME = 'ShnwazDev JioSaavn API'
const REPOSITORY_URL = 'https://github.com/shnwazdeveloper/shnwazdev-jiosaavn-api'
const DESCRIPTION =
  'Unofficial JioSaavn API for songs, 320kbps streams, albums, artists, playlists, search, browse feeds, and lyrics with OpenAPI documentation.'

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

const stats = [
  ['47+ Routes', 'Albums, artists, browse, lyrics, playlists, podcasts, search, songs, trending'],
  ['Cloudflare Edge', 'Zero cold-start global edge distribution with nodejs_compat'],
  ['No App Rate Limits', 'Direct edge access to full JioSaavn catalog'],
  ['OpenAPI 3.1', 'Interactive Scalar documentation & Swagger schemas']
]

const features = [
  {
    title: 'Search Engine',
    description: 'Unified and scoped search for songs, albums, artists, and playlists with pagination.'
  },
  {
    title: 'Browse Feeds',
    description: 'Home modules, charts, genres, moods, city trends, promo feeds, and radio stations.'
  },
  {
    title: 'Rich Metadata',
    description: '320kbps download streams, artist albums/songs, song suggestions, and synced lyrics.'
  }
]

const routeGroups: RouteGroup[] = [
  {
    name: 'Album',
    count: 1,
    routes: [{ method: 'GET', path: '/api/albums?id={id}', description: 'Retrieve album by ID or JioSaavn URL' }]
  },
  {
    name: 'Artists',
    count: 6,
    routes: [
      { method: 'GET', path: '/api/artists?id={id}', description: 'Retrieve artists by ID or link' },
      { method: 'GET', path: '/api/artists/{id}', description: 'Retrieve artist overview by ID' },
      { method: 'GET', path: '/api/artists/{id}/albums', description: 'Retrieve artist albums' },
      { method: 'GET', path: '/api/artists/{id}/related', description: 'Retrieve related artists' },
      { method: 'GET', path: '/api/artists/{id}/songs', description: 'Retrieve artist songs' },
      { method: 'GET', path: '/api/artists/by-name?name={name}', description: 'Retrieve artist by name query' }
    ]
  },
  {
    name: 'Browse',
    count: 16,
    routes: [
      { method: 'GET', path: '/api/channels', description: 'Retrieve browse channels' },
      { method: 'GET', path: '/api/channels/{id}', description: 'Retrieve channel details' },
      { method: 'GET', path: '/api/charts', description: 'Retrieve top trending charts' },
      { method: 'GET', path: '/api/discover', description: 'Retrieve discover modules' },
      { method: 'GET', path: '/api/genres', description: 'Retrieve music genres' },
      { method: 'GET', path: '/api/home', description: 'Retrieve full JioSaavn home feed' },
      { method: 'GET', path: '/api/home/artist-recommendations', description: 'Retrieve home artist recommendations' },
      { method: 'GET', path: '/api/home/city-modules', description: 'Retrieve city trending modules' },
      { method: 'GET', path: '/api/home/modules', description: 'Retrieve feed module metadata' },
      { method: 'GET', path: '/api/home/promos', description: 'Retrieve editorial promo groups' },
      { method: 'GET', path: '/api/moods', description: 'Retrieve mood categories' },
      { method: 'GET', path: '/api/music-plus', description: 'Retrieve music plus stations' },
      { method: 'GET', path: '/api/radio', description: 'Retrieve radio categories' },
      { method: 'GET', path: '/api/radio/{id}', description: 'Retrieve radio station payload' },
      { method: 'GET', path: '/api/radio/artists', description: 'Retrieve artist radio stations' },
      { method: 'GET', path: '/api/radio/featured', description: 'Retrieve featured stations' }
    ]
  },
  {
    name: 'Lyrics',
    count: 3,
    routes: [
      { method: 'GET', path: '/api/lyrics?query={query}', description: 'Retrieve lyrics by song title' },
      { method: 'GET', path: '/api/lyrics/{id}', description: 'Retrieve lyrics by song ID' },
      { method: 'GET', path: '/api/lyrics/{id}/sync', description: 'Retrieve synchronized time-stamped lyrics' }
    ]
  },
  {
    name: 'Playlist',
    count: 1,
    routes: [{ method: 'GET', path: '/api/playlists?id={id}', description: 'Retrieve playlist by ID or link' }]
  },
  {
    name: 'Podcasts',
    count: 3,
    routes: [
      { method: 'GET', path: '/api/episodes/{id}', description: 'Retrieve podcast episode details' },
      { method: 'GET', path: '/api/podcasts?id={id}', description: 'Retrieve podcast show by ID or link' },
      { method: 'GET', path: '/api/podcasts/{id}', description: 'Retrieve show detail and episodes' }
    ]
  },
  {
    name: 'Search',
    count: 6,
    routes: [
      { method: 'GET', path: '/api/search?query={query}', description: 'Global unified search' },
      { method: 'GET', path: '/api/search/albums?query={query}', description: 'Search albums' },
      { method: 'GET', path: '/api/search/artists?query={query}', description: 'Search artists' },
      { method: 'GET', path: '/api/search/playlists?query={query}', description: 'Search playlists' },
      { method: 'GET', path: '/api/search/songs?query={query}', description: 'Search songs with pagination' },
      { method: 'GET', path: '/api/search/top-query?query={query}', description: 'Search top query bucket' }
    ]
  },
  {
    name: 'Songs',
    count: 5,
    routes: [
      { method: 'GET', path: '/api/songs?ids={ids}', description: 'Retrieve songs by IDs' },
      { method: 'GET', path: '/api/songs/{id}', description: 'Retrieve song details by ID' },
      { method: 'GET', path: '/api/songs/{id}/ringtone', description: 'Retrieve ringtone preview' },
      { method: 'GET', path: '/api/songs/{id}/share', description: 'Retrieve shareable link' },
      { method: 'GET', path: '/api/songs/{id}/suggestions', description: 'Retrieve song recommendations' }
    ]
  },
  {
    name: 'Trending',
    count: 6,
    routes: [
      { method: 'GET', path: '/api/trending', description: 'Retrieve all trending items' },
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
    "total": 1,
    "start": 0,
    "results": [
      {
        "id": "csaAEio2",
        "name": "Believer",
        "type": "song",
        "year": "2017",
        "duration": 204,
        "label": "Interscope Records",
        "language": "english",
        "downloadUrl": [
          { "quality": "320kbps", "url": "https://aac.saavncdn.com/..." }
        ]
      }
    ]
  }
}`

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
          <h3>${escapeHtml(feature.title)}</h3>
          <p>${escapeHtml(feature.description)}</p>
        </article>`
    )
    .join('')

const renderRouteGroups = () =>
  routeGroups
    .map(
      (group) => `
        <div class="route-group">
          <div class="group-header">
            <h3>${escapeHtml(group.name)}</h3>
            <span>${group.count} ${group.count === 1 ? 'endpoint' : 'endpoints'}</span>
          </div>
          <div class="group-table">
            ${group.routes
              .map(
                (route) => `
                  <div class="route-row">
                    <span class="method">${escapeHtml(route.method)}</span>
                    <code>${escapeHtml(route.path)}</code>
                    <span>${escapeHtml(route.description)}</span>
                  </div>`
              )
              .join('')}
          </div>
        </div>`
    )
    .join('')

const styles = `
:root {
  --bg: #090d16;
  --surface: #101726;
  --surface-raised: #141d30;
  --surface-soft: rgba(255, 255, 255, 0.03);
  --border: #1f2c44;
  --border-strong: #2c3e60;
  --text: #f5f7fb;
  --text-muted: #8ea0be;
  --accent: #2dd4bf;
  --accent-soft: rgba(45, 212, 191, 0.14);
  --accent-strong: #14b8a6;
  --shadow: 0 20px 45px rgba(2, 6, 23, 0.45);
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background:
    radial-gradient(circle at 15% 10%, rgba(45, 212, 191, 0.08), transparent 32%),
    radial-gradient(circle at 85% 0%, rgba(30, 64, 175, 0.12), transparent 38%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }

.topbar {
  border-bottom: 1px solid var(--border);
  background: rgba(9, 13, 22, 0.88);
  backdrop-filter: blur(14px);
  position: sticky;
  top: 0;
  z-index: 100;
}

.topbar-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.brand {
  font-weight: 800;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: 10px;
}

.mark {
  background: var(--accent-soft);
  border: 1px solid var(--accent);
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 999px;
  letter-spacing: 0.04em;
}

.nav {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.nav a {
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: var(--radius-sm);
  transition: color 0.15s, background-color 0.15s;
}

.nav a:hover {
  color: var(--text);
  background: var(--surface-soft);
}

main {
  max-width: 1180px;
  margin: 0 auto;
  padding: 44px 20px 88px;
}

.section { margin-bottom: 56px; }

.hero {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 36px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  font-size: 0.76rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 12px;
}

h1 {
  font-size: clamp(2.3rem, 4vw, 3.4rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
}

.lead {
  color: var(--text-muted);
  font-size: 1.08rem;
  line-height: 1.65;
  margin-bottom: 24px;
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.96rem;
  font-weight: 700;
  padding: 10px 16px;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  transition: transform 0.15s, border-color 0.15s, background-color 0.15s;
}

.button.primary {
  background: var(--accent);
  color: #041212;
}

.button.primary:hover {
  background: var(--accent-strong);
  transform: translateY(-1px);
}

.button.secondary {
  background: var(--surface-raised);
  border-color: var(--border);
  color: var(--text);
}

.button.secondary:hover {
  border-color: var(--border-strong);
  transform: translateY(-1px);
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.stat {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 14px 16px;
}

.stat strong {
  display: block;
  font-size: 1rem;
  font-weight: 800;
  color: var(--text);
}

.stat span {
  font-size: 0.82rem;
  color: var(--text-muted);
}

.console {
  background: #060911;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.console-head {
  background: #0b101c;
  border-bottom: 1px solid var(--border);
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.lights { display: flex; gap: 6px; }
.light {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #25334e;
}
.light:nth-child(1) { background: #f87171; }
.light:nth-child(2) { background: #fbbf24; }
.light:nth-child(3) { background: #34d399; }

.console pre {
  padding: 16px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.84rem;
  color: #cbd5e1;
  overflow-x: auto;
  line-height: 1.5;
}

.console .route { color: var(--accent); font-weight: 700; }
.console .note { color: var(--text-muted); font-size: 0.78rem; }

.section-head { margin-bottom: 24px; }
.section-head h2 {
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}
.section-copy {
  color: var(--text-muted);
  font-size: 0.98rem;
  max-width: 680px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.feature {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 20px;
}

.feature h3 {
  font-size: 1.05rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.feature p {
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.55;
}

.route-groups {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.route-group {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.group-header {
  background: var(--surface-raised);
  border-bottom: 1px solid var(--border);
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.group-header h3 { font-size: 0.98rem; font-weight: 800; }
.group-header span { font-size: 0.78rem; color: var(--text-muted); font-weight: 700; }

.group-table { display: flex; flex-direction: column; }

.route-row {
  display: grid;
  grid-template-columns: 80px minmax(280px, 1fr) 1.5fr;
  gap: 16px;
  padding: 11px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  font-size: 0.88rem;
  align-items: center;
}

.route-row:last-child { border-bottom: none; }

.route-row .method {
  font-weight: 800;
  color: var(--accent);
  font-size: 0.78rem;
}

.route-row code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: #fff;
  font-weight: 700;
}

.route-row span:last-child { color: var(--text-muted); font-size: 0.84rem; }

.footer {
  border-top: 1px solid var(--border);
  padding: 28px 20px;
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.86rem;
  color: var(--text-muted);
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 960px) {
  .hero { grid-template-columns: 1fr; }
  .feature-grid { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .topbar-inner { flex-direction: column; align-items: flex-start; }
  .stats { grid-template-columns: 1fr; }
  .route-row { grid-template-columns: 1fr; gap: 4px; }
}
`

Home.get('/', (c) => {
  return c.html(`<!doctype html>
<html lang="en">
  <head>
    <title>${escapeHtml(API_NAME)}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <meta name="description" content="${escapeHtml(DESCRIPTION)}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>${styles}</style>
  </head>
  <body>
    <header class="topbar">
      <div class="topbar-inner">
        <a class="brand" href="/">
          <span class="mark">SD</span>
          <span>${escapeHtml(API_NAME)}</span>
        </a>
        <nav class="nav">
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
            through clean JSON responses and OpenAPI documentation on Cloudflare Workers.
          </p>
          <div class="actions">
            <a class="button primary" href="/docs">Open Docs</a>
            <a class="button secondary" href="/swagger">View OpenAPI</a>
            <a class="button secondary" href="/api/endpoints">Endpoint Index</a>
            <a class="button secondary" href="/api/limits">API Limits</a>
          </div>

          <div class="stats">
            ${renderStats()}
          </div>
        </div>

        <aside class="console">
          <div class="console-head">
            <span>GET /api/search</span>
            <span class="lights">
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

      <section class="section">
        <div class="section-head">
          <h2>Clean API surface for music apps</h2>
          <p class="section-copy">
            High performance edge infrastructure for music applications and metadata retrieval on moremuthi.com.
          </p>
        </div>
        <div class="feature-grid">
          ${renderFeatures()}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2>All requested endpoints</h2>
          <p class="section-copy">
            Use these routes from your deployed URL. Query details and live testing are also available in the docs.
          </p>
        </div>
        <div class="route-groups">
          ${renderRouteGroups()}
        </div>
      </section>
    </main>

    <footer class="footer">
      <span>Built with Hono, TypeScript, OpenAPI on Cloudflare Workers & moremuthi.com.</span>
      <a href="${REPOSITORY_URL}" target="_blank" rel="noreferrer">shnwazdev repo</a>
    </footer>
  </body>
</html>`)
})
