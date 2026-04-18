/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://integrateapi.ai',
  generateRobotsTxt: true,
  exclude: ['/opportunities', '/opportunities/*', '/admin', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/opportunities', '/admin'] },
    ],
  },
}
