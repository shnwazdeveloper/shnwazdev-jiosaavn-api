import { Hono } from 'hono'

export const Home = new Hono()

const API_NAME = 'ShnwazDev JioSaavn API'
const REPOSITORY_URL = 'https://github.com/shnwazdeveloper/shnwazdev-jiosaavn-api'
const CUSTOM_DOMAIN = 'Sh.Jio.dev'
const DESCRIPTION =
  'ShnwazDev JioSaavn API is an ultra-fast TypeScript API for songs, albums, artists, playlists, search, and recommendations on Cloudflare Workers.'

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
    label: '⚡',
    title: 'Cloudflare Edge',
    body: 'Deployed globally on Cloudflare Workers with minimal latency and instant cold starts.'
  },
  {
    label: '🔑',
    title: 'Sh. Key Generator',
    body: 'Generate, test, manage, and revoke unique Sh. API keys with 3-digit randomized identifiers.'
  },
  {
    label: '🎵',
    title: '320kbps Hi-Fi Audio',
    body: 'Direct decrypted streaming and high-bitrate download links (320kbps, 160kbps, 96kbps, 48kbps).'
  },
  {
    label: '🔍',
    title: 'Global Search',
    body: 'Search across songs, albums, artists, playlists, and top-query suggestions in real time.'
  },
  {
    label: '📜',
    title: 'Synced Lyrics',
    body: 'Fetch rich synchronized time-stamped lyrics, artist recommendations, and podcast episodes.'
  },
  {
    label: '📖',
    title: 'OpenAPI 3.1 & Scalar',
    body: 'Interactive Swagger and Scalar API documentation generated automatically.'
  }
]

const stats = [
  ['47+ Music Routes', 'Albums, artists, browse, lyrics, playlists, podcasts, search, songs, trending'],
  ['Cloudflare Workers', 'Global Edge network on custom domain Sh.Jio.dev'],
  ['Sh. API Keys', 'Signed secure tokens with 3-digit random codes & revocation'],
  ['OpenAPI 3.1', 'Interactive Scalar docs and Swagger JSON schema']
]

