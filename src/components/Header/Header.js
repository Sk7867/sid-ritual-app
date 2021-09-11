import React, { useState } from 'react'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import './Header.css'

const Header = () => {
  const [click, setClick] = useState(false)
  const openMenu = () => setClick(true)
  const closeMenu = () => setClick(false)
  return (
    <header className='header_bar'>
      <nav className='nav_bar' id='NavBar'>
        <div>Multibitamin</div>
        <div>Protien</div>
        <div>Pregnancy</div>
        <div>Bundles</div>
        <div>Who we are</div>
        <div>Ingredients</div>
        <div>Our Clinical Study</div>
        <div>The Journal</div>
        <div>Account</div>
      </nav>
      <div className="header_container">
        <div className="header_row">
          <ul className='nav_list'>
            <li onClick={openMenu} className='menu_btn_li'><button className='menu_btn'><p className='menu_text'>Menu</p></button><span className='underscore'></span></li>
            <li className='menu_btn_li logo'>Ritual</li>
            <li className='menu_btn_li menu_btn_approach'><a hrefLang="#" className='menu_btn_approach_text'>Who We Are</a><span className='underscore'></span></li>
            <li className='menu_btn_li'><LocalMallOutlinedIcon /><span className='underscore'></span></li>
          </ul>
        </div>
      </div>

    </header>
  )
}

export default Header
