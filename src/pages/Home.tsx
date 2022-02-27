import { Container, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'
import './Home.css'


export function Home () {
  const { t, i18n } = useTranslation()
  return (
    <Container className='container'>
      <Paper className='readme' elevation={3}>
        <h1>hi {t('general.ogTitle')} there - {i18n.language}</h1>
        <p>
          {i18n.language} - {i18n.dir()}
        </p>
        <p>
          <a href='https://www.npmjs.com/package/font-color-contrast' target='_blank' rel='noreferrer'>
            <img src='https://camo.githubusercontent.com/a541dffe52f51f77d240db7203a491f55eaaba2b12cc190456d95696795ee021/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f666f6e742d636f6c6f722d636f6e74726173742e737667' alt='npm' data-canonical-src='https://img.shields.io/npm/v/font-color-contrast.svg'/>
          </a>
          <a href='https://github.com/russoedu/font-color-contrast/actions/workflows/main.yml' target='_blank' rel='noreferrer'>
            <img src='https://github.com/russoedu/font-color-contrast/actions/workflows/main.yml/badge.svg' alt='CI Pipeline'/>
          </a>
          <a href='https://scrutinizer-ci.com/g/russoedu/font-color-contrast/build-status' target='_blank' rel='noreferrer'>
            <img src='https://camo.githubusercontent.com/f8a205550f1cdd1c2392196be46394495d5e4966a8c1cf9e15f30bd3057e1227/68747470733a2f2f7363727574696e697a65722d63692e636f6d2f672f727573736f6564752f666f6e742d636f6c6f722d636f6e74726173742f6261646765732f6275696c642e706e673f623d6d6173746572' alt='Build Status' data-canonical-src='https://scrutinizer-ci.com/g/russoedu/font-color-contrast/badges/build.png'/>
          </a>
          <a href='https://coveralls.io/github/russoedu/font-color-contrast' target='_blank' rel='noreferrer'>
            <img src='https://camo.githubusercontent.com/e489fcf209af233f6b8e15eca9be16dbf5ebbbcef18ce767d1c10e8076963692/68747470733a2f2f636f766572616c6c732e696f2f7265706f732f6769746875622f727573736f6564752f666f6e742d636f6c6f722d636f6e74726173742f62616467652e7376673f6272616e63683d7473' alt='Coverage Status' data-canonical-src='https://coveralls.io/repos/github/russoedu/font-color-contrast/badge.svg' />
          </a>
          <a href='https://scrutinizer-ci.com/g/russoedu/font-color-contrast/' target='_blank' rel='noreferrer'>
            <img src='https://camo.githubusercontent.com/4006117bbba0c578c05fedad4b296974ce1f391fcd45e9e44372255a1118af0c/68747470733a2f2f7363727574696e697a65722d63692e636f6d2f672f727573736f6564752f666f6e742d636f6c6f722d636f6e74726173742f6261646765732f7175616c6974792d73636f72652e706e673f623d6d6173746572' alt='Scrutinizer Code Quality' data-canonical-src='https://scrutinizer-ci.com/g/russoedu/font-color-contrast/badges/quality-score.png' />
          </a>
          <a href="https://codeclimate.com/github/russoedu/font-color-contrast/maintainability" target='_blank' rel='noreferrer'>
            <img src="https://api.codeclimate.com/v1/badges/daed002166b4a0404ea5/maintainability" alt='Code Climate code quality'/>
          </a>
          <a href="https://www.codacy.com/gh/russoedu/font-color-contrast/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=russoedu/font-color-contrast&amp;utm_campaign=Badge_Grade" target='_blank' rel='noreferrer'>
            <img src="https://app.codacy.com/project/badge/Grade/320aed91c5c5438397df48b1cc85cc8a" alt='Codacy code quality'/>
          </a>
          <a href='https://snyk.io/test/npm/font-color-contrast' target='_blank' rel='noreferrer'>
            <img src='https://camo.githubusercontent.com/77980cfc13198e616164c295c2ef0ef3fe9d4d4ad0342487847401cd09bfeb02/68747470733a2f2f736e796b2e696f2f746573742f6e706d2f666f6e742d636f6c6f722d636f6e74726173742f62616467652e737667' alt='Known Vulnerabilities' data-canonical-src='https://snyk.io/test/npm/font-color-contrast/badge.svg' />
          </a>
        </p>

        <p><strong>font-color-contrast</strong> is a JavaScript module to help you select black or white for a font according to the brightness of the background color to give you the best possible contrast and readability.</p>
        <h2>How does it work</h2>
        <p><strong>font-color-contrast</strong> uses the algorythm described in the article <a href='https://alienryderflex.com/hsp.html' target='_blank' rel='noreferrer'>HSP Color Model — Alternative to HSV (HSB) and HSL</a> where brightness is described as</p>
        <img className='formula' alt='brightness = sqrt(0.299 * red^2 + 0.587 * green^2 + 0.114 * blue^2)' src='https://render.githubusercontent.com/render/math?math=brightness=\sqrt{0.299 * red^2 %2B 0.587 * green^2 %2B 0.114 * blue^2}' />
      </Paper>
    </Container>
  )
}
