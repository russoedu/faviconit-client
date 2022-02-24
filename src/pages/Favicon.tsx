import { Container, Paper } from '@mui/material'
import { useSelector } from 'react-redux'
import { languageSelector } from '../redux/languageReducer'
import { useTranslation, getI18n } from 'react-i18next'
// import { Link } from 'react-router-dom'
import './Home.css'


export function Favicon () {
  const language = useSelector(languageSelector)
  const { t } = useTranslation()
  return (
    <Container className='container'>
      <Paper className='readme' elevation={3}>
        <h1>{t('general.ogTitle')}</h1>
        <p>
          {getI18n().language} - {language.dir}
        </p>
      </Paper>
    </Container>
  )
}
