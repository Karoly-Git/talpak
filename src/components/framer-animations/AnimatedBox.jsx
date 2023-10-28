import React from 'react';
import { motion as m } from 'framer-motion';

export default function AnimatedBox({ children }) {

    return (
        <m.div className='box'
            initial={{ opacity: 0, position: 'relative', left: -80 }}
            animate={{ opacity: 1, left: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.3 }}
        >
            {children}
        </m.div>
    );
}

