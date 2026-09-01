import { Hono } from 'hono'

export const Home = new Hono()

const API_NAME = 'ShnwazDev JioSaavn API'
const REPOSITORY_URL = 'https://github.com/shnwazdeveloper/shnwazdev-jiosaavn-api'
const DISPLAY_DOMAIN = 'moremuthi.com'
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
  ['moremuthi.com', 'Custom domain with zero cold-start global edge distribution'],
  ['No Rate Limits', 'Direct open public access to full JioSaavn catalog'],
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
      ([title, body], i) => `
        <div class="glass-stat" style="animation-delay: ${0.1 + i * 0.05}s;">
          <div class="stat-num">${escapeHtml(title)}</div>
          <div class="stat-label">${escapeHtml(body)}</div>
        </div>`
    )
    .join('')

const renderFeatures = () =>
  features
    .map(
      (feature, i) => `
        <article class="glass-card feature-card" style="animation-delay: ${0.25 + i * 0.08}s;">
          <h3>${escapeHtml(feature.title)}</h3>
          <p>${escapeHtml(feature.description)}</p>
        </article>`
    )
    .join('')

const renderRouteGroups = () =>
  routeGroups
    .map(
      (group, i) => `
        <div class="liquid-group" style="animation-delay: ${0.3 + i * 0.04}s;">
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
                    <code class="route-path">${escapeHtml(route.path)}</code>
                    <span class="route-desc">${escapeHtml(route.description)}</span>
                  </div>`
              )
              .join('')}
          </div>
        </div>`
    )
    .join('')

const clientScript = `
(() => {
  // Smooth Live Console Search & Playback
  var input = document.getElementById('console-query-input');
  var testBtn = document.getElementById('console-test-btn');
  var outputCode = document.getElementById('console-output-code');
  var statusBadge = document.getElementById('console-status-badge');
  var miniPlayer = document.getElementById('console-mini-player');
  var audioElem = document.getElementById('mini-audio');
  var playBtn = document.getElementById('mini-play-btn');
  var dlLinks = document.getElementById('mini-dl-links');
  var currentStreamUrl = '';

  async function testSearch() {
    var q = (input && input.value.trim()) || 'Kesariya';
    if (outputCode) outputCode.textContent = '// Fetching https://' + window.location.host + '/api/search/songs?query=' + encodeURIComponent(q) + ' ...';
    if (statusBadge) statusBadge.textContent = 'Loading...';

    try {
      var start = performance.now();
      var res = await fetch('/api/search/songs?query=' + encodeURIComponent(q));
      var latency = Math.round(performance.now() - start);
      var json = await res.json();

      if (statusBadge) {
        statusBadge.textContent = res.status + ' OK (' + latency + 'ms)';
        statusBadge.className = 'status-badge ' + (res.ok ? 'badge-ok' : 'badge-err');
      }

      if (outputCode) {
        outputCode.textContent = JSON.stringify(json, null, 2);
      }

      if (json.success && json.data && json.data.results && json.data.results.length > 0) {
        var first = json.data.results[0];
        if (first.downloadUrl && first.downloadUrl.length > 0) {
          var hq = first.downloadUrl.find(function(d) { return d.quality === '320kbps'; }) || first.downloadUrl[first.downloadUrl.length - 1];
          currentStreamUrl = hq.url;
          if (miniPlayer) miniPlayer.style.display = 'flex';
          if (audioElem) audioElem.src = currentStreamUrl;

          var linksHtml = '';
          for (var i = 0; i < first.downloadUrl.length; i++) {
            var item = first.downloadUrl[i];
            linksHtml += '<a href="' + item.url + '" target="_blank" download class="dl-pill">' + item.quality + '</a>';
          }
          if (dlLinks) dlLinks.innerHTML = linksHtml;
        }
      }
    } catch (e) {
      if (statusBadge) statusBadge.textContent = 'Error';
      if (outputCode) outputCode.textContent = '// Error: ' + e.message;
    }
  }

  if (testBtn) testBtn.addEventListener('click', testSearch);
  if (input) {
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') testSearch();
    });
  }

  // Quick initial fetch
  testSearch();

  // Filter routes
  var filterInput = document.getElementById('routes-filter');
  if (filterInput) {
    filterInput.addEventListener('input', function(e) {
      var term = e.target.value.toLowerCase();
      document.querySelectorAll('.route-row').forEach(function(row) {
        row.style.display = row.textContent.toLowerCase().indexOf(term) !== -1 ? 'grid' : 'none';
      });
    });
  }
})();
`

const styles = `
:root {
  --bg: #05070a;
  --bg-surface: #0a0e17;
  --glass-bg: rgba(14, 20, 32, 0.45);
  --glass-bg-hover: rgba(22, 31, 48, 0.62);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-border-highlight: rgba(255, 255, 255, 0.18);
  --text: #f3f6fa;
  --text-muted: #8391a5;
  --accent: #38bdf8;
  --accent-glow: rgba(56, 189, 248, 0.2);
  --emerald: #34d399;
  --coral: #f87171;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: var(--bg);
  background-image: 
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.08), transparent 70%),
    radial-gradient(ellipse 60% 40% at 90% 80%, rgba(14, 20, 32, 0.6), transparent 70%);
  background-attachment: fixed;
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}

