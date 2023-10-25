import React from 'react'
import { services } from '../data/services'
import { AiFillCaretRight as Arrow } from 'react-icons/ai';

export default function ServicesDetails(props) {
    return (
        <>
            <h2>{services[props.serviceName].name}</h2>
            <div className='div1'>
                <img
                    src={services[props.serviceName].img.main.src}
                    alt={services[props.serviceName].img.main.alt}
                />
                <div className='div2'>
                    {services[props.serviceName].description.main.map((element, eIndex) =>
                        <div className='div3' key={eIndex}>
                            <div className='div4a'>
                                <h3>{eIndex} {element.name}</h3>
                                <span>X</span>
                            </div>
                            <div className='div4b'>
                                {element.description.map((paragraph, pIndex) =>
                                    <p key={pIndex}>{pIndex} {paragraph}</p>
                                )}
                            </div>
                            <div className="div4c">
                                <Arrow className='icon to-left' />
                                <Arrow className='icon' />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
