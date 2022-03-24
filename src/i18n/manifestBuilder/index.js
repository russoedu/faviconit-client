/* eslint-disable @typescript-eslint/no-var-requires */
const { readdirSync, readFileSync, writeFileSync } = require('fs')
const { join } = require('path')
const { manifest, rtlLanguages } = require('./templates.js')

function makeManifests () {
  console.log('Creating web manifests')
  const inputPath = './src/i18n/locales'
  const outputPath = './public'
  const src = readdirSync(inputPath).filter(lang => lang.length === 5)

  for (let i = 0; i < src.length; i++) {
    const lang = src[i].split('.')[0]
    const contentRegEx = /^\s*pageTitle:\s*'(.+)',$/
    const path = join(inputPath, `${lang}.ts`)
    const data = readFileSync(path).toString()

    const pageTitle = data.split('\n')[7]
    const description = contentRegEx.exec(pageTitle)

    manifest.dir = rtlLanguages.findIndex(l => l === lang) >= 0 ? 'rtl' : 'ltr'
    manifest.lang = lang
    manifest.description = description[1]

    writeFileSync(join(outputPath, `${lang}.faviconit.webmanifest`), JSON.stringify(manifest, null, 2))
  }
  console.log(`Created ${src.length} web manifests`)
}

makeManifests()