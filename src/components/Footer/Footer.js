import React from 'react'

import './Footer.css'

export function Footer () {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">
          © 2013-{new Date().getFullYear()} <a href="https://github.com/russoedu">Eduardo Russo</a>
        </span>
      </div>
    </footer>
  )
}
