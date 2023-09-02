/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => {
    return [
      {
        source: "/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_HOST}/:path*`,
      },
    ];
  },
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
