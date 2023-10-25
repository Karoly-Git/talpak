import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

export function HeadSection(props) {

    const [bgOffset, setBgOffset] = useState(0);

    useEffect(() => {
        // Define a scroll event listener function
        const handleScroll = () => {
            setBgOffset(prevOffset => prevOffset = window.scrollY);
        };

        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <section
            className='head-section'
            style={{
                backgroundPositionY: `-${bgOffset * 0.25}px`,
            }}
        >
            {props.content}
        </section>
    )
}

export function Section(props) {
    const heightRatio = 0.09;
    const [svgWidth, setSvgWidth] = useState(window.innerWidth);
    const [svgHeight, setSvgHeight] = useState(heightRatio * window.innerWidth);
    const bgColor = 'rgb(234, 241, 255)';
    //const bgColor = 'transparent';
    const serviceRef = useRef(null);

    // Use useLayoutEffect to ensure the measurement is synchronous with DOM updates.
    useLayoutEffect(() => {
        if (serviceRef.current) {
            setSvgWidth(serviceRef.current.clientWidth);
        }
    }, []);

    useEffect(() => {
        function handleEvent() {
            if (serviceRef.current) {
                setSvgWidth(serviceRef.current.clientWidth);
                setSvgHeight(heightRatio * window.innerWidth);
            }
        }

        window.addEventListener('load', handleEvent);
        window.addEventListener('resize', handleEvent);

        return () => {
            window.removeEventListener('load', handleEvent);
            window.removeEventListener('resize', handleEvent);
        };
    }, []);

    const style = {
        section: {
            marginTop: props.top ? `-${svgHeight}px` : 'unset',
            marginBottom: props.bottom ? `-${svgHeight}px` : 'unset'
        },
        contentContainer: {
            backgroundColor: props.color ? bgColor : 'white'
        },
    }

    return (
        <section
            className='section'
            style={style.section}
            id={props.id}
            ref={props.scrollRef}
        >
            <svg
                style={{ marginBottom: '-1px' }}
                width={`${svgWidth}px`}
                height={`${svgHeight}px`}
                fill={props.color ? bgColor : 'white'}
                xmlns="http://www.w3.org/2000/svg">
                <polygon points={`0,${svgHeight} ${svgWidth},${svgHeight} ${svgWidth},0`} />
            </svg>

            <div
                className="content-container"
                style={style.contentContainer}
                ref={serviceRef}
            >
                {props.content}
            </div>

            <svg
                width={`${svgWidth}px`}
                height={`${svgHeight}px`}
                fill={props.color ? bgColor : 'white'}
                xmlns="http://www.w3.org/2000/svg">
                <polygon points={`0,0 0,${svgHeight} ${svgWidth},0`} />
            </svg>
        </section>
    )
}
