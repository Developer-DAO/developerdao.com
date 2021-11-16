const { withPlausibleProxy } = require('next-plausible');
const { i18n } = require('./next-i18next.config');

module.exports = withPlausibleProxy()({
  i18n,
});
