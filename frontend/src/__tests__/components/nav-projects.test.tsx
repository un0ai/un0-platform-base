import { render, screen, fireEvent } from '@testing-library/react'
import { NavProjects } from '@/components/nav-projects'
import { useRouter } from 'next/navigation'
import { Folder } from 'lucide-react'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(() => '/dashboard/projects'),
}))

// Mock shadcn components
jest.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
}))

jest.mock('@/components/ui/accordion', () => ({
  Accordion: ({ children }: any) => <div>{children}</div>,
  AccordionContent: ({ children }: any) => <div>{children}</div>,
  AccordionItem: ({ children }: any) => <div>{children}</div>,
  AccordionTrigger: ({ children }: any) => <div>{children}</div>,
}))

// Mock sidebar context
const mockSidebarContext = {
  state: 'expanded',
  open: true,
  setOpen: jest.fn(),
  openMobile: false,
  setOpenMobile: jest.fn(),
  isMobile: false,
  toggleSidebar: jest.fn(),
}

jest.mock('@/components/ui/sidebar', () => ({
  ...jest.requireActual('@/components/ui/sidebar'),
  useSidebar: () => mockSidebarContext,
  SidebarGroup: ({ children, className }: any) => <div className={className}>{children}</div>,
  SidebarGroupLabel: ({ children }: any) => <div>{children}</div>,
  SidebarMenu: ({ children }: any) => <div>{children}</div>,
  SidebarMenuAction: ({ children }: any) => <div>{children}</div>,
  SidebarMenuButton: ({ children, isActive, asChild }: any) => (
    <div data-active={isActive}>{children}</div>
  ),
  SidebarMenuItem: ({ children }: any) => <div>{children}</div>,
}))

describe('NavProjects', () => {
  const mockPush = jest.fn()
  const mockProjects = [
    {
      name: 'Design & Engineering',
      url: '/dashboard/projects/design-engineering',
      icon: Folder,
    },
    {
      name: 'Research & Development',
      url: '/dashboard/projects/research-development',
      icon: Folder,
    },
    {
      name: 'Sales & Marketing',
      url: '/dashboard/projects/sales-marketing',
      icon: Folder,
    },
  ]
  
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders project navigation links', () => {
    render(<NavProjects projects={mockProjects} />)
    
    expect(screen.getByText('Design & Engineering')).toBeInTheDocument()
    expect(screen.getByText('Research & Development')).toBeInTheDocument()
    expect(screen.getByText('Sales & Marketing')).toBeInTheDocument()
  })

  it('navigates to correct project route when clicked', () => {
    render(<NavProjects projects={mockProjects} />)
    
    fireEvent.click(screen.getByText('Design & Engineering'))
    expect(screen.getByText('Design & Engineering').closest('a'))
      .toHaveAttribute('href', '/dashboard/projects/design-engineering')

    fireEvent.click(screen.getByText('Research & Development'))
    expect(screen.getByText('Research & Development').closest('a'))
      .toHaveAttribute('href', '/dashboard/projects/research-development')
  })

  it('applies active styles to current project route', () => {
    const usePathnameMock = jest.requireMock('next/navigation').usePathname
    usePathnameMock.mockReturnValue('/dashboard/projects/design-engineering')

    render(<NavProjects projects={mockProjects} />)
    
    const designLink = screen.getByText('Design & Engineering').closest('a')
    expect(designLink?.parentElement).toHaveAttribute('data-active', 'true')
  })
})
