# Flora Shanghai Aesthetics

**Flora Shanghai Aesthetics** is a React + TypeScript + Express + tRPC V1 website for an international plastic surgery and aesthetic medicine brand in Shanghai. It uses the **Quiet Meridian** visual system: warm editorial minimalism, documentary evidence cues, and a calm consultation pathway.

The frontend can run in local mode without a database. When `DATABASE_URL` is configured, the consultation mutation persists a Lead and the original payload metadata through Drizzle/MySQL. The system does not store photo bytes; secure patient photo upload remains disabled until encrypted storage, signed URLs, access control, expiration, and deletion workflows are configured.

## Requirements

Use Node.js 18 or newer and npm 9 or newer. The project has been prepared for npm and includes `package-lock.json` for reproducible installation.

## Local development

From the project root:

```bash
npm install
npm run check
npm run test
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:3000`. The dev server supports the SPA routes through the Vite fallback.

To create the production build:

```bash
npm run build
```

To serve the production build with the included Express fallback server:

```bash
npm run start
```

`npm run preview` is also available for previewing the Vite build output.

## Project structure

```text
flora-shanghai-aesthetics/
├── client/
│   ├── index.html                 # Document title, metadata, favicon, Open Graph image
│   ├── public/
│   │   ├── images/                # Local hero, mark, city, procedure, recovery assets
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   └── src/
│       ├── components/            # Shared and template UI primitives
│       ├── contexts/              # Theme context
│       ├── data/                  # doctors, procedures, cases, journeys, FAQ, site config
│       ├── hooks/                 # Template hooks
│       ├── lib/                   # tRPC client, analytics, attribution helpers
│       ├── App.tsx                # Site shell, dynamic routes, SEO, consultation UI
│       └── index.css              # Quiet Meridian design system and responsive CSS
├── server/
│   ├── routers.ts                 # tRPC auth + consultation API contract
│   ├── db.ts                      # Lead and consultation persistence helpers
│   └── consultation.test.ts       # API validation and privacy-boundary tests
├── drizzle/schema.ts              # users, leads, submissions, upload metadata
├── drizzle/0000_remarkable_deadpool.sql # Generated migration
├── shared/lead.ts                 # Shared consultation and attribution types
├── vite.config.ts                 # React + Tailwind Vite configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # npm/pnpm scripts and dependencies
├── pnpm-lock.yaml                 # Template dependency lockfile
├── client/public/images/          # Local brand and procedure assets
├── client/public/robots.txt       # Crawler rules
├── client/public/sitemap.xml      # Main route sitemap
└── README.md
```

## Included routes

The site includes `/`, `/why-shanghai`, `/surgeons`, dynamic `/surgeons/:slug`, `/procedures`, dynamic `/procedures/:slug` for 10 procedure slugs, `/cases`, consent-gated `/cases/:slug`, `/surgeon-verification`, `/patient-journey`, `/consultation`, `/lp/:slug` for configured campaign landing pages, `/privacy`, `/medical-disclaimer`, `/terms`, `/patient-media-consent`, and `/data-processing-notice`. The router has a safe fallback page for unknown paths.

## Replaceable data and assets

Edit `client/src/data/site.ts` to replace the sample doctor profiles, procedure cards, case templates, journey steps, verification fields, and navigation. All sample doctor and patient case content is explicitly marked as sample or demo content. The current profile and case data must not be treated as verified credentials, clinical claims, testimonials, ratings, or patient outcomes.

The current local visual files are in `client/public/images/`:

| File | Current use | Replace later with |
|---|---|---|
| `hero.jpg` | Homepage hero | Approved brand or patient-safe hero photography/video |
| `flora-mark.png` | Header, footer, favicon | Final approved symbol/mark |
| `shanghai-city.jpg` | Shanghai and journey sections | Licensed Shanghai / Bund / city photography |
| `procedure-rhinoplasty.jpg` | Rhinoplasty visual | Approved procedure or planning image |
| `recovery.jpg` | Recovery and facial sections | Consent-approved, non-graphic recovery or clinical media |

