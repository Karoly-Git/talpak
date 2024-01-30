// React and React Router Imports
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Animation Imports
import { motion as m } from 'framer-motion';

// CSS Imports
import './css/App.css';

// Icon Imports
import { BsPencilSquare as PenIcon } from 'react-icons/bs';
import { FaExclamation as ErrorIcon } from 'react-icons/fa';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';
import { MdOutlineNavigateNext as ArrowIcon } from 'react-icons/md';

// Navigation Component Imports
import { MainNavigation, MobileNavigation, SecondaryNavigation, BottomNavigation } from '../src/components/Navigations';

// Page Component Imports
import Admin from './components/pages/Admin';
import JoTudni from './components/pages/JoTudni';
import Akciok from './components/pages/Akciok';
import Gyik from './components/pages/Gyik';
import Kezdolap from './components/pages/Kezdolap';
import Szolgaltatasok from './components/pages/Szolgaltatasok';
import Arak from './components/pages/Arak';
import Magamrol from './components/pages/Magamrol';
import Kapcsolat from './components/pages/Kapcsolat';
import Galeria from './components/pages/Galeria';
import FelhasznalasiFeltetelek from './components/pages/FelhasznalasiFeltetelek';

// Other Component Imports
import ScrollToTop from './components/ScrollToTop';
import Developer from './components/Developer';

export default function App() {
  const [isStatusBoxOpen, setIsStatusBoxOpen] = useState(false);
  const [isDiscountBoxOpen, setIsDiscountBoxOpen] = useState(true);  // This to be set true for pop-up add
  const [subscribtionInProgress, setSubscribtionInProgress] = useState(false);
  const [isSubscribtionError, setIsSubscribtionError] = useState(false);
  const [isFormReset, setIsFormReset] = useState(false);

  const [anyFormTriggered, setAnyFormTriggered] = useState(false);

  const [isScrollBtnVisible, setIsScrollBtnVisible] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    function getScrollPosition() {
      window.scrollY > 500 ? setIsScrollBtnVisible(true) : setIsScrollBtnVisible(false);
    }

    window.addEventListener('scroll', getScrollPosition);

    return () => {
      window.removeEventListener('scroll', getScrollPosition);
    }
  }, [])

  function closeStatusBox() {
    setIsStatusBoxOpen(false);
  }
  function closeDiscountBox() {
    setIsDiscountBoxOpen(false);
  }

  return (
    <Router>
      <ScrollToTop />
      <div className='App'>

        {isDiscountBoxOpen && <m.div className='status-box' id='discount'
          initial={{ opacity: 0, top: 200 }}
          animate={{ opacity: 1, top: 300 }}
          transition={{ duration: 1, ease: "easeOut", delay: 3 }}
        >
          <CloseIcon
            id='close-icon'
            onClick={() => {
              closeDiscountBox();
            }} />
          {/*Icon?*/}

          {false && <>
            <h2>Safe Laser Akció</h2>
            <h3>December 31-ig!</h3>
            <p>
              Karácsonyi akció keretében most hatalmas kedvezmény a Safe Laser kezelésekre.
            </p>
          </>}

          {true && <>
            <h2>Vizes Lábmasszázs Akció</h2>
            <h3>Februárban</h3>
            <p>
              50%-os kedvezmény a vizes lábmasszázsra egész februárban.
            </p>
          </>}

          <Link to='/kapcsolat' onClick={closeDiscountBox}>
            <button>Kapcsolat</button>
          </Link>
        </m.div>}


        {isStatusBoxOpen && subscribtionInProgress &&
          <div className='status-box' id='in-progress'>
            <p>Feliratkozás folyamatban...</p>
            <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9" stroke="#000" strokeWidth="2" fill="none" />
              <circle cx="10" cy="10" r="9" stroke="#0073e6" strokeWidth="2" fill="none">
                <animate attributeName="stroke-dasharray" from="0 56.548667764616276" to="57 56.548667764616276" dur="1s" begin="0s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        }

        {isStatusBoxOpen && !subscribtionInProgress && !isSubscribtionError &&
          <div className='status-box' id='is-sent'>
            <CloseIcon
              id='close-icon'
              onClick={() => {
                closeStatusBox();
                setIsFormReset(true);
                setAnyFormTriggered(false);
              }} />
            <PenIcon className='icon' />
            <h2>Feliratkozás sikeres!</h2>
            <h3>Köszönöm az feliratkozást!</h3>
            <p>Mostantól rendeszeres értesítéseket kapsz eseményekről, akciókról és friss hírekről!</p>
          </div>
        }
        {isStatusBoxOpen && !subscribtionInProgress && isSubscribtionError &&
          <div className='status-box' id='is-error'>
            <CloseIcon
              id='close-icon'
              onClick={() => {
                closeStatusBox();
                setIsSubscribtionError(false);
                setAnyFormTriggered(false);
              }}
            />
            <ErrorIcon className='icon'
            />
            <h2>
              Sikertelen feliratkozás!
            </h2>

            <h3>
              Probáld újra később, vagy vedd fel velem a kapcsolatot a lent látható elérhetőségeim valamelyikén!
            </h3>
          </div>
        }

        <div
          className='up'
          onClick={scrollToTop}
          style={isScrollBtnVisible ? { right: '0' } : { right: '-40px' }}
        >
          <ArrowIcon className='icon' />
        </div>
        <m.header
          initial={{ opacity: 0, top: -150 }}
          animate={{ opacity: 1, top: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <SecondaryNavigation />
          <MainNavigation />
          <MobileNavigation />
        </m.header>
        <main>
          <Routes>
            <Route path='*' element={<h1>Oldal nem található</h1>} />
            <Route path='/admin' element={<Admin />} />

            <Route path='/jo-tudni' element={<JoTudni />} />
            <Route path='/akciok' element={<Akciok />} />
            <Route path='/gyik' element={<Gyik />} />

            <Route path='/' element={<Kezdolap />} />
            <Route path='/szolgaltatasok' element={<Szolgaltatasok />} />
            <Route path='/arak' element={<Arak />} />
            <Route path='/magamrol' element={<Magamrol />} />
            <Route path='/kapcsolat' element={<Kapcsolat
              anyFormTriggered={anyFormTriggered}
              setAnyFormTriggered={setAnyFormTriggered}
            />} />
            <Route path='/galeria' element={<Galeria />} />

            <Route path='/felhasznalasi-feltetelek' element={<FelhasznalasiFeltetelek />} />
          </Routes>
        </main>
        <footer>
          <SecondaryNavigation />
          <BottomNavigation
            setIsStatusBoxOpen={setIsStatusBoxOpen}
            setSubscribtionInProgress={setSubscribtionInProgress}
            setIsSubscribtionError={setIsSubscribtionError}

            isFormReset={isFormReset}
            setIsFormReset={setIsFormReset}

            anyFormTriggered={anyFormTriggered}
            setAnyFormTriggered={setAnyFormTriggered}
          />
          <Developer />
        </footer>
      </div>
    </Router>
  )
}
