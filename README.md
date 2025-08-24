# BLOGIFY Turborepo

This is a monorepo for the MediumBlogs project, built using Turborepo. It contains a Next.js frontend, an Express backend, a shared database package (with Prisma and NeonDB), and shared configurations for TypeScript, ESLint, and UI components.

## Project Structure

- **apps/**
	- **next-frontend/**: Next.js application (deployed to Vercel)
	- **express-backend/**: Express.js API server (deployed to Render or similar)
	- **docs/**: Documentation site (optional)
- **packages/**
	- **db/**: Prisma schema and database client (uses NeonDB)
	- **ui/**: Shared UI components
	- **eslint-config/**: Shared ESLint configuration
	- **typescript-config/**: Shared TypeScript configuration
	- **zod/**: (optional) Shared Zod schemas


## Development

- Install dependencies: `pnpm install`
- Run all apps: `pnpm dev`
- Run frontend only: `pnpm --filter next-frontend dev`
- Run backend only: `pnpm --filter express-backend dev`

## Tech Stack

- Monorepo: Turborepo
- Frontend: Next.js (React, TypeScript)
- Backend: Express.js (TypeScript)
- Database: PostgreSQL (NeonDB) with Prisma ORM
- UI: Shared component library

## Notes

- Environment variables for database and API URLs should be set in deployment platforms (Vercel, Render, etc.).
- Prisma migrations and schema are managed in `packages/db`.

---

Feel free to contribute or modify as needed!
