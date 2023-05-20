import React from 'react'
import { Link } from 'react-router-dom'

import './AboutCard.css'

function AboutCard({ image, title, desc1, desc2, desc3, desc4 }) {
  return (
    <div className='homeCard'>
        <img className="home_image" src={image} alt=""></img>
        <div className="home_content">
            <span className="home_title">{title}</span>
            <p className="home_description">{desc1}</p>
            <p className="home_description">{desc2}</p>
            <p className="home_description">{desc3}</p>
            <p className="home_description">{desc4}</p>
            <div className='h_btns'><Link to='/teacher'><button>Tutorial for Teachers</button></Link></div>
            <div className='h_btns'><Link to='/student'><button>Tutorial for Students</button></Link></div>
        </div>
    </div>
  )
}

export default AboutCard



