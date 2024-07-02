import { withExperiments } from 'next/dist/next-server/server/config-shared';

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    // Ajouter topLevelAwait aux options expérimentales de webpack
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

export default withExperiments(nextConfig);
