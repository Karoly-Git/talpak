import React from 'react';
import { motion as m } from 'framer-motion';

export default function AnimatedDiv({ children }) {

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
        >
            {children}
        </m.div>
    );
}

