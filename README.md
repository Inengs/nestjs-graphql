# NestJS GraphQL Blog API

A backend GraphQL API built with NestJS that powers a simple blogging platform.
Exposes queries and mutations for managing Users, Posts and Comments.

## Tech Stack

- TypeScript
- NestJS
- GraphQL (Code First approach)
- Apollo Server
- SQLite (via Prisma)
- Prisma ORM v7

## Observability Stack

- Prometheus — metrics scraping
- Grafana — dashboards and visualization
- Jaeger — distributed tracing
- Loki — log aggregation
- OpenTelemetry — instrumentation and export

## Features

- Users — register and fetch users
- Posts — full CRUD with author relation
- Comments — full CRUD with author and post relations

## Getting Started

### Local Development

```bash
npm install
npx prisma generate
npx prisma migrate dev
npm run start:dev
```

### With Docker (full stack including observability)

```bash
docker-compose up -d
```

GraphQL Playground: http://localhost:3000/graphql
Grafana: http://localhost:3001
Prometheus: http://localhost:9090
Jaeger: http://localhost:16686

## Project Status

✅ CRUD complete
🚧 Observability in progress
