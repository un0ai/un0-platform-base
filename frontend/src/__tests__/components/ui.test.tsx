import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

describe('UI Components', () => {
  describe('Button Component', () => {
    it('should render with default variant', () => {
      render(<Button>Click me</Button>)
      const button = screen.getByText('Click me')
      expect(button).toHaveClass('bg-primary')
    })

    it('should render with outline variant', () => {
      render(<Button variant="outline">Click me</Button>)
      const button = screen.getByText('Click me')
      expect(button).toHaveClass('border-input')
    })

    it('should handle click events', () => {
      const handleClick = jest.fn()
      render(<Button onClick={handleClick}>Click me</Button>)
      
      fireEvent.click(screen.getByText('Click me'))
      expect(handleClick).toHaveBeenCalled()
    })

    it('should support disabled state', () => {
      render(<Button disabled>Click me</Button>)
      const button = screen.getByText('Click me')
      expect(button).toBeDisabled()
    })
  })

  describe('Card Component', () => {
    it('should render with default styles', () => {
      render(
        <Card>
          <h2>Card Title</h2>
          <p>Card content</p>
        </Card>
      )
      
      const card = screen.getByText('Card Title').closest('div')
      expect(card).toHaveClass('rounded-xl border bg-card text-card-foreground shadow')
    })

    it('should render nested card components', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
        </Card>
      )
      
      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Description')).toBeInTheDocument()
    })
  })

  describe('Input Component', () => {
    it('should render with default styles', () => {
      render(<Input placeholder="Enter text" />)
      const input = screen.getByPlaceholderText('Enter text')
      expect(input).toHaveClass('flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1')
    })

    it('should handle user input', () => {
      const handleChange = jest.fn()
      render(<Input onChange={handleChange} />)
      
      const input = screen.getByRole('textbox')
      fireEvent.change(input, { target: { value: 'test' } })
      expect(handleChange).toHaveBeenCalled()
    })

    it('should support disabled state', () => {
      render(<Input disabled />)
      const input = screen.getByRole('textbox')
      expect(input).toBeDisabled()
    })
  })

  describe('Label Component', () => {
    it('should render with text content', () => {
      render(<Label>Username</Label>)
      expect(screen.getByText('Username')).toBeInTheDocument()
    })

    it('should associate with form control', () => {
      render(
        <>
          <Label htmlFor="username">Username</Label>
          <Input id="username" />
        </>
      )
      
      const label = screen.getByText('Username')
      const input = screen.getByRole('textbox')
      expect(label).toHaveAttribute('for', 'username')
      expect(input).toHaveAttribute('id', 'username')
    })
  })

  describe('Avatar Component', () => {
    it('should render with image', () => {
      render(
        <Avatar>
          <AvatarImage src="/test.jpg" alt="User" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      )
      
      expect(screen.getByText('UN')).toBeInTheDocument()
    })

    it('should show fallback when image fails', () => {
      render(
        <Avatar>
          <AvatarImage src="/invalid.jpg" alt="User" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      )
      
      expect(screen.getByText('UN')).toBeVisible()
    })
  })

  describe('Component Interactions', () => {
    it('should work together in a form', () => {
      const handleSubmit = jest.fn(e => e.preventDefault())
      
      render(
        <form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter name" />
          <Button type="submit">Submit</Button>
        </form>
      )
      
      const input = screen.getByPlaceholderText('Enter name')
      fireEvent.change(input, { target: { value: 'John Doe' } })
      
      const button = screen.getByText('Submit')
      fireEvent.click(button)
      
      expect(handleSubmit).toHaveBeenCalled()
    })
  })
})
