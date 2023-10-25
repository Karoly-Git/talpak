import React from 'react'

import { FaExclamation as ErrorIcon } from 'react-icons/fa';
//import Contacts from './Contacts';

export default function MessageError() {
    return (
        <div className='error-message-container'>
            <ErrorIcon className='icon' />

            <h1 style={{ width: '100 %', textAlign: 'center' }}>
                Hoppá...
            </h1>

            <h2 style={{ width: '100 %', textAlign: 'center' }}>
                Üzenet küldése sikertelen!
            </h2>

            <h3 style={{ width: '100 %', textAlign: 'center' }}>Probáld újra később, vagy vedd fel velem a kapcsolatot a lent látható elérhetőségeim valamelyikén!</h3>

            {/*false && <div className="contact-box">
                <Contacts />
    </div>*/}
        </div>
    )
}
