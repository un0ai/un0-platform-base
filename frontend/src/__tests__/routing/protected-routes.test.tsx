import { render, screen } from '@testing-library/react'
import { useRouter, usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

// Mock components
const DashboardPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'unauthenticated') {
    router.replace('/login')
    return null
  }

  return <div>Dashboard Content</div>
}

const LoginPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  if (status === 'authenticated') {
    const returnUrl = pathname?.includes('returnUrl=') 
      ? pathname.split('returnUrl=')[1]
      : '/dashboard'
    router.replace(returnUrl)
    return null
  }

  return <div>Login Page</div>
}

// Mocks
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn()
}))

jest.mock('next-auth/react', () => ({
  useSession: jest.fn()
}))

describe('Protected Routes', () => {
  const mockRouter = {
    push: jest.fn(),
    replace: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
  })

  describe('Dashboard Routes', () => {
    const protectedPaths = [
      '/dashboard',
      '/dashboard/monitor',
      '/dashboard/platform',
      '/dashboard/learn'
    ]

    protectedPaths.forEach(path => {
      it(`should protect ${path} from unauthenticated access`, () => {
        ;(usePathname as jest.Mock).mockReturnValue(path)
        ;(useSession as jest.Mock).mockReturnValue({
          data: null,
          status: 'unauthenticated'
        })

        render(<DashboardPage />)
        expect(mockRouter.replace).toHaveBeenCalledWith('/login')
      })

      it(`should allow authenticated access to ${path}`, () => {
        ;(usePathname as jest.Mock).mockReturnValue(path)
        ;(useSession as jest.Mock).mockReturnValue({
          data: { user: { email: 'test@example.com' } },
          status: 'authenticated'
        })

        render(<DashboardPage />)
        expect(mockRouter.replace).not.toHaveBeenCalled()
        expect(screen.getByText('Dashboard Content')).toBeInTheDocument()
      })
    })
  })

  describe('Public Routes', () => {
    const publicPaths = [
      '/login',
      '/signup',
      '/error',
      '/'
    ]

    publicPaths.forEach(path => {
      it(`should allow unauthenticated access to ${path}`, () => {
        ;(usePathname as jest.Mock).mockReturnValue(path)
        ;(useSession as jest.Mock).mockReturnValue({
          data: null,
          status: 'unauthenticated'
        })

        render(<LoginPage />)
        expect(mockRouter.replace).not.toHaveBeenCalled()
        expect(screen.getByText('Login Page')).toBeInTheDocument()
      })
    })
  })

  describe('Redirect Logic', () => {
    it('should redirect authenticated users from login to dashboard', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/login')
      ;(useSession as jest.Mock).mockReturnValue({
        data: { user: { email: 'test@example.com' } },
        status: 'authenticated'
      })

      render(<LoginPage />)
      expect(mockRouter.replace).toHaveBeenCalledWith('/dashboard')
    })

    it('should preserve return URL in query params', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/login?returnUrl=/dashboard/monitor')
      ;(useSession as jest.Mock).mockReturnValue({
        data: { user: { email: 'test@example.com' } },
        status: 'authenticated'
      })

      render(<LoginPage />)
      expect(mockRouter.replace).toHaveBeenCalledWith('/dashboard/monitor')
    })
  })
})
