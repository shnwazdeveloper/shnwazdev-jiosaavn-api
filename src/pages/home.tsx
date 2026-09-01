import { Hono } from 'hono'

export const Home = new Hono()

const API_NAME = 'ShnwazDev JioSaavn API'
const REPOSITORY_URL = 'https://github.com/shnwazdeveloper/shnwazdev-jiosaavn-api'
const DISPLAY_DOMAIN = 'Sh.jio.workers.dev'
const DESCRIPTION =
  'High-performance TypeScript music streaming and metadata API on Cloudflare Edge.'

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
  ['Sh. Keys', 'Compact 3-character random alphanumeric key format'],
  ['OpenAPI 3.1', 'Interactive Scalar documentation & Swagger schemas']
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
      { method: 'GET', path: '/api/artists/{id}/albums', description: "Retrieve artist albums" },
      { method: 'GET', path: '/api/artists/{id}/related', description: 'Retrieve related artists' },
      { method: 'GET', path: '/api/artists/{id}/songs', description: "Retrieve artist songs" },
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
      ([title, body]) => `
        <div class="stat-box">
          <div class="stat-num">${escapeHtml(title)}</div>
          <div class="stat-label">${escapeHtml(body)}</div>
        </div>`
    )
    .join('')

const renderRouteGroups = () =>
  routeGroups
    .map(
      (group) => `
        <div class="liquid-group">
          <div class="group-header">
            <span class="group-title">${escapeHtml(group.name)}</span>
            <span class="pill">${group.count} ${group.count === 1 ? 'endpoint' : 'endpoints'}</span>
          </div>
          <div class="group-rows">
            ${group.routes
              .map(
                (route) => `
                  <div class="route-item">
                    <span class="method-tag">${escapeHtml(route.method)}</span>
                    <code class="route-uri">${escapeHtml(route.path)}</code>
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
  // Tabs Switcher
  var tabButtons = document.querySelectorAll('[data-tab-btn]');
  var tabPanels = document.querySelectorAll('[data-tab-panel]');

  function switchTab(targetId) {
    tabButtons.forEach(function(b) {
      var match = b.getAttribute('data-tab-btn') === targetId;
      b.classList.toggle('active', match);
      b.setAttribute('aria-selected', match ? 'true' : 'false');
    });
    tabPanels.forEach(function(p) {
      p.classList.toggle('active', p.id === targetId);
    });
    if (history.replaceState) {
      history.replaceState(null, '', '#' + targetId);
    }
  }

  tabButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      switchTab(btn.getAttribute('data-tab-btn'));
    });
  });

  if (window.location.hash) {
    var initialHash = window.location.hash.replace('#', '');
    if (document.getElementById(initialHash)) {
      switchTab(initialHash);
    }
  }

  // Key Generation
  var currentApiKey = '';
  var keyDisplay = document.getElementById('key-display-text');
  var keyGenBtn = document.getElementById('btn-gen-key');
  var testResultEl = document.getElementById('key-test-feedback');

  function updateTemplates(key) {
    currentApiKey = key;
    document.querySelectorAll('[data-code-snippet]').forEach(function(el) {
      var raw = el.getAttribute('data-code-snippet');
      el.textContent = raw.split('{KEY}').join(key || 'Sh.Qre');
    });
  }

  async function generateKey() {
    if (keyGenBtn) keyGenBtn.disabled = true;
    if (keyDisplay) keyDisplay.textContent = 'Generating...';

    try {
      var res = await fetch('/apikey', { cache: 'no-store' });
      var json = await res.json();
      if (json.success && json.data) {
        var key = json.data.apiKey;
        if (keyDisplay) keyDisplay.textContent = key;
        updateTemplates(key);
        if (testResultEl) testResultEl.innerHTML = '<span class="status-dot green"></span> Active & Ready';
      }
    } catch (e) {
      if (keyDisplay) keyDisplay.textContent = 'Error';
    } finally {
      if (keyGenBtn) keyGenBtn.disabled = false;
    }
  }

  window.copyValue = async function(text, btn) {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    if (btn) {
      var prev = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(function() { btn.textContent = prev; }, 1200);
    }
  };

  window.testCurrentKey = async function() {
    if (!currentApiKey) {
      alert('Please generate a key first.');
      return;
    }
    if (testResultEl) testResultEl.innerHTML = '<span class="status-dot yellow"></span> Testing key...';

    try {
      var start = performance.now();
      var res = await fetch('/api/endpoints', {
        headers: { 'X-API-Key': currentApiKey }
      });
      var latency = Math.round(performance.now() - start);
      if (res.ok) {
        if (testResultEl) testResultEl.innerHTML = '<span class="status-dot green"></span> 200 OK (' + latency + 'ms) - Authenticated';
      } else {
        var data = await res.json().catch(function() { return {}; });
        if (testResultEl) testResultEl.innerHTML = '<span class="status-dot red"></span> ' + res.status + ' ' + (data.message || 'Unauthorized');
      }
    } catch (err) {
      if (testResultEl) testResultEl.innerHTML = '<span class="status-dot red"></span> Connection Failed';
    }
  };

  if (keyGenBtn) keyGenBtn.addEventListener('click', generateKey);
  generateKey();

  // Admin Panel (Protected Revoke / Management)
  var adminPassInput = document.getElementById('admin-pass-input');
  var adminLoginBtn = document.getElementById('admin-login-btn');
  var adminTableContainer = document.getElementById('admin-table-container');
  var adminTableBody = document.getElementById('admin-table-body');
  var adminMsgEl = document.getElementById('admin-msg');
  var currentAdminSecret = '';

  async function loadAdminKeys() {
    var pass = (adminPassInput && adminPassInput.value.trim()) || currentAdminSecret;
    if (!pass) {
      if (adminMsgEl) adminMsgEl.innerHTML = '<span style="color: var(--coral);">Admin passcode required</span>';
      return;
    }

    try {
      var res = await fetch('/api/admin/keys?secret=' + encodeURIComponent(pass));
      var json = await res.json();
      if (!res.ok || !json.success) {
        if (adminMsgEl) adminMsgEl.innerHTML = '<span style="color: var(--coral);">' + (json.message || 'Unauthorized passcode') + '</span>';
        return;
      }

      currentAdminSecret = pass;
      if (adminMsgEl) adminMsgEl.innerHTML = '<span style="color: var(--emerald);">Admin authenticated</span>';
      if (adminTableContainer) adminTableContainer.style.display = 'block';

      var keys = json.data || [];
      if (keys.length === 0) {
        adminTableBody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 20px; color: var(--muted);">No keys generated yet</td></tr>';
        return;
      }

      var html = '';
      for (var i = 0; i < keys.length; i++) {
        var item = keys[i];
        var actionBtn = item.revoked
          ? '<button class="glass-btn btn-sm" onclick="window.adminUnrevokeKey(' + JSON.stringify(item.apiKey) + ')">Restore</button>'
          : '<button class="glass-btn btn-sm btn-danger" onclick="window.adminRevokeKey(' + JSON.stringify(item.apiKey) + ')">Revoke</button>';

        html += '<tr class="' + (item.revoked ? 'revoked' : '') + '">' +
          '<td><code>' + item.apiKey + '</code></td>' +
          '<td><span class="status-badge ' + (item.revoked ? 'badge-revoked' : 'badge-active') + '">' + (item.revoked ? 'Revoked' : 'Active') + '</span></td>' +
          '<td>' + (item.createdAt ? item.createdAt.slice(11, 19) : '---') + '</td>' +
          '<td>' + actionBtn + '</td>' +
        '</tr>';
      }
      adminTableBody.innerHTML = html;
    } catch (err) {
      if (adminMsgEl) adminMsgEl.innerHTML = '<span style="color: var(--coral);">Error: ' + err.message + '</span>';
    }
  }

  window.adminRevokeKey = async function(key) {
    if (!confirm('Revoke ' + key + '? It will immediately be blocked.')) return;
    try {
      var res = await fetch('/apikey/revoke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey: key, secret: currentAdminSecret })
      });
      var data = await res.json();
      if (res.ok && data.success) {
        loadAdminKeys();
      } else {
        alert(data.message || 'Revocation failed');
      }
    } catch (e) {
      alert('Error: ' + e.message);
    }
  };

  window.adminUnrevokeKey = async function(key) {
    try {
      var res = await fetch('/api/admin/unrevoke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey: key, secret: currentAdminSecret })
      });
      var data = await res.json();
      if (res.ok && data.success) {
        loadAdminKeys();
      } else {
        alert(data.message || 'Restore failed');
      }
    } catch (e) {
      alert('Error: ' + e.message);
    }
  };

  if (adminLoginBtn) adminLoginBtn.addEventListener('click', loadAdminKeys);

  // Music Explorer
  var searchInput = document.getElementById('search-query-input');
  var searchBtn = document.getElementById('search-action-btn');
  var resultsGrid = document.getElementById('search-results-grid');
  var playerWrapper = document.getElementById('liquid-player');
  var audioElem = document.getElementById('stream-audio-elem');
  var playerCover = document.getElementById('player-cover-art');
  var playerTitle = document.getElementById('player-track-title');
  var playerArtist = document.getElementById('player-track-artist');
  var dlLinksContainer = document.getElementById('player-dl-links');
  var rawJsonBox = document.getElementById('raw-json-box');

  async function searchSongs() {
    var q = (searchInput && searchInput.value.trim()) || 'Believer';
    if (resultsGrid) resultsGrid.innerHTML = '<div style="padding: 24px; color: var(--muted); text-align: center;">Searching...</div>';

    try {
      var res = await fetch('/api/search/songs?query=' + encodeURIComponent(q), {
        headers: currentApiKey ? { 'X-API-Key': currentApiKey } : {}
      });
      var json = await res.json();
      if (rawJsonBox) rawJsonBox.textContent = JSON.stringify(json, null, 2);

      if (json.success && json.data && json.data.results && json.data.results.length > 0) {
        var html = '';
        var items = json.data.results.slice(0, 6);
        for (var i = 0; i < items.length; i++) {
          var s = items[i];
          var art = (s.image && s.image[s.image.length - 1] && s.image[s.image.length - 1].url) || '';
          var artName = (s.artists && s.artists.primary && s.artists.primary.map(function(a) { return a.name; }).join(', ')) || 'Artist';
          var duration = s.duration ? (Math.floor(s.duration / 60) + ':' + (s.duration % 60 < 10 ? '0' : '') + (s.duration % 60)) : '';

          html += '<div class="liquid-song-card">' +
            '<img src="' + art + '" alt="' + s.name + '" class="card-art" />' +
            '<div class="card-meta">' +
              '<div class="card-title">' + s.name + '</div>' +
              '<div class="card-artist">' + artName + '</div>' +
              '<div class="card-sub">' + duration + (s.year ? ' • ' + s.year : '') + '</div>' +
            '</div>' +
            '<button class="glass-btn btn-sm" onclick="window.playTrack(' + JSON.stringify(encodeURIComponent(JSON.stringify(s))) + ')">Play</button>' +
          '</div>';
        }
        resultsGrid.innerHTML = html;
      } else {
        resultsGrid.innerHTML = '<div style="padding: 24px; color: var(--muted); text-align: center;">No tracks found</div>';
      }
    } catch (e) {
      if (resultsGrid) resultsGrid.innerHTML = '<div style="padding: 24px; color: var(--coral); text-align: center;">Request failed</div>';
    }
  }

  window.playTrack = function(encoded) {
    try {
      var track = JSON.parse(decodeURIComponent(encoded));
      if (!track) return;
      if (playerWrapper) playerWrapper.style.display = 'flex';
      if (playerTitle) playerTitle.textContent = track.name;
      if (playerArtist) playerArtist.textContent = (track.artists && track.artists.primary && track.artists.primary.map(function(a) { return a.name; }).join(', ')) || '';
      var cover = (track.image && track.image[track.image.length - 1] && track.image[track.image.length - 1].url) || '';
      if (playerCover) playerCover.src = cover;

      var streamUrl = '';
      if (track.downloadUrl && track.downloadUrl.length > 0) {
        var hq = track.downloadUrl.find(function(d) { return d.quality === '320kbps'; });
        streamUrl = (hq && hq.url) || track.downloadUrl[track.downloadUrl.length - 1].url;
      }

      if (audioElem) {
        audioElem.src = streamUrl;
        audioElem.play();
      }

      if (dlLinksContainer && track.downloadUrl) {
        var dls = '';
        for (var k = 0; k < track.downloadUrl.length; k++) {
          var item = track.downloadUrl[k];
          dls += '<a href="' + item.url + '" target="_blank" download class="pill-link">' + item.quality + '</a>';
        }
        dlLinksContainer.innerHTML = dls;
      }
      playerWrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (e) {}
  };

  if (searchBtn) searchBtn.addEventListener('click', searchSongs);
  if (searchInput) {
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') searchSongs();
    });
  }

  // Route Filter
  var filterInput = document.getElementById('routes-search-filter');
  if (filterInput) {
    filterInput.addEventListener('input', function(e) {
      var term = e.target.value.toLowerCase();
      document.querySelectorAll('.route-item').forEach(function(row) {
        row.style.display = row.textContent.toLowerCase().indexOf(term) !== -1 ? 'flex' : 'none';
      });
    });
  }
})();
`

const styles = `
:root {
  --bg: #06080c;
  --bg-subtle: #0a0e17;
  --glass-bg: rgba(16, 22, 34, 0.42);
  --glass-bg-hover: rgba(22, 30, 48, 0.58);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-border-highlight: rgba(255, 255, 255, 0.16);
  --text-main: #f4f6fa;
  --text-muted: #7e8b9f;
  --accent: #38bdf8;
  --emerald: #34d399;
  --coral: #f87171;
  --yellow: #fbbf24;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: var(--bg);
  color: var(--text-main);
  line-height: 1.5;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

/* Header */
.liquid-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(6, 8, 12, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--glass-border);
}
.nav-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand-group {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--text-main);
  font-weight: 600;
  font-size: 15px;
}
.brand-chip {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border-highlight);
  color: var(--accent);
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.domain-pill {
  font-size: 11px;
  color: var(--text-muted);
  border: 1px solid var(--glass-border);
  padding: 2px 8px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
}
.header-links {
  display: flex;
  gap: 16px;
  align-items: center;
}
.header-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 13px;
  transition: color 0.15s;
}
.header-links a:hover { color: var(--text-main); }

