import { render, screen, waitFor, act } from '@testing-library/react'
import { useRouter, usePathname } from 'next/navigation'
import { RequireAuth } from '@/components/auth/require-auth'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  redirect: jest.fn(),
}))

// Mock Supabase client
const mockSupabaseAuth = {
  getSession: jest.fn(),
  onAuthStateChange: jest.fn(() => ({
    data: { subscription: { unsubscribe: jest.fn() } }
  }))
}

jest.mock('@/utils/supabase/client', () => ({
  createClient: jest.fn(() => ({
    auth: mockSupabaseAuth
  }))
}))

describe('Protected Routes Integration', () => {
  const mockPush = jest.fn()
  const mockPathname = '/protected'

  beforeEach(() => {
    mockSupabaseAuth.getSession.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)))
    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    })
    ;(usePathname as jest.Mock).mockReturnValue(mockPathname)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Authenticated User Flow', () => {
    beforeEach(() => {
      mockSupabaseAuth.getSession.mockImplementation(() => 
        new Promise(resolve => 
          setTimeout(() => 
            resolve({ data: { session: { user: { id: '1' } } } }), 100
          )
        )
      )
    })

    it('allows access to protected routes', async () => {
      let rendered
      await act(async () => {
        rendered = render(
          <RequireAuth>
            <div>Protected Content</div>
          </RequireAuth>
        )
      })

      // First, we should see the loading spinner
      expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()

      // Then, after auth check, we should see the protected content
      await waitFor(() => {
        expect(screen.getByText('Protected Content')).toBeInTheDocument()
      })
      
      // Loading spinner should be gone
      expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument()
      
      // And no redirect should have happened
      expect(mockPush).not.toHaveBeenCalled()
    })
  })

  describe('Unauthenticated User Flow', () => {
    beforeEach(() => {
      mockSupabaseAuth.getSession.mockImplementation(() => 
        new Promise(resolve => 
          setTimeout(() => 
            resolve({ data: { session: null } }), 100
          )
        )
      )
    })

    it('redirects to sign-in page', async () => {
      let rendered
      await act(async () => {
        rendered = render(
          <RequireAuth>
            <div>Protected Content</div>
          </RequireAuth>
        )
      })

      // First, we should see the loading spinner
      expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()

      // Then we should be redirected to sign-in
      await waitFor(() => {
        expect(mockPush).toHaveBeenCalledWith('/sign-in')
      })

      // Loading spinner should be gone
      expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument()

      // And protected content should not be visible
      expect(screen.queryByText('Protected Content')).not.toBeInTheDocument()
    })
  })
})
