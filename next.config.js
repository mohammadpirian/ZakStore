/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_IMAGE_URL: process.development.env.BASE_IMAGE_URL,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["zakstorebackend.iran.liara.run"],
  },
  output: "standalone",
};

module.exports = nextConfig;
