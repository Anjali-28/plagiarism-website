import React from 'react'

import './TutorialCard.css'
import { Link } from 'react-router-dom'

function TutorialCard({ image, title, desc1, desc2, desc3, desc4, desc5 }) {
  return (
    <div className='homeCard'>
        <img className="home_image" src={image} alt=""></img>
        <div className="home_content">
            <span className="home_title">{title}</span>
            <p className="home_description">{desc1}</p>
            <p className="home_description">{desc2}</p>
            <p className="home_description">{desc3}</p>
            <p className="home_description">{desc4}</p>
            <p className="home_description">{desc5}</p>
            <div className='h_btns'><Link to='/teachersignup'><button>Register as Teacher</button></Link></div>
            <div className='h_btns'><Link to='/signup'><button>Register as Student</button></Link></div>
           
            
            </div>
    </div>
  )
}

export default TutorialCard