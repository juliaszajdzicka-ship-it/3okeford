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

That address is on `3okefordscan.com`, not the `.org` this site runs on. The
`.com` domain holds the Microsoft 365 mail records; `.org` has no MX records at
all, so anything addressed to `@3okefordscan.org` will bounce.

The page title and the search-engine description are in `index.html`. Update
both when the announcement changes.

## The hero photo

The full-screen background is the view from Hambledon Hill. The original
4032x2268 photo lives in `assets-source/`, which is neither served nor bundled.

`public/` holds three resized copies (900, 1600 and 2400px wide) that the page
picks between with `srcset`, plus a 24px blurred stand-in inlined into
`src/heroBlur.js` so something is on screen immediately.

To swap the photo, drop the new original into `assets-source/` and run:

```
npm install --no-save sharp
node assets-source/generate-hero.mjs
```

That rewrites every size and the stand-in. Update the `alt` text in
`src/App.jsx` too, since it describes the picture.

## Deployment

Hosted on Vercel, connected to this repo. Every push to `main` deploys
automatically. Vercel auto-detects the Vite setup, so there is no `vercel.json`
to maintain.
