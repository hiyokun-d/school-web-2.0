/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "firebasestorage.googleapis.com",
      },

      {
        hostname: "picsum.photos"
      },
      {
        hostname: "cloudflare-ipfs.com"
      },
      {
        hostname: "placeimg.com"
      },
      {
        hostname: "cdn.discordapp.com"
      }
    ],
  }
}

module.exports = nextConfig
