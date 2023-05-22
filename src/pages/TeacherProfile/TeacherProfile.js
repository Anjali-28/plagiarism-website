


import React, { useContext} from 'react'; 



import './TeacherProfile.css';

import { Link } from 'react-router-dom';


function TeacherProfile() {

     

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
                        <label className='profile_label'>Subject</label>
                        <label className='admin_input' >Data Mining</label>
                        </div>
                        <div className="profile-email">
                        <label className='profile_label'>Email</label>
                        <label className='admin_input' >anjalirajendran.mec@gmail.com</label>
                        </div>
                        <div className="profile-rollno">
                        <label className='profile_label'>Teacher ID</label>
                        <label className='admin_input' >CSUA10</label>
                        </div>
                        <div className="profile_btns">
                            <Link to='//subcomplete'>
                       <button>View Submitted Assignments</button></Link>
                        </div>

                    </div>
                    
                </div>
            
        </div>
        
    )
}

export default TeacherProfile
