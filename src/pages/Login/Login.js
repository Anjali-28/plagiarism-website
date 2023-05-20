
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)

    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

    /* const submitHandler = async(e) => {
        e.preventDefault();
        const response = await fetch('https://alumni-mec.herokuapp.com/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/profile'
		} else {
			alert('Please check your username and password')
		}
    } */

    return (
        <div className="admin_container">
            <h2>Login</h2>
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
                        <Link to='/studentprofile'>
                        <button className='admin_button_login'>Login</button>
                        </Link>
                
        </div>
    )
}

export default Login
/* function Login() {
  return (
    <div>
        login
    </div>
  )
}

export default Login */