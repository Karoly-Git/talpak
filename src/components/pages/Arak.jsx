import React, { createRef, useEffect, useState } from "react";
import { Helmet } from 'react-helmet';

import { Link } from "react-router-dom";
import { HeadSection, Section } from "../Sections";
import PriceDetails from "../PriceDetails";
import { priceGroups } from "../../data/price-groups";

import { motion as m } from 'framer-motion';
import { animations } from '../../data/framer-animations';

// Data Imports
import config from '../../config.json';

export default function Arak() {

    const URL = config.settings.isLocalServer ? config.urls.local + '/prices-data' : config.urls.heroku + '/prices-data';

    const [data, setData] = useState([]);

    //console.log(priceGroups);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);

                priceGroups.forEach(group => {
                    group.details = jsonData.filter(service => service.group === group.group);
                    console.log(group);
                });

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                console.error('Fetching finished.');
            }
        };

        fetchData();
    }, []);


    const activePrices = priceGroups.filter(price => price.isActive);

    const refs = [];
    const scrolls = [];

    activePrices.forEach((element, index) => {
        const scrollRef = createRef();
        refs.push(scrollRef);

        function scrollToElement() {
            refs[index].current.scrollIntoView({
                behavior: 'smooth'
            });
        };
        scrolls.push(scrollToElement);
    });

    return (
        <m.div className="page arak" {...animations.pageTransition}>
            <Helmet>
                <title>Árak - BEMER, Safe Laser, Lábápolás, SPA, Masszázsok, Kinesio Tape és Csomagajánlatok</title>
            </Helmet>

            <HeadSection
                content={
                    <m.div className="box" {...animations.page.box}>
                        <m.h1 {...animations.page.h1}>
                            Árak
                        </m.h1>
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
                color
                content={
                    <div className="box">
                        <nav className="scroll-links">
                            {
                                activePrices
                                    .map((price, index) =>
                                        //price.group === 'massage' &&
                                        <Link
                                            key={index}
                                            onClick={scrolls[index]} >
                                            <img src={priceGroups[index].icon.src} alt={priceGroups[index].icon.alt} style={{ height: '50px' }} />
                                            <div>
                                                {priceGroups[index].group}
                                            </div>
                                        </Link>
                                    )
                            }
                        </nav>
                    </div>
                }
            />

            {false && <Section
                top
                color
                content={
                    <div className="box">
                        <nav className="scroll-links">
                            {
                                activePrices
                                    .map((price, index) =>
                                        (price.group === 'foot-care' || price.group === 'spa') &&
                                        <Link
                                            key={index}
                                            onClick={scrolls[index]}
                                        >
                                            {priceGroups[index].group}
                                        </Link>
                                    )
                            }
                        </nav>
                    </div>
                }
            />}

            {false && <Section
                top
                content={
                    <div className="box">
                        <nav className="scroll-links">
                            {
                                activePrices
                                    .map((price, index) =>
                                        price.group === 'kinesio' &&
                                        <Link
                                            key={index}
                                            onClick={scrolls[index]}
                                        >
                                            {priceGroups[index].group}
                                        </Link>
                                    )
                            }
                        </nav>
                    </div>
                }
            />}

            {false && <Section
                top
                color
                content={
                    <div className="box">
                        <nav className="scroll-links">
                            {
                                activePrices
                                    .map((price, index) =>
                                        price.group === 'package' &&
                                        <Link
                                            key={index}
                                            onClick={scrolls[index]}
                                        >
                                            {priceGroups[index].group}
                                        </Link>
                                    )
                            }
                        </nav>
                    </div>
                }
            />}

            {
                activePrices.map((price, index) =>
                    <Section
                        key={index}
                        color={index % 2 !== 0}
                        top={true}
                        /*bottom={index === activePrices.length - 1 ? true : false}*/
                        scrollRef={refs[index]}
                        content={
                            <div className="box">
                                <PriceDetails
                                    group={priceGroups[index].group}
                                    services={priceGroups[index].details}
                                />
                            </div>
                        }
                    />
                )
            }
        </m.div >
    )
}


