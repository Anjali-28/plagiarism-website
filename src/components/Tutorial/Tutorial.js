import React from 'react'

import './Tutorial.css'
import TutorialCard from './TutorialCard/TutorialCard'

function Tutorial() {
  return (
    <div className='home'>
      <TutorialCard title="Tutorial for Students" desc1="Step 1: To get started, you'll need to register on our website. Click on the 'Register' button located on the homepage. Fill in your credentials, including your name, email address, and a secure password. Once you've filled in the required information, click 'Submit' to create your account." desc2="Step 2: After successfully registering, you can now log in using your credentials. On the homepage, find the 'Login' button. Enter your email address and password, then click 'Login' to access your account." desc3="Step 3: Once you're logged in, you'll be directed to your personal dashboard. Here, you'll find all the relevant information and options to manage your assignments." desc4="Step 4: On the dashboard, you'll see a section titled 'Pending Assignments'.This section will display a list of assignments that you need to submit. Click on the assignment you wish to submit." desc5="Step 5: To submit your handwritten assignment, make sure it's in .jpg format. If not, convert it to .jpg using any image editing software. Click on the 'Submit Assignment' button and select the .jpg file from your device. Once selected, click 'Submit' to upload your assignment."
 image="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
     </div>
  )
}

export default Tutorial