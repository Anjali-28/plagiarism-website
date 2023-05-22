
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const toggleShowPass = () => {
        setShowPass(!showPass)
    }
    const navigate = useNavigate()

    const onSubmit = async (e) => {
    e.preventDefault();
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
        console.log("EMail: "+email+" password: "+password);
      const loginUrl = "http://localhost:8000/api/login";
      axios
        .post(loginUrl, { email, password })
        .then((response) => {
    console.log("In onsubmit if function");
          console.log(response.data);
          if (response.data.isLoggedIn) {
            setIsLoggedIn(true);
            // cookies.set('auth', response.data.isLoggedIn)
            // cookies.set("auth", response.data.token, { path: "/" });
            const propsToPass = {
              email: email
            };
            console.log("in Login page: "+propsToPass.email);
            navigate("/studentprofile", {state: propsToPass});
          } else {
            setIsLoggedIn(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };

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
                        {/* <Link to='/studentprofile'> */}
                        <button className='admin_button_login' onClick={onSubmit}>Login</button>
                        {/* </Link> */}
                
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