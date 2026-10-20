# Node.js Store Front API

A Bun-first TypeScript + Express backend for a storefront system with users, products, and orders.

## Overview

This project is a learning-oriented backend API that demonstrates common storefront patterns:

- Express route setup
- PostgreSQL access
- JWT-based authentication
- validation and error handling
- TypeScript controller/model layering

## Stack

- Bun
- TypeScript
- Express
- PostgreSQL
- Jasmine

## Prerequisites

- Bun 1.x
- PostgreSQL running locally or on a reachable host

## Quick start

```bash
bun install
cp .env.example .env
bun run dev
```

## Scripts

```bash
bun run dev
bun run build
bun run start
bun test
bun run test:bun
```

## Environment

Use the example file as the base for your local config:

```bash
cp .env.example .env
```

Example:

```env
PORT=4000
ENV=dev
PG_HOST=localhost
PG_PORT=5432
PG_USER=postgres
PG_PASSWORD=postgres
PG_DB=storefront
PG_DB_TEST=storefront_test
PG_BCRYPY_SC=storefront
PG_SALT_ROUND=10
PG_MYTOKEN=replace-with-a-secure-secret-key
```

## Folder overview

- `src/config/` — environment configuration
- `src/database/` — PostgreSQL pool initialization
- `src/handlers/` — HTTP controllers and business logic
- `src/model/` — database query layer
- `src/routes/` — API route organization
- `src/Middleware/` — auth and error middleware
- `src/types/` — shared TypeScript shapes
- `src/tests/` — Jasmine tests
- `src/errors/` — shared application error helpers
- `migrations/` — database migration scripts
- `spec/` — Jasmine configuration support

## API conventions

The application exposes endpoints under the main API prefix:

- `/api/users`
- `/api/products`
- `/api/orders`

Legacy singular routes are still supported where needed for compatibility, but the standard API layout is now pluralized and easier to follow.

## Notes

This project is still best treated as a backend learning/demo project rather than a full production SaaS app. It is, however, much cleaner and easier to extend than its older legacy version.

## License

ISC
