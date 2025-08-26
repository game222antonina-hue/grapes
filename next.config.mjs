/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  // Если нужно явно указать папку исходников
  srcDir: "src"
};

export default nextConfig;