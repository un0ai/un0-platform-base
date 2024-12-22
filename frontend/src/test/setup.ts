import '@testing-library/jest-dom';
import React from 'react';
import { TextEncoder, TextDecoder } from 'util';

// Mock React
global.React = React

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: {},
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

// Mock Next/Navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    };
  },
  useSearchParams() {
    return {
      get: jest.fn(),
    };
  },
  usePathname: jest.fn(() => '/'),
  redirect: jest.fn(),
}));

// Mock next-auth
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => ({
    data: null,
    status: 'unauthenticated',
  })),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

// Suppress specific React warnings during tests
const originalError = console.error;
console.error = (...args) => {
  const suppressedWarnings = [
    'Warning: Function components cannot be given refs',
    'Warning: React does not recognize the `asChild` prop',
    'Warning: ReactDOM.render is no longer supported',
    'Error: Uncaught [Error: Element type is invalid',
  ];
  
  if (suppressedWarnings.some(warning => args.join(' ').includes(warning))) {
    return;
  }
  originalError.call(console, ...args);
};

// Add missing globals
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock Request
global.Request = jest.fn((input: RequestInfo | URL, init?: RequestInit) => ({
  url: typeof input === 'string' ? input : input.toString(),
  method: init?.method || 'GET',
  headers: new Headers(init?.headers),
  ...init,
})) as any;

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
) as jest.Mock;

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
