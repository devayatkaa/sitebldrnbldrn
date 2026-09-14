/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Это заставит Next создать папку 'out'
  images: {
    unoptimized: true, // Нужно для статического режима
  },
};

export default nextConfig;