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

    return config;
  },
};

export default nextConfig;
