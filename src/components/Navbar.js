import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLinkPlato from '../design.system/StyledNavLink'

const Navbar = () => {
  return (
    <nav>
    <h1>Plato</h1>
    <NavLinkPlato to="/">Home</NavLinkPlato>
    <NavLinkPlato logout to="/">Logou</NavLinkPlato>
    </nav>
  )
}

export default Navbar