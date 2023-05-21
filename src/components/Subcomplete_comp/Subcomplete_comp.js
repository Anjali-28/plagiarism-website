import React, { useState } from 'react';
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import './Subcomplete_comp.css';

function Subcomplete_comp() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='Subcomplete_comp'>
      <label className='check'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
      <div className='pending_body'>
        <div className='pending_title'>
          <h2>Anjali Rajendran</h2>
         
        </div>  
        {
        <div className='pending_deadline'>
             <h3>Smart Contracts</h3>
          <div className='deadline_det'>
           
            <AiOutlineCalendar className='deadline_icon'/>
            <h3>Submitted on:</h3>
            <h3>12/05/2023</h3>
          </div>
          <div className='deadline_det'>
            <AiOutlineClockCircle className='deadline_icon' />
            <h3>9:00am</h3>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default Subcomplete_comp;