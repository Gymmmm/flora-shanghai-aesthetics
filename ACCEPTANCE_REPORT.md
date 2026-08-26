# Flora Shanghai Aesthetics V1 Acceptance Report

## Test environment

The updated release was regenerated from the full-stack project and extracted into `/tmp/flora-v1-release/flora-shanghai-aesthetics`, with no existing `node_modules` or build output. The clean directory used the shipped `pnpm-lock.yaml` and ran installation, TypeScript, Vitest, Vite, and esbuild checks.

## Results

| Check | Result | Notes |
|---|---|---|
| Clean dependency install | Passed | `pnpm install --ignore-scripts` completed in a new directory. |
| TypeScript | Passed | `./node_modules/.bin/tsc --noEmit` completed with zero errors. |
| Unit tests | Passed | 2 test files, 4 tests: auth regression, upload policy, local consultation mode, honeypot rejection. |
| Client build | Passed | Vite produced `dist/public`; only a non-blocking broad-dependency chunk warning remains. |
| Server build | Passed | esbuild produced `dist/index.js`. |
| Dev server | Passed | Managed server listens on port 3000; Vite SPA fallback is active. |
| Route smoke test | Passed | Home, Why Shanghai, dynamic surgeon/procedure/case routes, verification, journey, consultation, four legal pages, campaign LP, and local assets returned HTTP 200. |
| tRPC API smoke test | Passed | `consultation.uploadPolicy` returns disabled-by-default secure-upload policy. |
| Database migration | Passed | Created `leads`, `consultationSubmissions`, `patientUploads`, and preserved `users`; SQL applied successfully. |
| Visual review | Passed for reviewed viewport | Quiet Meridian desktop previews for home, consultation, surgeons, and rhinoplasty guide render correctly. |
| Consent / publication gates | Passed | Unapproved patient cases are not shown; `do_not_publish` profiles are excluded; Physician JSON-LD is emitted only for verified doctors. |
| Secret hygiene | Passed | Release contains generated `.env.example`; no real `.env`, token, password, or private key is included. |

## Implemented V1 scope

The project now includes structured replaceable datasets for doctors, procedures, cases, journeys, FAQ, site configuration, campaign landing pages, verification metadata, pricing modes, attribution, and CRM pipeline statuses. The consultation form uses a public tRPC mutation with server-side Zod validation, required consent, honeypot protection, basic rate limiting, local mode, optional database persistence, and a documented adapter boundary. Photo upload is deliberately disabled until encrypted storage, signed URLs, access control, expiration, and deletion policies are implemented.

## Known limitations and remaining placeholders

Doctor credentials, institutions, titles, publications, memberships, patents, hospital details, pricing, patient cases, before/after media, recovery timelines, approved photos, contact channels, WhatsApp number, social links, legal copy, and production domain are placeholders. No real testimonials, ratings, patient outcomes, or unverified clinical claims are present. The CRM, email notification, translation, WhatsApp, and secure photo-storage adapters are not connected. Google Fonts remains an optional network dependency with system-font fallback. The Vite chunk warning is non-blocking and can be improved later with code splitting.

