import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: false,
  compiler: {
    styledComponents: false,
    emotion: false,
  },
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
