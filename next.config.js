/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dsvkqlylv/**",
      },
    ],
  },
};

module.exports = nextConfig;
