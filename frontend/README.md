# AM· Portfolio — Frontend

Public-facing portfolio built with Next.js 16, React 19, MUI v7 and react-i18next (EN / PT / IT).

---

## Sections

| Section | Description |
|---|---|
| Hero | Introduction, CTA buttons, years-of-experience badge |
| About | Bio, stats, CV download |
| Skills | Six skill cards (Frontend, Styling, State, UX, Testing, DevOps) |
| Experience | Timeline of past roles |
| Projects | Cards fetched from the backend API with static fallback |
| Blog | Post cards fetched from the backend API with static fallback |
| Languages | Language proficiency display |
| Contact | Email, LinkedIn, GitHub, phone links |

---

## Scripts

```bash
npm run dev          # development server on http://localhost:3000
npm run build        # production build
npm run start        # start production build on port 3000
npm run lint         # ESLint
npm test             # Jest + React Testing Library (62 tests)
npm run test:coverage
```

---

## i18n

Translations live in `src/components/translator-i18n/i18n/locales/{en,pt,it}/translations.json`.

i18next is initialized with `lng: 'en'` (no `LanguageDetector` at init time) to produce consistent server-rendered HTML. After mount, `app/providers.tsx` reads the saved language from `localStorage` and calls `i18n.changeLanguage()`. Changes made via the `LangToggle` in the header are automatically persisted back to localStorage via an `i18n.on('languageChanged')` listener.

**Usage patterns:**

```tsx
// Hook
const { t } = useTranslation();
<span>{t('nav.about')}</span>

// Inline multi-locale component
<T en="Hello" pt="Olá" it="Ciao" />

// Translated HTML
<Translator path="hero.desc" html />
```

---

## Tests

Jest + React Testing Library. Run with `npm test`.

| Suite | Coverage |
|---|---|
| `T` | EN / PT / IT rendering, fallback |
| `LangToggle` | Buttons, `aria-pressed`, `changeLanguage` calls |
| `useScrollReveal` | Observer creation, threshold, `visible` class, cleanup |
| `useCustomCursor` | Event listeners, cursor position, `big` class, cleanup |
| `Header` | Banner, logo, nav links, scroll state |
| `Footer` | Copyright, website link |
| `SkillsSection` | All 6 cards, tags, ARIA labels |
| `ContactSection` | All contact links and `href` values |
| `BlogSection` | API data, empty fallback, static fallback, card links |
| `ProjectsSection` | API data, fallback, stack tags, project type |

---

## Key Conventions

- Styled components are co-located as `styles.ts` in each component folder and imported as `import * as S from './styles'`
- All sections use `useScrollReveal()` for intersection-based reveal animations
- Sections fetch from `/api/projects` and `/api/posts` (Next.js route handlers that proxy to the backend) with static data as fallback
