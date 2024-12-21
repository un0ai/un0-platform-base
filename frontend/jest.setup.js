import '@testing-library/jest-dom'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}))

// Mock environment variables
process.env = {
  ...process.env,
  NEXT_PUBLIC_SUPABASE_URL: 'http://localhost:54321',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: 'dummy-key',
  NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
  NEXTAUTH_URL: 'http://localhost:3000',
  NEXTAUTH_SECRET: 'dummy-secret',
  GOOGLE_CLIENT_ID: 'dummy-client-id',
  GOOGLE_CLIENT_SECRET: 'dummy-client-secret'
}

// Suppress specific console errors during tests
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' && (
        args[0].includes('Warning: ReactDOM.render is no longer supported') ||
        args[0].includes('Invalid value for prop') ||
        args[0].includes('Failed prop type')
      )
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

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
})
