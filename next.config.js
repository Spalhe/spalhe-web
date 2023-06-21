/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { 
    runtime: 'edge'
  }
}

module.exports = nextConfig
