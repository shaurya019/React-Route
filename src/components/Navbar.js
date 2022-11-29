import React from 'react'
import { useAuth } from './auth'
import {NavLink} from 'react-router-dom';


const Navbar = () => {

  const auth = useAuth()

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
      <NavLink to='/Profile' style={navLinkStyles}>
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink to='/login' style={navLinkStyles}>
          Login
        </NavLink>
      )}
    </nav>
  )
}

export default Navbar
