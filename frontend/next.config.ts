import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, ".."),
  },
  output: 'standalone',
  images: {
    remotePatterns: [
      // Local backend in development
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'http', hostname: '127.0.0.1' },
      // Any HTTPS host in production (Fly.io, Railway, VPS, etc.)
      { protocol: 'https', hostname: '**' },
    ],
  },
};

export default nextConfig;
