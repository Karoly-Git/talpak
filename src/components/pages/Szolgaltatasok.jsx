import React from 'react';

import { HeadSection, Section } from '../Sections';
import { services } from '../../data/services';
import { AiFillCaretRight as Arrow } from 'react-icons/ai';
import { FaPlus as PlusIcon, FaMinus as MinusIcon } from 'react-icons/fa';

import { motion as m } from 'framer-motion';
import { animations } from '../../data/framer-animations';

export default function Szolgaltatasok() {
    const activeServices = services.filter((e) => e.isActive);

    return (
        <m.div className='page szolgaltatasok' {...animations.pageTransition}>
            <HeadSection
                content={
                    <m.div className='box' {...animations.page.box}>
                        <m.h1 {...animations.page.h1}>
                            Szolgáltatások
                        </m.h1>
                        <m.p {...animations.page.p}>
                            Ha további részleteket szeretnél megtudni
                            az egyes szolgáltatásokról vagy konkrét árajánlatot kérni,
                            kérlek, vedd fel a kapcsolatot velem.
                        </m.p>
                    </m.div>
                }
            />

            {activeServices.map((e, i) =>
                <Section
                    color={i % 2 !== 0 ? true : false}
                    top
                    //bottom={i === activeServices.length - 1 ? true : false}
                    key={i}
                    id={e.id}
                    content={
                        <div className='box'>
                            <h2>{e.name}</h2>
                            <div className='div1' style={i % 2 !== 0 ? { flexDirection: 'row-reverse' } : {}}>
                                <img
                                    src={e.img.main.src}
                                    alt={e.img.main.alt}
                                />
                                <div className='div2'>
                                    {e.description.main.map((element, eIndex) =>
                                        <div className='div3' key={eIndex}>
                                            <div className='div4a'>
                                                <h3>{element.name}</h3>
                                                <span>{<PlusIcon className='icon' />}</span>
                                            </div>
                                            <div className='div4b'>
                                                {element.description.map((paragraph, pIndex) =>
                                                    <p key={pIndex}>{paragraph}</p>
                                                )}
                                            </div>
                                            <div className="div4c">
                                                <Arrow className='icon points-to-left' />
                                                <Arrow className='icon' />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    }
                />
            )}
        </m.div>
    )
}
