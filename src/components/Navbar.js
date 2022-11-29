import React from 'react'
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    const NavlinkStyles = ({isActive}) => {
        return {
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
  return (
    <nav>
      <NavLink style={NavlinkStyles}  to='/'>Home</NavLink>
      <NavLink  style={NavlinkStyles} to='/About'>About</NavLink>
      <NavLink  style={NavlinkStyles} to='/Products'>Product</NavLink>
    </nav>
  )
}

export default Navbar
