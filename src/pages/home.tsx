import { Hono } from 'hono'

export const Home = new Hono()

const API_NAME = 'ShnwazDev JioSaavn API'
const REPOSITORY_URL = 'https://github.com/shnwazdeveloper/shnwazdev-jiosaavn-api'

const features = [
  {
    label: 'S',
    title: 'Search Engine',
    body: 'Global and scoped search routes for songs, albums, artists, and playlists with paging support.'
  },
  {
    label: 'M',
    title: 'Music Detail',
    body: 'Fetch songs by ID or URL, get albums and playlists, and request suggestions for playback flows.'
  },
  {
    label: 'N',
    title: 'No App Limit',
    body: 'No app-level rate limiter is added, so clients can use the routes freely while normal hosting limits still apply.'
  },
  {
    label: 'V',
    title: 'Vercel Ready',
    body: 'The app exports a Hono server directly from TypeScript, which Vercel can deploy as a backend.'
  },
  {
    label: 'O',
    title: 'OpenAPI 3.1',
    body: 'Interactive docs and a generated schema are available from the same deployment.'
  },
  {
    label: 'H',
    title: 'Health Checks',
    body: 'A dedicated health route and endpoint index make monitoring and integration setup simple.'
  }
]

const stats = [
  ['5 Domains', 'Search, songs, albums, artists, playlists'],
  ['50+ Routes', 'Songs, lyrics, browse, podcasts, and trending'],
  ['OpenAPI 3.1', 'Schema generated from route definitions'],
  ['No App Limit', 'No rate limiter added in this API']
]

const endpoints = [
  ['GET', '/health'],
  ['GET', '/api/endpoints'],
  ['GET', '/api/limits'],
  ['GET', '/api/search?query=Believer'],
  ['GET', '/api/search/songs?query=Kesariya'],
  ['GET', '/api/songs?ids=3IoDK8qI'],
  ['GET', '/api/lyrics?query=tum hi ho'],
  ['GET', '/api/trending/songs'],
  ['GET', '/api/home'],
  ['GET', '/api/songs/{id}/suggestions'],
  ['GET', '/api/albums?id={id}'],
  ['GET', '/api/artists/{id}/songs'],
  ['GET', '/api/playlists?id={id}']
]

