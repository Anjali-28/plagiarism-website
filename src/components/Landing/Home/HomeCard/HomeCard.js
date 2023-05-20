import React from 'react'

import './HomeCard.css'
import { Link } from 'react-router-dom'

function HomeCard({ image, title, desc }) {
  return (
    <div className='homeCard'>
        <img className="home_image" src={image} alt=""></img>
        <div className="home_content">
            <span className="home_title">{title}</span>
            <p className="home_description">{desc}</p>
            <div className='h_btns'><Link to='/about'><button>Get Started</button></Link></div>
        </div>
    </div>
  )
}

export default HomeCard