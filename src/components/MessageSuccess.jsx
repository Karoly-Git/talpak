import React from 'react'

import { MdOutlineDoneOutline as OkIcon } from 'react-icons/md';

export default function MessageSuccess() {
  return (
    <div className='success-message-container'>
      <OkIcon className='icon' />
      <h1 style={{ width: '100 %', textAlign: 'center' }}>
        Üzenet elküldve!
      </h1>

      <h2 style={{ width: '100 %', textAlign: 'center' }}>
        Köszönöm az üzenetet!
      </h2>

      <h3 style={{ width: '100 %', textAlign: 'center' }}>Hamarosan válszolok!</h3>
    </div>
  )
}
