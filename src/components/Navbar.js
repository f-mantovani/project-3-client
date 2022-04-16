import React from 'react'
import NavLinkPlato from '../design.system/NavLinkPlato'
import { useState } from 'react'
import SideBar from './Nav/NavSideBar'
import menuToggle from '../assets/menu-1768000-1502336.webp'
import closeIcon from '../assets/icon-close-512.webp'
import './Nav/Nav.css'

const Navbar = () => {

  const [ toggle, setToggle ] = useState(true)

  return (
    <>
    {toggle &&
    <img onClick={() => setToggle(!toggle)} 
         src={menuToggle}
         alt="menu toggle"
         className="toggle-button-burger"
         />}
    
    <SideBar toggled={toggle} className='nav-side-bar'>

    <img onClick={() => setToggle(!toggle)} 
         src={closeIcon}
         alt="menu toggle"
         className={!toggle ? "untoggle-button" : "toggled"}
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
    </>
    
  )
}

export default Navbar