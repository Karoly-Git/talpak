import React, { useState, useEffect } from 'react';
import { Bejelentkezes, Nyitvatartas, Cim } from "../ShopInfo";

import { motion as m } from 'framer-motion';
import { animations } from '../../data/framer-animations';

import logo from "../../img/logo.png"
import ServiceSnippets from "../ServiceSnippets"
import { ReviewSlider } from "../Sliders"
import { HeadSection, Section } from "../Sections";

export default function Kezdolap() {
    const [infoAnimated, setInfoAnimated] = useState(false)

    useEffect(() => {
        function getDistance() {
            const infoBox = document.querySelector('#info');
            const rect = infoBox.getBoundingClientRect();
            if (window.innerHeight - rect.top > 130) {
                setInfoAnimated(true);
            };
        }

        window.addEventListener('scroll', getDistance);

        return () => {
            window.removeEventListener('scroll', getDistance);
        };
    }, [])

    return (
        <m.div className="page kezdolap" {...animations.pageTransition}>
            <HeadSection
                content={
                    <div className="box" id="slogan">
                        <m.h2
                            initial={{ opacity: 0, position: 'relative', top: 100 }}
                            animate={{ opacity: 1, top: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut", delay: 0.5 }}
                        >A Hely Ahol Garantáltan Átalakulsz</m.h2>

                        <m.img src={logo}
                            initial={{ opacity: 0, position: 'relative', top: 100 }}
                            animate={{ opacity: 1, top: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut", delay: 0.75 }}
                        ></m.img>

                        <m.h3
                            initial={{ opacity: 0, position: 'relative', top: 100 }}
                            animate={{ opacity: 1, top: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut", delay: 1 }}
                        >Talpak Minőség Garancia</m.h3>
                    </div>
                }
            />

            <Section
                color
                top
                content={
                    < div className="box" id="introduction" >
                        <h1>
                            Üdvözöllek a Megszépülés és Relaxáció Világában!
                        </h1>
                        <p>
                            Nálam garantáltan megtalálod a relaxáció, a szépülés és testi-lelki harmónia felé veztő utat.
                        </p>
                        <p>
                            Lehetsz fiatal vagy idős, baba vagy kismama, vagy éppen fájdalommal küzdő, itt mindenki számára van valami különleges.
                            Engedd meg magadnak, hogy megtapasztald az igazi kényeztetés élményét, és hagyd, hogy segítsek elérni a jó közérzetet és a testi-lelki harmóniát.
                        </p>
                        <h2>
                            Várlak Szeretettel!
                        </h2>
                    </div>
                }
            />

            <Section
                top
                content={
                    < div className="box" id="services" >
                        <ServiceSnippets />
                    </ div >
                }
            />

            <Section
                color
                top
                content={
                    < div className="box" id="reviews" >
                        <ReviewSlider />
                    </ div>
                }
            />

            <Section
                top
                bottom
                content={
                    <div className="box" id="info" style={infoAnimated ? { opacity: 1 } : { opacity: 0 }} >
                        <Bejelentkezes />
                        <Nyitvatartas />
                        <Cim />
                    </ div >
                }
            />
        </m.div>
    )
};
