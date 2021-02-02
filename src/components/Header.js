import React from 'react'
import logoGif from '../assets/static/logo-gif-expert-app.svg'

const Header = () => {
  return (
    <header>
      <figure>
        <img className="btn__search" src={logoGif} alt="Logo Gif expert App" />
      </figure>
    </header>
  )
}

export default Header;
