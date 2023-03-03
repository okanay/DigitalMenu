const path = require("path");
module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'tr'],
        fallbackLng: 'tr',
        localePath: path.resolve('./public/translations'),
    },
}