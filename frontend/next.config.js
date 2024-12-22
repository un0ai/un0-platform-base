/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure compilation
  compiler: {
    // Enable SWC by default
    styledComponents: true,
  },
  
  // Experimental features
  experimental: {
    // Enable server actions if you need them
    serverActions: true, // Remove allowedOrigins to use default security
    // Enable modern builds
    optimizeCss: true,
  },
}

module.exports = nextConfig
