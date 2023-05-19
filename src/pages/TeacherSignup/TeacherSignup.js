// import axios from 'axios'
import React, { useState } from 'react'
import './TeacherSignup.css'
import { Link } from 'react-router-dom'
// import { BsEye, BsEyeSlash } from 'react-icons/bs'
const TeacherSignup = () => {
    
    const [fullname,setFname] = useState('')
    const[className, setClassname] = useState('CSA')
    const[Rollno,setRollno] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)
  
    const toggleShowPass = () => {
        setShowPass(!showPass)}


    return (
        <div className='admin_container'> 
            <h2>Sign Up</h2>
           {/* <form onSubmit={submitHandler} className="admin_form_container"> */}

                        <div className='admin_input_container'>
                            <label className='admin_label'>Name</label>
                            <input className='admin_input' type="fname" value={fullname} onChange={e => setFname(e.target.value)} />
                        </div>

                        <div className='admin_input_container'>
                            <label className='admin_label'>Subject</label>
                            <select className='admin_input' id="admin_input_class" name="admin_label" placeholder='Select your subject' value={className} onChange={e=> setClassname(e.target.value)}>
                            <option value="Artificial Intelligence">Artificial Intelligence</option>
                            <option value="Distributed Computing">Distributed Computing</option>
                            <option value="Soft Computing">Soft Computing</option>
                            <option value="Data Mining">Data Mining </option>
                            </select>

                        </div>



                       <div className='admin_input_container'>
                            <label className='admin_label'>Teacher ID</label>
                            <input className='admin_input' type="string" value={Rollno} onChange={e => setRollno(e.target.value)} />
                        </div>
                        
                        <div className='admin_input_container'>
                            <label className='admin_label'>Email</label>
                            <input className='admin_input' type="email"  value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='admin_input_container'>
                            <label className='admin_label'>Password</label>
                            <input className='admin_input' type={showPass ? 'text' : 'password'}  value={password} onChange={e => setPassword(e.target.value)} />
                            {/* {showPass ? <BsEye className='admin_input_eye' onClick={toggleShowPass}/> : <BsEyeSlash className='admin_input_eye' onClick={toggleShowPass}/>} */}
                        </div>
                        <button className='admin_button_register'>Register</button>
                        <Link to='/teacherlogin'>
                        <button className='admin_button_register'>Already have an account? Log In</button>
                        </Link>
                        </div>
    )
}

export default TeacherSignup