import React, { createRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { galleries } from '../../data/galleries';

import PageTransition from "../framer-animations/PageTransition";
import AnimatedBox from "../framer-animations/AnimatedBox";

import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { HeadSection, Section } from '../Sections';

/*
const images2 = [
    { src: "https://picsum.photos/2005/3010" },
    { src: "https://picsum.photos/3005/2010" },
    { src: "https://picsum.photos/4005/3010" },
    { src: "https://picsum.photos/3005/1510" },
    { src: "https://picsum.photos/1005/2510" },
    { src: "https://picsum.photos/1255/2510" },
    { src: "https://picsum.photos/1305/2510" },
    { src: "https://picsum.photos/1355/2510" },
    { src: "https://picsum.photos/1505/2010" },
    { src: "https://picsum.photos/1205/2010" },
    { src: "https://picsum.photos/1805/2010" },
    { src: "https://picsum.photos/1805/1510" },
    { src: "https://picsum.photos/1655/1510" },
];
const dogs = new Array(13)
    .fill(null)
    .map((e, i) => i + 1)
    .map((number) => ({
        src: `https://placedog.net/1000/500?id=${number}`
    }));
*/

export default function Galeria() {

    const activeGalleries = galleries.filter(gallery => gallery.isActive);

    const refs = [];
    const scrolls = [];

    activeGalleries.forEach((element, index) => {
        const scrollRef = createRef();
        refs.push(scrollRef);

        function scrollToElement() {
            refs[index].current.scrollIntoView({
                behavior: 'auto'
            });
        };

        scrolls.push(scrollToElement);
    });

    return (
        <PageTransition>
            <div className='page galeria'>
                <HeadSection content={
                    <AnimatedBox>
                        <h1>Elkapott pillanatok</h1>
                        <p>
                            Üdvözöllek a Masszázs Galériában, ahol bepillantást nyerhetsz a relaxáció világába.
                            Az illatos aromaterápia, a nyugtató gyertyafény stresszt enyhítenek, feszültséget
                            csökkentenek és elősegítik a jó közérzetet.
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
                                    activeGalleries.map((gallery, index) =>
                                        <Link
                                            key={index}
                                            onClick={scrolls[index]}
                                        >
                                            {activeGalleries[index].name}
                                        </Link>
                                    )
                                }
                            </nav>
                        </div>
                    }
                />

                {
                    activeGalleries.map((gallery, index) =>
                        <Section
                            key={index}
                            color={index % 2 === 0}
                            top={true}
                            scrollRef={refs[index]}
                            content={
                                <div className="box">
                                    <h2>{activeGalleries[index].name}</h2>
                                    <Carousel
                                        className='carousel'
                                        images={activeGalleries[index].imgs}
                                    />
                                </div>
                            }
                        />
                    )
                }
            </div>
        </PageTransition>
    )
}
