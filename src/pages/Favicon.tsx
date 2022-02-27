import { Container, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'
import './Home.css'


export function Favicon () {
  const { t, i18n } = useTranslation()
  return (
    <Container className='container'>
      <Paper className='readme' elevation={3}>
        <h1>{t('general.ogTitle')}</h1>
        <p>
          {i18n.language} - {i18n.dir()}
        </p>
      </Paper>
    </Container>
  )
}
