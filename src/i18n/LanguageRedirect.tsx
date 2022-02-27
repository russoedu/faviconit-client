import { Navigate } from 'react-router-dom'
import i18n from './i18n'


export function LanguageRedirect () {
  const language = i18n.language.substring(0, 2)

  return (
    <Navigate replace to={language}></Navigate>
  )
}