# Node.js Store Front API

A TypeScript + Express backend for managing users, products, and orders in a storefront system.

## Project goal

This repository is a simple store management API built to practice backend development patterns such as:

- Express routing
- PostgreSQL integration
- JWT-based authentication
- validation and error handling
- TypeScript model/controller organization

## Tech stack

- Node.js
- TypeScript
- Express
- PostgreSQL
- Jasmine
- Bun support

## Quick start

### Using Bun (recommended)

```bash
bun install
bun run dev:bun
```

### Using npm

```bash
npm install
npm run dev
```

## Common scripts

```bash
npm run dev
npm run dev:bun
npm run build
npm run build:bun
npm run start
npm run start:bun
npm test
npm run test:bun
```

## Environment

Create a local environment file:

```bash
cp .env.example .env
```

Then fill in the database and auth values before running the app.

## Folder overview

- `src/config/` — environment and app configuration values
- `src/database/` — PostgreSQL connection pool setup
- `src/handlers/` — controller logic for requests and responses
- `src/model/` — database query/repository layer
- `src/routes/` — Express route registration and API layout
- `src/Middleware/` — security and auth middleware
- `src/types/` — TypeScript interfaces and data contracts
- `src/tests/` — Jasmine test suite
- `src/errors/` — shared custom error objects
- `migrations/` — SQL/db migration scripts
- `spec/` — Jasmine config and test support

## Notes

This project is still a backend learning/demo project and not a full production SaaS application yet. It is, however, structured to be understandable and extendable.
