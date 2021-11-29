const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: [
      'af-ZA',
      'de',
      'en',
      'es',
      'fr',
      'pt',
      'pt-BR',
      'pt-PT',
      'ru',
      'zh',
      'zh-CN',
      'zh-HK',
      'zh-TW',
    ],
    localePath: path.resolve('./public/locales'),
  },
};
