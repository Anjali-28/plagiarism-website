import React from 'react'
import { useState } from "react";
import './Submitassn_comp.css'


function Submitassn_comp() {
    const [file, setFile] = useState()

    function handleFile(event) {
        setFile(event.target.files[0])
       // console.log(file)
    }

    function handleUpload() {
        const formData = new FormData()
        formData.append('file', file)
        fetch(
            'url',
            {
                method: "POST",
                body: formData
            }
            ).then((response) => response.json()).then(
                (result) => {
                    console.log('success', result)
                }
                )
                .catch(error =>{
                    console.error("Error:", error)
                })
        
    }

  return (
    <div className='Submitassn_comp'>
        <div className='submit_head'>
            <h2>Submit assignment</h2>
        </div>
        <form onSubmit={handleUpload}>
            <input type="file" name="file" onChange={handleFile}/>
            <button className='submitassn_btn'>Upload</button>
        </form>
    </div>
  )
}

export default Submitassn_comp