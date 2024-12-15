# UN0 Tools Frontend

A modern, type-safe, and secure frontend application built with Next.js and TypeScript.

## 🚀 Tech Stack

### Core Technologies
- **[Next.js](https://nextjs.org/)** (v15.1.0) - React framework for production
- **[React](https://reactjs.org/)** (v19.0.0) - UI library
- **[TypeScript](https://www.typescriptlang.org/)** (v5) - Static type checking
- **[Tailwind CSS](https://tailwindcss.com/)** (v3.4) - Utility-first CSS framework

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
  - Avatar
  - Collapsible
  - Dialog
  - Dropdown Menu
  - Label
  - Progress
  - Separator
  - Switch
  - Tooltip
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Zod](https://zod.dev/)** - Runtime type validation

### Features
- 🔒 Type-safe environment variables with Zod validation
- 🛡️ Enhanced security headers
- 🎨 Modern UI with Tailwind CSS and Radix UI
- 🌓 Dark mode support with next-themes
- ♿ Accessible components from Radix UI
- 📱 Responsive design
- 🔍 SEO optimized
- 🚦 Strict TypeScript configuration
- 🧪 Testing setup with Jest

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/           # Next.js App Router pages and layouts
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── lib/          # Utility functions and configurations
│   ├── types/        # TypeScript type definitions
│   └── __tests__/    # Test files
├── public/           # Static files
└── ...config files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the variables in `.env` with your values

4. Run the development server:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

### Build for Production

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 🛠️ Development

### Code Style

- We use ESLint for code linting
- Prettier for code formatting
- TypeScript strict mode is enabled
- Follow the [Next.js best practices](https://nextjs.org/docs/basic-features/pages)

### Environment Variables

Required environment variables:

- `APP_URL`: Application URL (default: http://localhost:3000)
- `NODE_ENV`: Environment (development/production/test)
- `API_BASE_URL`: Backend API URL

All environment variables are validated using Zod schema (see `src/lib/env.ts`).

### Security

The application implements several security measures:

- Strict CSP headers
- X-Frame-Options protection
- XSS protection
- Content Type protection
- Referrer Policy
- Permissions Policy
- Strict TypeScript checks
- Runtime environment validation

### Performance Optimizations

- Image optimization with Next.js Image component
- Automatic code splitting
- CSS purging with Tailwind CSS
- Modern JavaScript bundle optimization

## 📚 Documentation

For more detailed documentation:

- [Component Documentation](./docs/components.md)
- [API Documentation](./docs/api.md)
- [Testing Guide](./docs/testing.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)
