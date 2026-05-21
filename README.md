# AM· Portfolio

Full-stack personal portfolio monorepo — public portfolio, private admin backoffice and REST API, with Firebase Authentication, Firestore and EN/PT/IT trilingual support.

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js) ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black) ![MUI](https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white) ![License](https://img.shields.io/badge/license-MIT-blue)

---

## About

A production-ready personal portfolio with three apps working together:

| App | Description | Port |
|---|---|---|
| `frontend` | Public-facing Next.js portfolio | 3000 |
| `backoffice` | Private CMS dashboard for managing content | 3001 |
| `backend` | Express REST API + Firebase Admin SDK | 4000 |

Built by [Any Elis Medola](https://anyemedola.com.br) — Senior Front-End Developer based in Milan, Italy.

---

## Features

- **EN / PT / IT i18n** — trilingual support (English, Portuguese, Italian) via react-i18next, persisted to localStorage and applied client-side after mount to avoid SSR hydration mismatches
- **Portfolio sections** — Hero, About, Skills, Experience, Projects, Blog, Languages, Contact
- **Blog** — individual post pages with rich HTML body, read time, tags and trilingual content
- **Backoffice** — private CMS with Firebase Authentication, project & blog post management, live/draft toggling
- **Firestore** — all projects and posts are stored in Firebase Firestore; no local database file
- **Firebase Auth** — admin login uses Firebase email/password authentication; the backend verifies Firebase session cookies
- **Next.js proxy** — backoffice communicates with the backend through server-side API routes (session cookie never exposed to client JavaScript)
- **Design system** — dark theme with mint + pink accent palette, Bebas Neue + DM Sans + Cormorant Garamond
- **Fully responsive** — optimized for mobile, tablet and desktop
- **Test suite** — 62 Jest + React Testing Library tests covering components, hooks, sections and API fetch flows

---

## Tech Stack

**Frontend** (`/frontend`)
- Next.js 16 (App Router), React 19
- MUI v7 + Emotion (CSS-in-JS)
- react-i18next — EN / PT / IT, initialized server-safe with `'en'`, language detected from localStorage after mount
- Jest + React Testing Library — unit and integration tests

**Backoffice** (`/backoffice`)
- Next.js 16 (App Router), React 19
- MUI v7 + Emotion
- Firebase Client SDK — email/password sign-in
- Session managed via httpOnly cookie (`am_token`) containing a Firebase session cookie

**Backend** (`/backend`)
- Node.js + Express 4, TypeScript
- Firebase Admin SDK — initializes from `FIREBASE_SERVICE_ACCOUNT` env var
- Firestore — `projects` and `posts` collections
- `POST /auth/session` — verifies Firebase ID token, creates a 8h session cookie
- `requireAuth` middleware — verifies session cookies on every protected route

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+
- A Firebase project with **Authentication (Email/Password)** and **Firestore** enabled

### Installation

```bash
git clone https://github.com/anyemedola/anyemedola-portfolio
cd anyemedola-portfolio
npm install
```

### Environment Variables

**`backend/.env`**

```env
FIREBASE_SERVICE_ACCOUNT='{ ... }'   # Full service account JSON from Firebase Console
BACKOFFICE_URL=http://localhost:3001
FRONTEND_URL=http://localhost:3000
PORT=4000
```

**`backoffice/.env.local`**

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
BACKEND_URL=http://localhost:4000
```

> The Firebase service account JSON is available in Firebase Console → Project Settings → Service accounts → Generate new private key.  
> The web API key is in Project Settings → General → Your apps.

### Run locally

```bash
# All three apps together
npm run dev:all

# Individually
npm run dev            # frontend  → http://localhost:3000
npm run dev:backoffice # backoffice → http://localhost:3001
npm run dev:backend    # backend   → http://localhost:4000
```

### Tests

```bash
cd frontend
npm test              # run all 62 tests
npm run test:coverage # with coverage report
```

---

## Authentication Flow

1. Admin enters email + password on `/login`
2. Firebase Client SDK authenticates and returns a short-lived **ID token**
3. Backoffice POSTs the ID token to `/api/login` (Next.js route handler)
4. Next.js calls `POST /auth/session` on the backend with the ID token
5. Backend verifies the ID token via Firebase Admin SDK, creates an 8h **session cookie**
6. Next.js stores the session cookie as an `httpOnly` cookie (`am_token`)
7. All subsequent API calls read `am_token` server-side and forward it as `Authorization: Bearer`
8. Backend `requireAuth` middleware verifies the session cookie on every protected route

---

## Project Structure

```
anyemedola-portfolio/                ← monorepo root
├── frontend/                        ← public portfolio (port 3000)
│   ├── app/
│   │   ├── page.tsx                 # Single-page portfolio
│   │   └── blog/[slug]/page.tsx     # Individual blog post pages
│   └── src/
│       ├── components/
│       │   ├── sections/            # Hero, About, Skills, Experience, Projects, Blog, Contact
│       │   ├── blog/                # PostHero, PostBody, PostMore, PostFooter, PostNav
│       │   ├── layout/              # Header (nav + lang toggle), Footer
│       │   └── ui/                  # LangToggle, SkipLink, CustomCursor, T
│       ├── hooks/
│       │   ├── useScrollReveal.ts   # IntersectionObserver-based reveal animation
│       │   └── useCustomCursor.ts   # Custom cursor tracking
│       ├── translator-i18n/
│       │   └── i18n/
│       │       ├── index.tsx        # i18next init (lng: 'en', no LanguageDetector)
│       │       └── locales/         # en / pt / it translations
│       └── data/posts.ts            # Static blog post fallback data
│
├── backoffice/                      ← admin dashboard (port 3001)
│   ├── app/
│   │   ├── page.tsx                 # Admin shell (auth-gated by middleware)
│   │   ├── login/page.tsx           # Firebase email/password login
│   │   └── api/
│   │       ├── login/route.ts       # Exchanges Firebase ID token → session cookie
│   │       ├── logout/route.ts      # Clears am_token cookie
│   │       └── data/[...path]/      # Generic proxy → backend /api/*
│   └── src/
│       ├── components/
│       │   ├── loginpage/           # LoginPage (Firebase sign-in)
│       │   ├── layout/              # Sidebar, TopBar
│       │   ├── panels/              # ProjectPanel, BlogPanel — slide-in drawers
│       │   └── views/               # Dashboard, Projects, Blog, Settings views
│       ├── context/
│       │   └── AdminContext.tsx     # Projects, posts, CRUD, toast, panel state
│       └── lib/
│           └── firebase.ts          # Firebase Client SDK initialization
│
├── backend/                         ← REST API (port 4000)
│   └── src/
│       ├── server.ts                # Express app, CORS, auth endpoints
│       ├── firebase.ts              # Firebase Admin SDK init (auth + firestore)
│       ├── db.ts                    # DbProject / DbPost interfaces, slugify()
│       ├── middleware/
│       │   └── auth.ts              # requireAuth() — verifies Firebase session cookie
│       └── routes/
│           ├── projects.ts          # CRUD for /api/projects (Firestore)
│           └── posts.ts             # CRUD for /api/posts (Firestore)
│
├── ecosystem.config.js              ← PM2 config for production
└── package.json                     ← monorepo scripts (concurrently)
```

---

## Deployment

The `ecosystem.config.js` at the root is configured for [PM2](https://pm2.keymetrics.io/) on a Linux server (e.g. Laravel Forge):

```bash
npm run build        # build all three apps
pm2 start ecosystem.config.js
```

---

## License

MIT — feel free to fork and adapt.

---

Made with coffee from Milan
