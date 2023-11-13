import React, { createRef } from "react";
import { Helmet } from 'react-helmet';

import { Link } from "react-router-dom";
import { HeadSection, Section } from "../Sections";
import PriceDetails from "../PriceDetails";
import { prices } from "../../data/prices";

import { motion as m } from 'framer-motion';
import { animations } from '../../data/framer-animations';

export default function Arak() {

    const activePrices = prices.filter(price => price.isActive);

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
                                            onClick={scrolls[index]}
                                        >
                                            {prices[index].name}
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
                                            {prices[index].name}
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
                                            {prices[index].name}
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
                                            {prices[index].name}
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
                                    name={prices[index].name}
                                    prices={prices[index].details}
                                />
                            </div>
                        }
                    />
                )
            }
        </m.div >
    )
}


