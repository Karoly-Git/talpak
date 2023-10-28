import React, { useState, useEffect } from 'react';
import { HeadSection, Section } from '../Sections';

import PageTransition from "../framer-animations/PageTransition";

import { about } from '../../data/data';
import { CertsSlider } from '../Sliders';

export default function Magamrol() {
    const aboutActive = about.filter(e => e.isActive);

    return (
        <PageTransition>
            <div className='page magamrol'>
                <HeadSection
                    content={
                        <div className='box'>
                            <h1>
                                "A masszőr az érintés erejével törekszik visszaállítani
                                az egyensúlyt, enyhíteni a fájdalmat, és táplálni a testet,
                                lehetővé téve a léleknek, hogy megtalálja a béke és jólét állapotát."
                            </h1>
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
            </div >
        </PageTransition>
    )
}
