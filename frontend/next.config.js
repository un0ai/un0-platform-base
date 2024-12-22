/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure compilation
  compiler: {
    // Enable SWC by default
    styledComponents: true,
  },
  
  // Experimental features
  experimental: {
    // Enable server actions
    serverActions: {
      allowedOrigins: ['localhost:3000', 'localhost:3001'],
    },
    // Enable modern builds
    optimizeCss: true,
  },
}

module.exports = nextConfig
