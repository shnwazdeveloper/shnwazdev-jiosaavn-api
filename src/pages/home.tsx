import { Hono } from 'hono'

export const Home = new Hono()

const API_NAME = 'ShnwazDev JioSaavn API'
const REPOSITORY_URL = 'https://github.com/shnwazdeveloper/shnwazdev-jiosaavn-api'
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
    title: 'Browse & Modules',
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
  --bg: #090c10;
  --surface: #10151c;
  --surface-raised: #151c26;
  --border: #1e2633;
  --text: #f0f3f6;
  --text-muted: #8b949e;
  --accent: #58a6ff;
  --accent-emphasis: #1f6feb;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

.topbar {
  border-bottom: 1px solid var(--border);
  background: rgba(9, 12, 16, 0.85);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 100;
}
.topbar-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brand {
  font-weight: 700;
  font-size: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
}
.mark {
  background: var(--accent-emphasis);
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  padding: 3px 7px;
  border-radius: var(--radius-sm);
}
.nav { display: flex; gap: 18px; align-items: center; }
.nav a { color: var(--text-muted); font-size: 13px; font-weight: 500; }
.nav a:hover { color: #fff; text-decoration: none; }

main { max-width: 1100px; margin: 0 auto; padding: 40px 20px 80px; }

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
  margin-bottom: 60px;
}
@media (max-width: 860px) {
  .hero { grid-template-columns: 1fr; }
}

.eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
  margin-bottom: 12px;
}

h1 {
  font-size: 32px;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 14px;
  color: #fff;
}

.lead {
  color: var(--text-muted);
  font-size: 15px;
  margin-bottom: 24px;
}

.actions { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 28px; }
.button {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  transition: all 0.15s;
}
.button.primary {
  background: var(--accent-emphasis);
  color: #fff;
}
.button.primary:hover { background: #388bfd; text-decoration: none; }
.button.secondary {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
}
.button.secondary:hover { background: var(--surface-raised); text-decoration: none; }

.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.stat {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 12px 14px;
}
.stat strong { display: block; font-size: 14px; color: var(--accent); }
.stat span { font-size: 11px; color: var(--text-muted); }

.console {
  background: #0d1117;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.console-head {
  background: #161b22;
  padding: 10px 14px;
  font-size: 12px;
  color: var(--text-muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
}
.console pre {
  padding: 16px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
  color: #c9d1d9;
  overflow-x: auto;
  line-height: 1.45;
}
.console .route { color: var(--accent); font-weight: 600; }
.console .note { color: var(--text-muted); font-size: 11px; }

.section { margin-bottom: 50px; }
.section-head { margin-bottom: 24px; }
.section-head h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 6px; }
.section-copy { color: var(--text-muted); font-size: 14px; }

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}
.feature {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 20px;
}
.feature h3 { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 8px; }
.feature p { font-size: 13px; color: var(--text-muted); }

.route-groups { display: flex; flex-direction: column; gap: 14px; }
.route-group {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.group-header {
  padding: 12px 18px;
  background: var(--surface-raised);
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.group-header h3 { font-size: 14px; font-weight: 700; color: #fff; }
.group-header span { font-size: 11px; color: var(--text-muted); }
.group-table { display: flex; flex-direction: column; }
.route-row {
  display: grid;
  grid-template-columns: 60px minmax(240px, 1fr) 1.5fr;
  gap: 14px;
  padding: 10px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  font-size: 12px;
  align-items: center;
}
.route-row:last-child { border-bottom: none; }
@media (max-width: 700px) {
  .route-row { grid-template-columns: 1fr; gap: 4px; }
}
.route-row .method {
  font-weight: 700;
  color: var(--accent);
  font-size: 11px;
}
.route-row code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: #fff;
  font-weight: 600;
}
.route-row span:last-child { color: var(--text-muted); }

.footer {
  border-top: 1px solid var(--border);
  padding: 24px 20px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: var(--text-muted);
  flex-wrap: wrap;
  gap: 10px;
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
      <section class="hero">
        <div>
          <span class="eyebrow">Public + No Rate Limits</span>
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
            High performance edge infrastructure for music applications and metadata retrieval.
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
            Use these routes from your deployed Cloudflare URL. Live testing is available in Scalar docs.
          </p>
        </div>
        <div class="route-groups">
          ${renderRouteGroups()}
        </div>
      </section>
    </main>

    <footer class="footer">
      <span>Built with Hono, TypeScript, OpenAPI on Cloudflare Workers.</span>
      <a href="${REPOSITORY_URL}" target="_blank" rel="noreferrer">GitHub Repository</a>
    </footer>
  </body>
</html>`)
})
