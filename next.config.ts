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
  async rewrites() {
    return [
      {
        source: "/a/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/a/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
