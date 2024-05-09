/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js configuration goes here
  webpack: (config, { isServer }) => {
    // Transpile ant-design icons and other modules using Babel
    if (!isServer) {
      config.module.rules.push({
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: /node_modules\/(?:@ant-design|rc-util)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      });
    }

    return config;
  }
};

export default nextConfig;
