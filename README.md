# ShnwazDev JioSaavn API

Unofficial JioSaavn API and documentation website built for `shnwazdev`.

This project exposes music search, songs, albums, artists, playlists, lyrics, podcasts, browse feeds, radio, and trending routes through a Hono + TypeScript API. It includes a glass-style homepage, OpenAPI 3.1 schema, Scalar docs, health checks, and Vercel-ready serverless hosting.

[![CI](https://github.com/shnwazdeveloper/shnwazdev-jiosaavn-api/actions/workflows/ci.yaml/badge.svg)](https://github.com/shnwazdeveloper/shnwazdev-jiosaavn-api/actions/workflows/ci.yaml)

## Live Links

| Page           | URL                                                        |
| -------------- | ---------------------------------------------------------- |
| Website        | `https://shnwazdev-jiosaavn-apii.vercel.app/`              |
| Docs           | `https://shnwazdev-jiosaavn-apii.vercel.app/docs`          |
| OpenAPI        | `https://shnwazdev-jiosaavn-apii.vercel.app/swagger`       |
| Health         | `https://shnwazdev-jiosaavn-apii.vercel.app/health`        |
| API key        | `https://shnwazdev-jiosaavn-apii.vercel.app/apikey`        |
| Endpoint index | `https://shnwazdev-jiosaavn-apii.vercel.app/api/endpoints` |
| API limits     | `https://shnwazdev-jiosaavn-apii.vercel.app/api/limits`    |

## Features

- Hono API with TypeScript and Zod OpenAPI.
- Static Vercel homepage with glass UI, motion, and no glow styling.
- Scalar API reference at `/docs`.
- OpenAPI 3.1 schema at `/swagger`.
- Public `/apikey` generator for fast Saya API keys.
- Protected `/api/*` routes with `X-API-Key`, Bearer auth, or `?apikey=`.
- No app-level rate limiter added by this project.
- Vercel native function entry at `api/index.js`.
- Extended routes for browse, lyrics, podcasts, radio, and trending feeds.
- Health route for uptime monitors.

## 3D Quick Guide

```mermaid
flowchart LR
  A["1. Client"] --> B["2. GET /apikey"]
  B --> C["3. Receive Saya key"]
  C --> D["4. Send key with /api/* request"]
  D --> E["5. JioSaavn response"]
```

## API Key

Generate a key:

```sh
curl "https://shnwazdev-jiosaavn-apii.vercel.app/apikey"
```

The response includes a key like:

```text
Saya-123456789-lz88w2-randomSignatureValue
```

Use the generated key with any protected `/api/*` route:

```sh
curl "https://shnwazdev-jiosaavn-apii.vercel.app/api/search/songs?query=Kesariya" \
  -H "X-API-Key: Saya-123456789-lz88w2-randomSignatureValue"

curl "https://shnwazdev-jiosaavn-apii.vercel.app/api/search/songs?query=Kesariya" \
  -H "Authorization: Bearer Saya-123456789-lz88w2-randomSignatureValue"

curl "https://shnwazdev-jiosaavn-apii.vercel.app/api/search/songs?query=Kesariya&apikey=Saya-123456789-lz88w2-randomSignatureValue"
```

## API Policy

This project does not add an app-level request limit. It requires a generated Saya API key for `/api/*` routes.

Normal limits can still come from:

- Your Vercel plan.
- Serverless function duration.
- Upstream JioSaavn availability.
- Network or regional provider limits.

Check the deployed policy at:

```text
GET /api/limits
X-API-Key: your-generated-key
```

## Endpoints

### Album

| Method | Route         | Description                     |
| ------ | ------------- | ------------------------------- |
| GET    | `/api/albums` | Retrieve an album by ID or link |

### Artists

| Method | Route                       | Description                    |
| ------ | --------------------------- | ------------------------------ |
| GET    | `/api/artists`              | Retrieve artists by ID or link |
| GET    | `/api/artists/{id}`         | Retrieve artist by ID          |
| GET    | `/api/artists/{id}/albums`  | Retrieve artist albums         |
| GET    | `/api/artists/{id}/related` | Retrieve related artists       |
| GET    | `/api/artists/{id}/songs`   | Retrieve artist songs          |
| GET    | `/api/artists/by-name`      | Retrieve artist by name        |

### Browse

| Method | Route                              | Description                                |
| ------ | ---------------------------------- | ------------------------------------------ |
| GET    | `/api/channels`                    | Retrieve channels                          |
| GET    | `/api/channels/{id}`               | Retrieve channel detail                    |
| GET    | `/api/charts`                      | Retrieve JioSaavn charts                   |
| GET    | `/api/discover`                    | Retrieve discover channels                 |
| GET    | `/api/genres`                      | Retrieve genre channels                    |
| GET    | `/api/home`                        | Retrieve the JioSaavn home feed            |
| GET    | `/api/home/artist-recommendations` | Retrieve home artist radio recommendations |
| GET    | `/api/home/city-modules`           | Retrieve home city modules                 |
| GET    | `/api/home/modules`                | Retrieve home feed module metadata         |
| GET    | `/api/home/promos`                 | Retrieve editorial promo groups            |
| GET    | `/api/moods`                       | Retrieve mood channels                     |
| GET    | `/api/music-plus`                  | Retrieve music plus channels               |
| GET    | `/api/radio`                       | Retrieve radio stations                    |
| GET    | `/api/radio/{id}`                  | Retrieve a radio station detail payload    |
| GET    | `/api/radio/artists`               | Retrieve artist radio recommendations      |
| GET    | `/api/radio/featured`              | Retrieve featured radio stations           |

### Lyrics

| Method | Route                   | Description                          |
| ------ | ----------------------- | ------------------------------------ |
| GET    | `/api/lyrics`           | Retrieve lyrics by song name         |
| GET    | `/api/lyrics/{id}`      | Retrieve lyrics by song or lyrics ID |
| GET    | `/api/lyrics/{id}/sync` | Retrieve synced lyrics payload       |

### Playlist

| Method | Route            | Description                       |
| ------ | ---------------- | --------------------------------- |
| GET    | `/api/playlists` | Retrieve a playlist by ID or link |

### Podcasts

| Method | Route                | Description                                          |
| ------ | -------------------- | ---------------------------------------------------- |
| GET    | `/api/episodes/{id}` | Retrieve a podcast episode by ID                     |
| GET    | `/api/podcasts`      | Retrieve a podcast by show ID, token, link, or query |
| GET    | `/api/podcasts/{id}` | Retrieve a podcast by ID or token                    |

### Search

| Method | Route                   | Description                     |
| ------ | ----------------------- | ------------------------------- |
| GET    | `/api/search`           | Global search                   |
| GET    | `/api/search/albums`    | Search for albums               |
| GET    | `/api/search/artists`   | Search for artists              |
| GET    | `/api/search/playlists` | Search for playlists            |
| GET    | `/api/search/songs`     | Search for songs                |
| GET    | `/api/search/top-query` | Search for the top query bucket |

### Songs

| Method | Route                         | Description                       |
| ------ | ----------------------------- | --------------------------------- |
| GET    | `/api/songs`                  | Retrieve songs by ID or link      |
| GET    | `/api/songs/{id}`             | Retrieve song by ID               |
| GET    | `/api/songs/{id}/ringtone`    | Retrieve ringtone preview details |
| GET    | `/api/songs/{id}/share`       | Retrieve a shareable song link    |
| GET    | `/api/songs/{id}/suggestions` | Retrieve song suggestions         |

### Trending

| Method | Route                     | Description                               |
| ------ | ------------------------- | ----------------------------------------- |
| GET    | `/api/trending`           | Retrieve all browse feeds in one response |
| GET    | `/api/trending/albums`    | Retrieve trending albums                  |
| GET    | `/api/trending/artists`   | Retrieve trending artists                 |
| GET    | `/api/trending/playlists` | Retrieve trending playlists               |
| GET    | `/api/trending/podcasts`  | Retrieve trending podcasts                |
| GET    | `/api/trending/songs`     | Retrieve trending songs                   |

## Example Requests

```sh
curl "https://shnwazdev-jiosaavn-apii.vercel.app/health"
curl "https://shnwazdev-jiosaavn-apii.vercel.app/apikey"
curl "https://shnwazdev-jiosaavn-apii.vercel.app/api/search?query=Believer" -H "X-API-Key: your-generated-key"
curl "https://shnwazdev-jiosaavn-apii.vercel.app/api/search/songs?query=Kesariya" -H "X-API-Key: your-generated-key"
curl "https://shnwazdev-jiosaavn-apii.vercel.app/api/trending/songs?limit=1" -H "X-API-Key: your-generated-key"
```

## Run Locally

```sh
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Validate

```sh
npm run lint
npm run build
npm test
npm run spell-check
```

## Deploy To Vercel

Import the GitHub repository in Vercel, or deploy from the CLI:

```sh
npm run vercel:deploy
```

Recommended Vercel settings:

| Setting          | Value           |
| ---------------- | --------------- |
| Framework preset | Other           |
| Build command    | `npm run build` |
| Output directory | empty/default   |
| Install command  | `npm ci`        |
| Node.js          | 20 or newer     |

The Vercel entrypoint is:

```text
api/index.js
```

The static homepage is served from:

```text
public/index.html
```

## Repository About

Suggested GitHub About text:

```text
Unofficial ShnwazDev JioSaavn API with Hono, TypeScript, OpenAPI docs, Vercel hosting, and no app-level rate limit.
```

Suggested topics:

```text
jiosaavn, jiosaavn-api, music-api, hono, typescript, openapi, vercel, shnwazdev
```

## Tech Stack

- Hono
- TypeScript
- Zod OpenAPI
- Scalar API Reference
- Vitest
- ESLint
- Vercel Serverless Functions

## License

MIT
