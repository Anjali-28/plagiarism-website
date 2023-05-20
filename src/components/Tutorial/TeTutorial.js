import React from 'react'

import './TeTutorial.css'
import TutorialCard from './TutorialCard/TutorialCard'

function TeTutorial() {
  return (
    <div className='home'>
      <TutorialCard title="Tutorial for Teachers" desc1="Step 1: On the homepage, you'll find the 'Teacher Login' button. Click on it to log in using your teacher credentials. Enter your email address and password, then click 'Login' to access your account." desc2="Step 2: After logging in as a teacher, you'll be redirected to the teacher dashboard. Here, you'll see a section labeled 'Submitted Assignments.' This section displays a list of all the assignments that have been submitted by students." desc3="Step 3: To check for plagiarism between any two assignments, simply select the assignments you wish to compare by clicking on their respective checkboxes. Then, click on the 'Check Plagiarism' button. Our advanced algorithm will analyze the selected assignments and provide you with a plagiarism score."desc4="Step 4: Once the plagiarism analysis is complete, you'll see the plagiarism score between the two assignments you selected. The score will help you identify any similarities or potential plagiarism." desc5=""
 image="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFwZXIlMjB3aXRoJTIwYSUyMGdyYWRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>
     </div>
  )
}

export default TeTutorial