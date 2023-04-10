// import axios from 'axios'
import React, { useState } from 'react'
import './Signup.css'
// import { BsEye, BsEyeSlash } from 'react-icons/bs'
const Signup = () => {
    
    const [fullname,setFname] = useState('')
    const[className, setClassname] = useState('CSA')
    const[Rollno,setRollno] = useState('')
    const[YOP,setYOP] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [faculty,setFaculty] = useState("No")

    const toggleShowPass = () => {
        setShowPass(!showPass)}


    /* const submitHandler = (e) => {
        e.preventDefault();
        let data = { email:email, password:password,name:fullname,class:className,rollNo:Rollno,yop:YOP,faculty:faculty}
        axios.post("https://alumni-mec.herokuapp.com/api/register", data,{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			}}).then(() => {
            alert("Registered sucessfully")
            window.location.href = '/profile'
        }).catch(err => {
            alert(err.message)
        })
    } */

    return (
        <div>
            <h2>Register</h2>
           {/* <form onSubmit={submitHandler} className="admin_form_container"> */}

                        <div className='admin_input_container'>
                            <label className='admin_label'>Name</label>
                            <input className='admin_input' type="fname" value={fullname} onChange={e => setFname(e.target.value)} />
                        </div>

                        <div className='admin_input_container'>
                            <label className='admin_label'>Class</label>
                            <select className='admin_input' id="admin_input_class" name="admin_label" placeholder='Select your class' value={className} onChange={e=> setClassname(e.target.value)}>
                            <option value="CSA">CSA</option>
                            <option value="CSB">CSB</option>
                            <option value="ECA">ECA</option>
                            <option value="ECB">ECB</option>
                            <option value="EEE">EEE</option>
                            <option value="EBE">EBE</option>
                            <option value="MECH">MECH</option>
                            </select>

                        </div>



                        <div className='admin_input_container'>
                            <label className='admin_label'>Faculty</label>
                            <select className='admin_input' id="admin_input" name="admin_label" value={faculty} onChange={e=> setFaculty(e.target.value)}>
                            
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                            </select>

                        </div>


                        <div className='admin_input_container'>
                            <label className='admin_label'>Roll No</label>
                            <input className='admin_input' type="string" value={Rollno} onChange={e => setRollno(e.target.value)} />
                        </div>
                        <div className='admin_input_container'>
                            <label className='admin_label'>Year of Passing</label>
                            <input className='admin_input' type="string" value={YOP} onChange={e => setYOP(e.target.value)} />
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
                        
        </div>
    )
}

export default Signup;