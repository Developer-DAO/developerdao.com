const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);
const src = '../src/';

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-next-router',
    'storybook-react-i18next',
    'storybook-i18n',
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          '@emotion/react': '@emotion/react',
          '@emotion/styled': '@emotion/styled',
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          '@emotion/react': toPath('node_modules/@emotion/react'),
          '@components': path.resolve(__dirname, `${src}components/`),
          '@layouts': path.resolve(__dirname, `${src}layouts/`),
          '@pages': path.resolve(__dirname, `${src}pages/`),
        },
      },
    };
  },
};
