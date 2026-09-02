# Next.js Dashboard Showcase

A public portfolio project demonstrating a modern administrative dashboard built with **Next.js, React, TypeScript, and responsive UI patterns**.

This repository is intentionally independent from my private production and SaaS projects. It focuses on frontend architecture, typed data models, reusable components, API-oriented design, and clear loading/error/empty states without exposing proprietary application code.

## Highlights

- Next.js App Router structure
- React component composition
- TypeScript interfaces for application data
- Reusable KPI and activity components
- Responsive dashboard layout
- API client abstraction
- Loading, error, and empty-state UI patterns
- Accessible semantic markup
- Separation between presentation, data access, and domain types

## Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- CSS Modules / modern CSS patterns
- Fetch API

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  ActivityList.tsx
  DashboardHeader.tsx
  KpiCard.tsx
lib/
  dashboard-api.ts
types/
  dashboard.ts
```

## Architecture

The page layer is responsible for assembling the dashboard. Reusable visual elements live in `components`, domain contracts live in `types`, and data access is isolated in `lib`.

```text
Dashboard Page
     ↓
Reusable React Components
     ↓
Typed Dashboard Models
     ↓
API Client
     ↓
REST API / Backend
```

The API client currently supports a mock fallback so the showcase can run as a standalone portfolio project while preserving the same interface that a real backend integration would use.

## Running Locally

```bash
git clone <repository-url>
cd nextjs-dashboard-showcase
npm install
npm run dev
```

Open `http://localhost:3000`.

## What This Demonstrates

This repository is designed to give recruiters and engineering teams a quick view of how I approach frontend development:

- strongly typed application data
- component reuse
- business-oriented dashboard UX
- clear data-access boundaries
- responsive layouts
- maintainable project organization
- graceful handling of asynchronous states

## Related Work

My private projects include larger Laravel + Next.js SaaS and business applications. This showcase provides a public, reviewable example of the frontend patterns used in those types of systems without publishing proprietary product code.

---

Built by **Carlos Gonzalez** as part of a public full-stack software portfolio.
