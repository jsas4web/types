# jSAS WebSite: Types

A shared TypeScript types package for the **[jSAS WebSite](https://jsas.dev)** ecosystem, maintained by Jonatas Sas.

This module acts as a **typed microservice** providing strict, reusable, and framework-agnostic contracts for API responses, site configuration, and future data structures. It powers the frontend (Astro), backend (mock APIs), and other jSAS services.

---

## 📦 What’s inside?

```ts
import type { Config } from 'jsas4web-types/config';
import type { ApiResponse } from 'jsas4web-types/api';
```

### Modules

- **`api/`** – Base interfaces for API envelopes (metadata, pagination, response)
- **`config/`** – Contracts related to global site configuration
- _(More coming soon: `pages/`, `services/`, `posts/`, etc.)_

### Build Output

- Emits only `.d.ts` files (no JS), into the `dist/` folder
- Uses `emitDeclarationOnly: true` and native ESM

---

## 🔧 Usage

This package is not published to npm. You can consume it directly from GitHub:

```json
"dependencies": {
  "jsas4web-types": "github:jsas4web/types#main"
}
```

Or reference a specific tag:

```json
"jsas4web-types": "github:jsas4web/types#v1.0.1"
```

Then import what you need:

```ts
import type { Config } from 'jsas4web-types/config';
```

---

## 🛠 Project Setup

```bash
npm install
npm run build
```

Compiles only type declarations into `dist/`.

---

## 🧩 Contributing

- All source files live under `src/types/`
- Use one folder per domain (`api`, `config`, etc.)
- Use named exports (avoid default exports)
- Write clean, composable, documented types
- Re-export via `index.ts` per module

---

## 📝 License

MIT © [Jonatas Sas](https://jsas.dev)
