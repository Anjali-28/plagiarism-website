import React from 'react'

import './Aboout.css'
import AboutCard from './AboutCard/AboutCard'

function Aboout() {
  return (
    <div className='home'>
      <AboutCard title="About Us" desc1="Welcome to our plagiarism-checking website for handwritten assignments and notes! We are dedicated to promoting academic integrity and ensuring fairness in education. Our platform provides an easy and reliable way for students and teachers to detect and prevent plagiarism in handwritten work. At our website, we understand the importance of originality and honesty in academic pursuits. We aim to create a supportive and ethical learning environment by offering a user-friendly interface that allows students to submit their assignments with confidence and teachers to assess them with efficiency."
      desc2="For Students:
We provide a seamless experience for students to submit their handwritten assignments in .jpg format. By simply registering on our website, students gain access to their personal dashboard, where they can view pending assignments and submit their work effortlessly. Our intuitive design ensures a smooth navigation experience, making it easy for students to upload their assignments and monitor their progress."

desc3="For Teachers:
Our website offers a comprehensive solution for teachers to assess and compare submitted assignments for potential plagiarism. Through their personalized teacher dashboard, educators can efficiently review the assignments that have been submitted by students. Our sophisticated plagiarism detection algorithm allows teachers to select any two assignments and obtain an accurate plagiarism score, helping them identify any similarities or signs of academic dishonesty."
desc4="Our Commitment:
We are committed to maintaining the highest standards of integrity and privacy. The security of your personal information and submitted assignments is of utmost importance to us. Rest assured that all data is encrypted and handled with the utmost care, ensuring confidentiality and protection." image=""/>
     </div>
  )
}

export default Aboout

