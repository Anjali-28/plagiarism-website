import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar__container'>
          <Link to='/'>
            <img src="https://avatars.githubusercontent.com/u/43471295?v=4" alt="" className='nav__logo' />
          </Link>

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