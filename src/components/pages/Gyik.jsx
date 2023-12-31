import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { faqs } from '../../data/data';
import { FaPlus as PlusIcon, FaMinus as MinusIcon } from 'react-icons/fa';
import { HeadSection, Section } from '../Sections';
import faq from '../../img/faq.svg';

import { motion as m } from 'framer-motion';
import { animations } from '../../data/framer-animations';

export default function Gyik() {
    const activeFAQs = faqs.filter((e) => e.isActive);

    const [statuses, setStatuses] = useState(activeFAQs.map(() => false));
    const [heights, setHeights] = useState(activeFAQs.map(() => 0));

    useEffect(() => {

        updateHeights();

        function updateHeights() {
            let paragraphs = [...document.querySelectorAll('.answer p')];
            let newHeights = paragraphs.map(p => p.clientHeight);
            setHeights([...newHeights]);
        }

        window.addEventListener('resize', updateHeights);

        return () => {
            window.removeEventListener('resize', updateHeights);
        }
    }, []);

    function toggleFAQ(index) {
        const newIsOpenList = [...statuses];
        newIsOpenList[index] = !statuses[index];
        setStatuses([...newIsOpenList]);
    }

    return (
        <m.div className="page gyik" {...animations.pageTransition}>
            <Helmet>
                <title>Gyakori Kérdések - Pedikűr, Masszázs, és Szolgáltatások Részletei</title>
            </Helmet>
            <img id='faq-img' src={faq} alt="Kérdőjelek" />
            <HeadSection
                content={
                    <m.div className='box' {...animations.page.box}>
                        <m.h1 {...animations.page.h1}>Gyakori Kérdések</m.h1>
                        <m.p {...animations.page.p}>
                            A leggyakoribb kérdéseket
                            gyűjtöttem össze az alábbiakban.
                            Kérdés esetén, kérlek nézd meg őket.
                            Ha nem találod a választ a kérdésedre, ne habozz felvenni velem
                            a kapcsolatot.
                        </m.p>
                    </m.div>
                }
            />

            <Section
                bottom
                top
                content={
                    <div className='box'>
                        {faqs.map((element, index) =>
                            element.isActive && (
                                <div className='container' key={index} >
                                    <div className='question' onClick={() => toggleFAQ(index)} >
                                        <h3>{element.question}</h3>
                                        <div>
                                            {!statuses[index] && <PlusIcon className='icon' />}
                                            {statuses[index] && <MinusIcon className='icon' />}
                                        </div>
                                    </div>
                                    <div className="answer">
                                        <p
                                            style={{
                                                marginTop: !statuses[index] ? `-${heights[index]}px` : '0px',
                                                transitionDuration: `${heights[index] * 2}ms`
                                            }}
                                        >
                                            {element.answer}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                }
            />
        </m.div>
    )
}
