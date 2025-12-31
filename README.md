# Turbo Tomato

A Turborepo monorepo containing a Fastify API backend and a React Native mobile app built with Expo.

## Prerequisites

- **Node.js** >= 22 (see `package.json` engines)
- **npm** >= 10.9.4 (specified package manager)
- For mobile development:
  - [Expo CLI](https://docs.expo.dev/get-started/installation/) (or use `npx expo`)
  - iOS: Xcode (for iOS simulator)
  - Android: Android Studio (for Android emulator)

## Installation

Install all dependencies for the monorepo:

```sh
npm install
```

This will install dependencies for all workspaces (apps and packages) in the monorepo.

## Running the Projects

### Run Everything (Recommended)

To run both the API and mobile app in development mode:

```sh
npm run dev
```

This uses Turborepo to run the `dev` script in parallel across all apps that have it defined.

### Run Individual Apps

#### API Server

The Fastify API server runs on port 3000 by default with hot reload enabled:

```sh
cd apps/api
npm start
```

Or from the root directory:

```sh
npm run start --workspace=@turbo-tomato/api
```

The API server will start with file watching enabled, so it will automatically restart on code changes.

#### Mobile App

Start the Expo development server:

```sh
cd apps/mobile
npm start
```

Or from the root directory:

```sh
npm run start --workspace=@turbo-tomato/mobile
```

This will open the Expo DevTools. You can then:

- Press `i` to open iOS simulator
- Press `a` to open Android emulator
- Press `w` to open in web browser
- Scan the QR code with the Expo Go app on your physical device

**Mobile App Platform Options:**

```sh
# iOS
cd apps/mobile
npm run ios

# Android
cd apps/mobile
npm run android

# Web
cd apps/mobile
npm run web
```

## Available Scripts

### Root Level Scripts

- `npm run dev` - Run all apps in development mode
- `npm run build` - Build all apps and packages
- `npm run clean` - Clean build artifacts and node_modules
- `npm run format` - Format code with Prettier

### API Scripts (`apps/api`)

- `npm start` - Start the Fastify server with hot reload (uses `tsx watch`)

### Mobile Scripts (`apps/mobile`)

- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint

## Project Structure

```text
turbo-tomato/
├── apps/
│   ├── api/              # Fastify API server
│   │   └── index.ts      # API entry point
│   └── mobile/           # React Native app (Expo)
│       └── app/          # Expo Router app directory
├── packages/
│   ├── ui/               # Shared UI components
│   └── typescript-config/# Shared TypeScript configs
├── package.json          # Root workspace configuration
└── turbo.json           # Turborepo configuration
```

## Tech Stack

### API

- **Fastify** - Fast and low overhead web framework
- **tsx** - TypeScript execution
- **@supabase/supabase-js** - Supabase client

### Mobile

- **Expo** - React Native framework
- **Expo Router** - File-based routing
- **React Native** - Mobile UI framework
- **@supabase/supabase-js** - Supabase client
- **@tanstack/react-query** - Data fetching and caching

## Development

This is a monorepo managed by:

- **Turborepo** - High-performance build system
- **npm workspaces** - Package management

Each app can be developed independently, but they share common packages and configurations defined in the `packages/` directory.