/* Main Container */
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 32px 20px 80px;
}

/* Hero */
.hero-block {
  text-align: center;
  padding: 28px 0 36px;
}
.hero-title {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 10px;
  color: #fff;
}
.hero-subtitle {
  color: var(--text-muted);
  font-size: 16px;
  max-width: 640px;
  margin: 0 auto 28px;
}

/* Stats Row */
.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin-bottom: 32px;
}
.stat-box {
  background: var(--glass-bg);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--glass-border);
  border-top: 1px solid var(--glass-border-highlight);
  border-radius: 10px;
  padding: 16px;
  text-align: left;
}
.stat-num {
  font-size: 16px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 2px;
}
.stat-label {
  color: var(--text-muted);
  font-size: 12px;
}

/* Liquid Navigation Tabs */
.liquid-tabs {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 28px;
  border-bottom: 1px solid var(--glass-border);
  padding-bottom: 10px;
  flex-wrap: wrap;
}
.tab-trigger {
  background: transparent;
  border: 1px solid transparent;
  color: var(--text-muted);
  font-size: 13px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.tab-trigger:hover {
  color: var(--text-main);
  background: var(--glass-bg);
}
.tab-trigger.active {
  color: #fff;
  background: var(--glass-bg-hover);
  border: 1px solid var(--glass-border-highlight);
}

/* Tab Panels */
.panel { display: none; }
.panel.active { display: block; }

/* Liquid Glass Card */
.glass-container {
  background: var(--glass-bg);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  border: 1px solid var(--glass-border);
  border-top: 1px solid var(--glass-border-highlight);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
}
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  flex-wrap: wrap;
  gap: 12px;
}
.panel-heading {
  font-size: 17px;
  font-weight: 700;
}
.panel-subtext {
  font-size: 13px;
  color: var(--text-muted);
}

