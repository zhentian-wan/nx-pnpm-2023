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

with nx: `npx nx run dev @cbi/client`

Add package to app/lib by using pnpm

`pnpm add --filter @cbi/shared-ui react`
`pnpm add --filter @cbi/shared-ui typescript -D`

Install lib inside app only in workspace

`pnpm add @cbi/shared-ui --filter @cbi/client --workspace`

Install Nx to workspace

`pnpm add nx -D -w`

Run all package build commands

`pnpm run -r build`

with Nx: `npx nx run-many --target=build`

Can add project restriction

`npx nx run-many --target=build --projects=@cbi/shared-ui,@cbi/client`

### NX caching

Init a `nx.json` file

`npx nx init`
