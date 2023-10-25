import React from 'react'
import { HeadSection, Section } from '../Sections';
import AnimatedDiv from "../PageTransition";

export default function FelhasznalasiFeltetelek() {
    return (
        <AnimatedDiv>
            <div className='page felhasznalasi-feltetelek'>
                <HeadSection
                    content={
                        <div className='box'>
                            <h1>Felhasználási Feltételek</h1>
                        </div>
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
        </AnimatedDiv>
    )
}
