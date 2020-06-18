import React from 'react'

import LogoZeDelivery from '../../assets/logo.png'

import '../../style/atoms/header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <a href='/'>
          <img className='header__logo' src={LogoZeDelivery} alt='Zé Delivery Challenge' />
        </a>
      </div>
    </header>
  )
}

export default Header
