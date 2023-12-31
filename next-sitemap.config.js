const DEFAULT_LANGUAGE = require('./interop/config/i18n/adapters/defaultLanguageNextSitemapAdapter');
const EXCLUDED_ROUTES_PREFIXES = ['/favicon.ico', '/icon.svg', '/apple-icon.png'];

const siteUrl = process.env.NEXTAUTH_URL ?? 'blogexample.vercel.app'; // {ToDo} Edit this line!

const getPathWithoutI18nPart = (path) => path.substring(path.indexOf('/', path.indexOf('/') + 1));

const isIgnoredPath = (path) =>
  EXCLUDED_ROUTES_PREFIXES.some((prefix) => getPathWithoutI18nPart(path).startsWith(prefix)) ||
  EXCLUDED_ROUTES_PREFIXES.some((prefix) => path.startsWith(prefix));

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/favicon.ico', '/icon.svg', '/apple-icon.png'],
  changefreq: 'monthly',

  transform: (config, path) => {
    const defaultLanguageNeedle = '/' + DEFAULT_LANGUAGE;
    const defaultLanguageEnvelopeNeedle = defaultLanguageNeedle + '/';
    const defaultLanguageNeedleLen = defaultLanguageNeedle.length;

    if (isIgnoredPath(path)) path = '';

    if (path.startsWith(defaultLanguageEnvelopeNeedle)) path = path.substring(defaultLanguageNeedleLen);
    else if (path === defaultLanguageNeedle) path = '/';

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority
    };
  }
};
