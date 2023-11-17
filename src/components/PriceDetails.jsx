import React from 'react'

export default function PriceDetails(props) {
    return (
        <table>
            <caption>
                <h2>{props.group}</h2>
            </caption>
            <tbody>
                {props.services.map((service, index) =>
                    service.isActive &&
                    <tr key={index}>
                        <td>
                            <h3>{service.service}</h3>
                            <p>{service.description}</p>
                            {
                                service.berlet &&
                                <p>
                                    5 alkalmas bérlet: {(service.price * 3).toLocaleString('hu-HU')} Ft
                                </p>
                            }
                        </td>
                        <td className='price'>{service.price.toLocaleString('hu-HU')} Ft</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
