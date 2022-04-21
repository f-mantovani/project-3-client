import React from 'react'
import NavLinkPlato from '../design.system/NavLinkPlato'
import { useState } from 'react'
import SideBar from './Nav/NavSideBar'
import menuToggle from '../assets/burger-icon.png'
import closeIcon from '../assets/x-exit.png'
import './Nav/Nav.css'
import NavUserDisplay from './Nav/NavUserDisplay'

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

    {!toggle && 
      <div className="toggle-gray-cover"
           onClick={() => setToggle(!toggle)}>
             
           </div>}

    
    
    <SideBar toggled={toggle} className='nav-side-bar'>

    {/* <img onClick={() => setToggle(!toggle)} 
         src={closeIcon}
         alt="menu toggle"
         className={!toggle ? "untoggle-button" : "toggled"}
         /> */}
    
    <NavUserDisplay/>

    <ul className={toggle ? "toggled" : "undefined"}>
      <li><NavLinkPlato to="/dashboard">Dashboard</NavLinkPlato></li>
      <li><NavLinkPlato to="/mytasks">My Tasks</NavLinkPlato></li>
      <li><NavLinkPlato to="/events">Events</NavLinkPlato></li>
      <li><NavLinkPlato to="/books">Books</NavLinkPlato></li>
      <li><NavLinkPlato to="/">Logout</NavLinkPlato></li>
      
    </ul>

    
    
    </SideBar>
    </>
    
  )
}

export default Navbar