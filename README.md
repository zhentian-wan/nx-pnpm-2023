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
`pnpm add --filter @cbi/shared-ui typescript -D`

Install lib inside app only in workspace

`pnpm add @cbi/shared-ui --filter @cbi/client --workspace`

Run build command for all

`pnpm run -r build`
