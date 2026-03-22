import createNextIntlPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    optimizeCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [90, 75, 60],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'typus.ai',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/typusai/**',
      },
      {
        protocol: 'https',
        hostname: 'prai-vision.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/industryImageBeforeAfter/**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
