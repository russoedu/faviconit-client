/* eslint-disable no-undef */
const manifest = {
  $schema:     'https://json.schemastore.org/web-manifest-combined.json',
  name:        'faviconit',
  short_name:  'faviconit',
  start_url:   '/',
  display:     'standalone',
  theme_color: '#6c1ddb',
  description: '',
  dir:         '',
  lang:        '',
  categories:  [
    'development',
    'image',
    'favicon',
    'tool',
  ],
  icons: [
    {
      src:   'favicon.svg',
      type:  'image/svg+xml',
      sizes: 'any',
    },
    {
      src:   'favicon-310.png',
      type:  'image/png',
      sizes: '310x310',
    },
    {
      src:   'favicon-192.png',
      type:  'image/png',
      sizes: '192x192',
    },
    {
      src:   'favicon-180.png',
      type:  'image/png',
      sizes: '180x180',
    },
    {
      src:   'favicon-160.png',
      type:  'image/png',
      sizes: '160x160',
    },
    {
      src:   'favicon-152.png',
      type:  'image/png',
      sizes: '152x152',
    },
    {
      src:   'favicon-150.png',
      type:  'image/png',
      sizes: '150x150',
    },
    {
      src:   'favicon-144.png',
      type:  'image/png',
      sizes: '144x144',
    },
    {
      src:   'favicon-120.png',
      type:  'image/png',
      sizes: '120x120',
    },
    {
      src:   'favicon-114.png',
      type:  'image/png',
      sizes: '114x114',
    },
    {
      src:   'favicon-96.png',
      type:  'image/png',
      sizes: '96x96',
    },
    {
      src:   'favicon-76.png',
      type:  'image/png',
      sizes: '76x76',
    },
    {
      src:   'favicon-72.png',
      type:  'image/png',
      sizes: '72x72',
    },
    {
      src:   'favicon-70.png',
      type:  'image/png',
      sizes: '70x70',
    },
    {
      src:   'favicon-64.png',
      type:  'image/png',
      sizes: '64x64',
    },
    {
      src:   'favicon-60.png',
      type:  'image/png',
      sizes: '60x60',
    },
    {
      src:   'favicon-57.png',
      type:  'image/png',
      sizes: '57x57',
    },
    {
      src:   'favicon-32.png',
      type:  'image/png',
      sizes: '32x32',
    },
    {
      src:   'favicon-16.png',
      type:  'image/png',
      sizes: '16x16',
    },
  ],
}

const rtlLanguages = ['ar','arc','ckb','dv','fa','ha','he','khw','ks','ps','sd','ur','uz_AF','yi']

module.exports = { manifest, rtlLanguages }