# API Documentation

This document describes the API integration points in our frontend application.

## Environment Configuration

The application uses environment variables for API configuration:

```env
API_BASE_URL=http://localhost:8000
```

## API Integration

### API Client

We use native fetch API with proper error handling and type safety:

```typescript
async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${env.API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}
```

### Error Handling

All API calls include proper error handling:
- Network errors
- API errors
- Validation errors
- Rate limiting

### Type Safety

All API responses are properly typed using TypeScript interfaces.

## API Endpoints

Document your API endpoints here:

### Projects API

- `GET /api/projects` - List all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project details
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

## Best Practices

1. Always use TypeScript for API calls
2. Include proper error handling
3. Add loading states
4. Use proper HTTP methods
5. Handle rate limiting
6. Add retry logic for failed requests
7. Cache responses when appropriate
