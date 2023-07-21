/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'edb-4rme8.ondigitalocean.app',
            pathname: '/**',
          }
        ],
      }
}

module.exports = nextConfig
