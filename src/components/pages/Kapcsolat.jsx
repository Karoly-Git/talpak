// React and React Router Imports
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

// Form Handling Imports
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Animation Imports
import { motion as m } from 'framer-motion';
import { animations } from '../../data/framer-animations';

// Data Imports
import { contacts } from '../../data/data';
import config from '../../config.json';

// Icon Imports
import { FiPhone as Phone } from 'react-icons/fi';
import { MdMarkEmailRead as EnvelopOkIcon } from 'react-icons/md';
import { FaExclamation as ErrorIcon } from 'react-icons/fa';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

// Custom Component Imports
import { HeadSection, Section } from '../Sections';

export default function Kapcsolat(props) {
    const [isStatusBoxOpen, setIsStatusBoxOpen] = useState(false);
    const [sendingInProgress, setSendingInProgress] = useState(false);
    const [isSendingError, setIsSendingError] = useState(false);

    const messageURL = config.settings.isLocalServer ? config.urls.local + '/message' : config.urls.heroku + '/message';

    const schema = yup.object().shape({
        senderName: yup.string().required("Név megadása szükséges!"),
        senderEmail: yup.string().email("Nem tűnik érvényes email címnek!").required("Email cím megadása szükséges!"),
        senderPhone: yup.string(),
        text: yup.string().required("Elfelejtettél üzenetetet írni!"),
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        setIsStatusBoxOpen(true);
        setSendingInProgress(true);
        props.setAnyFormTriggered(true);

        let newDate = new Date();
        let date = newDate.toLocaleDateString();
        let time = newDate.toLocaleTimeString();
        data.date = date;
        data.time = time;

        try {
            const result = await fetch(messageURL,
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

            if (!result.ok) {
                setIsSendingError(true);
            }

        } catch (err) {
            //console.log(err.ok);
            setIsSendingError(true);
        } finally {
            setSendingInProgress(false);
        }
    };

    function closeStatusBox() {
        setIsStatusBoxOpen(false);
    }

    function resetForm() {
        reset({
            senderName: '',
            senderEmail: '',
            senderPhone: '',
            text: ''
        });
    }

    return (
        <m.div className='page kapcsolat' {...animations.pageTransition}>
            <Helmet>
                <title>Elérhetőségeim - Kapcsolatfelvétel Mobil, WhatsApp, Email útján</title>
            </Helmet>
            {isStatusBoxOpen && sendingInProgress &&
                <div className='status-box' id='in-progress'>
                    <p>Küldés folyamatban...</p>

                    <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="9" stroke="#000" strokeWidth="2" fill="none" />
                        <circle cx="10" cy="10" r="9" stroke="#0073e6" strokeWidth="2" fill="none">
                            <animate attributeName="stroke-dasharray" from="0 56.548667764616276" to="57 56.548667764616276" dur="1s" begin="0s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>
            }
            {isStatusBoxOpen && !sendingInProgress && !isSendingError &&
                <div className='status-box' id='is-sent'>
                    <CloseIcon
                        id='close-icon'
                        onClick={() => {
                            resetForm();
                            closeStatusBox();
                            props.setAnyFormTriggered(false);
                        }}
                    />
                    <EnvelopOkIcon className='icon'
                    />
                    <h2>Üzenet elküldve!</h2>

                    <h3>Köszönöm az üzenetet, hamarosan válszolok!</h3>
                </div>
            }
            {isStatusBoxOpen && !sendingInProgress && isSendingError &&
                <div className='status-box' id='is-error'>
                    <CloseIcon
                        id='close-icon'
                        onClick={() => {
                            closeStatusBox();
                            setIsSendingError(false);
                            props.setAnyFormTriggered(false);
                        }}
                    />
                    <ErrorIcon className='icon'
                    />
                    <h2>Sikertelen küldés!</h2>

                    <h3>Probáld újra később, vagy vedd fel velem a kapcsolatot a lent látható elérhetőségeim valamelyikén!</h3>
                </div>
            }
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

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            style={isStatusBoxOpen || props.anyFormTriggered ? { pointerEvents: 'none' } : { pointerEvents: 'unset' }}>

                            <h2 className='form-title'>Küldj üzenetet</h2>

                            <p>Hagyja üyenetet, és hamarosan fel fogom venni Veled a kapcsolatot. Minden megkeresésre igyekszek 1 napon belül válaszolni.</p>

                            {errors.senderName && <span><p className='error'>{errors.senderName?.message}</p></span>}
                            <input placeholder="Név*" {...register('senderName')}></input>

                            {errors.senderEmail && <span><p className='error'>{errors.senderEmail?.message}</p></span>}
                            <input placeholder="Email*" {...register('senderEmail')}></input>

                            {errors.senderPhone && <span><p className='error'>{errors.senderPhone?.message}</p></span>}
                            <input placeholder="Telefonszám" {...register('senderPhone')}></input>

                            {errors.text && <span><p className='error'>{errors.text?.message}</p></span>}
                            <textarea placeholder="Ide írd az üzenetet*" {...register('text')}></textarea>

                            <button>Küld</button>

                            <a href={contacts.tel.link} rel="noopener noreferrer">
                                <Phone className='icon' />
                                <h2 className='hover-color-swap'>{contacts.tel.text}</h2>
                            </a>

                            {config.settings.isLocalServer &&
                                <div style={{ fontSize: '12px', color: 'white' }}>Local Server</div>
                            }
                        </form>
                    </div>
                }
            />
        </m.div >
    )
}




