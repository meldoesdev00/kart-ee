import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["sanity", "next-sanity", "@sanity/ui", "@sanity/icons", "@sanity/client"],
};

export default nextConfig;
