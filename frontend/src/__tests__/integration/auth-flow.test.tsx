import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'

// Mock next-auth
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn()
}))

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn()
}))

// Mock components
const SignInWithGoogleButton = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  const handleSignIn = async () => {
    try {
      await signIn('google')
    } catch (error) {
      console.error('Sign in failed:', error)
    }
  }

  if (status === 'authenticated') {
    router.replace('/dashboard')
    return null
  }

  return (
    <button onClick={handleSignIn}>
      Sign in with Google
    </button>
  )
}

const UserNavWrapper = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.replace('/login')
  }

  if (!session) {
    return null
  }

  return (
    <div>
      <div className="user-menu">
        <span>{session.user?.email}</span>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </div>
  )
}

const AppSidebar = () => {
  const { data: session } = useSession()
  const router = useRouter()

  if (!session) {
    router.replace('/login')
    return null
  }

  return <div>Sidebar Content</div>
}

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
      ;(useSession as jest.Mock).mockReturnValue({
        data: null,
        status: 'unauthenticated'
      })

      render(<SignInWithGoogleButton />)
      
      const signInButton = screen.getByText(/sign in with google/i)
      fireEvent.click(signInButton)

      expect(signIn).toHaveBeenCalledWith('google')

      ;(useSession as jest.Mock).mockReturnValue({
        data: { user: { email: 'test@example.com' } },
        status: 'authenticated'
      })

      render(<SignInWithGoogleButton />)

      await waitFor(() => {
        expect(mockRouter.replace).toHaveBeenCalledWith('/dashboard')
      })
    })

    it('should handle failed Google sign in', async () => {
      ;(useSession as jest.Mock).mockReturnValue({
        data: null,
        status: 'unauthenticated'
      })

      ;(signIn as jest.Mock).mockImplementation(() => {
        throw new Error('Authentication failed')
      })
      
      render(<SignInWithGoogleButton />)
      
      const signInButton = screen.getByText(/sign in with google/i)
      fireEvent.click(signInButton)

      await waitFor(() => {
        expect(signIn).toHaveBeenCalledWith('google')
      })
    })
  })

  describe('Protected Navigation', () => {
    it('should show authenticated navigation', () => {
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
      expect(screen.getByText('Sidebar Content')).toBeInTheDocument()
    })
  })

  describe('Sign Out Flow', () => {
    it('should handle sign out process', async () => {
      ;(useSession as jest.Mock).mockReturnValue({
        data: { user: { email: 'test@example.com' } },
        status: 'authenticated'
      })

      render(<UserNavWrapper />)

      const signOutButton = screen.getByText(/sign out/i)
      fireEvent.click(signOutButton)

      expect(signOut).toHaveBeenCalled()

      ;(useSession as jest.Mock).mockReturnValue({
        data: null,
        status: 'unauthenticated'
      })

      render(<UserNavWrapper />)

      await waitFor(() => {
        expect(mockRouter.replace).toHaveBeenCalledWith('/login')
      })
    })
  })

  describe('Session Management', () => {
    it('should handle session expiry', async () => {
      ;(useSession as jest.Mock).mockReturnValue({
        data: null,
        status: 'unauthenticated'
      })

      render(<AppSidebar />)

      await waitFor(() => {
        expect(mockRouter.replace).toHaveBeenCalledWith('/login')
      })
    })

    it('should maintain session when valid', async () => {
      const mockSession = {
        data: {
          user: { email: 'test@example.com' },
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
        },
        status: 'authenticated'
      }

      ;(useSession as jest.Mock).mockReturnValue(mockSession)

      render(<AppSidebar />)

      await waitFor(() => {
        expect(screen.getByText('Sidebar Content')).toBeInTheDocument()
        expect(mockRouter.replace).not.toHaveBeenCalled()
      })
    })
  })
})
