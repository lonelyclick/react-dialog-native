/* eslint-disable import/no-extraneous-dependencies, global-require */

const plugins = [
  require('autoprefixer')({
    browsers: ['last 3 versions', 'ios >= 8'],
  }),
  require('postcss-nested')(),
  require('postcss-import')(),
  require('postcss-simple-vars')({
    variables: require('./src/styles/variables'),
  }),
];

if (process.env.NODE_ENV !== 'production') {
  plugins.unshift(require('stylelint')());
  plugins.push(require('postcss-reporter')({
    clearMessages: true,
  }));
}

module.exports = {
  plugins,
};

/* eslint-enable import/no-extraneous-dependencies, global-require */
