import React from 'react';
import { HeadSection, Section } from '../Sections';

import { motion as m } from 'framer-motion';
import { animations } from '../../data/framer-animations';

import { about } from '../../data/data';
import { CertsSlider } from '../Sliders';

export default function Magamrol() {
    const aboutActive = about.filter(e => e.isActive);

    return (
        <m.div className='page magamrol' {...animations.pageTransition}>
            <HeadSection
                content={
                    <div className='box'>
                        <m.h1
                            initial={{ opacity: 0, position: 'relative', top: 100 }}
                            animate={{ opacity: 1, top: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut", delay: 0.5 }}
                        >
                            "A masszőr az érintés erejével törekszik visszaállítani
                            az egyensúlyt, enyhíteni a fájdalmat, és táplálni a testet,
                            lehetővé téve a léleknek, hogy megtalálja a béke és jólét állapotát."
                        </m.h1>
                    </div>
                }
            />

            <Section
                top
                content={
                    <div className='box'>
                        <h2 className='title'>Sziasztok!</h2>
                        {aboutActive.slice(0, 1).map((element, elementIndex) =>
                            <article key={elementIndex}>
                                <h2>{element.h2}</h2>
                                <p>{element.p}</p>
                            </article>
                        )}
                    </div>
                }
            />

            <Section
                color
                top
                content={
                    <div className='box'>
                        {aboutActive.slice(1, 2).map((element, elementIndex) =>
                            <article key={elementIndex}>
                                <h2>{element.h2}</h2>
                                <p>{element.p}</p>
                            </article>
                        )}
                    </div>
                }
            />

            <Section
                top
                content={
                    <div className='box' id='certs'>
                        <CertsSlider />
                    </div>
                }
            />

            {
                aboutActive.slice(2, aboutActive.length).map((element, index) =>
                    <Section
                        color={index % 2 === 0 ? true : false}
                        top
                        bottom={index === aboutActive.slice(2, aboutActive.length).length - 1 ? true : false}
                        key={index}
                        content={
                            <div className='box'>
                                <article>
                                    <h2>{element.h2}</h2>
                                    <p>{element.p}</p>
                                </article>
                            </div>
                        }
                    />
                )
            }
        </m.div >
    )
}
