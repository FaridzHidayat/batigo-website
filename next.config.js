/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: "/",
            destination: "/homepage",
          },
        ];
      }
}

module.exports = nextConfig
