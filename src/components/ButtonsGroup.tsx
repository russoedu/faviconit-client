import { Button, ButtonGroup } from '@mui/material'
import { Box } from '@mui/system'
import i18n from '../i18n/i18n'
import './ButtonsGroup.css'

type ButtonData = { key: string, url: string, text: string, icon: JSX.Element }

export function ButtonsGroup ({ buttons }: { buttons: ButtonData[] }) { 
  return (
    <Box sx={{ flexGrow: 0, display: 'flex' }}>
      <ButtonGroup id='btg-social-group' variant='contained' sx={{ marginLeft: '1em' }} dir={i18n.dir()}>
        {buttons.map((button, index) => {
          return (
            <Button
              key={'social' + index}
              href={button.url}
              className='btg-button'
              color='secondary'
              variant='contained'
              startIcon={button.icon}
              target='_blank'
              rel='noreferrer'
            >
              <span className='btg-button-text'>
                {button.text}
              </span>
            </Button>
          )
        })}
      </ButtonGroup>
    </Box>
  )
}
