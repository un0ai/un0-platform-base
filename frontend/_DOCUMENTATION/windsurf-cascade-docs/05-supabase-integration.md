# Supabase Integration Guide

## Database Schema

### Core Tables

#### Users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Trigger for updated_at
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION trigger_set_timestamp();
```

#### Agents
```sql
CREATE TABLE agents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL,
  config JSONB NOT NULL DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'inactive',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT valid_status CHECK (status IN ('active', 'inactive', 'error'))
);

CREATE INDEX agents_user_id_idx ON agents(user_id);
```

#### Workflows
```sql
CREATE TABLE workflows (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  nodes JSONB NOT NULL DEFAULT '[]',
  edges JSONB NOT NULL DEFAULT '[]',
  config JSONB NOT NULL DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT valid_status CHECK (status IN ('draft', 'active', 'paused', 'error'))
);

CREATE INDEX workflows_user_id_idx ON workflows(user_id);
```

#### Deployments
```sql
CREATE TABLE deployments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  workflow_id UUID REFERENCES workflows(id) ON DELETE CASCADE,
  version TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  config JSONB NOT NULL DEFAULT '{}',
  logs JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT valid_status CHECK (status IN ('pending', 'running', 'completed', 'failed'))
);

CREATE INDEX deployments_workflow_id_idx ON deployments(workflow_id);
```

## Authentication Integration

### Client Setup
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

### Auth Hooks
```typescript
// Custom auth hook
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return { user, loading };
}
```

### Protected Routes
```typescript
// Middleware for protected routes
export function withAuth(gssp: GetServerSideProps) {
  return async (context: GetServerSidePropsContext) => {
    const { req } = context;
    const { user } = await supabase.auth.api.getUserByCookie(req);

    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    return await gssp(context);
  };
}
```

## Database Operations

### Query Helpers
```typescript
// Type-safe database operations
export async function getUser(userId: string) {
  const { data, error } = await supabase
    .from<User>('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
}

export async function updateUser(userId: string, updates: Partial<User>) {
  const { data, error } = await supabase
    .from<User>('users')
    .update(updates)
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
}
```

### Real-time Subscriptions
```typescript
// Subscribe to changes
function useRealtimeData<T>(
  table: string,
  query: string,
  options: { userId?: string }
) {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    // Initial fetch
    fetchData();

    // Subscribe to changes
    const subscription = supabase
      .from(table)
      .on('*', (payload) => {
        // Handle change
        handleChange(payload);
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(subscription);
    };
  }, [table, query, options.userId]);

  return data;
}
```

## Storage Integration

### File Upload
```typescript
export async function uploadFile(
  bucket: string,
  path: string,
  file: File
) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file);

  if (error) throw error;
  return data;
}
```

### File Download
```typescript
export async function getFileUrl(
  bucket: string,
  path: string
) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .getPublicUrl(path);

  if (error) throw error;
  return data.publicUrl;
}
```

## Error Handling

### Database Errors
```typescript
export class DatabaseError extends Error {
  constructor(
    message: string,
    public code: string,
    public details: unknown
  ) {
    super(message);
    this.name = 'DatabaseError';
  }
}

export function handleDatabaseError(error: unknown) {
  if (error instanceof Error) {
    // Handle specific Supabase errors
    const pgError = (error as any).code;
    switch (pgError) {
      case '23505': // unique_violation
        throw new DatabaseError(
          'Duplicate entry',
          pgError,
          error
        );
      case '23503': // foreign_key_violation
        throw new DatabaseError(
          'Referenced record not found',
          pgError,
          error
        );
      default:
        throw new DatabaseError(
          'Database error',
          pgError || 'UNKNOWN',
          error
        );
    }
  }
  throw error;
}
```

## Security

### Row Level Security
```sql
-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE workflows ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can read own data"
  ON users FOR SELECT
  USING (auth.uid() = id);

-- Agents policies
CREATE POLICY "Users can CRUD own agents"
  ON agents FOR ALL
  USING (auth.uid() = user_id);

-- Workflows policies
CREATE POLICY "Users can CRUD own workflows"
  ON workflows FOR ALL
  USING (auth.uid() = user_id);
```

### API Security
```typescript
// Secure API routes
export async function secureEndpoint(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user, error } = await supabase.auth.api.getUserByCookie(req);

  if (error || !user) {
    return res.status(401).json({
      error: 'Unauthorized'
    });
  }

  // Continue with authenticated request
  return user;
}
```

## Performance Optimization

### Query Optimization
```typescript
// Optimized queries with specific selections
const { data, error } = await supabase
  .from('workflows')
  .select(`
    id,
    name,
    description,
    nodes:nodes->>,
    user:users(id, email)
  `)
  .eq('status', 'active')
  .order('created_at', { ascending: false })
  .limit(10);
```

### Caching
```typescript
// Cache wrapper for Supabase queries
export async function cachedQuery<T>(
  key: string,
  queryFn: () => Promise<T>,
  options: { ttl: number }
) {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);

  const data = await queryFn();
  await redis.setex(key, options.ttl, JSON.stringify(data));
  
  return data;
}
```

## Migration Handling

### Schema Migrations
```sql
-- Example migration
BEGIN;

-- Add new column
ALTER TABLE workflows
ADD COLUMN version TEXT NOT NULL DEFAULT '1.0.0';

-- Update existing records
UPDATE workflows
SET version = '1.0.0'
WHERE version IS NULL;

-- Add constraint
ALTER TABLE workflows
ADD CONSTRAINT valid_version
CHECK (version ~ '^\\d+\\.\\d+\\.\\d+$');

COMMIT;
```

### Data Migrations
```typescript
// Data migration utility
async function migrateData() {
  const { data: workflows, error } = await supabase
    .from('workflows')
    .select('id, config')
    .eq('version', '1.0.0');

  if (error) throw error;

  for (const workflow of workflows) {
    // Transform data
    const newConfig = transformConfig(workflow.config);

    // Update record
    await supabase
      .from('workflows')
      .update({
        config: newConfig,
        version: '2.0.0'
      })
      .eq('id', workflow.id);
  }
}
```
