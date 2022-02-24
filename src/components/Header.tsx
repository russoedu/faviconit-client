import { AppBar, Container, Toolbar } from '@mui/material'
import './Header.css'
import { FaTwitter, FaFacebook, FaLinkedin, FaPinterest } from 'react-icons/fa'
import { Logo } from './Logo'
import { ButtonsGroup } from './ButtonsGroup'
import { LanguageSelector } from './LanguageSelector'
import { languageSelector } from '../redux/languageReducer'
import { useAppSelector } from '../redux/hooks'

const socialLinks = [
  {
    key:  'linkedin',
    url:  'https://github.com/russoedu/font-color-contrast',
    text: 'share',
    icon: <FaLinkedin />,
  },
  {
    key:  'facebook',
    url:  'https://github.com/russoedu/font-color-contrast',
    text: 'share',
    icon: <FaFacebook />,
  },
  {
    key:  'twitter',
    url:  'https://www.npmjs.com/package/font-color-contrast',
    text: 'tweet',
    icon: <FaTwitter />,
  },
  {
    key:  'pinterest',
    url:  'https://www.npmjs.com/package/font-color-contrast',
    text: 'save',
    icon: <FaPinterest />,
  },
]

export function Header () {
  const language = useAppSelector(languageSelector)

  return (
    <AppBar position='sticky' enableColorOnDark dir={language.dir}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'start', display: 'flex' }}>
          <Logo/>
          <ButtonsGroup buttons={socialLinks}/>
          <LanguageSelector/>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
