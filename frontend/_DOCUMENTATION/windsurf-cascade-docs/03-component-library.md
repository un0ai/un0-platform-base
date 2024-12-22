# Component Library Documentation

## UI Components (shadcn)

### Core Components

#### Button
```typescript
// Usage
<Button variant="default" size="default">
  Click me
</Button>

// Variants
- default
- destructive
- outline
- secondary
- ghost
- link

// Sizes
- default
- sm
- lg
- icon
```

#### Card
```typescript
// Usage
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

#### Input
```typescript
// Usage
<Input 
  type="text"
  placeholder="Enter text"
  value={value}
  onChange={handleChange}
/>

// Types
- text
- password
- email
- number
- search
```

#### Tabs
```typescript
// Usage
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Layout Components

#### Page Layout
```typescript
// Usage
<PageLayout>
  <PageHeader>
    <PageTitle>Page Title</PageTitle>
    <PageDescription>Page description</PageDescription>
  </PageHeader>
  <PageContent>
    Main content
  </PageContent>
</PageLayout>
```

#### Grid Layout
```typescript
// Usage
<Grid columns={12} gap={4}>
  <GridItem span={6}>Column 1</GridItem>
  <GridItem span={6}>Column 2</GridItem>
</Grid>
```

### Form Components

#### Form
```typescript
// Usage
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>Enter your username</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>
```

#### Select
```typescript
// Usage
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

### Feedback Components

#### Alert
```typescript
// Usage
<Alert>
  <AlertTitle>Alert Title</AlertTitle>
  <AlertDescription>Alert description</AlertDescription>
</Alert>

// Variants
- default
- destructive
```

#### Toast
```typescript
// Usage
toast({
  title: "Success",
  description: "Operation completed successfully",
  variant: "default",
})

// Variants
- default
- destructive
```

### Navigation Components

#### Navigation Menu
```typescript
// Usage
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
      <NavigationMenuContent>
        Content 1
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

#### Breadcrumb
```typescript
// Usage
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Data Display Components

#### Table
```typescript
// Usage
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Header 1</TableHead>
      <TableHead>Header 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

#### Badge
```typescript
// Usage
<Badge variant="default">
  Badge text
</Badge>

// Variants
- default
- secondary
- destructive
- outline
```

### Overlay Components

#### Dialog
```typescript
// Usage
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description</DialogDescription>
    </DialogHeader>
    Content goes here
  </DialogContent>
</Dialog>
```

#### Popover
```typescript
// Usage
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>
    Popover content
  </PopoverContent>
</Popover>
```

## Custom Components

### Dashboard Components

#### MetricsCard
```typescript
// Usage
<MetricsCard
  title="Total Users"
  value={1234}
  change={5.2}
  icon={<Users />}
/>
```

#### StatusIndicator
```typescript
// Usage
<StatusIndicator
  status="online"
  text="System Status"
/>

// Status types
- online
- offline
- warning
- error
```

### Chart Components

#### LineChart
```typescript
// Usage
<LineChart
  data={data}
  xAxis="time"
  yAxis="value"
  color="primary"
/>
```

#### BarChart
```typescript
// Usage
<BarChart
  data={data}
  categories={categories}
  values={values}
/>
```

### Authentication Components

#### LoginForm
```typescript
// Usage
<LoginForm
  onSubmit={handleLogin}
  loading={isLoading}
/>
```

#### ProtectedRoute
```typescript
// Usage
<ProtectedRoute
  requiredRole="admin"
  fallback="/login"
>
  Protected content
</ProtectedRoute>
```

## Theming

### Colors
```css
:root {
  --primary: #0070f3;
  --secondary: #666666;
  --accent: #f81ce5;
  --background: #ffffff;
  --foreground: #000000;
  --success: #0070f3;
  --warning: #f5a623;
  --error: #ff0000;
}
```

### Typography
```css
:root {
  --font-sans: 'Inter', -apple-system, system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### Spacing
```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
}
```

## Icons

### Lucide Icons
```typescript
// Usage
import { 
  Users, 
  Settings, 
  Bell,
  // ... other icons
} from 'lucide-react'

// Example
<Users className="h-4 w-4" />
```

## Utilities

### Animation
```typescript
// Usage
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  Animated content
</motion.div>
```

### Loading States
```typescript
// Usage
<LoadingSpinner size="default" />
<LoadingDots />
<LoadingBar progress={75} />
```
