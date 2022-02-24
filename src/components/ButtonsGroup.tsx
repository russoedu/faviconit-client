import { Button, ButtonGroup } from '@mui/material'
import { Box } from '@mui/system'
import { useAppSelector } from '../redux/hooks'
import { languageSelector } from '../redux/languageReducer'
import './ButtonsGroup.css'

type ButtonData = { key: string, url: string, text: string, icon: JSX.Element }

export function ButtonsGroup ({ buttons }: { buttons: ButtonData[] }) { 
  const language = useAppSelector(languageSelector)

  return (
    <Box sx={{ flexGrow: 0, display: 'flex' }}>
      <ButtonGroup id='btg-social-group' variant='contained' sx={{ marginLeft: '1em' }} dir={language.dir}>
        {buttons.map((button, index) => {
          return (
            <Button
              key={'social' + index}
              className='btg-button'
              color='secondary'
              variant='contained'
              startIcon={button.icon}
              href={button.url}
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
