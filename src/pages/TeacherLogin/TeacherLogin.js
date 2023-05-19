
import React, { useState } from 'react'
// import { BsEye, BsEyeSlash } from 'react-icons/bs'
import './TeacherLogin.css'

const TeacherLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)

    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

    
    return (
        <div className="admin_container">
            <h2>Teacher Login</h2>
            {/* <form onSubmit={submitHandler} className="admin_form_container"> */}
                        <div className='admin_input_container'>
                            <label className='admin_label'>Email</label>
                            <input className='admin_input' type="email" placeholder='example@gmail.com' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='admin_input_container'>
                            <label className='admin_label'>Password</label>
                            <input className='admin_input' type={showPass ? 'text' : 'password'} placeholder="***" value={password} onChange={e => setPassword(e.target.value)} />
                            {/* {showPass ? <BsEye className='admin_input_eye' onClick={toggleShowPass}/> : <BsEyeSlash className='admin_input_eye' onClick={toggleShowPass}/>} */}
                        </div>
                        <button className='admin_button_login'>Login</button>
                
        </div>
    )
}

export default TeacherLogin
