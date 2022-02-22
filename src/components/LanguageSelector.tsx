import { Button, Menu, MenuItem } from '@mui/material'
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
    <>
      <Button
        id='lng-button'
        color='primary'
        variant='contained'
        endIcon={<FaLanguage/>}
        onClick={handleOpenNavMenu}
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
    </>
  )
}