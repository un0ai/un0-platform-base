import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import { createClient } from "@/utils/supabase/client"

// Mock Supabase client
const mockSupabaseAuth = {
  getSession: jest.fn(),
  signInWithOAuth: jest.fn(),
  signOut: jest.fn(),
  onAuthStateChange: jest.fn(() => ({
    data: { subscription: { unsubscribe: jest.fn() } }
  }))
}

jest.mock('@/utils/supabase/client', () => ({
  createClient: jest.fn(() => ({
    auth: mockSupabaseAuth
  }))
}))

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))

const SignInWithGoogleButton = () => {
  const router = useRouter()
  const supabase = createClient()

  const handleSignIn = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })
    } catch (error) {
      console.error('Sign in failed:', error)
    }
  }

  return (
    <button onClick={handleSignIn}>
      Sign in with Google
    </button>
  )
}

const UserNav = () => {
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.replace('/login')
  }

  return (
    <div>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  )
}

describe('Authentication Flow', () => {
  const mockRouter = {
    push: jest.fn(),
    replace: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
  })

  describe('Sign In Flow', () => {
    it('handles Google sign in', async () => {
      render(<SignInWithGoogleButton />)
      
      const signInButton = screen.getByText(/sign in with google/i)
      fireEvent.click(signInButton)

      expect(mockSupabaseAuth.signInWithOAuth).toHaveBeenCalledWith({
        provider: 'google',
        options: {
          redirectTo: expect.stringContaining('/auth/callback')
        }
      })
    })

    it('handles sign in errors', async () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation()
      mockSupabaseAuth.signInWithOAuth.mockRejectedValueOnce(new Error('Sign in failed'))

      render(<SignInWithGoogleButton />)
      
      const signInButton = screen.getByText(/sign in with google/i)
      await fireEvent.click(signInButton)

      expect(consoleError).toHaveBeenCalledWith('Sign in failed:', expect.any(Error))
      consoleError.mockRestore()
    })
  })

  describe('Sign Out Flow', () => {
    it('handles sign out', async () => {
      render(<UserNav />)
      
      const signOutButton = screen.getByText(/sign out/i)
      await fireEvent.click(signOutButton)

      expect(mockSupabaseAuth.signOut).toHaveBeenCalled()
      expect(mockRouter.replace).toHaveBeenCalledWith('/login')
    })
  })
})
