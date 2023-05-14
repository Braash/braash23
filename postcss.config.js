// postcss.config.js

module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
          name: '@storybook/addon-styling',
          options: {
            // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
            // For more details on this addon's options.
            postCss: true,
          },
        },
      ],
      // snipped for brevity
  };