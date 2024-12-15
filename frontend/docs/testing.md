# Testing Guide

This document provides information about testing practices in our application.

## Testing Stack

- Jest for unit and integration tests
- React Testing Library for component tests
- Cypress for E2E tests (if implemented)

## Test Types

### Unit Tests

Located in `__tests__` directory, unit tests cover individual functions and utilities.

Example:
```typescript
describe('utils/format', () => {
  it('should format date correctly', () => {
    expect(formatDate('2024-01-01')).toBe('Jan 1, 2024');
  });
});
```

### Component Tests

Test components using React Testing Library:

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '../components/ui/button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

### Integration Tests

Test component interactions and data flow:

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectList } from '../components/project-list';

describe('ProjectList', () => {
  it('loads and displays projects', async () => {
    render(<ProjectList />);
    expect(await screen.findByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByText('Project 1')).toBeInTheDocument();
  });
});
```

## Test Coverage

We aim for high test coverage:
- 100% coverage for utilities
- 90% coverage for components
- 80% coverage for pages

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- path/to/test
```

## Best Practices

1. Write tests before code (TDD) when possible
2. Test component behavior, not implementation
3. Use meaningful test descriptions
4. Mock external dependencies
5. Keep tests simple and focused
6. Use proper assertions
7. Clean up after tests

## Continuous Integration

Tests are run automatically on:
- Pull requests
- Merges to main branch
- Release builds

## Debugging Tests

1. Use `debug()` from React Testing Library
2. Use `console.log` in tests
3. Use the `--debug` flag with Jest

## Common Patterns

### Testing Hooks

```typescript
import { renderHook } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter());
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
});
```

### Testing Forms

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from './LoginForm';

test('submits form with correct data', async () => {
  const onSubmit = jest.fn();
  render(<LoginForm onSubmit={onSubmit} />);
  
  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'test@example.com' },
  });
  
  fireEvent.click(screen.getByText('Submit'));
  
  expect(onSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
  });
});
