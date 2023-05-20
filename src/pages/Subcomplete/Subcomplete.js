import React from 'react'
import { Subcomplete_comp } from '../../components'
import './Subcomplete.css'

function Subcomplete() {
  return (
    <div className='Subcomplete'>
        <div className='pending_head'>
            <h1>Submitted Assignments</h1>
        </div>
        <div className='pending_cards'>
            <Subcomplete_comp />
            <Subcomplete_comp />
            <Subcomplete_comp />
            <Subcomplete_comp />
        </div>
    </div>
  )
}

export default Subcomplete