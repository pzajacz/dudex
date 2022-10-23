/** @type {import('next').NextConfig} */

const { withAxiom } = require('next-axiom');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif','image/webp'],
  },
}

module.exports = withAxiom({
  nextConfig
})
