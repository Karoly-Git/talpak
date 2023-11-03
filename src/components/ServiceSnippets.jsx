import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { services } from '../data/services';

import { motion as m } from 'framer-motion';
import { animations } from '../data/framer-animations';

export default function ServiceSnippets() {
    const [iconAnimated, setIconAnimated] = useState(false)

    useEffect(() => {
        function getDistance() {
            const serviceList = document.querySelector('.services-list');
            const rect = serviceList.getBoundingClientRect();
            if (window.innerHeight - rect.top > 130) {
                setIconAnimated(true);
            };
        }

        window.addEventListener('scroll', getDistance);

        return () => {
            window.removeEventListener('scroll', getDistance);
        };
    }, [])

    const activeServices = services.filter((e) => e.isActive);

    const [states, setStates] = useState(activeServices.map((e, i) => i == 0 ? true : false));

    function handleClick(index) {
        let newStates = activeServices.map((e, i) => i == index);
        setStates([...newStates]);
    }

    return (
        <>
            {false && <h2>Szolgáltsatások</h2>}

            <ul className='services-list'>
                {activeServices.map((e, i) =>
                    <li id={`animated-${i}`} key={i} onClick={() => handleClick(i)} className={iconAnimated ? 'animated' : ''}>
                        <img className='icon' src={e.img.snippet.src} alt={e.img.snippet.alt} />
                        <h3 className={states[i] ? 'active' : ''}>{e.name}</h3>
                    </li>
                )}
            </ul>

            {activeServices.map((e, i) =>
                states[i] &&
                <div key={i}
                    // This style to be moved to SCSS !!!
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <m.p {...animations.p}>{activeServices[i].description.snippet}</m.p>

                    <Link to={`/szolgaltatasok#${activeServices[i].id}`}>
                        <button>Bővebben</button>
                    </Link>
                </div>
            )}
        </>
    )
}
