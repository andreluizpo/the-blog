import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: false,
    },
    reactCompiler: true,
};

export default nextConfig;
