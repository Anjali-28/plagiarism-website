import React, { useContext, useEffect, useState } from 'react'; 
import './StudentProfile.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'

function StudentProfile() {
    const userDetails = useLocation()
    const { email, student_id } = userDetails.state || {}
    const [responseData, setResponseData] = useState({});


    useEffect(() => {
      console.log("useEffect called in studentProfile");
        const userDetailURL = `http://localhost:8000/api/${email}`;
        axios
        .get(userDetailURL)
        .then((response) => {
            const allResponse=response.data
            setResponseData(allResponse);
        })
        .catch((err) => console.log(err));
    }, []);

   return (
        <div className="profile">
                <div className="profile_container">
                    <div className="profile_header">
                        <img src={"https://avatars.githubusercontent.com/u/43471295?v=4"} alt="" className='profile_pic'/>
                        <div className="profile-name">
                        <label className='profile_label'>Name</label>
                        <label className='admin_input' > { responseData.fullName } </label> 
                        </div>
                        <div className="profile-class">
                        <label className='profile_label'>Class</label>
                        <label className='admin_input' >{ responseData.className } </label>
                        </div>
                        <div className="profile-email">
                        <label className='profile_label'>Email</label>
                        <label className='admin_input' >{ responseData.email } </label>
                        </div>
                        <div className="profile-rollno">
                        <label className='profile_label'>Roll NO</label>
                        <label className='admin_input' >{ responseData.Rollno } </label>
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
