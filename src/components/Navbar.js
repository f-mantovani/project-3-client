import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLinkPlato from '../design.system/StyledNavLink'

const Navbar = () => {
  return (
    <nav>
    <NavLinkPlato to="/">Home</NavLinkPlato>
    <NavLinkPlato logout to="/">Logou</NavLinkPlato>
    </nav>
  )
}

export default Navbar