import React from 'react'

export default function PriceDetails(props) {
    return (
        <table>
            <caption>
                <h2>{props.name}</h2>
            </caption>
            <tbody>
                {props.prices.map((element, index) =>
                    element.isActive &&
                    <tr key={index}>
                        <td>
                            <h3>{element.servName}</h3>
                            <p>{element.p}</p>
                            {
                                element.berlet &&
                                <p>
                                    5 alkalmas bérlet: {(element.price * 3).toLocaleString('hu-HU')} Ft
                                </p>
                            }
                        </td>
                        <td className='price'>{element.price.toLocaleString('hu-HU')} Ft</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
