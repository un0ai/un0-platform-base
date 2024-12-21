# un0.ai Platform - Technical Documentation (Cascade/Windsurf)

## Core Architecture

### Framework & Runtime
- Next.js 14 (App Router)
- React 18 with Server Components
- TypeScript 5.x with strict mode
- Node.js runtime

### Authentication System
- Provider: NextAuth.js
- Strategy: Google OAuth exclusive
- Session Management: JWT-based (30-day expiry)
- Protected Routes: 
  - Pattern: `/dashboard/*`
  - Implementation: `require-auth.tsx` middleware
  - Auth Flow: JWT verification → redirect to /login if invalid

### Frontend Architecture

#### Component System
- Base UI: shadcn/ui (Radix UI primitives)
- Styling: Tailwind CSS 3.x
- Icons: lucide-react
- Layout Components:
  - `AppSidebar`: Main navigation container
  - `TeamSwitcher`: Organization/team context
  - `NavMain`: Primary navigation
  - `NavProjects`: Project-specific navigation
  - `UserNavWrapper`: User session management

#### State Management
- Client State: React Hooks (useState, useReducer)
- Server State: React Server Components
- Form Management: react-hook-form + zod validation
- Context Providers:
  - ThemeProvider: Dark/light mode
  - AuthProvider: Session management

#### Routing Structure
```
/
├── (auth)
│   ├── login
│   ├── signup
│   └── logout
└── dashboard
    ├── monitor
    │   ├── agent-analytics
    │   ├── performance-metrics
    │   ├── logs-alerts
    │   └── system-health
    ├── platform
    │   ├── about
    │   ├── use-cases
    │   └── contact
    └── learn
        ├── getting-started
        ├── documentation
        └── faq
```

### UI Components Library

#### Base Components
- Button: Multi-variant support (default, outline, ghost)
- Card: Consistent padding (p-6) with hover effects
- Input: Standard height (h-10)
- Avatar: Image support with fallback
- Dialog/Modal: Radix UI based
- Toast: Notification system

#### Layout Components
- Sidebar: Collapsible with icon-only mode
- Header: Consistent page headers
- SectionCard: Feature section containers

### Performance Optimizations
- Image Optimization: next/image with proper sizing
- Font Loading: next/font with subset loading
- Component Memoization: React.memo for expensive renders
- Route Segments: Automatic code splitting
- Prefetching: Link component optimization

### Error Handling
- Client: ErrorBoundary components
- Server: try/catch in Server Actions
- Fallback UI: Error.tsx in routes
- Toast Notifications: User feedback

### Security Measures
- Headers: CSP, X-Frame-Options
- Auth: HTTP-only cookies, JWT rotation
- Input Validation: Server-side + Client-side
- Protected API Routes

### Development Tooling
- ESLint: Code quality
- Prettier: Code formatting
- TypeScript: Static type checking
- Tailwind CSS: Utility-first styling

### Component Conventions
- Naming: PascalCase for components, kebab-case for files
- Structure: Props interface → utility functions → component export
- Client Directive: 'use client' when needed
- Props: Consistent typing with TypeScript

### Design System
- Colors: Theme-based with dark mode support
- Typography: Inter font, consistent scale
- Spacing: 0.25rem increment scale
- Components: Consistent styling patterns

### Build & Deploy
- Next.js production build
- Static optimization where possible
- API routes for dynamic functionality
- Environment configuration management

## Critical Paths

### Authentication Flow
1. User clicks "Sign in with Google"
2. NextAuth.js handles OAuth flow
3. JWT session created on success
4. Protected routes verify JWT
5. Session refresh handled automatically

### Protected Route Access
1. Middleware checks JWT validity
2. Invalid/missing token → redirect to /login
3. Valid token → access granted
4. Session management handles expiry

### Component Lifecycle
1. Server Components render first
2. Client hydration follows
3. Interactive elements activate
4. State management initializes

## Development Guidelines

### Component Creation
1. Define TypeScript interfaces
2. Implement component logic
3. Add proper error boundaries
4. Include loading states
5. Test interactive elements

### State Management
1. Use Server Components when possible
2. Client state for UI-only logic
3. Form state with react-hook-form
4. Context for shared state

### Error Handling
1. Implement boundaries
2. Add fallback UI
3. Log errors appropriately
4. Show user feedback

### Performance
1. Optimize images
2. Lazy load routes
3. Memoize expensive components
4. Monitor Core Web Vitals