const routeGroups: RouteGroup[] = [
  {
    name: 'Album',
    count: 1,
    routes: [{ method: 'GET', path: '/api/albums?id={id}', description: 'Retrieve an album by ID or link' }]
  },
  {
    name: 'Artists',
    count: 6,
    routes: [
      { method: 'GET', path: '/api/artists?id={id}', description: 'Retrieve artists by ID or link' },
      { method: 'GET', path: '/api/artists/{id}', description: 'Retrieve artist by ID' },
      { method: 'GET', path: '/api/artists/{id}/albums', description: "Retrieve artist's albums" },
      { method: 'GET', path: '/api/artists/{id}/related', description: 'Retrieve related artists' },
      { method: 'GET', path: '/api/artists/{id}/songs', description: "Retrieve artist's songs" },
      { method: 'GET', path: '/api/artists/by-name?name={name}', description: 'Retrieve artist by name' }
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
      { method: 'GET', path: '/api/home/artist-recommendations', description: 'Retrieve home artist recommendations' },
      { method: 'GET', path: '/api/home/city-modules', description: 'Retrieve home city modules' },
      { method: 'GET', path: '/api/home/modules', description: 'Retrieve home feed module metadata' },
      { method: 'GET', path: '/api/home/promos', description: 'Retrieve editorial promo groups' },
      { method: 'GET', path: '/api/moods', description: 'Retrieve mood channels' },
      { method: 'GET', path: '/api/music-plus', description: 'Retrieve music plus channels' },
      { method: 'GET', path: '/api/radio', description: 'Retrieve radio stations' },
      { method: 'GET', path: '/api/radio/{id}', description: 'Retrieve radio station detail payload' },
      { method: 'GET', path: '/api/radio/artists', description: 'Retrieve artist radio recommendations' },
      { method: 'GET', path: '/api/radio/featured', description: 'Retrieve featured radio stations' }
    ]
  },
  {
    name: 'Lyrics',
    count: 3,
    routes: [
      { method: 'GET', path: '/api/lyrics?query={query}', description: 'Retrieve lyrics by song name' },
      { method: 'GET', path: '/api/lyrics/{id}', description: 'Retrieve lyrics by song or lyrics ID' },
      { method: 'GET', path: '/api/lyrics/{id}/sync', description: 'Retrieve synced lyrics payload' }
    ]
  },
  {
    name: 'Playlist',
    count: 1,
    routes: [{ method: 'GET', path: '/api/playlists?id={id}', description: 'Retrieve a playlist by ID or link' }]
  },
  {
    name: 'Podcasts',
    count: 3,
    routes: [
      { method: 'GET', path: '/api/episodes/{id}', description: 'Retrieve a podcast episode by ID' },
      { method: 'GET', path: '/api/podcasts?id={id}', description: 'Retrieve podcast show by ID or link' },
      { method: 'GET', path: '/api/podcasts/{id}', description: 'Retrieve podcast show detail' }
    ]
  },
  {
    name: 'Search',
    count: 6,
    routes: [
      { method: 'GET', path: '/api/search?query={query}', description: 'Global search' },
      { method: 'GET', path: '/api/search/albums?query={query}', description: 'Search for albums' },
      { method: 'GET', path: '/api/search/artists?query={query}', description: 'Search for artists' },
      { method: 'GET', path: '/api/search/playlists?query={query}', description: 'Search for playlists' },
      { method: 'GET', path: '/api/search/songs?query={query}', description: 'Search for songs' },
      { method: 'GET', path: '/api/search/top-query?query={query}', description: 'Search top query bucket' }
    ]
  },
  {
    name: 'Songs',
    count: 5,
    routes: [
      { method: 'GET', path: '/api/songs?ids={ids}', description: 'Retrieve songs by ID or link' },
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
        <div class="stat-card">
          <div class="stat-title">${escapeHtml(title)}</div>
          <div class="stat-desc">${escapeHtml(body)}</div>
        </div>`
    )
    .join('')

const renderFeatures = () =>
  features
    .map(
      (feature) => `
        <div class="feature-card">
          <div class="feature-icon">${escapeHtml(feature.label)}</div>
          <h3 class="feature-title">${escapeHtml(feature.title)}</h3>
          <p class="feature-body">${escapeHtml(feature.body)}</p>
        </div>`
    )
    .join('')

const renderRouteGroups = () =>
  routeGroups
    .map(
      (group) => `
        <div class="route-group" data-group="${escapeHtml(group.name.toLowerCase())}">
          <div class="route-group-header">
            <h3>${escapeHtml(group.name)}</h3>
            <span class="badge">${group.count} ${group.count === 1 ? 'route' : 'routes'}</span>
          </div>
          <div class="route-table">
            ${group.routes
              .map(
                (route) => `
                  <div class="route-row">
                    <span class="method-tag ${escapeHtml(route.method.toLowerCase())}">${escapeHtml(route.method)}</span>
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
  var tabButtons = document.querySelectorAll('[data-tab-target]');
  var tabPanels = document.querySelectorAll('[data-tab-panel]');

  function switchTab(targetId) {
    tabButtons.forEach(function(btn) {
      var active = btn.getAttribute('data-tab-target') === targetId;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    tabPanels.forEach(function(panel) {
      panel.classList.toggle('active', panel.id === targetId);
    });
    if (history.replaceState) {
      history.replaceState(null, '', '#' + targetId);
    }
  }

  tabButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      switchTab(btn.getAttribute('data-tab-target'));
    });
  });

  if (window.location.hash) {
    var hash = window.location.hash.replace('#', '');
    if (document.getElementById(hash)) {
      switchTab(hash);
    }
  }

  var STORAGE_KEY = 'shnwaz_api_keys_v1';
  function getStoredKeys() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (e) {
      return [];
    }
  }
  function saveStoredKeys(keys) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(keys));
  }

  var activeApiKey = '';
  var keyOutput = document.getElementById('gen-key-display');
  var codeBadge = document.getElementById('gen-3digit-badge');
  var statusBadge = document.getElementById('gen-status-badge');
  var timeBadge = document.getElementById('gen-time-badge');
  var generateBtn = document.getElementById('btn-generate-key');
  var keysTableBody = document.getElementById('keys-table-body');

  function updateSnippetTemplates(key) {
    activeApiKey = key;
    document.querySelectorAll('[data-snippet-key]').forEach(function(el) {
      var template = el.getAttribute('data-snippet-key');
      el.textContent = template.split('{key}').join(key || 'Sh.000-XXXXXXXXX-XXXXXX-XXXXXX');
    });
  }

  function renderKeysTable() {
    if (!keysTableBody) return;
    var keys = getStoredKeys();
    if (keys.length === 0) {
      keysTableBody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--muted); padding: 24px;">No API keys generated yet. Click "Generate New Sh. Key" above!</td></tr>';
      return;
    }

    var html = '';
    for (var i = 0; i < keys.length; i++) {
      var item = keys[i];
      var rowClass = item.revoked ? 'revoked-row' : '';
      var badgeClass = item.revoked ? 'badge-revoked' : 'badge-active';
      var badgeText = item.revoked ? 'Revoked' : 'Active';
      var revokeOrDelete = !item.revoked
        ? '<button class="btn-sm btn-danger" onclick="window.revokeKey(' + JSON.stringify(item.apiKey) + ')">Revoke</button>'
        : '<button class="btn-sm btn-outline" onclick="window.removeKey(' + JSON.stringify(item.apiKey) + ')">Delete</button>';

      html += '<tr class="' + rowClass + '">' +
        '<td><span class="code-badge">' + (item.code3Digit || '---') + '</span></td>' +
        '<td><code class="table-key-text">' + item.apiKey + '</code></td>' +
        '<td><span class="badge ' + badgeClass + '">' + badgeText + '</span></td>' +
        '<td style="color: var(--muted); font-size: 12px;">' + (item.createdAt || 'Recent') + '</td>' +
        '<td class="action-cell">' +
          '<button class="btn-sm btn-secondary" onclick="window.copyText(' + JSON.stringify(item.apiKey) + ', this)">Copy</button>' +
          revokeOrDelete +
          '<button class="btn-sm btn-primary" onclick="window.testLiveKey(' + JSON.stringify(item.apiKey) + ')">Test</button>' +
        '</td>' +
      '</tr>';
    }
    keysTableBody.innerHTML = html;
  }

  async function generateNewKey() {
    if (generateBtn) generateBtn.disabled = true;
    if (statusBadge) statusBadge.textContent = 'Generating...';

    try {
      var res = await fetch('/apikey', { cache: 'no-store' });
      var json = await res.json();
      if (json.success && json.data) {
        var keyData = json.data;
        if (keyOutput) keyOutput.textContent = keyData.apiKey;
        if (codeBadge) codeBadge.textContent = '3-Digit Code: ' + (keyData.code3Digit || 'Sh');
        if (statusBadge) {
          statusBadge.textContent = 'Active';
          statusBadge.className = 'badge badge-active';
        }
        if (timeBadge) timeBadge.textContent = new Date().toLocaleTimeString();

        updateSnippetTemplates(keyData.apiKey);

        var currentKeys = getStoredKeys();
        currentKeys.unshift({
          apiKey: keyData.apiKey,
          code3Digit: keyData.code3Digit,
          revoked: false,
          createdAt: new Date().toLocaleTimeString()
        });
        saveStoredKeys(currentKeys.slice(0, 20));
        renderKeysTable();
      }
    } catch (err) {
      if (statusBadge) {
        statusBadge.textContent = 'Error';
        statusBadge.className = 'badge badge-revoked';
      }
    } finally {
      if (generateBtn) generateBtn.disabled = false;
    }
  }

  window.copyText = async function(text, btn) {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    if (btn) {
      var orig = btn.textContent;
      btn.textContent = '✓ Copied';
      setTimeout(function() { btn.textContent = orig; }, 1200);
    }
  };

  window.revokeKey = async function(key) {
    if (!confirm('Are you sure you want to revoke this API key? It will immediately stop working on all /api routes.')) return;
    try {
      await fetch('/apikey/revoke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey: key })
      });
      var keys = getStoredKeys();
      for (var i = 0; i < keys.length; i++) {
        if (keys[i].apiKey === key) keys[i].revoked = true;
      }
      saveStoredKeys(keys);
      renderKeysTable();
      alert('Key revoked successfully!');
    } catch (e) {
      alert('Failed to revoke key: ' + e.message);
    }
  };

  window.removeKey = function(key) {
    var keys = getStoredKeys().filter(function(k) { return k.apiKey !== key; });
    saveStoredKeys(keys);
    renderKeysTable();
  };

  window.testLiveKey = async function(key) {
    var outputEl = document.getElementById('test-key-result');
    if (outputEl) outputEl.innerHTML = '<span style="color: var(--cyan)">Testing ' + key + '...</span>';
    try {
      var start = performance.now();
      var res = await fetch('/api/endpoints', {
        headers: { 'X-API-Key': key }
      });
      var time = Math.round(performance.now() - start);
      var data = await res.json();
      if (res.ok) {
        if (outputEl) outputEl.innerHTML = '<span style="color: var(--green)">✓ 200 OK (' + time + 'ms) - Key Valid!</span>';
      } else {
        if (outputEl) outputEl.innerHTML = '<span style="color: var(--coral)">✗ ' + res.status + ' ' + (data.message || 'Unauthorized') + '</span>';
      }
    } catch (err) {
      if (outputEl) outputEl.innerHTML = '<span style="color: var(--coral)">✗ Network error: ' + err.message + '</span>';
    }
  };

  if (generateBtn) generateBtn.addEventListener('click', generateNewKey);
  renderKeysTable();

  if (getStoredKeys().length === 0) {
    generateNewKey();
  } else {
    var first = getStoredKeys()[0];
    if (keyOutput) keyOutput.textContent = first.apiKey;
    if (codeBadge) codeBadge.textContent = '3-Digit Code: ' + (first.code3Digit || '---');
    if (statusBadge) {
      statusBadge.textContent = first.revoked ? 'Revoked' : 'Active';
      statusBadge.className = 'badge ' + (first.revoked ? 'badge-revoked' : 'badge-active');
    }
    updateSnippetTemplates(first.apiKey);
  }

  // Interactive Live Explorer & Audio Player
  var searchInput = document.getElementById('explorer-search-input');
  var searchBtn = document.getElementById('explorer-search-btn');
  var searchResults = document.getElementById('explorer-results');
  var playerCard = document.getElementById('explorer-player-card');
  var audioEl = document.getElementById('audio-stream-player');
  var playerArt = document.getElementById('player-art');
  var playerTitle = document.getElementById('player-title');
  var playerArtist = document.getElementById('player-artist');
  var downloadLinksEl = document.getElementById('player-download-links');
  var jsonViewer = document.getElementById('explorer-json-viewer');

  async function performSearch() {
    var query = (searchInput && searchInput.value.trim()) || 'Believer';
    if (!activeApiKey && getStoredKeys().length > 0) {
      activeApiKey = getStoredKeys()[0].apiKey;
    }

    if (searchResults) searchResults.innerHTML = '<div style="padding: 20px; color: var(--cyan);">Searching for "' + query + '"...</div>';

    try {
      var res = await fetch('/api/search/songs?query=' + encodeURIComponent(query), {
        headers: activeApiKey ? { 'X-API-Key': activeApiKey } : {}
      });
      var body = await res.json();
      if (jsonViewer) jsonViewer.textContent = JSON.stringify(body, null, 2);

      if (body.success && body.data && body.data.results && body.data.results.length > 0) {
        var resultsHtml = '';
        var list = body.data.results.slice(0, 6);
        for (var i = 0; i < list.length; i++) {
          var song = list[i];
          var img = (song.image && song.image[song.image.length - 1] && song.image[song.image.length - 1].url) || '';
          var artist = (song.artists && song.artists.primary && song.artists.primary.map(function(a) { return a.name; }).join(', ')) || 'Unknown Artist';
          var durationStr = song.duration ? (Math.floor(song.duration / 60) + ':' + (song.duration % 60 < 10 ? '0' : '') + (song.duration % 60)) : '';

          resultsHtml += '<div class="song-card">' +
            '<img src="' + img + '" alt="' + song.name + '" class="song-art" />' +
            '<div class="song-info">' +
              '<div class="song-name">' + song.name + '</div>' +
              '<div class="song-artist">' + artist + '</div>' +
              '<div class="song-duration">' + durationStr + (song.year ? ' • ' + song.year : '') + '</div>' +
            '</div>' +
            '<div class="song-actions">' +
              '<button class="btn-sm btn-primary" onclick="window.playSong(' + JSON.stringify(encodeURIComponent(JSON.stringify(song))) + ')">▶ Play 320kbps</button>' +
            '</div>' +
          '</div>';
        }
        searchResults.innerHTML = resultsHtml;
      } else {
        searchResults.innerHTML = '<div style="padding: 20px; color: var(--muted);">No songs found.</div>';
      }
    } catch (err) {
      if (searchResults) searchResults.innerHTML = '<div style="padding: 20px; color: var(--coral);">Error: ' + err.message + '</div>';
    }
  }

  window.playSong = function(encoded) {
    try {
      var song = JSON.parse(decodeURIComponent(encoded));
      if (!song) return;
      if (playerCard) playerCard.style.display = 'block';
      if (playerTitle) playerTitle.textContent = song.name;
      if (playerArtist) playerArtist.textContent = (song.artists && song.artists.primary && song.artists.primary.map(function(a) { return a.name; }).join(', ')) || '';
      var img = (song.image && song.image[song.image.length - 1] && song.image[song.image.length - 1].url) || '';
      if (playerArt) playerArt.src = img;

      var bestUrl = '';
      if (song.downloadUrl && song.downloadUrl.length > 0) {
        var found320 = song.downloadUrl.find(function(d) { return d.quality === '320kbps'; });
        bestUrl = (found320 && found320.url) || song.downloadUrl[song.downloadUrl.length - 1].url;
      }

      if (audioEl) {
        audioEl.src = bestUrl;
        audioEl.play();
      }

      if (downloadLinksEl && song.downloadUrl) {
        var pills = '';
        for (var d = 0; d < song.downloadUrl.length; d++) {
          var dl = song.downloadUrl[d];
          pills += '<a href="' + dl.url + '" target="_blank" download class="dl-pill">' + dl.quality + ' ⬇</a> ';
        }
        downloadLinksEl.innerHTML = pills;
      }

      if (playerCard) playerCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (e) {
      console.error(e);
    }
  };

  if (searchBtn) searchBtn.addEventListener('click', performSearch);
  if (searchInput) {
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') performSearch();
    });
  }

  var routeSearch = document.getElementById('route-filter-input');
  if (routeSearch) {
    routeSearch.addEventListener('input', function(e) {
      var val = e.target.value.toLowerCase();
      document.querySelectorAll('.route-row').forEach(function(row) {
        var text = row.textContent.toLowerCase();
        row.style.display = text.indexOf(val) !== -1 ? 'flex' : 'none';
      });
    });
  }
})();
`

const styles = `
:root {
  color-scheme: dark;
  --bg: #090a0f;
  --bg-soft: #10131c;
  --panel: #141824;
  --panel-2: #1b2132;
  --panel-border: rgba(97, 212, 255, 0.12);
  --text: #f0f3fa;
  --muted: #8e9bb3;
  --line: #222b3d;
  --cyan: #38bdf8;
  --cyan-glow: rgba(56, 189, 248, 0.25);
  --green: #4ade80;
  --coral: #f87171;
  --amber: #fbbf24;
  --violet: #a78bfa;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  min-height: 100vh;
}

body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  height: 400px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(167, 139, 250, 0.05) 50%, transparent 80%);
  pointer-events: none;
  z-index: 0;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(9, 10, 15, 0.82);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--line);
}
.topbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 17px;
}
.brand-mark {
  background: linear-gradient(135deg, var(--cyan), var(--violet));
  color: #000;
  font-weight: 900;
  font-size: 13px;
  padding: 4px 8px;
  border-radius: 6px;
  box-shadow: 0 0 16px var(--cyan-glow);
}
.domain-badge {
  font-size: 11px;
  background: rgba(56, 189, 248, 0.15);
  border: 1px solid var(--cyan);
  color: var(--cyan);
  padding: 2px 8px;
  border-radius: 999px;
  font-weight: 600;
}
.nav-links {
  display: flex;
  gap: 18px;
  align-items: center;
}
.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--cyan); }

.main-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px 80px;
  position: relative;
  z-index: 1;
}

.hero {
  text-align: center;
  padding: 40px 0 32px;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--panel);
  border: 1px solid var(--line);
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  color: var(--cyan);
  margin-bottom: 20px;
}
.hero h1 {
  font-size: 42px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #ffffff 40%, var(--cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero p {
  color: var(--muted);
  font-size: 18px;
  max-width: 760px;
  margin: 0 auto 28px;
}

.tabs-nav {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 36px;
  border-bottom: 1px solid var(--line);
  padding-bottom: 12px;
  flex-wrap: wrap;
}
.tab-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--muted);
  font-size: 15px;
  font-weight: 600;
  padding: 10px 22px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
}
.tab-btn:hover {
  color: #fff;
  background: var(--panel);
}
.tab-btn.active {
  color: #000;
  background: var(--cyan);
  border-color: var(--cyan);
  box-shadow: 0 0 20px var(--cyan-glow);
}

.tab-panel {
  display: none;
  animation: fadeIn 0.3s ease;
}
.tab-panel.active {
  display: block;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.glass-card {
  background: var(--panel);
  border: 1px solid var(--panel-border);
  border-radius: 14px;
  padding: 28px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  margin-bottom: 28px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
}
.card-header h2 { font-size: 20px; font-weight: 700; }

.btn-primary {
  background: var(--cyan);
  color: #000;
  font-weight: 700;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 0 14px var(--cyan-glow);
}
.btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
.btn-secondary {
  background: var(--panel-2);
  color: var(--text);
  border: 1px solid var(--line);
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-secondary:hover { border-color: var(--cyan); color: var(--cyan); }
.btn-danger {
  background: rgba(248, 113, 113, 0.15);
  border: 1px solid var(--coral);
  color: var(--coral);
  font-weight: 600;
  cursor: pointer;
}
.btn-danger:hover { background: var(--coral); color: #000; }
.btn-outline {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--muted);
  cursor: pointer;
}
.btn-outline:hover { color: #fff; border-color: var(--muted); }
.btn-sm {
  padding: 5px 12px;
  font-size: 12px;
  border-radius: 6px;
}

.badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.badge-active { background: rgba(74, 222, 128, 0.15); color: var(--green); border: 1px solid var(--green); }
.badge-revoked { background: rgba(248, 113, 113, 0.15); color: var(--coral); border: 1px solid var(--coral); }
.code-badge {
  background: rgba(167, 139, 250, 0.15);
  color: var(--violet);
  border: 1px solid var(--violet);
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: monospace;
}

.key-gen-box {
  background: var(--bg-soft);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}
.key-string-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: #06070a;
  border: 1px solid var(--line);
  padding: 14px 18px;
  border-radius: 8px;
  margin-bottom: 14px;
}
.key-string-row code {
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  color: var(--cyan);
  word-break: break-all;
  font-weight: 700;
}
.key-meta-row {
  display: flex;
  gap: 20px;
  color: var(--muted);
  font-size: 13px;
  flex-wrap: wrap;
}

.keys-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
}
.keys-table th, .keys-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--line);
}
.keys-table th {
  color: var(--muted);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.table-key-text {
  font-family: monospace;
  font-size: 13px;
  color: var(--text);
}
.revoked-row td {
  opacity: 0.5;
  text-decoration: line-through;
}
.action-cell {
  display: flex;
  gap: 8px;
}

.snippets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 16px;
  margin-top: 20px;
}
.snippet-card {
  background: #07090e;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 16px;
}
.snippet-card h4 {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
.snippet-card pre {
  background: transparent;
  overflow-x: auto;
  font-size: 12px;
  color: #cad5e8;
  line-height: 1.5;
}

.search-bar {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}
.search-input {
  flex: 1;
  background: var(--bg-soft);
  border: 1px solid var(--line);
  color: #fff;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
}
.search-input:focus { border-color: var(--cyan); }
.songs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}
.song-card {
  background: var(--panel-2);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 14px;
  display: flex;
  gap: 12px;
  align-items: center;
}
.song-art {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  object-fit: cover;
}
.song-info { flex: 1; min-width: 0; }
.song-name { font-weight: 700; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.song-artist { color: var(--muted); font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.song-duration { color: var(--cyan); font-size: 11px; margin-top: 2px; }

.player-card {
  background: linear-gradient(135deg, #161c2b, #0f1420);
  border: 1px solid var(--cyan);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  display: none;
}
.player-layout {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}
.player-art-lg {
  width: 88px;
  height: 88px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 0 16px var(--cyan-glow);
}
.player-meta { flex: 1; }
.dl-pills-row {
  display: flex;
  gap: 8px;
  margin-top: 10px;
  flex-wrap: wrap;
}
.dl-pill {
  background: rgba(56, 189, 248, 0.15);
  border: 1px solid var(--cyan);
  color: var(--cyan);
  padding: 4px 10px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
}
.dl-pill:hover { background: var(--cyan); color: #000; }

.route-group {
  margin-bottom: 24px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 10px;
  overflow: hidden;
}
.route-group-header {
  padding: 12px 18px;
  background: var(--bg-soft);
  border-bottom: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.route-row {
  padding: 10px 18px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.route-row:last-child { border-bottom: none; }
.method-tag {
  font-size: 11px;
  font-weight: 800;
  padding: 2px 7px;
  border-radius: 4px;
  min-width: 48px;
  text-align: center;
}
.method-tag.get { background: rgba(56, 189, 248, 0.2); color: var(--cyan); }
.method-tag.post { background: rgba(74, 222, 128, 0.2); color: var(--green); }
.route-path { font-family: monospace; font-size: 13px; color: #fff; font-weight: 600; }
.route-desc { color: var(--muted); font-size: 13px; margin-left: auto; }

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 24px;
}
.feature-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 24px;
}
.feature-icon { font-size: 28px; margin-bottom: 12px; }
.feature-title { font-size: 17px; font-weight: 700; margin-bottom: 8px; }
.feature-body { color: var(--muted); font-size: 14px; }

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 36px 0;
}
.stat-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 18px;
}
.stat-title { font-size: 18px; font-weight: 800; color: var(--cyan); margin-bottom: 4px; }
.stat-desc { font-size: 13px; color: var(--muted); }

.footer {
  border-top: 1px solid var(--line);
  padding: 32px 24px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}
.footer a { color: var(--cyan); text-decoration: none; }
`

Home.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(API_NAME)} - Cloudflare Edge</title>
    <meta name="description" content="${escapeHtml(DESCRIPTION)}" />
    <style>${styles}</style>
  </head>
  <body>
    <header class="topbar">
      <div class="topbar-inner">
        <a class="brand" href="/">
          <span class="brand-mark">Sh</span>
          <span>${escapeHtml(API_NAME)}</span>
          <span class="domain-badge">${escapeHtml(CUSTOM_DOMAIN)}</span>
        </a>
        <nav class="nav-links">
          <a href="/docs">Docs</a>
          <a href="/swagger">OpenAPI</a>
          <a href="/health">Health</a>
          <a href="${REPOSITORY_URL}" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
    </header>

    <div class="main-wrapper">
      <section class="hero">
        <div class="hero-badge">⚡ Cloudflare Edge • ${escapeHtml(CUSTOM_DOMAIN)} • No App Rate Limit</div>
        <h1>ShnwazDev JioSaavn Music API</h1>
        <p>
          Fast, decentralized music streaming API for JioSaavn songs, 320kbps audio, albums, playlists, synced lyrics, and recommendations.
        </p>

        <div class="stats-grid">
          ${renderStats()}
        </div>
      </section>

      <!-- Navigation Tabs -->
      <nav class="tabs-nav" role="tablist">
        <button class="tab-btn active" data-tab-target="tab-keys">🔑 API Key Generator & Manager</button>
        <button class="tab-btn" data-tab-target="tab-explorer">🎵 Live Music Explorer</button>
        <button class="tab-btn" data-tab-target="tab-endpoints">📋 Endpoints Catalog (47+)</button>
        <button class="tab-btn" data-tab-target="tab-features">✨ Features & Specs</button>
      </nav>

      <!-- Tab 1: API Keys -->
      <div class="tab-panel active" id="tab-keys" data-tab-panel>
        <div class="glass-card">
          <div class="card-header">
            <div>
              <h2>Generate & Manage API Keys</h2>
              <p style="color: var(--muted); font-size: 14px;">Generate signed <code>Sh.xxx</code> API keys with 3-digit randomized codes. Revoke or test anytime.</p>
            </div>
            <button class="btn-primary" id="btn-generate-key">⚡ Generate New Sh. Key</button>
          </div>

          <div class="key-gen-box">
            <div class="key-string-row">
              <code id="gen-key-display">Generating your Sh. API key...</code>
              <button class="btn-secondary btn-sm" onclick="window.copyText(document.getElementById('gen-key-display').textContent, this)">Copy Key</button>
            </div>
            <div class="key-meta-row">
              <span>Prefix: <strong style="color: var(--cyan)">Sh.</strong></span>
              <span id="gen-3digit-badge" class="code-badge">3-Digit Code: ...</span>
              <span>Status: <span id="gen-status-badge" class="badge badge-active">Active</span></span>
              <span>Generated: <strong id="gen-time-badge" style="color: #fff">...</strong></span>
              <span id="test-key-result"></span>
            </div>
          </div>

          <h3 style="font-size: 16px; margin: 24px 0 12px;">Your Generated Keys (Stored Locally)</h3>
          <div style="overflow-x: auto;">
            <table class="keys-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>API Key</th>
                  <th>Status</th>
                  <th>Generated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="keys-table-body"></tbody>
            </table>
          </div>

          <div class="snippets-grid">
            <div class="snippet-card">
              <h4>cURL Request</h4>
              <pre><code data-snippet-key="curl -X GET 'https://${CUSTOM_DOMAIN}/api/search?query=Kesariya' \\
  -H 'X-API-Key: {key}'">curl -X GET 'https://${CUSTOM_DOMAIN}/api/search?query=Kesariya' \
  -H 'X-API-Key: ...'</code></pre>
            </div>

            <div class="snippet-card">
              <h4>JavaScript (Fetch)</h4>
              <pre><code data-snippet-key="const res = await fetch('https://${CUSTOM_DOMAIN}/api/songs?ids=csaAEio2', {
  headers: { 'X-API-Key': '{key}' }
});
const data = await res.json();">const res = await fetch('https://${CUSTOM_DOMAIN}/api/songs?ids=csaAEio2', {
  headers: { 'X-API-Key': '...' }
});</code></pre>
            </div>

            <div class="snippet-card">
              <h4>Python (requests)</h4>
              <pre><code data-snippet-key="import requests

