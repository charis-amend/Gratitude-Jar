/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  webpack: (config, { isServer }) => {

    // Add GLTF loader
    config.module.rules.push({
      test: /\.(gltf)$/,
      use: [
        {
          loader: 'gltf-webpack-loader',
        },
      ],
    });

    // Add file loader for binary files
    config.module.rules.push({
      test: /\.(bin)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/chunks/',
            outputPath: 'static/chunks/',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
