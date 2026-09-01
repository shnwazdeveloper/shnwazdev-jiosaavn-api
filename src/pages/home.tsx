import { Hono } from 'hono'

export const Home = new Hono()

const API_NAME = 'ShnwazDev JioSaavn API'
const REPOSITORY_URL = 'https://github.com/shnwazdeveloper/shnwazdev-jiosaavn-api'
const DISPLAY_DOMAIN = 'jio.shnwaz.dev'
const DESCRIPTION =
  'High-performance TypeScript music streaming and metadata API for JioSaavn songs, 320kbps streams, albums, artists, and lyrics.'

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
  ['jio.shnwaz.dev', 'Subdomain with zero cold-start global edge distribution'],
  ['No Rate Limits', 'Direct open public access to full JioSaavn catalog'],
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
    title: 'Rich 320kbps Metadata',
    description: 'Direct high quality 320kbps audio streams, artist discography, and synced lyrics.'
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
        "downloadUrl": "320kbps"
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
        <div class="glass-stat">
          <strong class="stat-title">${escapeHtml(title)}</strong>
          <span class="stat-desc">${escapeHtml(body)}</span>
        </div>`
    )
    .join('')

const renderFeatures = () =>
  features
    .map(
      (feature) => `
        <article class="glass-card feature-item">
          <h3>${escapeHtml(feature.title)}</h3>
          <p>${escapeHtml(feature.description)}</p>
        </article>`
    )
    .join('')

const renderRouteGroups = () =>
  routeGroups
    .map(
      (group) => `
        <div class="liquid-group">
          <div class="group-header">
            <h3>${escapeHtml(group.name)}</h3>
            <span class="pill">${group.count} ${group.count === 1 ? 'endpoint' : 'endpoints'}</span>
          </div>
          <div class="group-table">
            ${group.routes
              .map(
                (route) => `
                  <div class="route-row">
                    <span class="method">${escapeHtml(route.method)}</span>
                    <code class="route-code">${escapeHtml(route.path)}</code>
                    <span class="route-desc">${escapeHtml(route.description)}</span>
                  </div>`
              )
              .join('')}
          </div>
        </div>`
    )
    .join('')

const styles = `
:root {
  --bg: #06080c;
  --glass-bg: rgba(14, 20, 32, 0.45);
  --glass-bg-hover: rgba(22, 31, 48, 0.62);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-border-highlight: rgba(255, 255, 255, 0.18);
  --text: #f3f6fa;
  --text-muted: #8391a5;
  --accent: #38bdf8;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 18px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

/* Topbar */
.topbar {
  border-bottom: 1px solid var(--glass-border);
  background: rgba(6, 8, 12, 0.82);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  position: sticky;
  top: 0;
  z-index: 100;
}
.topbar-inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brand {
  font-weight: 800;
  font-size: 1.05rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
}
.mark {
  background: rgba(56, 189, 248, 0.15);
  border: 1px solid var(--accent);
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: var(--radius-sm);
  letter-spacing: 0.5px;
}
.domain-pill {
  font-size: 11px;
  color: var(--text-muted);
  border: 1px solid var(--glass-border);
  background: rgba(255, 255, 255, 0.02);
  padding: 2px 8px;
  border-radius: 12px;
}
.nav { display: flex; gap: 16px; align-items: center; }
.nav a { color: var(--text-muted); font-size: 13px; font-weight: 600; }
.nav a:hover { color: #fff; text-decoration: none; }

/* Main */
main { max-width: 1140px; margin: 0 auto; padding: 44px 20px 80px; }

.section { margin-bottom: 52px; }

/* Hero */
.hero {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 36px;
  align-items: center;
}
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; }
}

.eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 12px;
}

h1 {
  font-size: clamp(2.2rem, 3.8vw, 3.2rem);
  font-weight: 800;
  line-height: 1.18;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  color: #fff;
}

.lead {
  color: var(--text-muted);
  font-size: 1.02rem;
  line-height: 1.6;
  margin-bottom: 24px;
}

.actions { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 28px; }
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 18px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: transform 0.15s, background 0.15s, border-color 0.15s;
}
.button.primary {
  background: var(--accent);
  color: #05070a;
  border: 1px solid var(--accent);
}
.button.primary:hover {
  background: #7dd3fc;
  text-decoration: none;
  transform: translateY(-1px);
}
.button.secondary {
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border-highlight);
  color: #fff;
}
.button.secondary:hover {
  background: var(--glass-bg-hover);
  border-color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  transform: translateY(-1px);
}

