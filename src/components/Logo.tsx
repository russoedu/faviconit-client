import { Link } from 'react-router-dom'
import './Logo.css'
import logo from '../assets/img/logo-white.svg'
import icon from '../assets/img/icon.svg'
export function Logo () {
  return(
    <Link id='logo' to='/'>
      <img className='logo-large' src={logo} alt="logo" />
      <img className='logo-small' src={icon} alt="logo" />
    </Link>
  )
}
