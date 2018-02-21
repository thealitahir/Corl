require('babel-register');
const router = require('./router').default;
const sitemap = require('react-router-sitemap').default;

(
  new Sitemap(router)
      .build('http://my-site.ru')
      .save('./sitemap.xml')
);