Home.get('/', (c) => {
  const description =
    'ShnwazDev JioSaavn API is an unofficial TypeScript API for songs, albums, artists, playlists, search, and recommendations.'

  return c.html(
    <html lang="en">
      <head>
        <title>{API_NAME}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={API_NAME} />
        <meta property="og:description" content={description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={API_NAME} />
        <meta property="twitter:description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            :root {
              color-scheme: dark;
              --bg: #101114;
              --bg-soft: #15181d;
              --panel: #191d24;
              --panel-2: #20252e;
              --text: #f6f7fb;
              --muted: #aeb6c6;
              --line: #303743;
              --glass: rgba(25, 29, 36, 0.58);
              --glass-strong: rgba(32, 37, 46, 0.72);
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
              font-family: "Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              letter-spacing: 0;
              color: var(--text);
              background: linear-gradient(180deg, #101114 0%, #14171c 52%, #0f1013 100%);
              line-height: 1.55;
              overflow-x: hidden;
            }

            body::before {
              content: "";
              position: fixed;
              inset: 0;
              pointer-events: none;
              opacity: 0.19;
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
              font-family: "Sora", sans-serif;
              font-weight: 800;
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

            .brand span:last-child {
              overflow-wrap: anywhere;
            }

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
              font-weight: 700;
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
              border-color: rgba(97,212,255,0.58);
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
              font-weight: 800;
              text-transform: uppercase;
              overflow-wrap: anywhere;
            }

            h1,
            h2,
            h3 {
              margin: 0;
              font-family: "Sora", sans-serif;
              letter-spacing: 0;
              line-height: 1.04;
            }

            h1 {
              max-width: 780px;
              margin-top: 20px;
              font-size: 5.2rem;
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

            .button.secondary {
              background: rgba(255,255,255,0.06);
            }

            .stats {
              display: grid;
              grid-template-columns: repeat(4, minmax(0, 1fr));
              gap: 10px;
              margin-top: 42px;
            }

            .stat,
            .feature,
            .endpoint-row,
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
            .endpoint-row:hover {
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
            .endpoint-row span:last-child,
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
              font-weight: 800;
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

            code {
              font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
            }

            .route { color: var(--cyan); }
            .key { color: var(--amber); }
            .value { color: var(--green); }
            .note { color: var(--muted); }

            .section {
              padding-block: 64px;
            }

            .section-head {
              max-width: 780px;
              margin-bottom: 26px;
            }

            h2 {
              font-size: 3rem;
            }

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
            .section-head {
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
              font-family: "Sora", sans-serif;
              font-weight: 800;
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

            .feature p {
              margin: 0;
            }

            .endpoint-list {
              display: grid;
              gap: 8px;
            }

            .endpoint-row {
              display: grid;
              grid-template-columns: 74px minmax(0, 1fr);
              align-items: center;
              gap: 12px;
              padding: 13px 15px;
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

            .endpoint-row code {
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
              font-weight: 800;
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
              .feature-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }
            }

            @media (max-width: 640px) {
              .topbar-inner {
                align-items: flex-start;
                flex-direction: column;
                padding-block: 14px;
              }

              .nav {
                justify-content: flex-start;
              }

              .nav a,
              .button {
                min-height: 36px;
                padding-inline: 11px;
                font-size: 0.92rem;
              }

              .stats,
              .feature-grid {
                grid-template-columns: 1fr;
              }

              .endpoint-row {
                grid-template-columns: 1fr;
                align-items: start;
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
          }}
        />
      </head>
      <body>
        <header class="topbar">
          <div class="topbar-inner">
            <a class="brand" href="/" aria-label={API_NAME}>
              <span class="mark">SD</span>
              <span>{API_NAME}</span>
            </a>
            <nav class="nav" aria-label="Main navigation">
              <a href="/docs">Docs</a>
              <a href="/swagger">OpenAPI</a>
              <a href="/health">Status</a>
              <a href={REPOSITORY_URL} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section class="section hero">
            <div>
              <span class="eyebrow">Unofficial + No App Rate Limit</span>
              <h1>Build faster with the ShnwazDev JioSaavn API</h1>
              <p class="lead">
                Access search, songs, albums, artists, playlists, and recommendations through a simple TypeScript API
                with clean JSON responses, OpenAPI docs, a health endpoint, and no app-level request limiter.
              </p>
              <div class="actions">
                <a class="button primary" href="/docs">
                  Open Docs
                </a>
                <a class="button secondary" href="/swagger">
                  View OpenAPI
                </a>
                <a class="button secondary" href="/api/endpoints">
                  Endpoint Index
                </a>
                <a class="button secondary" href="/api/limits">
                  API Limits
                </a>
              </div>

              <div class="stats">
                {stats.map(([title, body]) => (
                  <div class="stat">
                    <strong>{title}</strong>
                    <span>{body}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside class="console" aria-label="API response preview">
              <div class="console-head">
                <span>GET /api/search</span>
                <span class="lights" aria-hidden="true">
                  <span class="light" />
                  <span class="light" />
                  <span class="light" />
                </span>
              </div>
              <pre>
                <code>
                  <span class="route">GET /api/search?query=Believer</span>
                  {`\n\n`}
                  {`{\n`}
                  {`  `}
                  <span class="key">"success"</span>
                  {`: `}
                  <span class="value">true</span>
                  {`,\n  `}
                  <span class="key">"data"</span>
                  {`: {\n    `}
                  <span class="key">"songs"</span>
                  {`: { `}
                  <span class="key">"results"</span>
                  {`: [...] },\n    `}
                  <span class="key">"albums"</span>
                  {`: { `}
                  <span class="key">"results"</span>
                  {`: [...] },\n    `}
                  <span class="key">"artists"</span>
                  {`: { `}
                  <span class="key">"results"</span>
                  {`: [...] },\n    `}
                  <span class="key">"playlists"</span>
                  {`: { `}
                  <span class="key">"results"</span>
                  {`: [...] }\n  }\n}`}
                  {`\n\n`}
                  <span class="note">Docs: /docs Schema: /swagger Limits: /api/limits</span>
                </code>
              </pre>
            </aside>
          </section>

          <section class="section" id="features">
            <div class="section-head">
              <h2>Everything needed for a music API layer</h2>
              <p class="section-copy">
                The site, documentation, and API responses are branded for shnwazdev while keeping the original
                TypeScript route structure easy to extend.
              </p>
            </div>
            <div class="feature-grid">
              {features.map((feature) => (
                <article class="feature">
                  <span class="feature-badge">{feature.label}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section class="section" id="endpoints">
            <div class="section-head">
              <h2>Start testing right now</h2>
              <p class="section-copy">
                Call the API directly from your Vercel URL, or open the generated docs for full query details.
              </p>
            </div>
            <div class="endpoint-list">
              {endpoints.map(([method, path]) => (
                <div class="endpoint-row">
                  <span class="method">{method}</span>
                  <code>{path}</code>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer class="footer">
          <span>Built with Hono, TypeScript, OpenAPI, and Vercel.</span>
          <a href={REPOSITORY_URL} target="_blank" rel="noreferrer">
            shnwazdev repo
          </a>
        </footer>
      </body>
    </html>
  )
})
