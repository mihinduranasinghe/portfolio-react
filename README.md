# Mihindu Ranasinghe | Portfolio (React + Vite)

Personal portfolio rebuilt in React/TypeScript with Vite. Includes Work Experience, About, Achievements, Projects, Certifications, Social links, and live Recommendations powered by Firebase Realtime Database/Storage.

## Prerequisites
- Node.js 20.19+ (or 22.12+)
- npm

## Setup
```bash
npm install
```

Create `.env.local` (kept out of git) with your Firebase config:
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=...
```

## Scripts
- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist`
- `npm run preview` — preview the built site locally

## Firebase
- Config is loaded from `import.meta.env` (see `.env.local`).
- Realtime Database path: `/recommendations` (reads and writes user submissions).
- Storage: stores uploaded avatar images.
Ensure you set appropriate Firebase security rules if the app is public.

## GitHub Pages Deployment (Actions)
- Workflow: `.github/workflows/deploy.yml` builds on `main` and publishes `dist` to `gh-pages`.
- Set repo secrets with the same names as your env vars:
  - `VITE_FIREBASE_API_KEY`
  - `VITE_FIREBASE_AUTH_DOMAIN`
  - `VITE_FIREBASE_PROJECT_ID`
  - `VITE_FIREBASE_STORAGE_BUCKET`
  - `VITE_FIREBASE_MESSAGING_SENDER_ID`
  - `VITE_FIREBASE_APP_ID`
  - `VITE_FIREBASE_MEASUREMENT_ID`
- `BASE_PATH` is set in the workflow (default `/portfolio-react/`). Change it if your repo name differs.
- After the first push to `main`, enable Pages in GitHub Settings → Pages → Source: `gh-pages` (root). Site URL: `https://<username>.github.io/<repo-name>/`.

## Custom Domain (later)
- When ready, add a `public/CNAME` file with your domain and configure DNS CNAME to `<username>.github.io`. Then enable HTTPS in GitHub Pages.

## Notes
- `.env.local` is ignored by git; keep secrets out of commits.
- If you rotate Firebase keys, update both `.env.local` and GitHub Actions secrets.
