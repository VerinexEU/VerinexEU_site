/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless',
  reactStrictMode: true,
  env: {
    NODE_OPTIONS: '--openssl-legacy-provider',
  },
};

module.exports = nextConfig;