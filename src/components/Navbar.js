import React from 'react'
import NavLinkPlato from '../design.system/NavLinkPlato'
import { useState } from 'react'
import SideBar from './Nav/NavSideBar'
import menuToggle from '../assets/menu-1768000-1502336.webp'
import closeIcon from '../assets/icon-close-512.webp'
import './Nav/Nav.css'

const Navbar = () => {

  const [ toggle, setToggle ] = useState(false)

  return (

    
    <SideBar toggled={toggle} className='nav-side-bar'>

    <img onClick={() => setToggle(!toggle)} 
         src={toggle ? menuToggle : closeIcon}
         alt="menu toggle"
         className={toggle ? "toggle-button" : "untoggled-button"}
         />
    
    <h1 className={toggle && "toggled"}>Plato</h1>

    <ul className={toggle && "toggled"}>
      <li><NavLinkPlato to="/dashboard">Dashboard</NavLinkPlato></li>
      <li><NavLinkPlato to="/mytasks">My Tasks</NavLinkPlato></li>
      <li><NavLinkPlato to="/events">Events</NavLinkPlato></li>
      <li><NavLinkPlato to="/books">Books</NavLinkPlato></li>
      
    </ul>

    <NavLinkPlato className={toggle && "toggled"} logout to="/">Logout</NavLinkPlato>
    
    </SideBar>
    
  )
}

export default Navbar