# AM· Portfolio — Backoffice

Private CMS dashboard for managing portfolio projects and blog posts. Built with Next.js 16, React 19, MUI v7 and Firebase Authentication.

---

## Features

- **Firebase login** — email/password sign-in via Firebase Authentication
- **Projects** — create, edit, delete, reorder, toggle publish/featured
- **Blog posts** — create, edit, delete, draft/publish toggle, trilingual content (EN/PT/IT)
- **Dashboard** — activity feed, quick stats
- **Secure session** — Firebase session cookie stored as `httpOnly` (`am_token`), never exposed to client JavaScript
- **Route protection** — Next.js middleware redirects unauthenticated requests to `/login`

---

## Scripts

```bash
npm run dev    # development server on http://localhost:3001
npm run build  # production build
npm run start  # start production build on port 3001
npm run lint
```

---

## Environment Variables

Create `backoffice/.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id

BACKEND_URL=http://localhost:4000
```

---

## Authentication Flow

1. User enters email + password on `/login`
2. Firebase Client SDK (`src/lib/firebase.ts`) calls `signInWithEmailAndPassword`
3. On success, gets a short-lived Firebase **ID token**
4. POSTs the ID token to `/api/login` (Next.js route handler)
5. Next.js calls `POST /auth/session` on the backend
6. Backend verifies the ID token via Firebase Admin SDK and returns a **session cookie**
7. Next.js stores the session cookie as `am_token` (httpOnly, 8h)
8. All `/api/data/*` requests read `am_token` from the cookie and forward it as `Authorization: Bearer` to the backend

---

## API Routes

| Route | Description |
|---|---|
| `POST /api/login` | Exchanges Firebase ID token for a session cookie |
| `POST /api/logout` | Clears the `am_token` cookie |
| `GET/POST/PUT/DELETE /api/data/[...path]` | Proxy to backend `/api/*` with session cookie auth |

---

## Key Conventions

- Styled components are co-located as `styles.ts` in each component folder, imported as `import * as S from './styles'`
- All data state and CRUD operations live in `src/context/AdminContext.tsx`
- The `middleware.ts` at the root checks for the `am_token` cookie on every non-API, non-login route
