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
    serverActions: {
      enabled: true
    }, 
    // Enable modern builds
    optimizeCss: true,
  },

  // Security headers
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        },
      ],
    },
  ],
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
