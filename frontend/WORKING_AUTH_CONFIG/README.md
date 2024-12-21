# Authentication System Documentation

## Overview
This document details the authentication implementation in the Un0 Platform, covering both Google OAuth and email/password authentication methods. The system uses Supabase Auth with Next.js 14 App Router, implementing server-side rendering (SSR) patterns.

## Core Libraries and Dependencies

### Primary Authentication
- `@supabase/ssr` (v0.0.10): Core library for SSR-compatible Supabase client
- `@supabase/supabase-js` (v2.39.0): Supabase JavaScript client
- Next.js 14: Framework providing routing and server components

### UI Components
- `@radix-ui/react-avatar`: Avatar component for user profiles
- `@radix-ui/react-slot`: Component composition
- `class-variance-authority`: Utility for component styling variants
- `clsx`: Utility for conditional class names

## Authentication Flow Components

### 1. Client Initialization
Location: `src/utils/supabase/`
- `client.ts`: Browser client initialization
- `server.ts`: Server-side client initialization with cookie handling
- Both use environment variables:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 2. Server Actions
Location: `src/lib/auth-actions.ts`
Implements server-side authentication actions:
- `signInWithGoogle()`: Google OAuth flow
- `login()`: Email/password authentication
- `signup()`: New user registration
- `signout()`: Session termination

### 3. Middleware
Location: `src/middleware.ts` and `src/utils/supabase/middleware.ts`
- Handles session management
- Updates authentication state
- Protects routes
- Manages cookie operations

### 4. OAuth Callback
Location: `src/app/auth/callback/route.ts`
Handles:
- OAuth code exchange
- Session establishment
- User metadata updates
- Redirect management

### 5. Protected Routes
Location: `src/app/dashboard/`
- Protected by middleware
- Requires authenticated session
- Redirects unauthenticated users

## Authentication Flows

### Google OAuth Flow
1. User clicks "Sign in with Google"
2. `signInWithGoogle()` initiates OAuth
3. User authenticates with Google
4. Callback route processes OAuth code
5. Session established
6. User redirected to dashboard

### Email/Password Flow
1. User submits credentials
2. Server action validates input
3. Supabase authenticates
4. Session established
5. User redirected based on success/failure

### Session Management
- Cookies store session state
- Middleware validates on each request
- Server components check auth state
- Client components receive user data

## Error Handling
- Dedicated error routes
- Specific error messages
- Proper error logging
- Graceful fallbacks

## Security Considerations
- PKCE flow for OAuth
- HTTP-only cookies
- SSL/TLS required
- Secure session management
- XSS prevention
- CSRF protection

## File Structure
```
frontend/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── callback/
│   │   │   │   └── route.ts         # OAuth callback handler
│   │   │   ├── error/
│   │   │   │   └── page.tsx         # Error display
│   │   │   └── verify-email/
│   │   │       └── page.tsx         # Email verification
│   │   └── dashboard/               # Protected routes
│   ├── components/
│   │   └── auth/                    # Auth-related components
│   ├── lib/
│   │   └── auth-actions.ts          # Server actions
│   ├── middleware.ts                # Global middleware
│   └── utils/
│       └── supabase/
│           ├── client.ts            # Browser client
│           ├── middleware.ts        # Auth middleware
│           └── server.ts            # Server client
```

## Environment Configuration
Required environment variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_SITE_URL=your_site_url
```
