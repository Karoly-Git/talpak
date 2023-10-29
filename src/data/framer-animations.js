export const animations = {
    pageTransition: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1.15, ease: "easeOut" }
    },
    page: {
        h1: {
            initial: { opacity: 0, position: 'relative', left: -80 },
            animate: { opacity: 1, left: 0 },
            transition: { duration: 0.75, ease: "easeOut", delay: 0.3 }
        },
        p: {
            initial: { opacity: 0, position: 'relative', left: -80 },
            animate: { opacity: 1, left: 0 },
            transition: { duration: 0.75, ease: "easeOut", delay: 0.5 }
        },
        box: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.75, ease: "easeOut", delay: 0.15 }
        }
    }
};