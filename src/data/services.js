import massageIco from '../img/ico-massage.png'
import footIco from '../img/ico-pedicure.png'
import spaIco from '../img/ico-spa.png'
import kinesioIco from '../img/ico-kinesio.png'

import massage from '../img/massage.png'
import pedicure from '../img/pedicure.png'
import spa from '../img/spa.png'
import kinesio from '../img/kinesio.png'

export const services = [
    {
        name: 'Masszázs',
        isActive: true,
        id: 'massage',
        img: {
            snippet: {
                src: massageIco,
                alt: 'Masszázs ikon',
            },
            main: {
                src: massage,
                alt: "Masszázs image",
            },
        },
        description: {
            snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, dolorum sunt? Impedit laborum illo nostrum. Qui inventore dolorem, quam odio ullam molestiae ut excepturi dolores doloribus provident atque iure laborum.",
            main: [
                {
                    name: 'Talp és arc diagnosztika',
                    description: [
                        'Talp: „A talp egy nagy nyitott könyv. A talp olvasója számára megmutatod az életed.” A talp feltérképezés szemmel, tapintással, masszázzsal egybe kötve történik. A talp diagnosztikán elmondom, milyen betegségeket, lelki eredetű tüneteket tapasztalok. Diagnosztika után érdemes a legmegfelelőbb talp masszázst kiválasztani.',
                        'Arc: Ahogy a szem a lélek tükre, úgy arcunk is magában hordozza a múltunkat, érzelmeinket azt, hogy milyen stressz ért minket az idők folyamán, de azt is milyen az élet vitelünk, mennyire táplálkozunk helyesen. Az arc feltérképezés szemmel, tapintással, masszázzsal egybe kötve történik. Az arc diagnosztikán elmondom, milyen betegségeket, lelki eredetű tüneteket tapasztalok.',
                    ],
                },
                {
                    name: 'Frissítő / Svéd masszázs',
                    description: [
                        'Lorem ipsum ... PA',
                        'Lorem ipsum ... PB',
                    ],
                },
                {
                    name: 'Reflexológiai talp masszázs',
                    description: [
                        'Lorem ipsum ... PA',
                        'Lorem ipsum ... PB',
                    ],
                },
                {
                    name: 'Méregtelenítő talp masszázs',
                    description: [
                        'A masszázs segíti beindítani az öngyógyítási folyamatokat. A masszázst célszerű több alkalommal igénybe venni az elején, hogy az öngyógyítási folyamatok elkezdődjenek. Ha teheted, heti 2x vagy 3x, ahogy az időd engedi és utána havi 1x legalább érdemes megismételni. Sok betegség megelőzésére, illetve meglévő betegség javulására, – szinten tartására, alkalmazhatóak. Az egész testre jótékony hatással van.',
                        'Talp masszázs sokféle módon alkalmazható, kezdve frissítő céllal, megelőzésképpen és állapotfelmérésre is. Segít a méregtelenítésben és salaktalanításban, és hatásmechanizmusát tekintve terápiás eljárás lehet számos betegség esetén. A kinezió tape feszültségoldó hatással is bír, és a szorongás, valamint félelem enyhítésére is alkalmas. Emellett fájdalomcsillapítóként is használható. Az alkalmazása széleskörű, a 1,5-2 éves kortól az egészen idős emberekig, figyelembe véve az esetleges tiltó körülményeket.',
                    ],
                },
                {
                    name: 'Bathi Thai olajos talp masszázs',
                    description: [
                        'A thai masszázs egy speciális masszázs fajta, amely a relaxáció és helyreállító kezeléseket ötvözi. A módszer a test speciális pontjainak aktiválásán alapul, amely a belső energiákért felelős. Helyre állítja az ember fizikai erejét, nem feledkezve meg a spiritualitásról.',
                        'Talpmasszázs általános tudnivalók: Ez a masszázsformáció lazító, feszültségoldó, és fájdalomcsillapító hatással bír, ami fizikailag és lelkileg is frissebbé, aktívabbá és kiegyensúlyozottabbá tesz. Az energia vonalak és meridiánok kezelése javítja a vér- és nyirokkeringést, erősítve a szervezet méregtelenítő képességét. A talpmasszázs stimulálja a vegetatív idegrendszert, belső szerveket serkentve, és visszaállítva a test energiarendszerének egyensúlyát. A nyújtások és "kihúzások" mobilizációk révén oldja az izmok és ízületek merevségét, növeli a test rugalmasságát. A masszázs után a vendég frissnek és rugalmasnak érzi magát, könnyebben mozog, és izmainak merevsége megszűnik. Emellett hasznos lehet depresszió, szorongás, pánikbetegségek és lelki problémák enyhítésére. Az alkalmazása széleskörű, a 1,5-2 éves kortól az egészen idős emberekig, figyelembe véve az esetleges tiltó körülményeket.',
                    ],
                },
                {
                    name: 'Talpcsakra masszázs',
                    description: [
                        'Lorem ipsum ... PA',
                        'Lorem ipsum ... PB',
                    ],
                },
                {
                    name: 'Tigger pont masszázs',
                    description: [
                        'Lorem ipsum ... PA',
                        'Lorem ipsum ... PB',
                    ],
                },
                {
                    name: 'Reflexzónás arcmasszázs',
                    description: [
                        'Érintett területek: Vizelet kiválasztórendszer, emésztésirendszer, légzőrendszer, nyirokrendszer; keringés szervrendszere, agy,-idegrendszer, hormonrendszer, érzékszervek, mozgásszervek, nemiszervek. (97 reflexzónás pontot érint)',
                        'Reflexzónás masszázs: Ez a masszázsformáció segíti beindítani az öngyógyítási folyamatokat. Kezdetben célszerű több alkalommal igénybe venni, hogy ezek a folyamatok hatékonyan elinduljanak. Ha lehetséges, heti 2 vagy 3 alkalommal érdemes alkalmazni, majd utána legalább havonta 1 alkalommal érdemes megismételni. A reflexzónás masszázs sok betegség megelőzésére és meglévő betegségek javítására, stabilizálására is alkalmazható, és jótékony hatással van az egész testre.',
                    ],
                },
                {
                    name: 'Kismama, baba és gyerekmasszázs',
                    description: [
                        'Lorem ipsum ... PA',
                        'Lorem ipsum ... PB',
                    ],
                },
            ],
        },
    },
    {
        name: 'Lábápolás és Pedikűr',
        isActive: true,
        id: 'foot-care',
        img: {
            snippet: {
                src: footIco,
                alt: '',
            },
            main: {
                src: pedicure,
                alt: "Lábápolás image",
            },
        },
        description: {
            snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, dolorum sunt? Impedit laborum illo nostrum. Qui inventore dolorem, quam odio ullam molestiae ut excepturi dolores doloribus provident atque iure laborum.",
            main: [
                {
                    name: 'Vizes talpmasszázs',
                    description: [
                        'Lorem ipsum ... VA',
                        'Lorem ipsum ... VB',
                    ],
                },
                {
                    name: 'Parafinn ápolás',
                    description: [
                        'Lorem ipsum ... PA',
                        'Lorem ipsum ... PB',
                    ],
                },
            ],
        },
    },
    {
        name: 'SPA',
        isActive: true,
        id: 'spa',
        img: {
            snippet: {
                src: spaIco,
                alt: 'SPA ikon',
            },
            main: {
                src: spa,
                alt: "SPA image",
            },
        },
        description: {
            snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, dolorum sunt? Impedit laborum illo nostrum. Qui inventore dolorem, quam odio ullam molestiae ut excepturi dolores doloribus provident atque iure laborum.",
            main: [
                {
                    name: 'Vizes talpmasszázs',
                    description: [
                        'Lorem ipsum ... VA',
                        'Lorem ipsum ... VB',
                    ],
                },
                {
                    name: 'Parafinn ápolás',
                    description: [
                        'Lorem ipsum ... PA',
                        'Lorem ipsum ... PB',
                    ],
                },
            ],
        },
    },
    {
        name: 'Kinezio Tape',
        isActive: true,
        id: 'kinesio',
        img: {
            snippet: {
                src: kinesioIco,
                alt: '',
            },
            main: {
                src: kinesio,
                alt: "Kinezio image",
            },
        },
        description: {
            snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, dolorum sunt? Impedit laborum illo nostrum. Qui inventore dolorem, quam odio ullam molestiae ut excepturi dolores doloribus provident atque iure laborum.",
            main: [
                {
                    name: 'Kinezio Tape',
                    description: [
                        'A kinezio tape, vagy más néven kineziológiai szalag, számos pozitív hatást kínál az emberek számára. Elsősorban fájdalomcsillapító tulajdonságairól ismert, melyek segítenek enyhíteni a fájdalmat gyógyszerek nélkül is. Ezenkívül aktiválja az öngyógyító fájdalomcsillapító rendszert, amely természetes módon segít a testnek megbirkózni a fájdalommal.',
                        'A kinezio tape a neuroplaszticitást is elősegíti, azaz képes beindítani az idegrendszer ingerlést a C rostokon keresztül, melyek az agyba futó fájdalmi ingereket gátlják. Ennek eredményeként a betegek nagyobb terhelhetőséget tapasztalhatnak, és könnyebben mozoghatnak nagyobb mozgásterjedelemmel.',
                        //'Az ízületi problémák korrekciójában is hatékony lehet a kineziológiai szalag. A szalag segíthet a mozgástartomány javításában és az instabilitásból eredő egyenletlenségek kiigazításában, így hozzájárulva az ízületek jobb működéséhez.',
                        //'Az izmok támogatásában is kiemelkedő szerepet játszik, például edzés vagy más fizikai terhelés után csökkentheti az izomlázat és görcsöket. Emellett segíthet normalizálni az izomtónust, függetlenül attól, hogy az izomzat túl feszes vagy túl laza-e.',
                        //'Sérülések esetén is hasznos lehet a kinezió tape alkalmazása, például izomhúzódás, izomzúzódás, részleges szalagsérülés vagy bevérzések esetén. Segít enyhíteni a fájdalmat és támogatja a rehabilitációt.',
                        //'Az alvó immunsejtek aktiválásával és az immunstimulálással a kineziológiai szalag javítja az immunrendszer működését, hozzájárulva a test védekezőképességének javulásához.',
                        //'Ezenkívül pszichológiai szempontból is fontos szerepet játszik a kinezió tape. A fájdalom pszichés hatására utalva segít az embereknek elfogadni és kezelni a sérült vagy beteg testrészüket.',
                        //'Végül, az alkalmazási területek sokszínűek, ideértve a nyaki, váll-, hát-, derék- és ízületi problémákat, valamint különféle sérüléseket és egyéb mozgásszervi panaszokat. A kinezió tape alkalmazása szerteágazó és hatékony lehet az egészség és a mozgékonyság támogatásában.',
                    ],
                },
            ],
        },
    },
];
