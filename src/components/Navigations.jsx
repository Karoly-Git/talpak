// React and React Router Imports
import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// Form Handling Imports
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Data Imports
import config from '../config.json';

// Custom Component Imports
import Links from './Links';

// Image Imports
import logo from '../img/logo4.png';
import logoWhite from '../img/logo3.png';

// Icon Imports
import { RxHamburgerMenu as HamburgerIcon } from 'react-icons/rx';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

const mainMenuIitems = [
    { name: 'Kezdőlap', to: '/', isDisplayed: true },
    { name: 'Szolgáltatások', to: '/szolgaltatasok', isDisplayed: true },
    { name: 'Árak', to: '/arak', isDisplayed: true },
    { name: 'Magamról', to: '/magamrol', isDisplayed: true },
    { name: 'Kapcsolat', to: '/kapcsolat', isDisplayed: true },
    { name: 'Galéria', to: '/galeria', isDisplayed: true },
]

const secMenuIitems = [
    { name: 'Jó tudni', to: '/jo-tudni', isDisplayed: true },
    { name: 'Akciók', to: '/akciok', isDisplayed: true },
    { name: 'Gy.I.K', to: '/gyik', isDisplayed: true },
]

const bottomMenuIitems = [
    { name: 'Felhasználási feltételek', to: '/felhasznalasi-feltetelek', isDisplayed: true },
    { name: 'Gyakori kérdések', to: '/gyik', isDisplayed: true },
    { name: 'Jó tudni', to: '/jo-tudni', isDisplayed: true },
]

export function MainNavigation() {
    return (
        <nav className='main-nav'>
            <ul>
                {mainMenuIitems.map((item, itemIndex) =>
                    item.isDisplayed && <li key={itemIndex}>
                        <NavLink
                            className={({ isActive }) => {
                                return isActive ? 'active' : ''
                            }}
                            to={item.to}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export function MobileNavigation() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className='mobile-nav'>
            <div className='icon-box'>
                <Link to='/' onClick={() => setIsMenuOpen(false)}>
                    <img className='logo' src={logoWhite} alt="Talpak Logó" />
                </Link>
                {!isMenuOpen && <HamburgerIcon onClick={toggleMenu} className='icon' />}
                {isMenuOpen && <CloseIcon onClick={toggleMenu} className='icon' />}
            </div>

            <div className='menu-box' style={isMenuOpen ? { marginTop: '0' } : { marginTop: '-500px' }}>
                <ul className='main-items'>
                    {mainMenuIitems.map((item, itemIndex) =>
                        item.isDisplayed && <li key={itemIndex}>
                            <NavLink
                                className={({ isActive }) => {
                                    return isActive ? 'active' : ''
                                }}
                                to={item.to}
                                onClick={toggleMenu}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    )}
                </ul>
                <ul className='sec-items'>
                    {secMenuIitems.map((item, itemIndex) =>
                        item.isDisplayed && <li key={itemIndex}>
                            <NavLink
                                className={({ isActive }) => {
                                    return isActive ? 'active' : ''
                                }}
                                to={item.to}
                                onClick={toggleMenu}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    )}
                </ul>
                <Links
                    toggleMenu={toggleMenu}
                    links={['facebook', 'instagram', 'youtube']}
                />
                <Links
                    toggleMenu={toggleMenu}
                    links={['tel', 'email', 'address', 'whatsapp']}
                />
            </div>
        </nav>
    )
}

export function SecondaryNavigation() {
    return (
        <nav className='sec-nav'>
            <Links
                links={['facebook', 'instagram', 'youtube']}
            />
            <ul className='other-links'>
                {secMenuIitems.map((item, itemIndex) =>
                    item.isDisplayed && <li key={itemIndex}>
                        <NavLink
                            className={({ isActive }) => {
                                return isActive ? 'active' : ''
                            }}
                            to={item.to}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export function BottomNavigation(props) {
    const currentYear = useMemo(() => new Date().getFullYear(), []);

    const subscribeURL = config.settings.isLocalServer ? config.urls.local + '/subscribe' : config.urls.heroku + '/subscribe';

    const schema = yup.object().shape({
        subscribeEmail: yup.string().email("Nem tűnik érvényes email címnek!").required("Email cím megadása szükséges!"),
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        props.setIsStatusBoxOpen(true);
        props.setSubscribtionInProgress(true);
        props.setAnyFormTriggered(true);
        try {
            const result = await fetch(subscribeURL,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );

            //console.log(result);

            if (!result.ok) {
                props.setIsSubscribtionError(true);
            }

        } catch (err) {
            //console.log(err.ok);
            props.setIsSubscribtionError(true);
        } finally {
            props.setSubscribtionInProgress(false);
        }
    };

    useEffect(() => {
        if (props.isFormReset) {
            reset({
                subscribeEmail: '',
            });
            props.setIsFormReset(false);
        }
    }, [props.isFormReset])


    return (
        <nav className='bottom-nav'>
            <ul className='item-list'>
                <li className='item logo-item'>
                    <div>
                        <img className='logo' src={logo} alt='Talpak logó'></img>
                        <h2 className='business-name'>Talpak</h2>
                    </div>
                    <span>© {currentYear} | Minden jog fentartva</span>
                </li>
                <li className='item links-item'>
                    <h3>Hasznos linkek</h3>
                    <ul className='link-set'>
                        {bottomMenuIitems.map((item, itemIndex) =>
                            item.isDisplayed && <li key={itemIndex}>
                                <NavLink
                                    className={({ isActive }) => {
                                        return isActive ? 'active' : ''
                                    }}
                                    to={item.to}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </li>
                <li className='item follow-item'>
                    <h3>Kövess minket</h3>
                    <p>Ne hagyd ki a promóciókat, kövess minket a legfrissebb hírekért.</p>
                    <Links
                        links={['facebook', 'instagram', 'youtube']}
                    />
                    <h3>Kapcsolat</h3>
                    <p>Vedd fel a kapcsolatot elérhetősgeim bármelyikén.</p>
                    <Links
                        links={['tel', 'email', 'address', 'whatsapp']}
                    />
                </li>
                <li className='item subscribe-item'>
                    <h3>Ne maradj le</h3>
                    <p>Iratkozz fel most, ne maradj le a legfrissebbekről!</p>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        style={props.isStatusBoxOpen || props.anyFormTriggered ? { pointerEvents: 'none' } : { pointerEvents: 'unset' }}>

                        {errors.subscribeEmail && <span><p className='error'>{errors.subscribeEmail?.message}</p></span>}
                        <input id='subscribe-input' placeholder="minta@email.hu" {...register('subscribeEmail')}></input>

                        <button>Feliratkozom</button>

                        {config.settings.isLocalServer &&
                            <div style={{ fontSize: '12px', color: 'red' }}>Local Server</div>
                        }
                    </form>
                </li>
            </ul>
        </nav>
    )
}

