import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../../data/data';
import { FaPlus as PlusIcon, FaMinus as MinusIcon } from 'react-icons/fa';
import { HeadSection, Section } from '../Sections';
import amobea from '../../img/amobea.png';
import faq from '../../img/faq.svg';
import AnimatedDiv from "../PageTransition";

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
        <AnimatedDiv>
            <div className="page gyik">
                <img id='faq-img' src={faq} alt="Kérdőjelek" />
                <HeadSection
                    content={
                        <div className='box'>
                            <h1>Gyakori Kérdések</h1>
                            <p>
                                A leggyakoribb kérdéseket
                                gyűjtöttem össze az alábbiakban.
                                Kérdés esetén, kérlek nézd meg őket.
                                Ha nem találod a választ a kérdésedre, ne habozz felvenni velem
                                a kapcsolatot.
                            </p>
                        </div>
                    }
                />

                <Section
                    color
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
            </div>
        </AnimatedDiv>
    )
}
