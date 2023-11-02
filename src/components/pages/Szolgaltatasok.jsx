// React Imports
import React, { useState } from 'react';

// Custom Components and Data Imports
import { HeadSection, Section } from '../Sections';
import { services } from '../../data/services';

// Icon Imports
import { FaPlus as PlusIcon, FaMinus as MinusIcon } from 'react-icons/fa';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

// Animation Imports
import { motion as m } from 'framer-motion';
import { animations } from '../../data/framer-animations';

export default function Szolgaltatasok() {
    const activeServices = services.filter((e) => e.isActive);

    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const [serviceGroup, setServiceGroup] = useState('');
    const [serviceName, setServiceName] = useState('');
    const [description, setDescription] = useState([]);

    function setBoxContent(i, eIndex) {
        setServiceGroup(activeServices[i].name);
        setServiceName(activeServices[i].description.main[eIndex].name);
        setDescription(activeServices[i].description.main[eIndex].description);
    };

    return (
        <m.div className='page szolgaltatasok' {...animations.pageTransition}>
            {
                <div className='detail-container' style={isBoxVisible ? { display: '' } : { display: 'none' }}>
                    <CloseIcon
                        id='close-icon'
                        onClick={() => {
                            setIsBoxVisible(false);
                        }}
                    />
                    <div className='detail-box'>
                        <h2>{serviceGroup}</h2>
                        <h3>{serviceName}</h3>
                        {description.map((p, pIndex) => <p key={pIndex}>{p}</p>)}
                    </div>
                </div>
            }


            <HeadSection
                content={
                    <m.div className='box' {...animations.page.box}>
                        <m.h1 {...animations.page.h1}>
                            Szolgáltatások
                        </m.h1>
                        <m.p {...animations.page.p}>
                            Ha további részleteket szeretnél megtudni
                            az egyes szolgáltatásokról vagy konkrét árajánlatot kérni,
                            kérlek, vedd fel a kapcsolatot velem.
                        </m.p>
                    </m.div>
                }
            />

            {activeServices.map((e, i) =>
                <Section
                    color={i % 2 !== 0 ? true : false}
                    top
                    key={i}
                    id={e.id}
                    content={
                        <div className='box'>
                            <h2>{e.name}</h2>
                            <div className='div1' style={i % 2 !== 0 ? { flexDirection: 'row-reverse' } : {}}>
                                <img
                                    src={e.img.main.src}
                                    alt={e.img.main.alt}
                                />
                                <div className='div2'>
                                    {e.description.main.map((element, eIndex) =>
                                        <div
                                            className='div3'
                                            key={eIndex}
                                            onClick={() => {
                                                setIsBoxVisible(true);
                                                setBoxContent(i, eIndex);
                                            }}>

                                            <h3>{element.name}</h3>
                                            <span>{<PlusIcon className='icon' />}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    }
                />
            )}
        </m.div>
    )
}
