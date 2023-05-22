import React from 'react'
import { useState } from "react";
import { useNavigate} from 'react-router-dom'
import './Submitassn_comp.css'


function Submitassn_comp() {
    const [file, setFile] = useState()
    const navigate = useNavigate()
    function handleFile(event) {
        setFile(event.target.files[0])
       // console.log(file)
    }

    function handleUpload() {
        const formData = new FormData()
        console.log("in handleUpload");
        const uploadURl = 'http://localhost:8000/api/upload'
        formData.append('subject', "DC")
        formData.append('student_id',1)
        formData.append("year","4")
        formData.append('submission', file)
        fetch(
            uploadURl,{
                method: "POST",
                body: formData
            })
            .then(async (response) => {
                // response.json()
                // navigate(-1)
                const data = await response.json();
                // Check the response or perform any necessary logic
                if (data.success) {
                navigate(-1); // Go back one step in the navigation stack
        }
            })
            .then((result) => { console.log('success', result) })
            .catch(error =>{ console.error("Error:", error) })
        console.log(file);
    }

  return (
    <div className='Submitassn_comp'>
        <div className='submit_head'>
            <h2>Submit assignment</h2>
        </div>

        <form onSubmit={handleUpload}>
        <div className='form_sub'>
            <input type="file" name="file" onChange={handleFile}/>
            <button className='submitassn_btn'>Upload</button>
        </div>
        </form>
    </div>
  )
}

export default Submitassn_comp