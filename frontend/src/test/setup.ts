import '@testing-library/jest-dom'
import React from 'react'

// Mock React
global.React = React

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
  })),
  usePathname: jest.fn(() => '/'),
  redirect: jest.fn(),
}))

// Mock next-auth
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => ({
    data: null,
    status: 'unauthenticated',
  })),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

// Mock TextEncoder/TextDecoder
class MockTextEncoder {
  encode(str: string): Uint8Array {
    return new Uint8Array([]);
  }
}

class MockTextDecoder {
  decode(bytes: Uint8Array): string {
    return "";
  }
}

global.TextEncoder = MockTextEncoder as any;
global.TextDecoder = MockTextDecoder as any;

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

// Suppress console.error in tests
const originalError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('Warning: ReactDOM.render is no longer supported') ||
     args[0].includes('Error: Uncaught [Error: Element type is invalid'))
  ) {
    return;
  }
  originalError.call(console, ...args);
};
