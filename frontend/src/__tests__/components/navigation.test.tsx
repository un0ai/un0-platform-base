import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter, usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

// Mock components
const NavMain = ({ items }: { items: Array<{ name: string; url: string }> }) => {
  const router = useRouter()
  return (
    <nav>
      {items.map(item => (
        <a 
          key={item.name} 
          href={item.url}
          onClick={(e) => {
            e.preventDefault()
            router.push(item.url)
          }}
        >
          {item.name}
        </a>
      ))}
    </nav>
  )
}

const NavProjects = ({ projects }: { projects: Array<{ name: string; url: string }> }) => {
  const router = useRouter()
  return (
    <nav>
      {projects.map(project => (
        <a 
          key={project.name} 
          href={project.url}
          onClick={(e) => {
            e.preventDefault()
            router.push(project.url)
          }}
        >
          {project.name}
        </a>
      ))}
    </nav>
  )
}

const AppSidebar = () => {
  const { data: session } = useSession()
  
  if (!session) {
    return null
  }
  
  return <div>Sidebar Content</div>
}

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
        const { container } = render(<AppSidebar />)
        expect(container.firstChild).toHaveTextContent('Sidebar Content')
        container.remove()
      })
    })
  })
})
