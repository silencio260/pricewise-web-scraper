/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['m.media-amazon.com']
    }
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     serverActions: true,
//     serverComponentsExternalPackages: ['mongoose']
//   },
//   images: {
//     domains: ['m.media-amazon.com']
//   }
// }

// module.exports = nextConfig