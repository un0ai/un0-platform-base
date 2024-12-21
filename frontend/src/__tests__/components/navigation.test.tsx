import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter, usePathname } from 'next/navigation'
import { AppSidebar } from '@/components/app-sidebar'
import { NavMain } from '@/components/nav-main'
import { NavProjects } from '@/components/nav-projects'

// Mocks
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn()
}))

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => ({
    data: { user: { email: 'test@example.com' } },
    status: 'authenticated'
  }))
}))

describe('Navigation Components', () => {
  const mockRouter = {
    push: jest.fn(),
    replace: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
  })

  describe('AppSidebar', () => {
    it('should render all main navigation sections', () => {
      render(<AppSidebar />)
      
      const sections = [
        'Monitor',
        'Platform',
        'Learn'
      ]

      sections.forEach(section => {
        expect(screen.getByText(section)).toBeInTheDocument()
      })
    })

    it('should highlight active section', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/dashboard/monitor')
      render(<AppSidebar />)
      
      const activeSection = screen.getByText('Monitor').closest('a')
      expect(activeSection).toHaveClass('bg-sidebar-active')
    })
  })

  describe('NavMain', () => {
    const mockItems = [
      { name: 'Monitor', url: '/dashboard/monitor' },
      { name: 'Platform', url: '/dashboard/platform' }
    ]

    it('should render navigation items', () => {
      render(<NavMain items={mockItems} />)
      
      mockItems.forEach(item => {
        expect(screen.getByText(item.name)).toBeInTheDocument()
      })
    })

    it('should handle navigation clicks', () => {
      render(<NavMain items={mockItems} />)
      
      fireEvent.click(screen.getByText('Monitor'))
      expect(mockRouter.push).toHaveBeenCalledWith('/dashboard/monitor')
    })
  })

  describe('NavProjects', () => {
    const mockProjects = [
      { name: 'Project 1', url: '/dashboard/projects/1' },
      { name: 'Project 2', url: '/dashboard/projects/2' }
    ]

    it('should render project list', () => {
      render(<NavProjects projects={mockProjects} />)
      
      mockProjects.forEach(project => {
        expect(screen.getByText(project.name)).toBeInTheDocument()
      })
    })

    it('should handle project selection', () => {
      render(<NavProjects projects={mockProjects} />)
      
      fireEvent.click(screen.getByText('Project 1'))
      expect(mockRouter.push).toHaveBeenCalledWith('/dashboard/projects/1')
    })
  })

  describe('Navigation State', () => {
    it('should preserve navigation state between routes', () => {
      const paths = [
        '/dashboard/monitor',
        '/dashboard/platform',
        '/dashboard/learn'
      ]

      paths.forEach(path => {
        ;(usePathname as jest.Mock).mockReturnValue(path)
        render(<AppSidebar />)
        
        const activeLink = screen.getByText(path.split('/').pop()!).closest('a')
        expect(activeLink).toHaveClass('bg-sidebar-active')
      })
    })

    it('should handle deep navigation paths', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/dashboard/monitor/performance-metrics')
      render(<AppSidebar />)
      
      const monitorLink = screen.getByText('Monitor').closest('a')
      expect(monitorLink).toHaveClass('bg-sidebar-active')
    })
  })
})