a { color: var(--accent); text-decoration: none; transition: color 0.2s var(--ease-smooth); }
a:hover { color: #fff; }

/* Header */
.topbar {
  border-bottom: 1px solid var(--glass-border);
  background: rgba(5, 7, 10, 0.78);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s var(--ease-smooth);
}
.topbar-inner {
  max-width: 1120px;
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
  background: rgba(56, 189, 248, 0.15);
  border: 1px solid var(--accent);
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: var(--radius-sm);
  letter-spacing: 0.5px;
}
.domain-badge {
  font-size: 11px;
  color: var(--text-muted);
  border: 1px solid var(--glass-border);
  background: rgba(255, 255, 255, 0.03);
  padding: 2px 8px;
  border-radius: 12px;
}
.nav { display: flex; gap: 20px; align-items: center; }
.nav a { color: var(--text-muted); font-size: 13px; font-weight: 500; }
.nav a:hover { color: #fff; text-decoration: none; }

/* Main */
main { max-width: 1120px; margin: 0 auto; padding: 36px 20px 80px; }

/* Liquid Glass Cards */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  border: 1px solid var(--glass-border);
  border-top: 1px solid var(--glass-border-highlight);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s var(--ease-smooth), background 0.3s var(--ease-smooth), border-color 0.3s var(--ease-smooth);
}
.glass-card:hover {
  background: var(--glass-bg-hover);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-in {
  animation: fadeInUp 0.6s var(--ease-smooth) backwards;
}

/* Hero Section */
.hero {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 32px;
  align-items: start;
  margin-bottom: 48px;
}
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; }
}

.eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--accent);
  margin-bottom: 12px;
}

h1 {
  font-size: 34px;
  font-weight: 800;
  line-height: 1.22;
  margin-bottom: 12px;
  color: #fff;
  letter-spacing: -0.5px;
}

.lead {
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.55;
  margin-bottom: 24px;
}

.actions { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 28px; }
.btn {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s var(--ease-smooth);
  text-decoration: none;
}
.btn.primary {
  background: var(--accent);
  color: #05070a;
  border: 1px solid var(--accent);
}
.btn.primary:hover {
  background: #7dd3fc;
  color: #000;
  transform: translateY(-1px);
}
.btn.secondary {
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border-highlight);
  color: #fff;
}
.btn.secondary:hover {
  background: var(--glass-bg-hover);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.glass-stat {
  background: var(--glass-bg);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--glass-border);
  border-top: 1px solid var(--glass-border-highlight);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  animation: fadeInUp 0.6s var(--ease-smooth) backwards;
  transition: transform 0.25s var(--ease-smooth), background 0.25s var(--ease-smooth);
}
.glass-stat:hover {
  background: var(--glass-bg-hover);
  transform: translateY(-2px);
}
.stat-num {
  font-size: 14px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 2px;
}
.stat-label {
  font-size: 11px;
  color: var(--text-muted);
}

/* Console Section */
.liquid-console {
  background: rgba(8, 12, 20, 0.7);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  border: 1px solid var(--glass-border);
  border-top: 1px solid var(--glass-border-highlight);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}
.console-head {
  background: rgba(14, 20, 32, 0.6);
  padding: 12px 16px;
  border-bottom: 1px solid var(--glass-border);
  display: flex;
  align-items: center;
  gap: 10px;
}
.console-input {
  flex: 1;
  background: rgba(5, 7, 10, 0.6);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  color: #fff;
  font-size: 13px;
  padding: 6px 12px;
  outline: none;
  font-family: inherit;
  transition: border-color 0.2s;
}
.console-input:focus { border-color: var(--accent); }
.status-badge {
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
}
.badge-ok { background: rgba(52, 211, 153, 0.15); color: var(--emerald); }
.badge-err { background: rgba(248, 113, 113, 0.15); color: var(--coral); }

.console-body {
  padding: 16px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
}
.console-body pre {
  max-height: 220px;
  overflow-y: auto;
  color: #cbd5e1;
  line-height: 1.45;
}

.mini-player-bar {
  background: rgba(14, 20, 32, 0.7);
  border-top: 1px solid var(--glass-border);
  padding: 10px 16px;
  display: none;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.dl-pill {
  font-size: 10px;
  font-weight: 700;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid var(--glass-border);
  color: var(--accent);
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 4px;
}
.dl-pill:hover { background: var(--accent); color: #000; }

/* Features */
.section { margin-bottom: 48px; }
.section-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
}
.section-head h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 4px; }
.section-copy { color: var(--text-muted); font-size: 14px; }

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
.feature-card {
  animation: fadeInUp 0.6s var(--ease-smooth) backwards;
}
.feature-card h3 { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 6px; }
.feature-card p { font-size: 13px; color: var(--text-muted); }

