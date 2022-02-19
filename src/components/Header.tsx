import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './Header.css'
import { FaLanguage, FaTwitter, FaFacebook, FaLinkedin, FaPinterest } from 'react-icons/fa'
import { MouseEvent, useState } from 'react'
import { Logo } from './Logo'
import { ButtonsGroup } from './ButtonsGroup'

const pages = [
  { name: 'Colors Sheet', link: '/sheet' },
]

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

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position='sticky' enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'start', display: 'flex' }}>
          <Logo/>

          <ButtonsGroup buttons={socialLinks} />

          <Box
            className='header-language-selector'
            sx={{ flexGrow: 0 }}
          >
            <Button
              color='primary'
              variant='contained'
              sx={{ display: { lg: 'flex', xs: 'none' } }}
              endIcon={<FaLanguage/>}
              onClick={handleOpenNavMenu}
            >
              Language
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical:   'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical:   'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page.link}>
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