res = requests.get(
    'https://${CUSTOM_DOMAIN}/api/search/songs',
    params={'query': 'Believer'},
    headers={'X-API-Key': '{key}'}
)
print(res.json())">import requests
# headers={'X-API-Key': '...'}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab 2: Explorer -->
      <div class="tab-panel" id="tab-explorer" data-tab-panel>
        <div class="glass-card">
          <div class="card-header">
            <div>
              <h2>Live API Explorer & 320kbps Player</h2>
              <p style="color: var(--muted); font-size: 14px;">Test search queries in real time and listen to decrypted 320kbps high-fidelity audio streams.</p>
            </div>
          </div>

          <div class="search-bar">
            <input type="text" class="search-input" id="explorer-search-input" placeholder="Search for songs, artists, albums (e.g. Believer, Kesariya, Arijit Singh)..." value="Believer" />
            <button class="btn-primary" id="explorer-search-btn">🔍 Search</button>
          </div>

          <!-- Audio Stream Player Card -->
          <div class="player-card" id="explorer-player-card">
            <div class="player-layout">
              <img id="player-art" class="player-art-lg" src="" alt="Album Art" />
              <div class="player-meta">
                <h3 id="player-title" style="font-size: 18px; font-weight: 800; margin-bottom: 4px;">Song Title</h3>
                <p id="player-artist" style="color: var(--muted); font-size: 14px; margin-bottom: 12px;">Artist Name</p>
                <audio id="audio-stream-player" controls style="width: 100%; max-width: 480px; height: 36px;"></audio>
                <div class="dl-pills-row" id="player-download-links"></div>
              </div>
            </div>
          </div>

          <div class="songs-grid" id="explorer-results"></div>

          <h4 style="font-size: 14px; color: var(--muted); margin: 20px 0 8px;">Live JSON Response</h4>
          <pre style="background: #06070a; padding: 16px; border-radius: 8px; border: 1px solid var(--line); max-height: 240px; overflow: auto; font-size: 12px; color: var(--cyan);"><code id="explorer-json-viewer">// Search to see live JSON response</code></pre>
        </div>
      </div>

      <!-- Tab 3: Endpoints -->
      <div class="tab-panel" id="tab-endpoints" data-tab-panel>
        <div class="glass-card">
          <div class="card-header">
            <div>
              <h2>All Available API Endpoints (47+)</h2>
              <p style="color: var(--muted); font-size: 14px;">Browse and filter all available music, search, lyrics, podcasts, and browse routes.</p>
            </div>
            <input type="text" id="route-filter-input" class="search-input" style="max-width: 280px; padding: 8px 14px;" placeholder="Filter routes..." />
          </div>

          <div class="route-groups-container">
            ${renderRouteGroups()}
          </div>
        </div>
      </div>

      <!-- Tab 4: Features -->
      <div class="tab-panel" id="tab-features" data-tab-panel>
        <div class="features-grid">
          ${renderFeatures()}
        </div>
      </div>
    </div>

    <footer class="footer">
      <p>Built with Hono, TypeScript, OpenAPI & Cloudflare Workers.</p>
      <p style="margin-top: 6px;"><a href="${REPOSITORY_URL}" target="_blank" rel="noreferrer">GitHub Repository</a> • <a href="/docs">Scalar Docs</a> • <a href="/swagger">Swagger JSON</a></p>
    </footer>

    <script>${clientScript}</script>
  </body>
</html>`)
})
