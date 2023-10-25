import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { certs } from "../data/certs";
import { reviews } from "../data/data";

import { MdOutlineNavigateNext as Arrow } from 'react-icons/md'
import { RiDoubleQuotesL as Quotes } from 'react-icons/ri'

function PreviousArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="button"
            id="previous-button"
            onClick={onClick}
        >
            <Arrow className="icon" />
        </div>
    );
}
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="button"
            onClick={onClick}
        >
            <Arrow className="icon" />
        </div>
    );
}

export function ReviewSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,

        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,

        autoplay: true,
        autoplaySpeed: 5000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings} className='slider review-slider'>
            {reviews.map((element, reviewsIndex) => (
                element.isActive &&
                <div
                    key={reviewsIndex}
                    className="wrapper"
                >
                    <p>
                        <Quotes />
                        <i>
                            {element.comment}
                        </i>
                        <Quotes />
                    </p>
                    <h3 className='name'>
                        {element.name}
                    </h3>
                </div>
            ))}
        </Slider>
    );
}

export function CertsSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,

        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings} className='slider cert-slider'>
            {certs.map((element, certIndex) => (
                element.isActive &&
                <div
                    key={certIndex}
                    className="wrapper"
                >
                    <img src={element.src} alt={element.alt} />
                    <p>
                        {element.name}
                    </p>
                    <h3 className='name'>
                        {element.grade}
                    </h3>
                </div>
            ))}
        </Slider>
    );
}