/* Stats */
.stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
.glass-stat {
  background: var(--glass-bg);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  border: 1px solid var(--glass-border);
  border-top: 1px solid var(--glass-border-highlight);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  transition: transform 0.2s, background 0.2s;
}
.glass-stat:hover {
  background: var(--glass-bg-hover);
  transform: translateY(-2px);
}
.stat-title {
  display: block;
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 2px;
}
.stat-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* Liquid Console */
.console {
  background: var(--glass-bg);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  border: 1px solid var(--glass-border);
  border-top: 1px solid var(--glass-border-highlight);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.console-head {
  background: rgba(14, 20, 32, 0.65);
  border-bottom: 1px solid var(--glass-border);
  padding: 12px 18px;
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
}
.light:nth-child(1) { background: #f87171; }
.light:nth-child(2) { background: #fbbf24; }
.light:nth-child(3) { background: #34d399; }

.console pre {
  padding: 18px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.82rem;
  color: #cbd5e1;
  line-height: 1.5;
  overflow: hidden;
}
.console .route { color: var(--accent); font-weight: 700; }
.console .note { color: var(--text-muted); font-size: 0.78rem; margin-top: 8px; display: block; }

/* Features */
.section-head { margin-bottom: 24px; }
.section-head h2 {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 6px;
  color: #fff;
}
.section-copy {
  color: var(--text-muted);
  font-size: 0.94rem;
  max-width: 680px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}
@media (max-width: 860px) {
  .feature-grid { grid-template-columns: 1fr; }
}
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  border: 1px solid var(--glass-border);
  border-top: 1px solid var(--glass-border-highlight);
  border-radius: var(--radius-md);
  padding: 22px;
  transition: transform 0.2s, background 0.2s;
}
.glass-card:hover {
  background: var(--glass-bg-hover);
  transform: translateY(-2px);
}
.glass-card h3 {
  font-size: 1.05rem;
  font-weight: 800;
  margin-bottom: 8px;
  color: #fff;
}
.glass-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.55;
}

/* Route Groups */
.route-groups { display: flex; flex-direction: column; gap: 12px; }
.liquid-group {
  background: var(--glass-bg);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  border: 1px solid var(--glass-border);
  border-top: 1px solid var(--glass-border-highlight);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: transform 0.2s;
}
.liquid-group:hover { transform: translateY(-1px); }
.group-header {
  background: rgba(14, 20, 32, 0.6);
  border-bottom: 1px solid var(--glass-border);
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.group-header h3 { font-size: 0.95rem; font-weight: 800; color: #fff; }
.pill {
  font-size: 11px;
  color: var(--text-muted);
  border: 1px solid var(--glass-border);
  background: rgba(255, 255, 255, 0.02);
  padding: 2px 8px;
  border-radius: 10px;
}
.group-table { display: flex; flex-direction: column; }
.route-row {
  display: grid;
  grid-template-columns: 72px minmax(260px, 1.2fr) 1.5fr;
  gap: 16px;
  padding: 10px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  font-size: 0.86rem;
  align-items: center;
}
.route-row:last-child { border-bottom: none; }
@media (max-width: 720px) {
  .route-row { grid-template-columns: 1fr; gap: 4px; }
}
.route-row .method {
  font-weight: 800;
  color: var(--accent);
  font-size: 0.76rem;
  background: rgba(56, 189, 248, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  text-align: center;
}
.route-code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: #fff;
  font-weight: 700;
}
.route-desc { color: var(--text-muted); font-size: 0.82rem; }

/* Footer */
.footer {
  border-top: 1px solid var(--glass-border);
  padding: 28px 20px;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.84rem;
  color: var(--text-muted);
  flex-wrap: wrap;
  gap: 12px;
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
          <span class="domain-pill">${escapeHtml(DISPLAY_DOMAIN)}</span>
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
          <span class="eyebrow">Public + No Rate Limits</span>
          <h1>Build faster with the ShnwazDev JioSaavn API</h1>
          <p class="lead">
            Access albums, artists, browse feeds, lyrics, playlists, podcasts, search, songs, and trending routes
            through clean JSON responses and OpenAPI documentation on ${escapeHtml(DISPLAY_DOMAIN)}.
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
            High performance edge infrastructure for music applications and metadata retrieval on ${escapeHtml(DISPLAY_DOMAIN)}.
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
            Use these routes from your custom domain ${escapeHtml(DISPLAY_DOMAIN)}. Live testing is available in Scalar docs.
          </p>
        </div>
        <div class="route-groups">
          ${renderRouteGroups()}
        </div>
      </section>
    </main>

    <footer class="footer">
      <span>Built with Hono, TypeScript, OpenAPI on Cloudflare Workers & ${escapeHtml(DISPLAY_DOMAIN)}.</span>
      <a href="${REPOSITORY_URL}" target="_blank" rel="noreferrer">shnwazdev repo</a>
    </footer>
  </body>
</html>`)
})
