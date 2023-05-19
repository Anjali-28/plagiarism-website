import React from 'react'
import { Pendingassn_comp } from '../../components'
import './Pendingassn.css'

function Pendingassn() {
  return (
    <div className='Pendingassn'>
        <div className='pending_head'>
            <h1>Pending Assignments</h1>
        </div>
        <div className='pending_cards'>
            <Pendingassn_comp />
            <Pendingassn_comp />
            <Pendingassn_comp />
            <Pendingassn_comp />
            <Pendingassn_comp />
            <Pendingassn_comp />
        </div>
    </div>
  )
}

export default Pendingassn