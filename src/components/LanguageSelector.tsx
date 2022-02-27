import { Button, Menu, MenuItem } from '@mui/material'
import { FaLanguage } from 'react-icons/fa'
import { MouseEvent, useState } from 'react'
import i18n, { languages } from '../i18n/i18n'
import './LanguageSelector.css'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export function LanguageSelector() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()
  const { t } = useTranslation()


  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (lng?: string) => {
    if (lng) {
      const currentPathname = window.location.pathname.replace(/\/+$/, '')
      console.log(currentPathname)
      console.log(lng)

      i18n.changeLanguage(lng)
      navigate(lng, { replace: true })
    }
    setAnchorElNav(null)
  }
  return (
    <>
      <Button
        id='lng-button'
        color='primary'
        variant='contained'
        endIcon={<FaLanguage/>}
        onClick={handleOpenNavMenu}
        dir={i18n.dir()}
      >
        <span id='lng-button-text'>
          {t('language.native')}
        </span>
      </Button>
      <Menu
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
        onClose={() => handleCloseNavMenu()}
      >
        {languages.map((lng) => (
          <MenuItem
            key={lng.key}
            onClick={() => handleCloseNavMenu(lng.key)}
            className={i18n.language.includes(lng.key) ? 'lng-item-selected' : ''}
          >
            <div
              dir={i18n.dir(lng.key)}
              className='lng-item'
            >
              {lng.native}
            </div>
          </MenuItem>
        ))}
        <MenuItem key='translate' onClick={() => handleCloseNavMenu('translate')}>
          <div
            className='lng-item'
          >
            {t('general.helpUsTranslate')}
          </div>
        </MenuItem>
      </Menu>
    </>
  )
}
