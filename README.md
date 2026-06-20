# Taskar Web

**Taskar** is a waitlist landing page for a travel platform that connects travelers with verified local residents. Travelers get custom, day-by-day itineraries designed by people who actually live in the destination. Creators (locals) can sign up to share their city knowledge and build itineraries for others.

This repository contains the **frontend web application** — a single-page React app that collects waitlist signups and persists them to a **Supabase** backend (PostgreSQL database with a REST API).

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Supabase Backend Setup](#supabase-backend-setup)
- [User Flow](#user-flow)
- [Components](#components)
- [Styling & Design System](#styling--design-system)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [License & Contact](#license--contact)

---

## Features

- **Hero landing section** with social proof and smooth scroll-to-signup CTA
- **Multi-step waitlist form** with three stages: Details → Location → Confirmed
- **Dual user roles** — Travelers (seeking itineraries) and Creators (sharing local knowledge)
- **Role-aware copy** — form labels and confirmation messages adapt based on selected role
- **Duplicate email handling** — prevents re-registration with a user-friendly alert (PostgreSQL unique constraint)
- **Responsive design** — mobile-friendly layouts with breakpoints at 480px
- **"What you Get" section** — feature highlights with Lucide icons
- **Persistent data storage** via Supabase PostgreSQL

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | ^19.2.5 | UI library |
| [React DOM](https://react.dev/) | ^19.2.5 | DOM rendering |
| [Create React App](https://create-react-app.dev/) (`react-scripts`) | 5.0.1 | Build tooling, dev server, bundling (Webpack + Babel) |
| [styled-components](https://styled-components.com/) | ^6.4.1 | CSS-in-JS styling |
| [lucide-react](https://lucide.dev/) | ^1.12.0 | Icon library (`MapPin`, `Coffee`, `MessageCircle`) |
| [web-vitals](https://github.com/GoogleChrome/web-vitals) | ^2.1.4 | Core Web Vitals measurement |

### Backend (Supabase — Backend as a Service)

| Technology | Version | Purpose |
|---|---|---|
| [Supabase](https://supabase.com/) | — | Managed PostgreSQL database, REST API, and auth platform |
| [@supabase/supabase-js](https://supabase.com/docs/reference/javascript/introduction) | ^2.105.0 | JavaScript client for Supabase |

Supabase client dependencies (transitive, bundled with `@supabase/supabase-js`):

| Package | Purpose |
|---|---|
| `@supabase/postgrest-js` | Auto-generated REST API over PostgreSQL |
| `@supabase/auth-js` | Authentication (available but not currently used in this app) |
| `@supabase/realtime-js` | Real-time subscriptions (available but not currently used) |
| `@supabase/storage-js` | File storage (available but not currently used) |
| `@supabase/functions-js` | Edge functions (available but not currently used) |

> **Note:** This project does **not** include a custom backend server (no Node.js/Express, Python/FastAPI, etc.). All server-side data operations go through Supabase's hosted PostgreSQL database and PostgREST API.

### Testing & Quality

| Technology | Version | Purpose |
|---|---|---|
| [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) | ^16.3.2 | React component testing |
| [@testing-library/jest-dom](https://github.com/testing-library/jest-dom) | ^6.9.1 | Custom Jest DOM matchers |
| [@testing-library/user-event](https://testing-library.com/docs/user-event/intro/) | ^13.5.0 | User interaction simulation |
| [@testing-library/dom](https://testing-library.com/docs/dom-testing-library/intro/) | ^10.4.1 | DOM testing utilities |
| ESLint (`react-app` config) | — | Linting via Create React App defaults |

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                     Browser (Client)                     │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              React 19 SPA (CRA)                  │   │
│  │                                                  │   │
│  │  HomePage → UserInformation → AppDetails → Footer│   │
│  │                    │                             │   │
│  │              supabase_client.js                  │   │
│  └────────────────────┼─────────────────────────────┘   │
└───────────────────────┼─────────────────────────────────┘
                        │ HTTPS (REST API)
                        ▼
┌─────────────────────────────────────────────────────────┐
│                    Supabase Cloud                      │
│                                                         │
│  ┌──────────────┐    ┌──────────────────────────────┐   │
│  │  PostgREST   │───▶│  PostgreSQL Database         │   │
│  │  (REST API)  │    │                              │   │
│  └──────────────┘    │  Table: users                │   │
│                      │  - first_name                │   │
│                      │  - last_name                 │   │
│                      │  - email (unique)            │   │
│                      │  - user_type                 │   │
│                      │  - country                   │   │
│                      │  - city                      │   │
│                      └──────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

The frontend communicates with Supabase exclusively through the `@supabase/supabase-js` client. On form submission, a row is inserted into the `users` table via `supabase.from("users").insert(...)`.

---

## Project Structure

```
taskar-web/
├── public/
│   ├── index.html          # HTML shell, page title "Taskar"
│   ├── logo.png            # Favicon / app logo
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # Search engine directives
├── src/
│   ├── App.js              # Root component, main layout
│   ├── index.js            # React entry point (StrictMode)
│   ├── index.css           # Global styles (body background, padding)
│   ├── supabase_client.js  # Supabase client initialization
│   ├── home_page.jsx       # Hero section with CTA
│   ├── user_information.jsx# Waitlist form (steps 1 & orchestration)
│   ├── user_location.jsx   # Location form (step 2)
│   ├── confirmed_page.jsx  # Success confirmation (step 3)
│   ├── app_details.jsx     # "What you Get" feature section
│   ├── footer.jsx          # Footer with copyright
│   └── assets/             # Static images (icons, backgrounds)
├── .gitignore              # Ignores node_modules, build, .env files
├── package.json            # Dependencies and npm scripts
└── package-lock.json       # Locked dependency tree
```

---

## Prerequisites

Before running this project locally, make sure you have:

- **Node.js** — version 16 or higher recommended (LTS preferred)
- **npm** — comes with Node.js (or use yarn/pnpm if preferred)
- A **Supabase project** — [Create one for free](https://supabase.com/dashboard) if you don't have one yet

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/iftekar2/tasker_web.git
cd tasker-web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root (see [Environment Variables](#environment-variables) below).

### 4. Start the development server

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000). The page reloads automatically when you save changes.

---

## Environment Variables

Create a `.env` file in the root of the project with the following variables:

```env
REACT_APP_SUPABASE_URL=https://your-project-id.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key-here
```

| Variable | Description |
|---|---|
| `REACT_APP_SUPABASE_URL` | Your Supabase project URL (found in **Project Settings → API**) |
| `REACT_APP_SUPABASE_ANON_KEY` | Your Supabase anonymous/public API key (found in **Project Settings → API**) |

> **Important:** All Create React App environment variables must be prefixed with `REACT_APP_` to be exposed to the browser. The `.env` file is listed in `.gitignore` and should **never** be committed to version control.

---

## Supabase Backend Setup

This app requires a `users` table in your Supabase PostgreSQL database. Run the following SQL in the Supabase **SQL Editor** (Dashboard → SQL Editor → New query):

```sql
CREATE TABLE users (
  id          BIGSERIAL PRIMARY KEY,
  first_name  TEXT NOT NULL,
  last_name   TEXT NOT NULL,
  email       TEXT NOT NULL UNIQUE,
  user_type   TEXT NOT NULL CHECK (user_type IN ('traveler', 'creator')),
  country     TEXT NOT NULL,
  city        TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (waitlist signups from the public web app)
CREATE POLICY "Allow anonymous insert"
  ON users
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

### Database Schema

| Column | Type | Constraints | Description |
|---|---|---|---|
| `id` | `BIGSERIAL` | Primary key | Auto-incrementing row ID |
| `first_name` | `TEXT` | NOT NULL | User's first name |
| `last_name` | `TEXT` | NOT NULL | User's last name |
| `email` | `TEXT` | NOT NULL, UNIQUE | User's email (lowercased on insert) |
| `user_type` | `TEXT` | NOT NULL, CHECK | Either `'traveler'` or `'creator'` |
| `country` | `TEXT` | NOT NULL | Destination country (traveler) or home country (creator) |
| `city` | `TEXT` | NOT NULL | Destination city (traveler) or city of expertise (creator) |
| `created_at` | `TIMESTAMPTZ` | DEFAULT `NOW()` | Timestamp of signup |

### Error Handling

The frontend handles these Supabase/PostgreSQL errors:

| Error Code | Meaning | User Message |
|---|---|---|
| `23505` | Unique constraint violation (duplicate email) | "That email is already on the waitlist." |
| Other | General database/API errors | Displays the error message from Supabase |

---

## User Flow

The waitlist signup is a **3-step wizard** managed by local React state in `user_information.jsx`:

```
Step 1: Details                    Step 2: Location                 Step 3: Confirmed
┌─────────────────────┐           ┌─────────────────────┐          ┌─────────────────────┐
│ First Name          │           │ Country             │          │ ✓ Success badge     │
│ Last Name           │  ──────▶  │ City                │  ──────▶ │ Role assigned       │
│ Email               │           │ [Back] [Join]       │          │ Priority Access     │
│ Role: Traveler /    │           │                     │          │ [Return Home]       │
│       Creator       │           │                     │          │                     │
│ [Continue →]        │           │                     │          │                     │
└─────────────────────┘           └─────────────────────┘          └─────────────────────┘
         │                                   │
         │                                   │
         └───────── Supabase INSERT ─────────┘
                   (on step 2 submit)
```

### Traveler vs. Creator

| Aspect | Traveler | Creator |
|---|---|---|
| Role value | `"traveler"` | `"creator"` |
| Step 2 title | "Where to next?" | "Share your world." |
| Country label | "DESTINATION COUNTRY" | "YOUR COUNTRY" |
| City label | "WHICH CITY?" | "CITY OF EXPERTISE" |
| Confirmation message | Notified when Taskar is ready and locals are matched | Team reviews local demand and verifies expertise |

---

## Components

| Component | File | Description |
|---|---|---|
| `App` | `src/App.js` | Root layout wrapping all sections in a centered column |
| `HomePage` | `src/home_page.jsx` | Full-viewport hero with headline, social proof, and scroll-to-signup button |
| `UserInformation` | `src/user_information.jsx` | Multi-step form orchestrator; manages step state, form data, and Supabase insert |
| `UserLocation` | `src/user_location.jsx` | Step 2 form for country/city with role-aware labels and back navigation |
| `ConfirmedPage` | `src/confirmed_page.jsx` | Step 3 success screen showing assigned role and status |
| `AppDetails` | `src/app_details.jsx` | Feature highlights section ("What you Get") with Lucide icons |
| `Footer` | `src/footer.jsx` | Simple footer with copyright and tagline |

### Supabase Client

```javascript
// src/supabase_client.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

---

## Styling & Design System

The app uses **styled-components** for all component-level styling. Global styles are minimal and defined in `src/index.css`.

### Color Palette

| Color | Hex | Usage |
|---|---|---|
| Primary Blue | `#2b48e6` / `#2e58ee` | Buttons, accents, headings, selected states |
| Background | `#fbfaf6` | Page background (warm off-white) |
| Text Primary | `#1f2937` / `black` | Headings, body text |
| Text Secondary | `#6b7280` / `#5c646f` / `grey` | Descriptions, labels, muted text |
| Success Green | `#10b981` | "Priority Access" status badge |
| Border | `#e5e7eb` | Input borders, card outlines |
| Icon Background | `#e6eaf5` | Feature icon containers |

### Typography

- **Sans-serif:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Serif accent:** `Georgia, serif` (used for italic emphasis in the hero headline)
- **Responsive sizing:** `clamp()` for fluid typography on the hero section

### Layout

- Max content width: `1280px` (hero), `550px` (form cards)
- Full-viewport sections (`min-height: 100vh`) for hero, waitlist, and app details
- Mobile breakpoint: `480px`

---

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Runs the app in development mode at [http://localhost:3000](http://localhost:3000) |
| `npm run build` | Creates an optimized production build in the `build/` folder |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run eject` | Ejects from Create React App (one-way, irreversible) |

### Production Build

```bash
npm run build
```

This produces a minified, hashed bundle in the `build/` directory, ready for static hosting (Netlify, Vercel, GitHub Pages, etc.).

---

## Testing

The project includes React Testing Library and Jest (via Create React App). Run tests with:

```bash
npm test
```

Test files follow the convention `*.test.js` or `*.test.jsx` alongside components. The testing stack includes:

- **@testing-library/react** — render components and query the DOM
- **@testing-library/jest-dom** — matchers like `toBeInTheDocument()`
- **@testing-library/user-event** — simulate clicks, typing, and other interactions

---

## Deployment

Since this is a static React SPA backed by Supabase, you can deploy the `build/` output to any static hosting provider:

1. Set the `REACT_APP_SUPABASE_URL` and `REACT_APP_SUPABASE_ANON_KEY` environment variables in your hosting platform's settings
2. Run `npm run build`
3. Deploy the contents of the `build/` folder

Popular options:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Supabase Hosting](https://supabase.com/docs/guides/hosting)

Ensure your Supabase Row Level Security policies allow inserts from the deployed domain if you restrict by origin.

---

## Browser Support

Production browsers (from `package.json` browserslist):

- \> 0.2% market share
- Not dead browsers
- Not Opera Mini

Development targets the latest versions of Chrome, Firefox, and Safari.

---

## License & Contact

© 2025 Taskar — *Travel, reimagined.*

Repository: [https://github.com/iftekar2/tasker_web](https://github.com/iftekar2/tasker_web)
