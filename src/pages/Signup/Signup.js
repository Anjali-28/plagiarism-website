import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Signup.css'
// import { BsEye, BsEyeSlash } from 'react-icons/bs'
const Signup = () => {
    
    const [fullName,setFname] = useState('')
    const[className, setClassname] = useState('CSA')
    const[Rollno,setRollno] = useState('')
    const[YOP,setYOP] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [faculty,setFaculty] = useState("No") 
    const [student_id, setStudent_id] = useState(0)
    const [isSignupSuccess, setIsSignupSuccess] = useState(null);
    const toggleShowPass = () => {
        setShowPass(!showPass)
    }
    
    const navigate = useNavigate()

    const onSubmit = (e) => {
    e.preventDefault();
    console.log("i sonsubmit");
    if (fullName.length) {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      ) {
          if (
            password.length >= 8 &&
            password.length <= 15
          ) {

            const signupUrl = `http://localhost:8000/api/signup`;
            axios
              .post(signupUrl, {
                  fullName,
                  className,
                  Rollno,
                  email,
                  password,
                  student_id
              })
              .then((response) => {
                console.log("response:"+response.data);
                if (response.data.status) {
                  setIsSignupSuccess(true);
                  alert(
                    "Yay! Account created successfully. Please login to continue"
                  );
                  navigate("/StudentProfile");
                } else {
                  setIsSignupSuccess(false);
                }
              })
              .catch((err) => console.log(err));
          }
      }
    }
  };

  useEffect(() => {
      console.log("useEffect called");
    const lastIDUrl = "http://localhost:8000/api/lastID";
    axios
      .get(lastIDUrl)
      .then((response) => {
        //   console.log(response.data[0].student_id);
        //   console.log(response.data[0].student_id + 1);
        const newVal=response.data[0].student_id + 1
        setStudent_id(newVal);
        // console.log(newVal);
      })
      .catch((err) => console.log(err));
  }, []);
    return (
        <div className='admin_container'> 
            <h2>Sign Up</h2>
           {/* <form onSubmit={submitHandler} className="admin_form_container"> */}

                        <div className='admin_input_container'>
                            <label className='admin_label'>Name</label>
                            <input className='admin_input' type="fname" value={fullName} onChange={e => setFname(e.target.value)} />
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
                        {/* <Link to={"/StudentProfile"}> */}
                        <button className='admin_button_register' onClick={onSubmit}>Register</button>
                        {/* </Link> */}
                        
                        
        </div>
    )
}

export default Signup