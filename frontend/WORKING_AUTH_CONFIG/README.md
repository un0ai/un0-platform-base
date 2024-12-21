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

## Critical Files and Their Roles

### 1. Supabase Client Configuration
- `src/utils/supabase/client.ts`: Browser client for client-side operations
  ```typescript
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  ```

- `src/utils/supabase/server.ts`: Server client with cookie handling
  ```typescript
  createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { ... } }
  )
  ```

### 2. Authentication Actions
- `src/lib/auth-actions.ts`: Server actions for auth operations
  - `signInWithGoogle()`: Initiates Google OAuth flow
  - `login()`: Email/password authentication
  - `signup()`: New user registration with metadata
  - `signout()`: Session cleanup and logout

### 3. Middleware Configuration
- `src/middleware.ts`: Global middleware configuration
  ```typescript
  export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)']
  }
  ```

- `src/utils/supabase/middleware.ts`: Session management middleware
  - Handles cookie operations
  - Updates session state
  - Manages authentication flow

### 4. OAuth Callback Handler
- `src/app/auth/callback/route.ts`: Processes OAuth responses
  - Handles code exchange
  - Manages session establishment
  - Handles error cases
  - Redirects after authentication

### 5. Authentication UI Components
- `src/app/(auth)/login/components/`:
  - `LoginForm.tsx`: Main login form
  - `SignInWithGoogleButton.tsx`: Google OAuth button

- `src/app/(auth)/signup/components/`:
  - `SignUpForm.tsx`: Registration form

### 6. Protected Routes Components
- `src/components/auth/`:
  - `protected-route.tsx`: Route protection HOC
  - `require-auth.tsx`: Auth requirement wrapper

### 7. Auth-Related Pages
- `src/app/(auth)/`:
  - `login/page.tsx`: Login page
  - `signup/page.tsx`: Registration page
  - `logout/page.tsx`: Logout confirmation
  - `auth/error/page.tsx`: Error handling
  - `auth/verify-email/page.tsx`: Email verification
  - `layout.tsx`: Auth layout with session check

## Authentication Flows

### Google OAuth Flow
1. User clicks Google sign-in button
2. `signInWithGoogle()` called with:
   ```typescript
   {
     provider: "google",
     options: {
       queryParams: {
         access_type: "offline",
         prompt: "consent"
       },
       redirectTo: "${NEXT_PUBLIC_SITE_URL}/auth/callback"
     }
   }
   ```
3. User redirected to Google
4. Google redirects back with code
5. Callback route processes code
6. Session established
7. User redirected to dashboard

### Email/Password Flow
1. User submits credentials
2. Server action processes:
   ```typescript
   supabase.auth.signInWithPassword({
     email: formData.get("email"),
     password: formData.get("password")
   })
   ```
3. Session established on success
4. User redirected appropriately

### Protected Routes
1. Middleware checks session on each request
2. No session -> redirect to login
3. Invalid session -> clear and redirect
4. Valid session -> allow access

## Security Implementation

### Session Management
- HTTP-only cookies
- Secure cookie flags in production
- Proper session refresh
- Cookie-based CSRF protection

### Error Handling
- Specific error routes
- Detailed error messages
- Proper error logging
- Graceful degradation

## Environment Configuration
Required in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_SITE_URL=your_site_url
```

## Important Notes
1. The callback route MUST handle both OAuth and email verification
2. Middleware MUST run on all authenticated routes
3. Cookie handling is critical for session management
4. Error handling should be comprehensive
5. User metadata must be properly managed

## Debugging Common Issues
1. Session not persisting:
   - Check cookie configuration
   - Verify middleware is running
   - Confirm callback route operation

2. OAuth failures:
   - Verify redirect URLs
   - Check Google console configuration
   - Confirm environment variables

3. Protected route issues:
   - Verify middleware matcher
   - Check auth components
   - Confirm session checks
