import React from 'react';
import { HeadSection, Section } from '../Sections';
import { nameDays } from '../../data/name-days';
import AnimatedDiv from "../PageTransition";

export default function Akciok() {

    const date = new Date();
    const months = Object.keys(nameDays);
    const currentMonth = months[date.getMonth()];
    const currentDate = String(date.getDate());
    const namesToday = nameDays[currentMonth][currentDate];
    //const namesToday = ['Alma', 'Viola'];

    return (
        <AnimatedDiv>
            <div className='page akciok'>
                <HeadSection
                    content={
                        <div className='box'>
                            <h1>Akciók</h1>
                            <p>{namesToday.length > 1 ? 'Mai névnapok:' : 'Mai névnap:'}</p>
                            <p>
                                {namesToday?.map((name, index) =>
                                    <span key={index}>
                                        {name}{index !== namesToday.length - 1 ? ', ' : ''}
                                    </span>
                                )}
                            </p>
                            <br />
                            <h2>Hamarosan...</h2>
                            <br />
                            <p>Az oldal feltöltés alatt áll, kérlek látogass vissza holnap.</p>
                        </div>
                    }
                />

                <Section
                    top
                    bottom
                    content={
                        <div className='box'>
                        </div>
                    }
                />

            </div>
        </AnimatedDiv>
    )
}
