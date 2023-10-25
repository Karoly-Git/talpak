import React from "react";
import { contacts } from "../data/data";

export default function Links(props) {
    return (
        <ul className="link-set contact-links">
            {props.links.map((element, linkIndex) => (
                <li key={linkIndex}>
                    <a
                        target="_blank"
                        href={contacts[element].link}
                        rel="noopener noreferrer"
                        onClick={props.toggleMenu}
                    >
                        {contacts[element].icon}
                    </a>
                </li>
            ))}
        </ul>
    )
}