/* Route Groups */
.route-groups { display: flex; flex-direction: column; gap: 12px; }
.liquid-group {
  background: var(--glass-bg);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--glass-border);
  border-top: 1px solid var(--glass-border-highlight);
  border-radius: var(--radius-md);
  overflow: hidden;
  animation: fadeInUp 0.6s var(--ease-smooth) backwards;
  transition: transform 0.25s var(--ease-smooth);
}
.liquid-group:hover {
  transform: translateY(-1px);
}
.group-header {
  padding: 12px 18px;
  background: rgba(14, 20, 32, 0.5);
  border-bottom: 1px solid var(--glass-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.group-header h3 { font-size: 14px; font-weight: 700; color: #fff; }
.pill {
  font-size: 10px;
  color: var(--text-muted);
  border: 1px solid var(--glass-border);
  background: rgba(255, 255, 255, 0.02);
  padding: 2px 8px;
  border-radius: 10px;
}
.group-table { display: flex; flex-direction: column; }
.route-row {
  display: grid;
  grid-template-columns: 64px minmax(240px, 1.2fr) 1.5fr;
  gap: 14px;
  padding: 10px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  font-size: 12px;
  align-items: center;
  transition: background 0.15s;
}
.route-row:hover { background: rgba(255, 255, 255, 0.02); }
.route-row:last-child { border-bottom: none; }
@media (max-width: 720px) {
  .route-row { grid-template-columns: 1fr; gap: 4px; }
}
.route-row .method {
  font-weight: 700;
  color: var(--accent);
  font-size: 11px;
  background: rgba(56, 189, 248, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  text-align: center;
  width: 48px;
}
.route-path {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: #fff;
  font-weight: 600;
}
.route-desc { color: var(--text-muted); }

/* Footer */
.footer {
  border-top: 1px solid var(--glass-border);
  padding: 28px 20px;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
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
    <style>${styles}</style>
  </head>
  <body>
    <header class="topbar">
      <div class="topbar-inner">
        <a class="brand" href="/">
          <span class="mark">SD</span>
          <span>${escapeHtml(API_NAME)}</span>
          <span class="domain-badge">${escapeHtml(DISPLAY_DOMAIN)}</span>
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
        <div class="animate-in" style="animation-delay: 0.05s;">
          <span class="eyebrow">Public + No Rate Limits</span>
          <h1>Build faster with the ShnwazDev JioSaavn API</h1>
          <p class="lead">
            Access albums, artists, browse feeds, lyrics, playlists, podcasts, search, songs, and trending routes
            through clean JSON responses and OpenAPI documentation on ${escapeHtml(DISPLAY_DOMAIN)}.
          </p>
          <div class="actions">
            <a class="btn primary" href="/docs">Open Docs</a>
            <a class="btn secondary" href="/swagger">View OpenAPI</a>
            <a class="btn secondary" href="/api/endpoints">Endpoint Index</a>
            <a class="btn secondary" href="/api/limits">API Limits</a>
          </div>

          <div class="stats-grid">
            ${renderStats()}
          </div>
        </div>

        <aside class="liquid-console animate-in" style="animation-delay: 0.15s;">
          <div class="console-head">
            <input type="text" id="console-query-input" class="console-input" value="Kesariya" placeholder="Search track name..." />
            <button class="btn primary" id="console-test-btn" style="padding: 5px 12px; font-size: 11px;">Test Live</button>
            <span class="status-badge badge-ok" id="console-status-badge">Ready</span>
          </div>

          <div class="mini-player-bar" id="console-mini-player">
            <audio id="mini-audio" controls style="height: 28px; flex: 1; min-width: 160px;"></audio>
            <div id="mini-dl-links"></div>
          </div>

          <div class="console-body">
            <pre><code id="console-output-code">// Testing live query...</code></pre>
          </div>
        </aside>
      </section>

      <section class="section">
        <div class="section-head animate-in" style="animation-delay: 0.2s;">
          <div>
            <h2>Clean API surface for music apps</h2>
            <p class="section-copy">
              High performance edge infrastructure for music applications and metadata retrieval on ${escapeHtml(DISPLAY_DOMAIN)}.
            </p>
          </div>
        </div>
        <div class="feature-grid">
          ${renderFeatures()}
        </div>
      </section>

      <section class="section">
        <div class="section-head animate-in" style="animation-delay: 0.25s;">
          <div>
            <h2>All requested endpoints</h2>
            <p class="section-copy">
              Use these routes from your custom domain ${escapeHtml(DISPLAY_DOMAIN)}. Live testing is available in Scalar docs.
            </p>
          </div>
          <input type="text" id="routes-filter" class="console-input" placeholder="Filter routes..." style="max-width: 220px;" />
        </div>
        <div class="route-groups">
          ${renderRouteGroups()}
        </div>
      </section>
    </main>

    <footer class="footer">
      <span>Built with Hono, TypeScript, OpenAPI on Cloudflare Workers & ${escapeHtml(DISPLAY_DOMAIN)}.</span>
      <a href="${REPOSITORY_URL}" target="_blank" rel="noreferrer">GitHub Repository</a>
    </footer>

    <script>${clientScript}</script>
  </body>
</html>`)
})
