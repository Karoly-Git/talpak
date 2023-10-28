import React, { createRef } from "react";
import { Link } from "react-router-dom";
import { HeadSection, Section } from "../Sections";
import PriceDetails from "../PriceDetails";
import { prices } from "../../data/prices";

import PageTransition from "../framer-animations/PageTransition";
import AnimatedBox from "../framer-animations/AnimatedBox";

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
        <PageTransition>
            <div className="page arak">
                <HeadSection
                    content={
                        <AnimatedBox>
                            <h1>Árak</h1>
                            <p>
                                Ha további részleteket szeretnél megtudni
                                az egyes szolgáltatásokról vagy konkrét árajánlatot kérni,
                                kérlek, vedd fel a kapcsolatot velem.
                            </p>
                        </AnimatedBox>
                    }
                />

                <Section
                    top
                    content={
                        <div className="box">
                            <nav id="scroll-links">
                                {
                                    activePrices.map((price, index) =>
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

                {
                    activePrices.map((price, index) =>
                        <Section
                            key={index}
                            color={index % 2 === 0}
                            top={true}
                            bottom={index === activePrices.length - 1 ? true : false}
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
            </div >
        </PageTransition>
    )
}


