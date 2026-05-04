# ShnwazDev JioSaavn API

An unofficial JioSaavn API website and backend branded for `shnwazdev`.

The app uses Hono, TypeScript, Zod OpenAPI, and Scalar docs. It is ready for Vercel's native Hono deployment flow.

## Links

- Home: `/`
- Docs: `/docs`
- OpenAPI schema: `/swagger`
- Health: `/health`
- Endpoint index: `/api/endpoints`

## API Endpoints

- `GET /api/search?query=Believer`
- `GET /api/search/songs?query=Kesariya`
- `GET /api/search/albums?query=Evolve`
- `GET /api/search/artists?query=Adele`
- `GET /api/search/playlists?query=Indie`
- `GET /api/songs?ids=3IoDK8qI`
- `GET /api/songs?link=https://www.jiosaavn.com/song/...`
- `GET /api/songs/{id}`
- `GET /api/songs/{id}/suggestions`
- `GET /api/albums?id={id}`
- `GET /api/artists?id={id}`
- `GET /api/artists/{id}/songs`
- `GET /api/artists/{id}/albums`
- `GET /api/playlists?id={id}`

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

The project exports the Hono app from `src/server.ts`, which Vercel detects as a backend entrypoint.

## Repository

Suggested repository name:

```text
shnwazdev-jiosaavn-api
```

## License

MIT
