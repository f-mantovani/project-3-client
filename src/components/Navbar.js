import React from 'react'
import NavLinkPlato from '../design.system/NavLinkPlato'

const Navbar = () => {
  return (
    <nav>
    <h1>Plato</h1>

    <NavLinkPlato to="/dashboard">Dashboard</NavLinkPlato>
    <NavLinkPlato to="/mytasks">My Tasks</NavLinkPlato>
    <NavLinkPlato to="/events">Events</NavLinkPlato>
    <NavLinkPlato to="/books">Books</NavLinkPlato>
    <NavLinkPlato logout to="/">Logout</NavLinkPlato>
    </nav>
  )
}

export default Navbar