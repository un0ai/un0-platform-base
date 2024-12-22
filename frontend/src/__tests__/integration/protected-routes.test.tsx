import { render, screen, waitFor, act } from '@testing-library/react'
import { useRouter, usePathname } from 'next/navigation'
import { ProtectedPage } from '@/components/auth/protected-page'
import ProtectedRoute from '@/components/auth/protected-route'

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

  describe('ProtectedRoute Component (Guest Browsing)', () => {
    it('allows guest browsing when not authenticated', async () => {
      mockSupabaseAuth.getSession.mockResolvedValue({ data: { session: null } })

      await act(async () => {
        render(
          <ProtectedRoute>
            <div>Guest Visible Content</div>
          </ProtectedRoute>
        )
      })

      // Should show content even without auth
      await waitFor(() => {
        expect(screen.getByText('Guest Visible Content')).toBeInTheDocument()
      })
      
      // Should not redirect
      expect(mockPush).not.toHaveBeenCalled()
    })

    it('allows access when authenticated', async () => {
      mockSupabaseAuth.getSession.mockResolvedValue({ 
        data: { session: { user: { id: '1' } } }
      })

      await act(async () => {
        render(
          <ProtectedRoute>
            <div>Guest Visible Content</div>
          </ProtectedRoute>
        )
      })

      await waitFor(() => {
        expect(screen.getByText('Guest Visible Content')).toBeInTheDocument()
      })
    })
  })

  describe('ProtectedPage Component (Protected Content)', () => {
    it('shows login form when not authenticated', async () => {
      mockSupabaseAuth.getSession.mockResolvedValue({ data: { session: null } })

      await act(async () => {
        render(
          <ProtectedPage>
            <div>Protected Content</div>
          </ProtectedPage>
        )
      })

      // Should show login form
      await waitFor(() => {
        expect(screen.getByText('Sign in with Google')).toBeInTheDocument()
      })

      // Should show restricted message
      expect(screen.getByText('Restricted Area')).toBeInTheDocument()

      // Should not show protected content
      expect(screen.queryByText('Protected Content')).not.toBeInTheDocument()
    })

    it('shows protected content when authenticated', async () => {
      mockSupabaseAuth.getSession.mockResolvedValue({ 
        data: { session: { user: { id: '1' } } }
      })

      await act(async () => {
        render(
          <ProtectedPage>
            <div>Protected Content</div>
          </ProtectedPage>
        )
      })

      // Should show protected content
      await waitFor(() => {
        expect(screen.getByText('Protected Content')).toBeInTheDocument()
      })

      // Should not show login form
      expect(screen.queryByText('Sign in with Google')).not.toBeInTheDocument()
    })
  })
})
