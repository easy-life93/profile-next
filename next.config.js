/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", 
    reactStrictMode: true,
    // assetPrefix: 'https://easy-life93.github.io/', // Use relative paths for assets
    images: {
      unoptimized: true, // Required for static export
    },
    trailingSlash: true, // Ensures all paths end with a slash for GitHub Pages compatibility

}

module.exports = nextConfig
