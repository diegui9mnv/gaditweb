import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  allowedDevOrigins: ['100.102.127.87'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
