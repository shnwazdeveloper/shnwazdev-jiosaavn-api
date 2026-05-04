# ShnwazDev JioSaavn API

An unofficial JioSaavn API website and backend branded for `shnwazdev`.

The app uses Hono, TypeScript, Zod OpenAPI, and Scalar docs. It is ready for Vercel's native Hono deployment flow.

## Links

- Home: `/`
- Docs: `/docs`
- OpenAPI schema: `/swagger`
- Health: `/health`
- Endpoint index: `/api/endpoints`
- API limits: `/api/limits`

## API Endpoints

- `GET /api/search?query=Believer`
- `GET /api/limits`
- `GET /api/endpoints`
- `GET /api/search/songs?query=Kesariya`
- `GET /api/search/albums?query=Evolve`
- `GET /api/search/artists?query=Adele`
- `GET /api/search/playlists?query=Indie`
- `GET /api/search/top-query?query=Believer`
- `GET /api/songs?ids=3IoDK8qI`
- `GET /api/songs?id=3IoDK8qI`
- `GET /api/songs?link=https://www.jiosaavn.com/song/...`
- `GET /api/songs/{id}`
- `GET /api/songs/{id}/ringtone`
- `GET /api/songs/{id}/share`
- `GET /api/songs/{id}/suggestions`
- `GET /api/albums?id={id}`
- `GET /api/artists?id={id}`
- `GET /api/artists/by-name?query={query}`
- `GET /api/artists/{id}/songs`
- `GET /api/artists/{id}/albums`
- `GET /api/artists/{id}/related`
- `GET /api/playlists?id={id}`
- `GET /api/channels`
- `GET /api/channels/{id}`
- `GET /api/charts`
- `GET /api/discover`
- `GET /api/genres`
- `GET /api/home`
- `GET /api/home/artist-recommendations`
- `GET /api/home/city-modules`
- `GET /api/home/modules`
- `GET /api/home/promos`
- `GET /api/moods`
- `GET /api/music-plus`
- `GET /api/radio`
- `GET /api/radio/{id}`
- `GET /api/radio/artists`
- `GET /api/radio/featured`
- `GET /api/lyrics?query=tum%20hi%20ho`
- `GET /api/lyrics/{id}`
- `GET /api/lyrics/{id}/sync`
- `GET /api/episodes/{id}`
- `GET /api/podcasts`
- `GET /api/podcasts/{id}`
- `GET /api/trending`
- `GET /api/trending/albums`
- `GET /api/trending/artists`
- `GET /api/trending/playlists`
- `GET /api/trending/podcasts`
- `GET /api/trending/songs`

## Run Locally

```sh
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate

```sh
npm run build
npm test
```

## Deploy To Vercel

Use the Vercel dashboard and import this GitHub repository, or run:

```sh
npm run vercel:deploy
```

Dashboard import link:

```text
https://vercel.com/new/clone?repository-url=https://github.com/shnwazdeveloper/shnwazdev-jiosaavn-api
```

The project exports the Hono app from `src/server.ts`, which Vercel detects as a backend entrypoint.

This app does not add a rate limiter. The Vercel `maxDuration` is configured at 60 seconds where your plan allows it.

## Repository

Suggested repository name:

```text
shnwazdev-jiosaavn-api
```

## License

MIT
