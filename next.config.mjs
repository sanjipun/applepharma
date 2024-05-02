/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['api1.aarawan.com'],
    },
    assetPrefix: "/"
}

export default nextConfig;