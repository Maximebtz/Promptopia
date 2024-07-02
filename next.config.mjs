// next.config.js

const withExperiments = require('next/dist/next-server/server/config-shared').withExperiments;

module.exports = withExperiments({
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };

    return config;
  },
  postcssLoaderOptions: {
    implementation: require('postcss'),
    postcssOptions: {
      plugins: ['autoprefixer'],
    },
  },
});
