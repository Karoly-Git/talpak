import React, { useState, useEffect } from 'react';
import { HeadSection, Section } from '../Sections';

import { motion as m } from 'framer-motion';
import { animations } from '../../data/framer-animations';

import disabled from '../../img/disabled3.png'
import hazhoz from '../../img/hazhoz2.png'

export default function JoTudni() {
    return (
        <m.div className='page jo-tudni' {...animations.pageTransition}>
            <HeadSection
                content={
                    <m.div className='box' {...animations.page.box}>
                        <m.h1 {...animations.page.h1}>Hasznos tudnivalók</m.h1>
                        <m.p {...animations.page.p}>
                            Kérlek olvasd el a lenti információkat, fontos dolgokat tartalmaznak
                            a szolgáltatásokkal kapcsolatban.
                        </m.p>
                    </m.div>
                }
            />

            <Section
                top
                content={
                    <div className='box'>
                        <h2>Teljesen akadálymentes környezet</h2>
                        <div id='disabled-info'>
                            <img id='img-disabled' src={disabled} alt="" />
                            <p id='p-disabled'>
                                <span>
                                    Nálam minden teljesen akadálymentesített és
                                    könnyedén megközelíthető.
                                </span>

                                <span>
                                    Van akadálymentes parkolóhely,
                                    és a bejáratnál nincsenek lépcsők vagy egyéb akadályok.
                                    Az ajtók szélesek, így könnyedén használhatók kerekesszékes vendégeknek is.
                                </span>

                                <span>
                                    Bátran látogassanak el hozzám, és élvezzd az akadálymentes szépségápolás és relaxáció minden előnyét.
                                </span>
                            </p>
                        </div>
                    </div>
                }
            />

            <Section
                color
                top
                content={
                    <div className='box'>
                        <h2>Nem tudsz eljönni hozzám?</h2>
                        <div id='outcall-info'>
                            <p id='p-outcall'>
                                <span>
                                    Fontos számomra, hogy azoknak is biztosítsam a gondoskodást, akik speciális ellátásra szorulnak,
                                    azonban van néhány korlátozó tényező, kérlek a lentieket vedd figyelembe.
                                </span>

                                <span>
                                    Kizárólag fekvőbetegek vagy mozgáskorlátozott vendégeim számára,
                                    valamint sürgős esetekben kínálok házhoz menő szolgáltatást.
                                </span>

                                <span>
                                    A házhoz menő szolgáltatás kizárólag <strong>lábápolás, pedikűr és masszázs</strong> esetén
                                    vehető igénybe. Hívj bizalommal.
                                </span>

                            </p>
                            <img id='img-outcall' src={hazhoz} alt="" />
                        </div>
                    </div>
                }
            />
        </m.div>
    )
}
