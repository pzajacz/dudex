/** @type {import('next').NextConfig} */

const { withAxiom } = require('next-axiom');

module.exports = withAxiom({
  reactStrictMode: false,
  swcMinify: true,
  images: {
    formats: ['image/avif','image/webp'],
  },
})
