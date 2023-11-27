import React from 'react'
import { contacts, openingHours } from '../data/data';

export function Bejelentkezes() {
    return (
        <div className='shop-info' id='make-appointment'>
            <h2>Bejelentkezés</h2>
            <a
                href={contacts.tel.link}
                rel="noopener noreferrer">
                {contacts.tel.text}
            </a>
            <a
                href={contacts.email.link}
                rel="noopener noreferrer">
                {contacts.email.text}
            </a>
        </div>
    )
}

export function Nyitvatartas() {
    return (
        <div className='shop-info' id='opening-hours'>
            <h2>Nyitvatartás</h2>
            <ul>
                {openingHours.map((item, index) => (
                    <li key={index}>
                        <span>{item.day}</span>
                        <span>{item.hours}</span>
                    </li>
                ))}
            </ul>
            <h3>Hétvégén zárva!</h3>
        </div>
    )
}

export function Cim() {
    return (
        <div className='shop-info' id='address'>
            <h2>Cím</h2>
            <a
                target="_blank"
                href={contacts.address.link}
                rel="noopener noreferrer">
                <div>
                    {contacts.address.city}, {contacts.address.postcode}
                </div>
                {contacts.address.street}
            </a>
        </div>
    )
}

