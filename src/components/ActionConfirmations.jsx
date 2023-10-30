import React from 'react'

// Icon Imports
import { FaExclamation as ErrorIcon } from 'react-icons/fa';
import { MdOutlineDoneOutline as OkIcon, MdMarkEmailRead as EnvelopOkIcon } from 'react-icons/md';

export function MessageError() {
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
        </div>
    )
}

export function MessageSuccess() {
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
export function SubscribeError() {
    return (
        <div className='error-message-container'>
            <ErrorIcon className='icon' />

            <h1 style={{ width: '100 %', textAlign: 'center' }}>
                Hiba történt!
            </h1>

            <h2 style={{ width: '100 %', textAlign: 'center' }}>
                Feliratkozás sikertelen!
            </h2>

            <h3 style={{ width: '100 %', textAlign: 'center' }}>Probáld újra később, vagy vedd fel velem a kapcsolatot a lent látható elérhetőségeim valamelyikén!</h3>
        </div>
    )
}

export function SubscribeSuccess() {
    return (
        <div className='success-message-container'>
            <EnvelopOkIcon className='icon' />
            <h1 style={{ width: '100 %', textAlign: 'center' }}>
                Feliratkozás sikeres!
            </h1>

            <h2 style={{ width: '100 %', textAlign: 'center' }}>
                Köszönöm az feliratkozást!
            </h2>

            <h3 style={{ width: '100 %', textAlign: 'center' }}>Mostantól rendeszeres értesítéseket küldök majd eseményekről, akciókról és friss hírekről!</h3>
        </div>
    )
}

