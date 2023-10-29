import React from 'react'
import { HeadSection, Section } from '../Sections';

import { motion as m } from 'framer-motion';
import { animations } from '../../data/framer-animations';

export default function FelhasznalasiFeltetelek() {
    return (
        <div className='page felhasznalasi-feltetelek'>
            <HeadSection
                content={
                    <m.div className='box' {...animations.pageTransition}>
                        <h1>Felhasználási feltételek</h1>
                        <br />
                        <h2>Hamarosan...</h2>
                        <br />
                        <p>Az oldal feltöltés alatt áll, kérlek látogass vissza holnap.</p>

                    </m.div>
                }
            />
            <Section
                color
                top
                content={
                    <div className='box'>
                    </div>
                }
            />
        </div>
    )
}