All image references are relative URLs such as `/images/hero.jpg`; there are no absolute local filesystem paths and no `/manus-storage/` references.

## External services, adapters, and environment variables

| Service / dependency | Purpose | Called from | Key / variable | If not configured |
|---|---|---|---|---|
| Drizzle + MySQL/TiDB | Persist Leads, consultation payload metadata, and upload metadata | `server/db.ts`, `drizzle/schema.ts` | `DATABASE_URL` | Site runs in local mode; no database persistence |
| CRM adapter boundary | Future handoff to HubSpot, Salesforce, or a custom CRM | `server/routers.ts` (`adapter.submit`) | `CRM_ADAPTER_URL`, `CRM_ADAPTER_TOKEN` reserved | Current adapter uses database/local mode |
| Secure object storage | Future encrypted patient image upload | `patientUploads` schema and `consultation.uploadPolicy` | `CONSULTATION_STORAGE_MODE` reserved | Photo input is disabled; no photo bytes are accepted |
| GA4 / Meta / TikTok | Optional conversion analytics | `client/src/lib/analytics.ts` | `VITE_GA4_ID`, `VITE_META_PIXEL_ID`, `VITE_TIKTOK_PIXEL_ID` | Events are dispatched locally and logged only in development |
| Google Fonts | Cormorant Garamond and Manrope typography | `client/src/index.css` | None | CSS falls back to Georgia/Arial; site remains readable |

The consultation API is implemented as a public tRPC mutation in `server/routers.ts`. It validates age, email, procedure slug, consent, attribution fields, honeypot, and basic rate limits. It supports local mode without a database and database mode with `DATABASE_URL`. It does not email, upload, or call an external CRM until those adapters are deliberately configured and reviewed. Never commit a real `.env` file, API key, token, password, or private key.

## SEO

`client/index.html` contains the title, description, keyword list, Open Graph title/description/type/image, theme color, and local favicon. `client/public/robots.txt` allows crawling and points to `/sitemap.xml`. `client/public/sitemap.xml` covers the main public routes. Before launch, set the production domain, add canonical URLs, and add route-specific metadata if the site expands.

## Deployment

### Vercel

Import the project into Vercel, select the root directory, use `npm install` as the install command, `npm run build` as the build command, and `npm run dev` only for local development. The Vite output is generated under `dist/public`. For a static deployment, configure SPA rewrites so unknown routes serve `index.html`. If using the included Express server instead, use `npm run build` followed by `npm run start` and set `PORT` through the hosting provider.

### Netlify or another static host

Use `npm install` and `npm run build`, then publish `dist/public` with an SPA fallback from `/*` to `/index.html`. This serves the public pages, but the consultation mutation will not persist unless the full Express/tRPC server is deployed as well. For a production inquiry workflow, deploy the Node server and configure `DATABASE_URL` and a reviewed CRM/email adapter.

### Traditional Node host

Run `npm install`, `npm run build`, set `PORT`, and run `npm run start`. The included `server/index.ts` serves `dist/public` and handles client-side routes with the Express fallback.

## Known limitations

The consultation mutation is functional but intentionally conservative: in local mode it logs only a non-sensitive summary; in database mode it stores submitted inquiry fields and attribution in the configured database. It is not yet connected to an email inbox, CRM, secure patient image storage, translation service, or WhatsApp provider. Doctor credentials, institutions, memberships, publications, patents, patient cases, before/after media, recovery timelines, pricing, and hospital details are placeholders. Legal pages contain starter copy only and are marked as requiring legal review. The hero and supporting visuals are local sample assets, not final clinical or patient media.

Before publication, connect the form to a reviewed secure workflow, replace sample data with verified materials, add consent records for patient media, review medical/legal/privacy copy, confirm the production domain and social metadata, and test the final deployment on both mobile and desktop.
