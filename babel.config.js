module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    'react-hot-loader/babel',
    '@emotion',
    '@babel/plugin-transform-runtime',
  ],
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-modules-commonjs',
      ],
    },
  },
};
