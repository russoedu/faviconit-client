// import { Container, Paper } from '@mui/material'
import { set } from '../redux/languageReducer'
/*
 * import { useTranslation, getI18n } from 'react-i18next'
 * import { Link } from 'react-router-dom'
 */
import './Home.css'
import { Navigate } from 'react-router-dom'
import i18n from '../i18n/i18n'
import { useAppDispatch } from '../redux/hooks'


export function LanguageRedirect () {
  const dispatch = useAppDispatch()
  const language = i18n.language
  dispatch(set(language))
  console.log(language)
  return (
    <Navigate replace to={language}></Navigate>
  )
}
