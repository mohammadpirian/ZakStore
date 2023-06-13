/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_IMAGE_URL: process.env.BASE_IMAGE_URL,
  },
};

module.exports = nextConfig;
