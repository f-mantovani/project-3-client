import React, { useEffect } from 'react'
import NavLinkPlato from '../design.system/NavLinkPlato'
import { useState } from 'react'
import SideBar from './Nav/NavSideBar'
import menuToggle from '../assets/burger-icon.png'
import './Nav/Nav.css'
import NavUserDisplay from './Nav/NavUserDisplay'
import removeToken from '../utils/controllers/removeToken'
import userConnect from '../utils/api.handlers/userConnect'

const Navbar = () => {

  const [ toggle, setToggle ] = useState(true)
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = async () => {
      const userFromDB = await userConnect.getUser()
      setUser(userFromDB)
    }
    getUser()
  }, [])

  return (
    <div>
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
    
    <NavUserDisplay {...user}/>

    <ul className={toggle ? "toggled" : "undefined"}>
      <li><NavLinkPlato to="/private/dashboard">Dashboard</NavLinkPlato></li>
      <li><NavLinkPlato to="/private/mytasks">My Tasks</NavLinkPlato></li>
      <li><NavLinkPlato to="/private/events">Events</NavLinkPlato></li>
      <li><NavLinkPlato to="/private/books">Books</NavLinkPlato></li>
      <li><NavLinkPlato to="/" onClick={removeToken}>Logout</NavLinkPlato></li>
      
    </ul>

    
    
    </SideBar>
    </div>
    
  )
}

export default Navbar