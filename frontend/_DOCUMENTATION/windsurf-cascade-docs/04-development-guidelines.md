# Development Guidelines

## Code Style and Standards

### TypeScript Guidelines

#### Type Definitions
```typescript
// Use explicit types
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  settings?: UserSettings;
}

// Use type for unions/intersections
type UserResponse = User | Error;
type AdminUser = User & AdminPrivileges;

// Use enums for fixed values
enum Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}
```

#### Function Definitions
```typescript
// Use function type annotations
function fetchUser(id: string): Promise<User> {
  // Implementation
}

// Use arrow functions for callbacks
const handleClick = (event: React.MouseEvent) => {
  // Implementation
}

// Use generics when needed
function transformData<T, U>(data: T, transformer: (input: T) => U): U {
  return transformer(data);
}
```

### React Best Practices

#### Component Structure
```typescript
// Functional components with TypeScript
interface Props {
  title: string;
  children: React.ReactNode;
  onAction?: () => void;
}

const Component: React.FC<Props> = ({ title, children, onAction }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
      {onAction && <button onClick={onAction}>Action</button>}
    </div>
  );
};
```

#### Hooks Usage
```typescript
// Custom hooks
function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading };
}

// Component with hooks
function UserProfile({ userId }: { userId: string }) {
  const { user, loading } = useUser(userId);
  
  if (loading) return <LoadingSpinner />;
  if (!user) return <ErrorMessage />;
  
  return <UserCard user={user} />;
}
```

## File Structure

### Page Organization
```
pages/
├── dashboard/
│   ├── build/
│   │   ├── page.tsx           # Main build page
│   │   ├── loading.tsx        # Loading state
│   │   ├── error.tsx          # Error boundary
│   │   └── [id]/              # Dynamic routes
│   │       ├── page.tsx
│   │       └── layout.tsx
│   └── deploy/
│       ├── page.tsx
│       └── [...slug]/
│           └── page.tsx
```

### Component Organization
```
components/
├── ui/                        # Base UI components
├── features/                  # Feature-specific components
│   ├── auth/
│   ├── dashboard/
│   └── settings/
└── shared/                    # Shared components
```

## State Management

### Context Usage
```typescript
// Create context
interface AuthContext {
  user: User | null;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

// Provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Implementation
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
```

### API Integration
```typescript
// API client setup
const api = {
  get: async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },
  
  post: async <T>(url: string, data: unknown): Promise<T> => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },
};

// Usage in components
async function fetchData() {
  try {
    const data = await api.get<DataType>('/api/endpoint');
    // Handle success
  } catch (error) {
    // Handle error
  }
}
```

## Error Handling

### Error Boundaries
```typescript
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
```

### API Error Handling
```typescript
// Error types
interface ApiError extends Error {
  code: string;
  status: number;
}

// Error handling utility
async function handleApiError(error: unknown): Promise<never> {
  if (error instanceof Error) {
    // Handle known error types
    if ((error as ApiError).code === 'UNAUTHORIZED') {
      // Handle auth error
    }
  }
  
  // Handle unknown errors
  console.error('Unknown error:', error);
  throw error;
}
```

## Performance Optimization

### Code Splitting
```typescript
// Lazy loading components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### Memoization
```typescript
// Memoize expensive calculations
const memoizedValue = useMemo(() => {
  return expensiveCalculation(prop);
}, [prop]);

// Memoize callbacks
const memoizedCallback = useCallback(() => {
  doSomething(prop);
}, [prop]);

// Memoize components
const MemoizedComponent = memo(({ prop }) => {
  return <div>{prop}</div>;
});
```

## Testing

### Unit Tests
```typescript
// Component testing
describe('Component', () => {
  it('renders correctly', () => {
    render(<Component prop="value" />);
    expect(screen.getByText('value')).toBeInTheDocument();
  });

  it('handles user interaction', async () => {
    const onAction = jest.fn();
    render(<Component onAction={onAction} />);
    
    await userEvent.click(screen.getByRole('button'));
    expect(onAction).toHaveBeenCalled();
  });
});
```

### Integration Tests
```typescript
// API integration testing
describe('API Integration', () => {
  it('fetches data correctly', async () => {
    const data = await fetchData();
    expect(data).toMatchSnapshot();
  });

  it('handles errors correctly', async () => {
    // Mock failed request
    server.use(
      rest.get('/api/data', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    await expect(fetchData()).rejects.toThrow();
  });
});
```

## Documentation

### Component Documentation
```typescript
/**
 * Button component with various styles and states.
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="large" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
interface ButtonProps {
  /** The variant style of the button */
  variant: 'primary' | 'secondary' | 'ghost';
  /** The size of the button */
  size: 'small' | 'medium' | 'large';
  /** Click handler */
  onClick?: () => void;
  /** Button contents */
  children: React.ReactNode;
}
```

### API Documentation
```typescript
/**
 * Fetches user data from the API.
 * 
 * @param id - The user ID to fetch
 * @returns Promise resolving to user data
 * @throws {ApiError} When the API request fails
 * 
 * @example
 * ```typescript
 * const user = await fetchUser('123');
 * console.log(user.name);
 * ```
 */
async function fetchUser(id: string): Promise<User> {
  // Implementation
}
```
