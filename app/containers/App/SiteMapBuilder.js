require('babel-register');

require.extensions[
  ('.svg', '.png', '.jpeg', '.jpg', 'css', 'scss', '.ico')
] = function() {
  return null;
};

const router = require('./Router').default;
const Sitemap = require('react-router-sitemap').default;

new Sitemap(router).build('http://localhost:9000').save('./sitemap.xml');