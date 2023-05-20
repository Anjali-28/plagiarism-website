import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import './Pendingassn_comp.css'

function Pendingassn_comp() {
  return (
    <div className='Pendingassn_comp'>
        <div className='pending_img'>
            <img src='https://avatars.githubusercontent.com/u/43471295?v=4' className='pending_img'/>
        </div>
        <div className='pending_body'>
            <div className='pending_title'>
                <h1>Smart Contracts</h1>
                <h2 className='subject_heading'>Blockchain Technology</h2>
            </div>
            <div className='pending_deadline'>
                <div className='deadline_det'>
                    <AiOutlineCalendar className='deadline_icon'/>
                    <h1>12/05/2023</h1>
                </div>
                <div className='deadline_det'>
                    <AiOutlineClockCircle className='deadline_icon' />
                    <h1>9:00am</h1>
                </div>
            </div>
            <div className='pending_button'>
                <Link to="/Submitassn">
                <button className='pending_sub_btn'>Submit</button>
               </Link>
            </div>
        </div>
    </div>
  )
}

export default Pendingassn_comp