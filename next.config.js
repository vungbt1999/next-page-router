/** @type {import('next').NextConfig} */
const nextBuildId = require("next-build-id");
const { i18n } = require('./next-i18next.config');
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  swcMinify: true,
  productionBrowserSourceMaps: process.env.ENVIRONMENT === "development",
  pageExtensions: ['page.ts', 'page.tsx'],
  i18n,
  env: {
    RESTFUL_API_URL: process.env.RESTFUL_API_URL,
    PAGE_PROPS_REVALIDATE: process.env.PAGE_PROPS_REVALIDATE,
  },
  images: {
    domains: process.env.IMAGE_DOMAINS.split(',')
  },
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  rewrites: () => {
    return [
      {
        source: '/',
        destination: '/home'
      }
    ];
  }
});

