import { Button, Menu, MenuItem } from '@mui/material'
import { FaLanguage } from 'react-icons/fa'
import { MouseEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { languageSelector, set } from '../redux/languageReducer'
import { useTranslation, getI18n } from 'react-i18next'
import { languages } from '../i18n/i18n'
import './LanguageSelector.css'

export function LanguageSelector() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const language = useAppSelector(languageSelector)

  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (lng?: string) => {
    if (lng) dispatch(set(lng))
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
        dir={language.dir}
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
            className={getI18n().language.includes(lng.key) ? 'lng-item-selected' : ''}
          >
            <div
              dir={getI18n().dir(lng.key)}
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
