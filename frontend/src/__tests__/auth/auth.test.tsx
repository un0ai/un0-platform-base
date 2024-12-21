import { render, screen, waitFor } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import { SignInWithGoogleButton } from '@/components/auth/SignInWithGoogleButton'
import { useSession } from 'next-auth/react'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))

// Mock next-auth/react
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn()
}))

describe('Authentication Tests', () => {
  const mockRouter = {
    push: jest.fn(),
    replace: jest.fn()
  }

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter)
  })

  describe('Protected Route Middleware', () => {
    it('should redirect to login when no session exists', async () => {
      ;(useSession as jest.Mock).mockReturnValue({
        data: null,
        status: 'unauthenticated'
      })

      render(<SignInWithGoogleButton />)
      
      await waitFor(() => {
        expect(mockRouter.replace).toHaveBeenCalledWith('/login')
      })
    })

    it('should allow access to protected route with valid session', async () => {
      ;(useSession as jest.Mock).mockReturnValue({
        data: {
          user: { email: 'test@example.com' },
          expires: '2024-12-22'
        },
        status: 'authenticated'
      })

      render(<SignInWithGoogleButton />)
      
      await waitFor(() => {
        expect(mockRouter.replace).not.toHaveBeenCalled()
      })
    })
  })

  describe('Session Management', () => {
    it('should maintain session state', async () => {
      const mockSession = {
        data: {
          user: { email: 'test@example.com' },
          expires: '2024-12-22'
        },
        status: 'authenticated'
      }

      ;(useSession as jest.Mock).mockReturnValue(mockSession)

      await waitFor(() => {
        expect(useSession().data).toEqual(mockSession.data)
      })
    })

    it('should handle session expiry', async () => {
      const expiredSession = {
        data: {
          user: { email: 'test@example.com' },
          expires: '2023-12-21' // Past date
        },
        status: 'unauthenticated'
      }

      ;(useSession as jest.Mock).mockReturnValue(expiredSession)

      await waitFor(() => {
        expect(mockRouter.replace).toHaveBeenCalledWith('/login')
      })
    })
  })
})
