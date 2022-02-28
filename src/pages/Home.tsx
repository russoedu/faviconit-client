import { Accordion, AccordionDetails, AccordionSummary, Container, FormControl, Input, InputLabel, Paper } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Home.css'


export function Home () {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)

  function switchAccordion () {
    setExpanded(!expanded)
  }

  return (
    <Container className='container'>
      <Paper className='content' elevation={3}>
        <h1 dangerouslySetInnerHTML={{ __html: t('home.highlight') }}/>
        <h1>{t('home.subHighlight')}</h1>
      </Paper>
      <Paper className='content' elevation={3}>
        <h1>{t('home.form.title')}</h1>
        <hr/>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <Accordion expanded={expanded} onChange={switchAccordion} className='advanced'>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              {expanded ? t('home.form.advancedAccordionExpanded') : t('home.form.advancedAccordionColapsed')}
            </AccordionSummary>
            <AccordionDetails>
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </h1>
            </AccordionDetails>
          </Accordion>
        </FormControl>
      </Paper>
    </Container>
  )
}
