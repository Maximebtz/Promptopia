/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    // Ajouter topLevelAwait aux expérimentations webpack
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };

    return config;
  },
  // Ajouter les options de chargement de PostCSS
  postcssLoaderOptions: {
    implementation: require('postcss'),
    postcssOptions: {
      plugins: ['autoprefixer'],
    },
  },
};

module.exports = nextConfig;
