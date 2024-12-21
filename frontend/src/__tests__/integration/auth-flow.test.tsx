import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import { AppSidebar } from '@/components/app-sidebar'
import { UserNavWrapper } from '@/components/user-nav-wrapper'

// Mocks
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn()
}))

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn()
}))

describe('Authentication Flow Integration', () => {
  const mockRouter = {
    push: jest.fn(),
    replace: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
  })

  describe('Sign In Flow', () => {
    it('should handle successful Google sign in', async () => {
      // Mock initial unauthenticated state
      ;(useSession as jest.Mock).mockReturnValueOnce({
        data: null,
        status: 'unauthenticated'
      })

      render(<UserNavWrapper />)
      
      // Click sign in button
      const signInButton = screen.getByText(/sign in/i)
      fireEvent.click(signInButton)

      // Verify Google sign in was triggered
      expect(signIn).toHaveBeenCalledWith('google')

      // Mock successful authentication
      ;(useSession as jest.Mock).mockReturnValueOnce({
        data: { user: { email: 'test@example.com' } },
        status: 'authenticated'
      })

      await waitFor(() => {
        expect(mockRouter.replace).toHaveBeenCalledWith('/dashboard')
      })
    })

    it('should handle failed Google sign in', async () => {
      // Mock failed authentication
      ;(signIn as jest.Mock).mockRejectedValueOnce(new Error('Authentication failed'))
      
      render(<UserNavWrapper />)
      
      const signInButton = screen.getByText(/sign in/i)
      fireEvent.click(signInButton)

      await waitFor(() => {
        expect(screen.getByText(/authentication failed/i)).toBeInTheDocument()
      })
    })
  })

  describe('Protected Navigation', () => {
    it('should show authenticated navigation', async () => {
      // Mock authenticated session
      ;(useSession as jest.Mock).mockReturnValue({
        data: { 
          user: { 
            email: 'test@example.com',
            name: 'Test User'
          }
        },
        status: 'authenticated'
      })

      render(<AppSidebar />)

      // Verify authenticated navigation items
      expect(screen.getByText('Monitor')).toBeInTheDocument()
      expect(screen.getByText('Platform')).toBeInTheDocument()
      expect(screen.getByText('Learn')).toBeInTheDocument()
    })

    it('should handle navigation after authentication', async () => {
      // Mock authentication flow
      ;(useSession as jest.Mock)
        .mockReturnValueOnce({ data: null, status: 'unauthenticated' })
        .mockReturnValueOnce({
          data: { user: { email: 'test@example.com' } },
          status: 'authenticated'
        })

      render(<AppSidebar />)

      // Simulate successful sign in
      await waitFor(() => {
        expect(screen.getByText('Monitor')).toBeInTheDocument()
      })

      // Test navigation
      fireEvent.click(screen.getByText('Monitor'))
      expect(mockRouter.push).toHaveBeenCalledWith('/dashboard/monitor')
    })
  })

  describe('Sign Out Flow', () => {
    it('should handle sign out process', async () => {
      // Mock authenticated session
      ;(useSession as jest.Mock).mockReturnValue({
        data: { user: { email: 'test@example.com' } },
        status: 'authenticated'
      })

      render(<UserNavWrapper />)

      // Find and click sign out button
      const userMenu = screen.getByText('test@example.com')
      fireEvent.click(userMenu)
      
      const signOutButton = screen.getByText(/sign out/i)
      fireEvent.click(signOutButton)

      // Verify sign out was called
      expect(signOut).toHaveBeenCalled()

      // Mock unauthenticated state after sign out
      ;(useSession as jest.Mock).mockReturnValue({
        data: null,
        status: 'unauthenticated'
      })

      await waitFor(() => {
        expect(mockRouter.replace).toHaveBeenCalledWith('/login')
      })
    })
  })

  describe('Session Management', () => {
    it('should handle session expiry', async () => {
      // Mock expired session
      ;(useSession as jest.Mock)
        .mockReturnValueOnce({
          data: { 
            user: { email: 'test@example.com' },
            expires: '2023-12-21' // Past date
          },
          status: 'authenticated'
        })
        .mockReturnValueOnce({
          data: null,
          status: 'unauthenticated'
        })

      render(<AppSidebar />)

      await waitFor(() => {
        expect(mockRouter.replace).toHaveBeenCalledWith('/login')
      })
    })

    it('should refresh session when needed', async () => {
      // Mock session refresh
      const mockSession = {
        data: {
          user: { email: 'test@example.com' },
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // Tomorrow
        },
        status: 'authenticated'
      }

      ;(useSession as jest.Mock).mockReturnValue(mockSession)

      render(<AppSidebar />)

      await waitFor(() => {
        expect(mockRouter.replace).not.toHaveBeenCalled()
      })
    })
  })
})
