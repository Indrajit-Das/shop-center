/** @type {import('next').NextConfig} */
// https://cdn.dummyjson.com/product-images/2/thumbnail.jpg)
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
        pathname: "/product-images/**",
      },
    ],
  },
};

export default nextConfig;
