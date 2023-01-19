- app centric
  - "apps"
  - "libs"
- package centric
  - "packages"

App centric: only used inside applications
Package centric: some libs which can be shared outside monorepo

---

Run the app from root folder

`pnpm --filter @cbi/client dev`

Add package to app/lib by using pnpm

`pnpm add --filter @cbi/shared-ui react`
