# Hans Mok Personal Site

Personal landing page for Hans Mok, built with Next.js static export.

## Development

Use Node 24, then install and run:

```bash
npm install
npm run dev
```

The local site runs at `http://localhost:3000`.

## Build

```bash
npm run build
```

The production build is exported to `out/` for GitHub Pages.

## Deploy

Pushes to `master` or `main` run `.github/workflows/deploy.yml`, build the
static site, and deploy the generated `out/` artifact to GitHub Pages.
