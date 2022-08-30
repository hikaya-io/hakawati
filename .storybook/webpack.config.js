const path = require('path')

module.exports = ({config}) => {
  // allow SCSS
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader',
      {
        loader: 'fast-sass-loader',
        options: {
          includePaths: [path.resolve(__dirname, '@/styles/')]
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: './.storybook/',
          },
        },
      },
    ],
  });
  // setup URL Alias
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../src')
  };
  return config;
}
