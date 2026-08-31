# 3okeford

Single-page announcement site for 3 Okeford SCAN, at https://3okefordscan.org

## Stack

Vite + React 19 + Tailwind CSS v4. No backend, no database, no form service. The
whole page is one file: `src/App.jsx`.

## Local development

```
npm install
npm run dev
```

Then open http://localhost:5173

## Build

```
npm run build
```

Output goes to `dist/`.

## Editing the content

All the copy lives in `src/App.jsx`. The contact address the "Get in touch"
button opens is the `CONTACT_EMAIL` constant at the top of that file.

The page title and the search-engine description are in `index.html`. Update
both when the announcement changes.

## Deployment

Hosted on Vercel, connected to this repo. Every push to `main` deploys
automatically. Vercel auto-detects the Vite setup, so there is no `vercel.json`
to maintain.
