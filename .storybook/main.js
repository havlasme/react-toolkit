import path from 'path'

const config = {
  stories: ['../lib/**/*.story.@(js|jsx)'],
  addons: [
    path.dirname(
      require.resolve(path.join('@storybook/addon-links', 'package.json')),
    ),
    path.dirname(
      require.resolve(path.join('@storybook/addon-essentials', 'package.json')),
    ),
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  framework: {
    name: path.dirname(
      require.resolve(path.join('@storybook/react-vite', 'package.json')),
    ),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config