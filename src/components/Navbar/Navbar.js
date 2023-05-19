import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { TabContext } from '../../contexts/TabContext'




function Navbar() {
  // const { updateDropdownTab } = useContext(TabContext);
  return (
    <div className='navbar'>
        <div className='navbar__container'>
          <Link to='/'>
            <img src="https://avatars.githubusercontent.com/u/43471295?v=4" alt="" className='nav__logo' />
          </Link>
    <div className='navbar_comp'>
     <div className='navbar_links'>
    <Link className='nav_links' to='/'>
      Home
    </Link>
    <Link className='nav_links' to='/tutorial'>
      Tutorial
    </Link>
    <Link className='nav_links'to ='/teachersignup'>
      Teacher
          </Link>
    <Link className='nav_links' to='/testimonials'>
      Testimonials
    </Link>
    <Link className='nav_links' to='/contactus'>
      Contact Us
    </Link>
    </div>
    
</div>

          <div className='nav__btns'>
            <Link to='/login'>
              <button>Login</button>
            </Link>
            <Link to='/signup'>
            <button>Sign up</button>
            </Link>
            
          </div>
        </div> 
    
  
</div>

  )
}

export default Navbar