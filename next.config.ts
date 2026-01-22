import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    experimental: {
        useCache: true,
        cacheLife: {
            seconds: {
                stale: 0,
                revalidate: 300,
                expire: 300,
            },
        },
    },

    // cacheComponents: true,
    // cacheLife: {
    //     seconds: {
    //         stale: 0,
    //         revalidate: 10,
    //         expire: 10,
    //     },
    // },
};

export default nextConfig;
