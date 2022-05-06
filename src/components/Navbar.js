import React, { useEffect } from 'react'
import NavLinkPlato from '../design.system/NavLinkPlato'
import { useState } from 'react'
import SideBar from './Nav/NavSideBar'
import menuToggle from '../assets/burger-icon.png'
import './Nav/Nav.css'
import NavUserDisplay from './Nav/NavUserDisplay'
import removeToken from '../utils/controllers/removeToken'
import userConnect from '../utils/api.handlers/userConnect'
import { H4, Overline } from '../design.system/text.styling/styles'
import DevelopedFooterPlato from '../design.system/DevelopedFooterPlato'
import RowContainer from '../design.system/RowContainer'
import closeX from '../assets/x.png'

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

    <RowContainer closingMenu>
      <img  src={closeX} 
            alt='Close menu'
            className={toggle ? "toggled" : "closing-x"}
            onClick={() => setToggle(!toggle)}
          />
    </RowContainer>
    
    <RowContainer userInfoArea>
    <NavUserDisplay display={toggle ? "toggled" : "user-info"} {...user}/>
    
    
    </RowContainer>

    <ul className={toggle ? "toggled" : "undefined"}>
      <li className='my-1'><NavLinkPlato to="/private/dashboard">
        <H4>
          Dashboard
        </H4>
      </NavLinkPlato></li>
      <li className='my-2'><NavLinkPlato to="/private/mytasks">
        <H4>
          My Tasks
        </H4>
      </NavLinkPlato></li>
      <li className='my-2'><NavLinkPlato to="/private/events">
        <H4>
          Events
        </H4>
      </NavLinkPlato></li>
      <li className='my-2'><NavLinkPlato to="/private/books">
        <H4>
          Books
        </H4>
        </NavLinkPlato></li>
      <li className='my-4'><NavLinkPlato to="/" onClick={removeToken}>
        <H4 destructive>
          Logout
        </H4>
      </NavLinkPlato></li>
      
    </ul>


      <DevelopedFooterPlato className={toggle ? "toggled" : "undefined"}>
        <Overline muted> Developed by F. Mantovani and L. Mendes @ 2022 </Overline>
      </DevelopedFooterPlato>


    
    
    </SideBar>
    </div>
    
  )
}

export default Navbar