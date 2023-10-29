import React from 'react';
import { motion as m } from 'framer-motion';

export default function PageTransition({ children }) {

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {children}
        </m.div>
    );
}

