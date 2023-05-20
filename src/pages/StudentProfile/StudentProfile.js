


import React, { useContext} from 'react'; 



import './StudentProfile.css';

import { Link } from 'react-router-dom';


function StudentProfile() {

     

    return (
        <div className="profile">
                                    
           
            
           
                <div className="profile_container">
                    <div className="profile_header">
                        <img src={"https://avatars.githubusercontent.com/u/43471295?v=4"} alt="" className='profile_pic'/>
                        <div className="profile-name">
                        <label className='profile_label'>Name</label>
                        <label className='admin_input' >Anjali Rajendran</label> 
                        </div>
                        <div className="profile-class">
                        <label className='profile_label'>Class</label>
                        <label className='admin_input' >Data Mining</label>
                        </div>
                        <div className="profile-email">
                        <label className='profile_label'>Email</label>
                        <label className='admin_input' >anjalirajendran.mec@gmail.com</label>
                        </div>
                        <div className="profile-rollno">
                        <label className='profile_label'>Roll NO</label>
                        <label className='admin_input' >CSUA10</label>
                        </div>
                        <div className="profile-yop">
                        <label className='profile_label'>Year of Passing</label>
                        <label className='admin_input' >2023</label>
                        </div>
                        <div className="profile_btns">
                          <Link to='/pendingassn'>
                       <button>View Pending Assignments</button></Link>
                        </div>

                    </div>
                    
                </div>
            
        </div>
        
    )
}

export default StudentProfile
