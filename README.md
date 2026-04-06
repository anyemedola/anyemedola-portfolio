# AM· Portfolio

Full-stack personal portfolio with a headless backoffice — built to showcase projects and blog posts with full EN/PT bilingual support.

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js) ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white) ![License](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ About

A production-ready personal portfolio monorepo with three apps working together: a public-facing Next.js portfolio, a private admin backoffice for managing content, and an Express backend that serves the data.

Built by [Any Elis Medola](https://anyemedola.com.br) — Senior Front-End Developer based in Milan, Italy.

---

## 🚀 Features

- 🌍 **EN / PT i18n** — full bilingual support (English & Portuguese), toggled in the nav and persisted to localStorage
- 🖼️ **Portfolio sections** — Hero, About, Skills, Experience, Projects, Blog, Languages, Contact
- 📝 **Blog** — individual post pages with rich HTML body, read time, tags and bilingual content
- 🔐 **Backoffice** — private CMS dashboard with JWT auth, project & blog post management, live/draft toggling
- 🎨 **Design system** — dark theme with mint + pink accent palette, Bebas Neue + DM Sans + Cormorant Garamond
- 📱 **Fully responsive** — optimized for mobile, tablet and desktop
- ⚡ **Next.js proxy** — backoffice communicates with the backend through server-side API routes (no token exposure)

---

## 🛠️ Tech Stack

**Frontend** (`/frontend`) — public portfolio
- Next.js 16 (App Router)
- React 19
- MUI v7 + Emotion (CSS-in-JS)
- EN/PT i18n via React Context + localStorage

**Backoffice** (`/backoffice`) — admin dashboard
- Next.js 16 (App Router)
- React 19
- MUI v7 + Emotion
- JWT auth via httpOnly cookie
- EN/PT i18n (separate `bo_locale` key)

**Backend** (`/backend`) — REST API
- Node.js + Express 4
- JSON file database (`db.json`)
- JWT authentication (`jsonwebtoken`)
- Organized into `routes/`, `middleware/`, `db.ts`, `server.ts`

---

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/anyemedola/anyemedola-portfolio
cd anyemedola-portfolio
npm install
```

### Environment Variables

In `backend/`, create a `.env` file:

```env
ADMIN_USER=anyemedola
ADMIN_PASS=your_password_here
JWT_SECRET=your_secret_here
BACKOFFICE_URL=http://localhost:3001
FRONTEND_URL=http://localhost:3000
PORT=4000
```

In `backoffice/`, create a `.env.local` file:

```env
BACKEND_URL=http://localhost:4000
```

### Run locally

Start all three apps together from the root:

```bash
npm run dev:all
```

Or run them individually:

```bash
npm run dev              # frontend on http://localhost:3000
npm run dev:backoffice   # backoffice on http://localhost:3001
npm run dev:backend      # backend on http://localhost:4000
```

---

## 🔐 How Authentication Works

1. User submits credentials on `/login`
2. Backoffice calls `/api/login` (Next.js route handler)
3. Route handler proxies to `POST /auth/login` on the backend
4. Backend validates credentials, returns a signed JWT
5. Next.js sets the token as an `httpOnly` cookie (`am_token`)
6. All subsequent API calls read the cookie server-side and forward it as `Authorization: Bearer <token>`
7. The JWT is never exposed to the browser

---

## 📁 Project Structure

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
│       │   └── ui/                  # LangToggle, SkipLink, T (JSX translation)
│       ├── context/
│       │   └── LangContext.tsx      # { locale, dict, setLocale } + localStorage
│       └── i18n/
│           ├── en.ts                # English dictionary + Dict type
│           └── pt.ts                # Portuguese dictionary
│
├── backoffice/                      ← admin dashboard (port 3001)
│   ├── app/
│   │   ├── page.tsx                 # Admin shell (auth-gated)
│   │   ├── login/page.tsx           # Login page
│   │   └── api/
│   │       ├── login/route.ts       # Auth proxy → /auth/login
│   │       ├── logout/route.ts      # Clears am_token cookie
│   │       └── data/[...path]/      # Generic proxy → /api/*
│   └── src/
│       ├── components/
│       │   ├── AdminApp.tsx         # Main layout shell
│       │   ├── LoginPage.tsx        # Login form
│       │   ├── layout/              # Sidebar, TopBar
│       │   ├── panels/              # ProjectPanel, BlogPanel (slide-in drawers)
│       │   ├── views/               # DashboardView, ProjectsView, BlogView, SettingsView
│       │   └── ui/                  # Badge, EmptyState, TagsInput, Toggle, UploadArea, Toast
│       ├── context/
│       │   ├── AdminContext.tsx     # Projects, posts, CRUD, toast, panel state
│       │   └── LangContext.tsx      # { locale, dict, setLocale } + bo_locale in localStorage
│       └── i18n/
│           ├── en.ts                # English dictionary + Dict type
│           └── pt.ts                # Portuguese dictionary
│
├── backend/                         ← REST API (port 4000)
│   └── src/
│       ├── server.ts                # App setup, CORS, auth routes, router mounts
│       ├── db.ts                    # readDb(), writeDb(), slugify(), interfaces
│       ├── middleware/
│       │   └── auth.ts              # requireAuth() JWT middleware
│       └── routes/
│           ├── projects.ts          # GET /api/projects, POST, PUT /:id, DELETE /:id
│           └── posts.ts             # GET /api/posts, GET /api/posts/:slug, POST, PUT /:id, DELETE /:id
│
└── package.json                     ← monorepo scripts (concurrently)
```

---

## 📄 License

MIT — feel free to fork and adapt.

---

Made with ☕ from Milan
