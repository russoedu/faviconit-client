import { Link } from 'react-router-dom'
import './Logo.css'
import { ReactComponent as LogoSvg } from '../assets/img/logo-white.svg'

export function Logo () {
  return(
    <Link id='logo' to='/'>
      <LogoSvg />
    </Link>
  )
}
