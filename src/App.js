import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import './css/App.css';
import { MainNavigation, MobileNavigation, SecondaryNavigation, BottomNavigation } from '../src/components/Navigations';

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
import MessageError from './components/MessageError';
import MessageSuccess from './components/MessageSuccess';

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
            transition={{ duration: 0.75, ease: "easeOut" }}
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

              <Route path="/success" element={<MessageSuccess />}></Route>

              <Route path="/error" element={<MessageError />}></Route>

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