/* Glass Buttons */
.glass-btn {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border-highlight);
  color: var(--text-main);
  font-size: 13px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.glass-btn:hover {
  background: var(--glass-bg-hover);
  border-color: rgba(255, 255, 255, 0.3);
}
.glass-btn.btn-accent {
  background: rgba(56, 189, 248, 0.15);
  border-color: var(--accent);
  color: var(--accent);
}
.glass-btn.btn-accent:hover {
  background: var(--accent);
  color: #000;
}
.glass-btn.btn-danger {
  background: rgba(248, 113, 113, 0.12);
  border-color: var(--coral);
  color: var(--coral);
}
.glass-btn.btn-danger:hover {
  background: var(--coral);
  color: #000;
}
.glass-btn.btn-sm {
  padding: 4px 10px;
  font-size: 11px;
  border-radius: 6px;
}

/* Key Generator Box */
.key-glass-box {
  background: rgba(6, 8, 12, 0.55);
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  padding: 16px 20px;
  margin-bottom: 20px;
}
.key-main-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}
.key-text-large {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 20px;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.5px;
}
.key-meta-bar {
  display: flex;
  gap: 18px;
  font-size: 12px;
  color: var(--text-muted);
  align-items: center;
}
.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 4px;
}
.status-dot.green { background: var(--emerald); }
.status-dot.red { background: var(--coral); }
.status-dot.yellow { background: var(--yellow); }

