import { ButtonGroup } from '@mui/material'
import { Box } from '@mui/system'
import { ViewOnButton } from './ViewOnButton'
import './ButtonsGroup.css'

type Button = { key:  string, url: string, text: string, icon: JSX.Element }
export function ButtonsGroup ({ buttons }: { buttons: Button[] }) {
  return (
    <Box sx={{ flexGrow: 0, display: 'flex' }}>
      <ButtonGroup variant="contained" sx={{ marginLeft: '1em' }}>
        {buttons.map(button => {
          return (
            <ViewOnButton
              key={button.key}
              url={button.url}
              text={button.text}
              icon={button.icon}
            />
          )
        })}
      </ButtonGroup>
    </Box>
  )
}
