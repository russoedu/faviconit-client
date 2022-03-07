import {  Container, Grid, Input, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { InputImage } from '../components/InputImage'
import i18n from '../i18n/i18n'
import './Home.css'


export function Home () {
  const { t } = useTranslation()

  return (
    <Container className='container' maxWidth={'xl'}>
      <Paper className='highlight home-paper' elevation={3}>
        <h1 dangerouslySetInnerHTML={{ __html: t('homeHighlight') }}/>
        <h1>{t('homeSubHighlight')}</h1>
      </Paper>
      <Paper className='form home-paper' elevation={3}>
        <h2>{t('fillTheForm')}</h2>
        <hr/>
        <Grid container spacing={2}>
          <Grid item xs={1.5} className='form-label-item'>
            <p dir={i18n.dir()} className='form-label' id='mandatory'>{t('faviconFile')}</p>
          </Grid>
          <Grid item xs={4.5}>
            <InputImage/>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={3} className='form-label-item'>
                <p dir={i18n.dir()} className='form-label'>{t('faviconName')}</p>
              </Grid>
              <Grid item xs={9} className='form-input-item'>
                <Input id="faviconName" className='form-input' aria-describedby="my-helper-text" placeholder={t('faviconNamePlaceholder')}/>
                <p className='form-help'>{t('faviconNameHelp')}</p>
              </Grid>
              <Grid item xs={3} className='form-label-item'>
                <p dir={i18n.dir()} className='form-label'>{t('faviconVersion')}</p>
              </Grid>
              <Grid item xs={9} className='form-input-item'>
                <Input id="faviconVersion" className='form-input' aria-describedby="my-helper-text" placeholder={t('faviconVersionPlaceholder')}/>
                <p className='form-help'>{t('faviconVersionHelp')}</p>
              </Grid>
              <Grid item xs={3} className='form-label-item'>
                <p dir={i18n.dir()} className='form-label'>{t('faviconLocation')}</p>
              </Grid>
              <Grid item xs={9} className='form-input-item'>
                <Input id="my-input" className='form-input' aria-describedby="my-helper-text" placeholder={t('faviconLocationPlaceholder')}/>
                <p className='form-help'>{t('faviconLocationHelp')}</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
