const isTestEnv = process.env.NODE_ENV === 'test';

module.exports = {
  presets: ['next/babel'],
  plugins: [['babel-plugin-styled-components', { ssr: !isTestEnv, displayName: !isTestEnv }]],
};
