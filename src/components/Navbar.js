import React from 'react'
import NavLinkPlato from '../design.system/NavLinkPlato'

const Navbar = () => {
  return (
    <nav>
    <h1>Plato</h1>
    <NavLinkPlato to="/">Home</NavLinkPlato>
    <NavLinkPlato logout to="/">Logout</NavLinkPlato>
    </nav>
  )
}

export default Navbar