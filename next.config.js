/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    // supply an array of trusted image domains (no http:// | https://)
    domains: ['i.redd.it']
  }
}

module.exports = nextConfig
