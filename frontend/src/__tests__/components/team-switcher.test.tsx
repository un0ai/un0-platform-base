import { render, screen } from '@testing-library/react'
import { TeamSwitcher } from '@/components/team-switcher'
import { usePathname } from 'next/navigation'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/dashboard/projects'),
}))

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  ),
}))

// Mock sidebar components
jest.mock('@/components/ui/sidebar', () => ({
  SidebarMenu: ({ children }: any) => <div data-testid="sidebar-menu">{children}</div>,
  SidebarMenuItem: ({ children }: any) => <div data-testid="sidebar-menu-item">{children}</div>,
  SidebarMenuButton: ({ children, isActive, ...props }: any) => (
    <div data-testid="sidebar-menu-button" data-active={isActive} {...props}>
      {children}
    </div>
  ),
}))

describe('TeamSwitcher', () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue('/dashboard/projects')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders team name and logo', () => {
    render(<TeamSwitcher />)
    
    expect(screen.getByText('[ un0.ai ]')).toBeInTheDocument()
    expect(screen.getByText('AI Playground')).toBeInTheDocument()
    expect(screen.getByAltText('un0.ai Logo')).toBeInTheDocument()
  })

  it('renders with correct structure', () => {
    render(<TeamSwitcher />)
    
    expect(screen.getByTestId('sidebar-menu')).toBeInTheDocument()
    expect(screen.getByTestId('sidebar-menu-item')).toBeInTheDocument()
    expect(screen.getByTestId('sidebar-menu-button')).toBeInTheDocument()
  })

  it('sets active state based on pathname', () => {
    (usePathname as jest.Mock).mockReturnValue('/dashboard/about')
    render(<TeamSwitcher />)
    
    expect(screen.getByTestId('sidebar-menu-button')).toHaveAttribute('data-active', 'true')
  })
})
