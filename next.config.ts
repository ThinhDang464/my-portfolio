import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here 
  temporarily bypass linting during builds
  */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
