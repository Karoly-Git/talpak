import bemerIcon from '../img/arak/bemer.png';
import safelaserIcon from '../img/arak/safelaser.png';
import pedicureIcon from '../img/arak/pedicure.png';
import spaIcon from '../img/arak/spa.png';
import diagnosisIcon from '../img/arak/diagnosis.png';
import massageIcon from '../img/arak/massage.png';
import babyIcon from '../img/arak/baby.png';
import kinesioIcon from '../img/arak/kinesio.png';
import kinesiochildIcon from '../img/arak/kinesiochild.png';
import childIcon from '../img/arak/child.png';
import wrapIcon from '../img/arak/wrap.png';
import packageIcon from '../img/arak/package.png';
import pediandfaceIcon from '../img/arak/pediandface.png';
import extraIcon from '../img/arak/extra.png';


export const prices = [
    {
        group: "BEMER",
        id: 'important',
        icon: {
            src: bemerIcon,
            alt: '',
        },
        isActive: true,
        details: [
            {
                isActive: true,
                service: "BEMER kezelés",
                description: "1 alkalom",
                price: 4000
            },
            {
                isActive: true,
                service: "BEMER kezelés - 10",
                description: "10 alkalom vásárlása esetén kezelésenként",
                price: 3800
            },
            {
                isActive: true,
                service: "BEMER kezelés - 20",
                description: "20 alkalom vásárlása esetén kezelésenként",
                price: 3700
            },
            {
                isActive: true,
                service: "BEMER kezelés - 30",
                description: "30 alkalom vásárlása esetén kezelésenként",
                price: 3600
            },
        ]
    },

    {
        group: "Safe Laser",
        id: 'important',
        icon: {
            src: safelaserIcon,
            alt: '',
        },
        isActive: true,
        details: [
            {
                isActive: true,
                service: "Safe Laser kezelés",
                description: "1 alkalom, AKCIÓS ÁR DECEMBER 31-IG!",
                price: 4000
            },
            {
                isActive: true,
                service: "Safe Laser kezelés - 10",
                description: "10 alkalom vásárlása esetén kezelésenként, AKCIÓS ÁR DECEMBER 31-IG!",
                price: 3800
            },
            {
                isActive: true,
                service: "Safe Laser kezelés - 20",
                description: "20 alkalom vásárlása esetén kezelésenként, AKCIÓS ÁR DECEMBER 31-IG!",
                price: 3700
            },
            {
                isActive: true,
                service: "Safe Laser kezelés - 30",
                description: "30 alkalom vásárlása esetén kezelésenként, AKCIÓS ÁR DECEMBER 31-IG!",
                price: 3600
            },
        ]
    },

    {
        group: "Lábápolás és Pedikűr",
        id: 'foot-care',
        icon: {
            src: pedicureIcon,
            alt: '',
        },
        isActive: true,
        details: [
            {
                isActive: true,
                service: "Alap pedikűr (kézi, illetve gépi pedikűr)",
                description: "Áztatás, bőrkeményedés eltávolítása, köröm igazítás, krémezés",
                price: 7500
            },
            {
                isActive: true,
                service: "Speciális pedikűr (kézi- illetve gépi pedikűr)",
                description: "Áztatás, erős bőrkeményedés, megvastagodott köröm, sarokrepedés, diabétesz láb, vérzékenység, peeling, krémezés",
                price: 8500
            },
            {
                isActive: true,
                service: "Mini pedikűr",
                description: "Áztatás, köröm formázás, köröm kezelés",
                price: 3500
            },
            {
                isActive: true,
                service: "Tyúkszem eltávolítás",
                description: "Ár darabonként értendő",
                price: 2500
            },
            {
                isActive: true,
                service: "Körömgomba kezelése",
                description: "Ár ujjanként értendő",
                price: 2500
            },
            {
                isActive: true,
                service: "Alap pedikűr + körömgomba kezelés",
                description: "Plusz 2 000 Ft ujjanként",
                price: 7500
            },
            {
                isActive: true,
                service: "Japán körömápolás",
                price: 6000
            },
            {
                isActive: true,
                service: "Gél-lakk eltávolítás",
                description: "Lemosóval",
                price: 2000
            },
            {
                isActive: true,
                service: "Baba pedikűr",
                description: "0-6 éves korig",
                price: 2500
            },
        ]
    },

    {
        group: "SPA Kezelések",
        id: 'spa',
        icon: {
            src: spaIcon,
            alt: '',
        },
        isActive: true,
        details: [
            {
                isActive: true,
                service: "Vizes talpmasszázs",
                description: "20 perc",
                price: 4000
            },
            {
                isActive: true,
                service: "Paraffin kezelés",
                description: "Paraffin kezelés hatóanyagos krémmel, csak pedikűrrel kérhető, bőr és/vagy körömgomba esetén nem vehető igénybe! 25 perc",
                price: 5000
            },
        ]
    },

    {
        group: "Diagnosztika - Állapotfelmérés",
        id: 'diagnostics',
        icon: {
            src: diagnosisIcon,
            alt: '',
        },
        isActive: true,
        details: [
            {
                isActive: true,
                service: "Talp diagnosztika",
                description: 'Állapotfelmérés',
                price: 28000
            },
            {
                isActive: true,
                service: "Arc diagnosztika",
                description: 'Állapotfelmérés',
                price: 28000
            },
        ]
    },

    {
        group: "Masszázsok",
        id: 'massage',
        icon: {
            src: massageIcon,
            alt: '',
        },
        isActive: true,
        details: [
            {
                isActive: true,
                berlet: false,
                service: "Reflexológiai talpmasszázs",
                description: "60 perc",
                price: 10000
            },
            {
                isActive: true,
                berlet: false,
                service: "Reflexológiai talpmasszázs",
                description: "30 perc",
                price: 6500
            },
            {
                isActive: true,
                berlet: false,
                service: "Méregtelenítő talpmasszázs",
                description: "30 perc",
                price: 6500
            },
            {
                isActive: true,
                berlet: false,
                service: "Bathi thai olajos talpmasszázs",
                description: "30 perc",
                price: 6500
            },
            {
                isActive: true,
                berlet: false,
                service: "Talpcsakra masszázs",
                description: "20 perc",
                price: 5500
            },
            {
                isActive: true,
                berlet: false,
                service: "Reflexzónás arcmasszázs",
                description: "30 perc",
                price: 6500
            },
            {
                isActive: true,
                berlet: false,
                service: "Herbalance arcmasszázs",
                description: "30 perc",
                price: 7500
            },
            {
                isActive: true,
                berlet: false,
                service: "Szervzónás kézmasszázs",
                description: "30 perc",
                price: 6500
            },
            {
                isActive: true,
                berlet: false,
                service: "Svéd masszázs",
                description: "30 perc",
                price: 6500
            },
            {
                isActive: true,
                berlet: false,
                service: "Svéd masszázs + köpöly igény szerint",
                description: "60 perc, ",
                price: 10500
            },
            {
                isActive: true,
                berlet: false,
                service: "Svéd masszázs + köpöly igény szerint",
                description: "90 perc, ",
                price: 16500
            },
            {
                isActive: true,
                berlet: false,
                service: "Kismama masszázs",
                description: "30 perc",
                price: 6500
            },
            {
                isActive: true,
                berlet: false,
                service: "Thermo masszázs",
                description: "30 perc",
                price: 7000
            },
            {
                isActive: true,
                berlet: false,
                service: "Thermo masszázs - vibrációs labdával",
                description: "30 perc, VIP",
                price: 10000
            },
            {
                isActive: true,
                berlet: false,
                service: "Trigger pont terápia",
                description: "30 perc, egy adott terület fájdalom csillapítása",
                price: 7000
            },
            {
                isActive: true,
                berlet: false,
                service: "Svéd masszázs, trigger pont terápia, IM Kor. Tech.",
                description: "60 perc",
                price: 12000
            },
            {
                isActive: true,
                berlet: false,
                service: "Svéd masszázs, trigger pont terápia, IM Kor. Tech.",
                description: "90 perc",
                price: 18500
            },
            {
                isActive: true,
                berlet: false,
                service: "Svéd masszázs, trigger pont terápia, köpöly,  IM Kor. Tech.",
                description: "60 perc",
                price: 13500
            },
            {
                isActive: true,
                berlet: false,
                service: "Svéd masszázs, trigger pont terápia, köpöly,  IM Kor. Tech.",
                description: "90 perc",
                price: 19500
            },
        ]
    },

    {
        group: "Baba Masszázs",
        id: 'massage',
        icon: {
            src: babyIcon,
            alt: '',
        },
        isActive: true,
        details: [
            {
                isActive: true,
                berlet: false,
                service: "Baba masszázs - Nyugati olajos",
                description: "0-3 éves kori, 30 perc",
                price: 5500
            },
            {
                isActive: true,
                berlet: false,
                service: "Baba masszázs - Thai",
                description: "0-3 éves kori, 30 perc",
                price: 5500
            },
        ]
    },

    {
        group: "Gyermek Masszázs",
        id: 'massage',
        icon: {
            src: childIcon,
            alt: '',
        },
        isActive: true,
        details: [
            {
                isActive: true,
                berlet: false,
                service: "Reflexológiai talpmasszázs",
                description: "3-14 éves kori, 30 perc",
                price: 5500
            },
            {
                isActive: true,
                berlet: false,
                service: "Svéd masszázs",
                description: "3-14 éves kori, 30 perc",
                price: 5500
            },
            {
                isActive: true,
                berlet: false,
                service: "Svéd masszázs",
                description: "3-14 éves kori, 60 perc",
                price: 9500
            },
        ]
    },

    {
        group: "Tekercselés",
        id: 'roll',
        icon: {
            src: wrapIcon,
            alt: '',
        },
        isActive: true,
        details: [
            {
                isActive: true,
                service: "Fóliás",
                description: "5 alkalom felett 10% kedvezmény!",
                price: 10000
            },
            {
                isActive: true,
                service: "Vizes",
                description: "5 alkalom felett 10% kedvezmény!",
                price: 14000
            },
            {
                isActive: true,
                service: "Köpöly",
                description: "30 perc",
                price: 3000
            },
            {
                isActive: true,
                service: "Masszázs (hatóanyagos krémekkel, olajokka, zselékkel egyénhez igazítva)",
                description: "30 perc, tekercselés nélkül is kérhető",
                price: 6500
            },
            {
                isActive: true,
                service: "Masszázs (hatóanyagos krémekkel, olajokka, zselékkel egyénhez igazítva)",
                description: "45 perc, tekercselés nélkül is kérhető",
                price: 8000
            },
        ]
    },

    {
        group: "Felnőtt Kinesio Tape",
        id: 'kinesio',
        icon: {
            src: kinesioIcon,
            alt: '',
        },
        isActive: true,
        details: [
            {
                isActive: true,
                service: "Kinesio Tape - ragasztás felnőtteknek",
                description: "Kis felületen",
                price: 5000
            },
            {
                isActive: true,
                service: "Kinesio Tape - ragasztás felnőtteknek",
                description: "Nagy felületen",
                price: 8000
            }
        ]
    },

    {
        group: "Gyermek Kinesio Tape",
        id: 'kinesio',
        icon: {
            src: kinesiochildIcon,
            alt: '',
        },
        isActive: true,
        details: [
            {
                isActive: true,
                service: "Kinesio Tape - ragasztás gyermekeknek 14 éves korig",
                description: "Kis felületen",
                price: 4000
            },
            {
                isActive: true,
                service: "Kinesio Tape - ragasztás gyermekeknek 14 éves korig",
                description: "Nagy felületen",
                price: 6000
            }
        ]
    },

    {
        group: "Masszázs Csomagok",
        id: 'package',
        icon: {
            src: packageIcon,
            alt: '',
        },
        isActive: true,
        details: [
            {
                isActive: true,
                berlet: false,
                service: "Masszázs Csomag 1",
                description: "Vizes talpmasszázs + méregtelenítő talpmasszázs (50 perc)",
                price: 8500
            },
            {
                isActive: true,
                berlet: false,
                service: "Masszázs Csomag 2",
                description: "Vizes talpmasszázs + talpcsakra masszázs (40 perc)",
                price: 7400
            },
            {
                isActive: true,
                berlet: false,
                service: "Masszázs Csomag 3",
                description: "Vizes talpmasszázs + reflexzónás arcmasszázs (30 perc)",
                price: 8500
            },
            {
                isActive: true,
                berlet: false,
                service: "Masszázs Csomag 4",
                description: "Vizes talpmasszázs + méregtelenítő talpmasszázs + arcmasszázs (60 perc)",
                price: 15000
            },
            {
                isActive: true,
                berlet: false,
                service: "Masszázs Csomag 5",
                description: "Vizes talpmasszázs + talpcsakra masszázs + arcmasszázs (50 perc)",
                price: 14500
            },
        ]
    },

    {
        group: "Pedi és Masszázs Csomagok",
        id: 'package',
        icon: {
            src: pediandfaceIcon,
            alt: '',
        },
        isActive: true,
        details: [
            {
                isActive: true,
                service: "Csomag 1",
                description: "Alap pedikűr + talpmasszázs + paraffinos kezelés ható anyagos krémmel (1,5-2 óra egyéntől függően)",
                price: 17000
            },
            {
                isActive: true,
                service: "Csomag 2",
                description: "Alap pedikűr + japán körömápolás + vizes masszázs (1,5-2 óra egyéntől függően)",
                price: 15500
            },
        ]
    },

    {
        group: "Extra Pedi és Masszázs csomagok",
        id: 'package',
        icon: {
            src: extraIcon,
            alt: '',
        },
        isActive: true,
        details: [
            {
                isActive: true,
                service: "Manager csomag férfiaknak",
                description: "Alap pedikűr + japán körömápolás +  talpmasszázs + paraffinos kezelés hatóanyagos krémmel (2-2,5 óra egyéntől függően)",
                price: 15800
            },
            {
                isActive: true,
                service: "Kényeztető csomag nőknek",
                description: "Alap pedikűr + japán körömápolás +  arcmasszázs + paraffinos kezelés hatóanyagos krémekkel vagy olajokkal (2-2,5 óra egyéntől függően)",
                price: 14800
            },
        ]
    },
];