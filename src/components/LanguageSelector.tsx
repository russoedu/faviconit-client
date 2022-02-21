import { Box, Button, Menu, MenuItem } from '@mui/material'
import { FaLanguage } from 'react-icons/fa'
import { MouseEvent, useState } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { set } from '../redux/languageReducer'
import { useTranslation, getI18n } from 'react-i18next'
import { languages } from '../i18n/i18n'
import './LanguageSelector.css'

export function LanguageSelector() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (language?: string) => {
    if (language) dispatch(set(language))
    setAnchorElNav(null)
  }
  return (
    <Box
      className='header-language-selector'
      sx={{ flexGrow: 0 }}
    >
      <Button
        className='lng-get-links'
        color='primary'
        variant='contained'
        sx={{ display: { lg: 'flex', xs: 'none' } }}
        endIcon={<FaLanguage/>}
        onClick={handleOpenNavMenu}
      >
        {t('language.native')}
      </Button>
      <Button
        className='lng-get-links lng-get-links-compact'
        color='primary'
        variant='contained'
        sx={{ display: { md: 'flex', lg: 'none' }, paddingRight: '10px' }}
        onClick={handleOpenNavMenu}
      >
        <span className='lng-get-links-icon'>
          <FaLanguage/>
        </span>
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
        onClose={() => handleCloseNavMenu()}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.link}
            onClick={() => handleCloseNavMenu(language.link)}
            className={getI18n().language.includes(language.link) ? 'lng-item-selected' : ''}
          >
            <div
              dir={getI18n().dir(language.link)}
              className='lng-item'
            >
              {language.native}
            </div>
          </MenuItem>
        ))}
        {/* <MenuItem key='translate' onClick={() => handleCloseNavMenu('translate')}>
          <div
            dir={getI18n().dir()}
            className='lng-item'
          >
            {t('general.helpUsTranslate')}
          </div>
        </MenuItem> */}
      </Menu>
    </Box>
  )
}
