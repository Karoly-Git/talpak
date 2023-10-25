import React, { useEffect } from 'react';
import { contacts } from '../../data/data';
import { FiPhone as Phone } from 'react-icons/fi';
import { HeadSection, Section } from '../Sections';
import amobea from '../../img/amobea.png';
import AnimatedDiv from "../PageTransition";

import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import config from '../../data/config.json';

export default function Kapcsolat() {

    const URL = config.settings.isLocalServer ? config.urls.local_message : config.urls.heroku_message;

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
            //console.log(err.ok);
            navigate('/error');
        }
    };

    return (
        <AnimatedDiv>
            <div className='page kapcsolat'>
                <HeadSection
                    content={
                        <div className='box'>
                            <h1>Elérhetőségeim</h1>
                            <p>
                                Ha további részleteket szeretnél megtudni
                                az egyes szolgáltatásokról vagy konkrét árajánlatot kérni,
                                kérlek, vedd fel a kapcsolatot velem.
                            </p>
                            <img id='amobea' src={amobea} alt="" />
                        </div>
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
                                <h2 className='form-title'>Vedd fel velem a kapcsolatot</h2>
                                <p>
                                    Hagyja üyenetet, és hamarosan fel fogom venni Veled a kapcsolatot. Minden megkeresésre igyekszek 1 munkanapon belül válaszolni.
                                </p>

                                {errors.senderName && <span><p className='error'>{errors.senderName?.message}</p></span>}
                                <input placeholder="Név*" {...register('senderName')}></input>

                                {errors.senderEmail && <span><p className='error'>{errors.senderEmail?.message}</p></span>}
                                <input placeholder="Email" {...register('senderEmail')}></input>

                                {errors.senderPhone && <span><p className='error'>{errors.senderPhone?.message}</p></span>}
                                <input placeholder="Telefonszám" {...register('senderPhone')}></input>

                                {errors.text && <span><p className='error'>{errors.text?.message}</p></span>}
                                <textarea placeholder="Ide írhatod az üzenetet*" {...register('text')}></textarea>

                                <button>Küld</button>
                                <a
                                    href={contacts.tel.link}
                                    rel="noopener noreferrer">
                                    <Phone className='icon' />
                                    <h2 className='hover-color-swap'>
                                        {contacts.tel.text}
                                    </h2>
                                </a>
                            </form>
                        </div>
                    }
                />
            </div>
        </AnimatedDiv>
    )
}




