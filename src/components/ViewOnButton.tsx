import { Button } from '@mui/material'
import './ViewOnButton.css'

export function ViewOnButton ({ url, text, icon }: {
  url: string,
  text: string,
  icon: any,
 }) {
  return (
    <>
      <Button
        id='vob-button'
        color='secondary'
        variant='contained'
        startIcon={icon}
        href={url}
        target='_blank'
        rel='noreferrer'
      >
        <span id='vob-button-text'>
          {text}
        </span>
      </Button>
    </>
  )
}
