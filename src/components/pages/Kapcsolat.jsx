import React, { useEffect, useState } from 'react';
import { contacts } from '../../data/data';
import { FiPhone as Phone } from 'react-icons/fi';
import { HeadSection, Section } from '../Sections';

import { motion as m } from 'framer-motion';
import { animations } from '../../data/framer-animations';

import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import config from '../../config.json';

export default function Kapcsolat() {

    const [sending, setSending] = useState(false);

    const URL = config.settings.isLocalServer ? config.urls.local_message_url : config.urls.heroku_message_url;

    const navigate = useNavigate();

    const schema = yup.object().shape({
        senderName: yup.string().required("Név megadása szükséges!"),
        senderEmail: yup.string().email("Nem tűnik érvényes email címnek!"),
        senderPhone: yup.string(),
        text: yup.string().required("Elfelejtettél üzenetetet írni!"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        setSending(true);
        try {
            const result = await fetch(URL,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );

            //console.log(result);

            if (result.ok) {
                navigate('/success');
                //console.log('email sent');
            } else {
                navigate('/error');
                //console.log('ERROR');
            }

        } catch (err) {
            navigate('/error');
            //console.log(err.ok);
        } finally {
            setSending(false); // Set the sending state back to false after the request is complete
        }
    };

    return (
        <m.div className='page kapcsolat' {...animations.pageTransition}>
            <HeadSection
                content={
                    <m.div className='box' {...animations.page.box}>
                        <m.h1 {...animations.page.h1}>Elérhetőségeim</m.h1>
                        <m.p {...animations.page.p}>
                            Ha további részleteket szeretnél megtudni
                            az egyes szolgáltatásokról vagy konkrét árajánlatot kérni,
                            kérlek, vedd fel a kapcsolatot velem.
                        </m.p>
                    </m.div>
                }
            />

            <Section
                top
                bottom
                content={
                    <div className='box'>
                        <ul className='contacts'>
                            <li>
                                <h2>Mobil:</h2>
                                <a
                                    href={contacts.tel.link}
                                    rel="noopener noreferrer">
                                    <h3 className='hover-color-swap'>{contacts.tel.text}</h3>
                                </a>
                            </li>
                            <li>
                                <h2>WhatsApp:</h2>
                                <a
                                    target="_blank" href={contacts.whatsapp.link}
                                    rel="noopener noreferrer">
                                    <h3 className='hover-color-swap'>{contacts.whatsapp.text}</h3>
                                </a>
                            </li>
                            <li id="email">
                                <h2>Email:</h2>
                                <a
                                    className='hover-color-swap'
                                    href={contacts.email.link}
                                    rel="noopener noreferrer">
                                    {contacts.email.text}
                                </a>
                            </li>
                            <li id="location">
                                <h2>Cím</h2>
                                <a
                                    target="_blank"
                                    href={contacts.address.link}
                                    rel="noopener noreferrer">
                                    <p className='hover-color-swap' >{contacts.address.city}, {contacts.address.street}</p>
                                </a>
                            </li>
                        </ul>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className='form-title'>Küldj üzenetet</h2>
                            <p>
                                Hagyja üyenetet, és hamarosan fel fogom venni Veled a kapcsolatot. Minden megkeresésre igyekszek 1 napon belül válaszolni.
                            </p>

                            {errors.senderName && <span><p className='error'>{errors.senderName?.message}</p></span>}
                            <input placeholder="Név*" {...register('senderName')}></input>

                            {errors.senderEmail && <span><p className='error'>{errors.senderEmail?.message}</p></span>}
                            <input placeholder="Email" {...register('senderEmail')}></input>

                            {errors.senderPhone && <span><p className='error'>{errors.senderPhone?.message}</p></span>}
                            <input placeholder="Telefonszám" {...register('senderPhone')}></input>

                            {errors.text && <span><p className='error'>{errors.text?.message}</p></span>}
                            <textarea placeholder="Ide írd az üzenetet*" {...register('text')}></textarea>

                            {sending &&
                                <div id='sending-in-progress'>
                                    <p>Küldés folyamatban...</p>

                                    <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="9" stroke="#000" stroke-width="2" fill="none" />
                                        <circle cx="10" cy="10" r="9" stroke="#0073e6" stroke-width="2" fill="none">
                                            <animate attributeName="stroke-dasharray" from="0 56.548667764616276" to="57 56.548667764616276" dur="1s" begin="0s" repeatCount="indefinite" />
                                        </circle>
                                    </svg>
                                </div>
                            }

                            <button>Küld</button>

                            <a
                                href={contacts.tel.link}
                                rel="noopener noreferrer">
                                <Phone className='icon' />
                                <h2 className='hover-color-swap'>
                                    {contacts.tel.text}
                                </h2>
                            </a>

                            <span style={{ fontSize: '12px', color: 'white' }}>{config.settings.isLocalServer ? 'Local' : 'Heroku'}</span>
                        </form>
                    </div>
                }
            />
        </m.div>
    )
}




