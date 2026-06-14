import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // username.github.io 레포는 루트(/)에 서빙되므로 basePath 불필요
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false, path: false };
    return config;
  },
};

export default nextConfig;