/* Code Snippets */
.snippets-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 12px;
  margin-top: 18px;
}
.code-card {
  background: rgba(6, 8, 12, 0.55);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  padding: 14px;
}
.code-header {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.code-card pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
  color: #cbd5e1;
  overflow-x: auto;
  line-height: 1.45;
}

/* Glass Inputs */
.glass-input {
  background: rgba(6, 8, 12, 0.6);
  border: 1px solid var(--glass-border);
  color: #fff;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.15s;
}
.glass-input:focus {
  border-color: var(--accent);
}

/* Tables */
.liquid-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
  font-size: 13px;
}
.liquid-table th, .liquid-table td {
  padding: 10px 14px;
  text-align: left;
  border-bottom: 1px solid var(--glass-border);
}
.liquid-table th {
  color: var(--text-muted);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.status-badge {
  font-size: 10px;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 4px;
  text-transform: uppercase;
}
.badge-active { background: rgba(52, 211, 153, 0.15); color: var(--emerald); }
.badge-revoked { background: rgba(248, 113, 113, 0.15); color: var(--coral); }
.revoked td { opacity: 0.45; text-decoration: line-through; }

/* Music Explorer */
.search-controls {
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
}
.search-input-lg {
  flex: 1;
  background: rgba(6, 8, 12, 0.6);
  border: 1px solid var(--glass-border);
  color: #fff;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
}
.search-input-lg:focus { border-color: var(--accent); }

.songs-liquid-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}
.liquid-song-card {
  background: rgba(10, 14, 23, 0.5);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  padding: 12px;
  display: flex;
  gap: 10px;
  align-items: center;
}
.card-art {
  width: 52px;
  height: 52px;
  border-radius: 6px;
  object-fit: cover;
}
.card-meta { flex: 1; min-width: 0; }
.card-title { font-size: 13px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.card-artist { font-size: 11px; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.card-sub { font-size: 10px; color: var(--accent); margin-top: 2px; }

/* Player */
.player-box {
  background: rgba(14, 20, 32, 0.65);
  border: 1px solid var(--glass-border-highlight);
  border-radius: 10px;
  padding: 16px;
  display: none;
  gap: 16px;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.player-art {
  width: 72px;
  height: 72px;
  border-radius: 6px;
  object-fit: cover;
}
.player-info { flex: 1; min-width: 200px; }
.pill-link {
  font-size: 11px;
  color: var(--accent);
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid var(--glass-border);
  padding: 3px 8px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  margin-right: 6px;
}
.pill-link:hover { background: var(--accent); color: #000; }

/* Endpoints Catalog */
.liquid-group {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden;
}
.group-header {
  padding: 10px 16px;
  background: rgba(6, 8, 12, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--glass-border);
}
.group-title { font-size: 13px; font-weight: 700; }
.pill {
  font-size: 10px;
  color: var(--text-muted);
  border: 1px solid var(--glass-border);
  padding: 2px 6px;
  border-radius: 10px;
}
.route-item {
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  font-size: 12px;
}
.route-item:last-child { border-bottom: none; }
.method-tag {
  font-size: 10px;
  font-weight: 700;
  color: var(--accent);
  background: rgba(56, 189, 248, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  min-width: 36px;
  text-align: center;
}
.route-uri {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: #fff;
  font-weight: 600;
}
.route-desc {
  color: var(--text-muted);
  margin-left: auto;
}

/* Footer */
.liquid-footer {
  border-top: 1px solid var(--glass-border);
  padding: 28px 20px;
  text-align: center;
  font-size: 13px;
  color: var(--text-muted);
}
.liquid-footer a {
  color: var(--accent);
  text-decoration: none;
}

/* Icons */
.icon {
  width: 14px;
  height: 14px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  vertical-align: middle;
}
`

// SVG Icon Helpers
const KeyIcon = `<svg class="icon" viewBox="0 0 24 24"><path d="m21 2-2 2m-1.5 1.5L14 9l-2-2-4 4 2 2-4 4-2-2-2 2 4 4 2-2 2 2 4-4 2 2 4-4 2-2z"/></svg>`
const MusicIcon = `<svg class="icon" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`
const ListIcon = `<svg class="icon" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`
const LockIcon = `<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`

Home.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(API_NAME)}</title>
    <meta name="description" content="${escapeHtml(DESCRIPTION)}" />
    <style>${styles}</style>
  </head>
  <body>
    <header class="liquid-nav">
      <div class="nav-container">
        <a class="brand-group" href="/">
          <span class="brand-chip">Sh</span>
          <span>${escapeHtml(API_NAME)}</span>
          <span class="domain-pill">${escapeHtml(DISPLAY_DOMAIN)}</span>
        </a>
        <nav class="header-links">
          <a href="/docs">Docs</a>
          <a href="/swagger">Swagger</a>
          <a href="/health">Health</a>
          <a href="${REPOSITORY_URL}" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
    </header>

    <main class="container">
      <section class="hero-block">
        <h1 class="hero-title">ShnwazDev JioSaavn API</h1>
        <p class="hero-subtitle">
          Modern liquid glass API client and edge infrastructure for JioSaavn songs, 320kbps streams, albums, artists, and synced lyrics.
        </p>

        <div class="stats-row">
          ${renderStats()}
        </div>
      </section>

      <!-- Tabs Navigation -->
      <nav class="liquid-tabs" role="tablist">
        <button class="tab-trigger active" data-tab-btn="tab-keys">${KeyIcon} API Key</button>
        <button class="tab-trigger" data-tab-btn="tab-explorer">${MusicIcon} Explorer & Player</button>
        <button class="tab-trigger" data-tab-btn="tab-catalog">${ListIcon} Endpoints (47+)</button>
        <button class="tab-trigger" data-tab-btn="tab-admin">${LockIcon} Admin Panel</button>
      </nav>

      <!-- Tab 1: Key Generator -->
      <div class="panel active" id="tab-keys" data-tab-panel>
        <div class="glass-container">
          <div class="panel-header">
            <div>
              <h2 class="panel-heading">Generate API Key</h2>
              <p class="panel-subtext">Instant Sh.Qre format key for your application</p>
            </div>
            <button class="glass-btn btn-accent" id="btn-gen-key">Generate New Key</button>
          </div>

          <div class="key-glass-box">
            <div class="key-main-row">
              <span class="key-text-large" id="key-display-text">Generating...</span>
              <div style="display: flex; gap: 8px;">
                <button class="glass-btn btn-sm" onclick="window.copyValue(document.getElementById('key-display-text').textContent, this)">Copy Key</button>
                <button class="glass-btn btn-sm" onclick="window.testCurrentKey()">Test Live</button>
              </div>
            </div>
            <div class="key-meta-bar">
              <span>Format: <strong>Sh.&lt;code&gt;</strong></span>
              <span id="key-test-feedback"><span class="status-dot green"></span> Ready</span>
            </div>
          </div>

          <div class="snippets-row">
            <div class="code-card">
              <div class="code-header"><span>cURL Request</span><button class="glass-btn btn-sm" onclick="window.copyValue(this.closest('.code-card').querySelector('pre').textContent, this)">Copy</button></div>
              <pre><code data-code-snippet="curl -X GET 'https://${DISPLAY_DOMAIN}/api/search?query=Believer' \\
  -H 'X-API-Key: {KEY}'">curl -X GET 'https://${DISPLAY_DOMAIN}/api/search?query=Believer' \
  -H 'X-API-Key: ...'</code></pre>
            </div>

            <div class="code-card">
              <div class="code-header"><span>JavaScript Fetch</span><button class="glass-btn btn-sm" onclick="window.copyValue(this.closest('.code-card').querySelector('pre').textContent, this)">Copy</button></div>
              <pre><code data-code-snippet="const res = await fetch('https://${DISPLAY_DOMAIN}/api/songs?ids=csaAEio2', {
  headers: { 'X-API-Key': '{KEY}' }
});
const data = await res.json();">const res = await fetch('https://${DISPLAY_DOMAIN}/api/songs?ids=csaAEio2', {
  headers: { 'X-API-Key': '...' }
});</code></pre>
            </div>

            <div class="code-card">
              <div class="code-header"><span>Python Requests</span><button class="glass-btn btn-sm" onclick="window.copyValue(this.closest('.code-card').querySelector('pre').textContent, this)">Copy</button></div>
              <pre><code data-code-snippet="import requests

res = requests.get(
    'https://${DISPLAY_DOMAIN}/api/search/songs',
    params={'query': 'Believer'},
    headers={'X-API-Key': '{KEY}'}
)
print(res.json())">import requests
# headers={'X-API-Key': '...'}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab 2: Explorer & Player -->
      <div class="panel" id="tab-explorer" data-tab-panel>
        <div class="glass-container">
          <div class="panel-header">
            <div>
              <h2 class="panel-heading">Live Search & 320kbps Player</h2>
              <p class="panel-subtext">Search tracks and listen directly on Cloudflare Edge</p>
            </div>
          </div>

          <div class="search-controls">
            <input type="text" class="search-input-lg" id="search-query-input" placeholder="Search track name, artist, album (e.g. Believer, Kesariya)..." value="Believer" />
            <button class="glass-btn btn-accent" id="search-action-btn">Search</button>
          </div>

          <!-- Liquid Audio Player -->
          <div class="player-box" id="liquid-player">
            <img id="player-cover-art" class="player-art" src="" alt="Album Art" />
            <div class="player-info">
              <div id="player-track-title" style="font-weight: 700; font-size: 15px; margin-bottom: 2px;">Track</div>
              <div id="player-track-artist" style="font-size: 12px; color: var(--text-muted); margin-bottom: 10px;">Artist</div>
              <audio id="stream-audio-elem" controls style="width: 100%; height: 32px;"></audio>
              <div id="player-dl-links" style="margin-top: 8px;"></div>
            </div>
          </div>

          <div class="songs-liquid-grid" id="search-results-grid"></div>

          <div style="font-size: 12px; color: var(--text-muted); margin: 16px 0 6px;">JSON Output</div>
          <pre style="background: rgba(6,8,12,0.6); padding: 14px; border-radius: 8px; border: 1px solid var(--glass-border); max-height: 200px; overflow: auto; font-size: 11px; color: var(--accent);"><code id="raw-json-box">// Search above to inspect live payload</code></pre>
        </div>
      </div>

      <!-- Tab 3: Endpoints Catalog -->
      <div class="panel" id="tab-catalog" data-tab-panel>
        <div class="glass-container">
          <div class="panel-header">
            <div>
              <h2 class="panel-heading">Endpoint Catalog (47+ Routes)</h2>
              <p class="panel-subtext">Comprehensive listing of all API resources</p>
            </div>
            <input type="text" id="routes-search-filter" class="glass-input" placeholder="Filter routes..." style="width: 220px;" />
          </div>

          <div>
            ${renderRouteGroups()}
          </div>
        </div>
      </div>

      <!-- Tab 4: Admin Panel -->
      <div class="panel" id="tab-admin" data-tab-panel>
        <div class="glass-container">
          <div class="panel-header">
            <div>
              <h2 class="panel-heading">Admin Key Management</h2>
              <p class="panel-subtext">Restricted panel to rework, revoke, and manage all active keys</p>
            </div>
          </div>

          <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 16px; flex-wrap: wrap;">
            <input type="password" id="admin-pass-input" class="glass-input" placeholder="Enter Admin Secret" value="shnwazdev-admin" style="width: 260px;" />
            <button class="glass-btn btn-accent" id="admin-login-btn">Unlock Admin Panel</button>
            <span id="admin-msg" style="font-size: 12px;"></span>
          </div>

          <div id="admin-table-container" style="display: none; overflow-x: auto;">
            <table class="liquid-table">
              <thead>
                <tr>
                  <th>API Key</th>
                  <th>Status</th>
                  <th>Issued</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="admin-table-body"></tbody>
            </table>
          </div>
        </div>
      </div>
    </main>

    <footer class="liquid-footer">
      <p>Built with Hono, TypeScript, OpenAPI on Cloudflare Workers.</p>
      <p style="margin-top: 6px;"><a href="${REPOSITORY_URL}" target="_blank" rel="noreferrer">GitHub</a> • <a href="/docs">Scalar Docs</a> • <a href="/swagger">Swagger</a></p>
    </footer>

    <script>${clientScript}</script>
  </body>
</html>`)
})
