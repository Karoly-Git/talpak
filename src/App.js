// React and React Router Imports
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Animation Imports
import { motion as m } from 'framer-motion';

// CSS Imports
import './css/App.css';

// Navigation Component Imports
import { MainNavigation, MobileNavigation, SecondaryNavigation, BottomNavigation } from '../src/components/Navigations';

// Page Component Imports
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

// Action Confirmation Component Imports
import { MessageError, MessageSuccess, SubscribeError, SubscribeSuccess } from './components/ActionConfirmations';

// Other Component Imports
import ScrollToTop from './components/ScrollToTop';
import { MdOutlineNavigateNext as ArrowIcon } from 'react-icons/md';

export default function App() {
  const [isLoading, setIsLoading] = useState(!true);

  useEffect(() => {

    function updateLoadingState() {
      setIsLoading(false);
    }

    window.addEventListener('load', updateLoadingState);

    return () => {
      window.removeEventListener('load', updateLoadingState);
    };

  }, []);


  const [isBtnActive, setIsBtnActive] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    function getScrollPosition() {
      window.scrollY > 500 ? setIsBtnActive(true) : setIsBtnActive(false);
    }

    window.addEventListener('scroll', getScrollPosition);

    return () => {
      window.removeEventListener('scroll', getScrollPosition);
    }
  }, [])

  return isLoading ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <h1>
        Loading...
      </h1>
    </div>
  ) :
    (
      <Router
      >
        <ScrollToTop />
        <div className='App'>
          {!true && <MessageSuccess />}
          <div
            className='up'
            onClick={scrollToTop}
            style={isBtnActive ? { right: '0' } : { right: '-40px' }}
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

              <Route path='/jo-tudni' element={<JoTudni />} />
              <Route path='/akciok' element={<Akciok />} />
              <Route path='/gyik' element={<Gyik />} />

              <Route path='/' element={<Kezdolap />} />
              <Route path='/talpak' element={<Kezdolap />} />
              <Route path='/szolgaltatasok' element={<Szolgaltatasok />} />
              <Route path='/arak' element={<Arak />} />
              <Route path='/magamrol' element={<Magamrol />} />
              <Route path='/kapcsolat' element={<Kapcsolat />} />
              <Route path='/galeria' element={<Galeria />} />

              <Route path="/message-success" element={<MessageSuccess />}></Route>
              <Route path="/subscribe-success" element={<SubscribeSuccess />}></Route>

              <Route path="/message-error" element={<MessageError />}></Route>
              <Route path="/subscribe-error" element={<SubscribeError />}></Route>

              <Route path='/felhasznalasi-feltetelek' element={<FelhasznalasiFeltetelek />} />
            </Routes>
          </main>
          <footer>
            <SecondaryNavigation />
            <BottomNavigation />
          </footer>
        </div>
      </Router>
    )
}
