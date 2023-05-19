import React from 'react'

import { Contacts } from '../../components'

import './Contact.css'

function Contact() {
  return (
    <div className='contactPage'>
      <div className='page__section'>
          <Contacts />
      </div>
    </div>
  )
}

export default Contact