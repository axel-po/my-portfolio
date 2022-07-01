/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  build: {
    transpile: ["gsap"],
  },
};

module.exports = nextConfig;
