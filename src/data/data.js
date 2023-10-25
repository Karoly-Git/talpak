// Icons
import { BsPhone as MobileIcon } from "react-icons/bs";
import { ImWhatsapp as WhatsappIcon } from "react-icons/im";
import { SlLocationPin as LocationIcon } from "react-icons/sl";
import { AiOutlineMail as EmailIcon } from "react-icons/ai";
import { FiFacebook as FacebookIcon } from "react-icons/fi";
import { AiOutlineInstagram as InstagramIcon } from "react-icons/ai";
import { AiOutlineYoutube as YoutubeIcon } from "react-icons/ai";

// Contact details
export const contacts = {
    tel: {
        link: "tel:+36203129332",
        text: "+36 20 312 9332",
        icon: <MobileIcon className="icon" aria-label="Mobile phone ikon" />,
    },
    whatsapp: {
        link: "https://wa.me/+36203129332",
        text: "+36 20 312 9332",
        icon: <WhatsappIcon className="icon" aria-label="WhatsApp ikon" />,
    },
    email: {
        link: "mailto:talpak@talpak.hu",
        text: "talpak@talpak.hu",
        icon: <EmailIcon className="icon" aria-label="Email ikon" />,
    },
    address: {
        link: "https://www.google.com/maps/place/Pedik%C5%B1r,+massz%C3%A1zs,+diagnosztika,+kinezio+TALPAK/@47.1918664,19.3039533,17z/data=!3m1!4b1!4m6!3m5!1s0x47418fe204a8464d:0x6133b4065a54f935!8m2!3d47.1918628!4d19.3065282!16s%2Fg%2F11tjpwb9ww?entry=ttu",
        street: "Bem utca 53.",
        city: "Dabas",
        postcode: "H-2370",
        icon: <LocationIcon className="icon" aria-label="Location ikon" />,
    },
    facebook: {
        link: "https://www.facebook.com/profile.php?id=100086350545847",
        icon: <FacebookIcon className="icon" aria-label="Facebook ikon" />,
    },
    instagram: {
        link: "https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2F__talpak__%3Futm_source%3Dqr%26igshid%3DMzNlNGNkZWQ4Mg%253D%253D%26fbclid%3DIwAR2xd3U3RWYBe0V3NHGPgUKtZrn1HsBZaSy5jcmcfGaffmA9FAWMqkWlSi8&h=AT1B6mzg8GEZ8JYOjjpnV1SgaJH6i6EQ2dKwlANG7OEezvL1zvm_ePW91vBbNWtjrmCIPnf9cg7zG-rUJ_4XQpISd0kqMzhn5btuN_tdf0im5JJivo-X8TxWSfiakzjLgYkBJQ",
        icon: <InstagramIcon className="icon" aria-label="Instagram ikon" />,
    },
    youtube: {
        link: "https://www.youtube.com",
        icon: <YoutubeIcon className="icon" aria-label="Youtube ikon" />,
    },
};

// Business opening hours
export const openingHours = [
    {
        day: "Hétfő - Péntek:",
        hours: "9:00 - 21:00"
    },
    {
        day: "Szombat - Vasárnap:",
        hours: "9:00 - 15:00"
    },
];

// Introduction on "Magamrol" page
export const about = [
    {
        isActive: true,
        h2: `Anett vagyok, és már ${new Date().getFullYear() - 2021} éve szenteltem magam a masszázs világának.`,
        p: "Számomra a test nem csupán egy biológiai csoda, hanem egy rejtett világ, amelyet felfedezve és megértve képesek vagyunk javítani az életminőségünket. Filozófiám alapja az egészség, a harmónia és a személyes fejlődés. Hiszek abban, hogy az egészségünk az egyik legnagyobb kincs, és a testi-lelki harmónia elérése az életünk során megtett legfontosabb lépés."
    },
    {
        isActive: true,
        h2: "Hiszem, hogy az örökös tanulás az egyik legfontosabb eszközünk a fejlődéshez.",
        p: "Szüntelenül fejlesztem magam, rendszeresen részt veszek különböző tréningeken és kurzusokon, így biztosítom, hogy szakmaiag mindig naprakész legyek. Az ügyfeleim számára ez a magas színvonalú szolgáltatások és a hatékony kezelések biztosítékát jelenti."
    },
    {
        isActive: true,
        h2: "Az emberi test rejtélye: Kiskorom óta érdekelt az anatómia és a test működése.",
        p: "Kiskorom óta érdekelt az anatómia, hogyan is működünk mi emberek. Amatőr festőként imádtam is a mezítelen testeket rajzolni. Figyeltem az emberek testét, mozgását, izmaik ívét, vagy éppen, ami kiemelkedő volt valakin. Tízen évesen hallottam először a láb elemzésével kapcsolatosan dolgokról. Sokat olvastam utána mit is rejthet egy láb, ha elkezdjük elemezni. A lábápolás-pedikűr iskolában megtanultam a csontok szerepét, a bőrt és a köröm szerkezetét. A masszázs iskolában pedig reflexológián olvasni a lábból. Ahogy a tanárom mindig is mondta: „Mutasd a talpad, s megmondom ki vagy.” És ez tényleg így is van."
    },
    {
        isActive: true,
        h2: "Az átalakulás szenvedéllyé vált: Tudás és vágy a test megismerésére.",
        p: "Ahogy jobban elmélyültem az emberi test felépítésében és egyre többet tanultam, azt vettem észre, hogy szinte falom, a tudást magamba. A tudás iránti vágyaim immár szenvedélyé váltak. Folyton csak az járt az eszembe ezt is, ezt is tudni akarom. Majd rájöttem, hogy egy emberöltönyi idő is kevés mind arra, amiket tudni, megérteni szeretnék. Így el kellett döntenem, mit is szeretnék valójában. Végül megszületett bennem a válasz a sok kérdésre."
    },
    {
        isActive: true,
        h2: "A talpak titka: Az anatómia és reflexzónák összhangja a kulcs.",
        p: "A talpakkal foglalkozni. Hogy miért is? Mert minden innen indul ki és érkezik is vissza. Pl: anatómiailag, ha a talpad hosszanti boltozata megsüllyed, kihat a csípődre, gerincedre, majd a testarásodra és így sorolhatnám végig a problémákat."
    },
    {
        isActive: true,
        h2: "Tigger pont masszázs és Kinezio Tape: A test egészére kiterjedő megközelítés.",
        p: "Ha viszont a reflexzónás részeket nézem, látom, hogy például melyik belsőszerveddel lehet probléma, vagy az is lehet, hogy Te még nem is észleled a betegséget, betegségeket, de a lábadon már ott vannak a jelek, amik pár hét múlva meg is jelenhetnek és magad is érzékelheted."
    },
    {
        isActive: true,
        h2: "Az egészség a legfontosabb: Szolgáltatásaim az egészség és közérzet javítását szolgálják.",
        p: "Szóval ezek csak pár példák arra, miért is a talp lett a specialitásom. Na és hogy jön ide akkor a tigger pont masszázs, vagy a Kinezio Tape ragasztás? A lábakon is ugyan úgy lehet alkalmazni őket, mint a test bármely meghatározott pontjain. Ezeknél a területeknél már tágabbra nyitottam szemem, tudásom kihatva az egész emberi testre és elhatároztam, hogy a fájdalom csillapítás, közérzet javítás szolgáltatással is segítem ember társaim."
    },
    {
        isActive: true,
        h2: "Számomra az egészség az első, s úgy vélem sokunk számára az.",
        p: "Az egészség a legnagyobb kincs, amit az életben birtokolhatunk. Hiszek abban, hogy mindenki számára fontos a jó közérzet és a testi-lelki harmónia. A célom az, hogy segítsek mindenkinek elérni ezt az állapotot, és érezd, hogy az egészséged az elsődleges szempont. Hiszek abban, hogy egyensúlyban lenni önmagunkkal és a környezetünkkel, az igazi boldogság forrása. Ezért hoztam létre a TALPAK-at, hogy támogassam az embereket az egészségük megőrzésében és fejlesztésében."
    },
    {
        isActive: true,
        h2: "Érezd a változást: A kezelések után újjászületve és energikusan távozol.",
        p: "Szóval bátran nézz szét oldalamon és csemegézz magadra vagy ismerőseidre szabva a szolgáltatások közül. Garantáltan elégedetten fogsz távozni. És hogy ezt miért merem így leírni? Mert ha már egyszer voltál nálam, feltöltődve, újjászületve, energikusan, valami plusszal távozol innen, és ez a plusz érzés hiányozni fog. Ez pedig az az érzés lesz, hogy érzed magadban valami jobb lett, valami átalakult benned."
    },
    {
        isActive: true,
        h2: "Pillangók átalakulása: Válassz, milyen pillangó szeretnél lenni, én segítek elérni.",
        p: "Képzelj el egy pillangót. Miből mivé válik. És tudjuk, hogy a pillangók három csoportba sorolhatók, hát itt most te döntöd el, milyen pillangó is szeretnél lenni. Én hozzá segítelek."
    }
];

export const reviews = [
    {
        isActive: true,
        name: "Fanni",
        rating: 4.8,
        comment:
            "Nehéz jó szakembert találni, ezért kicsit félek mindig új helyeket kipróbálni, de Anettnál annyira jó helyre kerültünk. A kisbabánkat vittük hozzá, és számomra nagyon megnyugtató hogy látszik rajta ez neki nem csak munka hanem hivatás. Hisz abban amit csinál! Nagyon jók éreztük magunkat a babamasszázson, illetve én is kaptam egy isteni hátmasszázst. Külön jó nekünk a rugalmassága, illetve, hogy nagyon baba és gyermek barát a helyszín. Anett nagyon nyitott és barátságo, csak ajánlani tudom!",
    },
    {
        isActive: true,
        name: "Zarnócz",
        rating: 4.8,
        comment:
            "Nagyon kedves fogadtatás után egy állapotfelmérést és kisebb átbeszélési részt követően Anett megkezdte a kezelésem. Kineziotape-re jelentkeztem be hozzá. A kezelés alatt éreztem a hatást, már ott tompult a fájdalom, aminek nagyon örültem. Anett nagyon kedves, megértő, óvatos szakember. Mindig ügyelt arra, hogy a kezelés alatt ne okozzon fájdalmat, vagy ne érezzem kényelmetlenül magam. Rendezett, letisztult, tiszta és barátságos helységbe érkeztem a kezelésre. Mindenkinek szívből ajánlom.",
    },
    {
        isActive: true,
        name: "Tímea",
        rating: 4.8,
        comment:
            "Anett egy igazi profi a szakmájában, aki rendkívül sokféle módszert ismer és alkalmaz. Mindig a vendégei egyéni igényeire szabva nyújtsa a legjobb szolgáltatást. Minden egyes látogatás alkalmával Anett kezei alatt egyfajta csoda történik, az izmaim ellazulnak, a feszültség oldódik, és egy belső béke és harmónia érzése tölt el. Az ő kezei olyanok, mintha varázsolnának, és minden egyes mozdulata csak még inkább megerősíti azt a jó érzést, hogy a legjobb helyen vagyok.",
    },
];

// Anett"s certificates for CertsSlider
export const certs = [
    { name: "Lábápoló", grade: "OKJ-s" },
    { name: "Gombás köröm kezelés", grade: "tanúsítvány" },
    { name: "Orosz gépi pedikűr & gél lakk", grade: "tanúsítvány" },
    { name: "Talp-diagnosztikai és méregtelenítő talpmasszás", grade: "tanúsítvány" },
    { name: "Reflexzónás talpmasszázs", grade: "tanúsítvány" },
    { name: "Bodhi tahi olajos talpmasszázs", grade: "tanúsítvány" },
    { name: "Talpcsakra masszázs", grade: "tanúsítvány" },
    { name: "Arcdiagnosztika és reflexzónás arcmasszázs", grade: "tanúsítvány" },
    { name: "Frissítő /SVÉD/ masszőr", grade: "tanúsítvány" },
    { name: "Baba masszázs", grade: "tanúsítvány" },
    { name: "Trigger pont terápia", grade: "tanúsítvány" },
    { name: "Kinesio tape terapeuta", grade: "tanúsítvány" }
];


// Frequently asked questions for "GyIK" page
export const faqs = [
    {
        isActive: true,
        question: "Mi a pedikűr és miért fontos a lábápolás?",
        answer: "A pedikűr egy lábápolási eljárás, amely során eltávolítjuk a bőrkeményedéseket, igazítjuk a körmeidet, és ápoljuk a lábadat. Fontos, mert segít megelőzni különböző lábproblémákat és javítja az általános lábkomfortot."
    },
    {
        isActive: true,
        question: "Mi a különbség az alap pedikűr és a speciális pedikűr között?",
        answer: "Az alap pedikűr általános lábápolást tartalmaz, míg a speciális pedikűr extra kezeléseket nyújt."
    },
    {
        isActive: true,
        question: "Hogyan zajlik a mini pedikűr?",
        answer: "A mini pedikűr során áztatás és körömformázás történik. Választhatod a hagyományos vagy orosz gépi pedikűrt is."
    },
    {
        isActive: true,
        question: "Mennyibe kerül a gyerekeknek szóló köröm igazítás?",
        answer: "Gyerekeknek 0-12 éves korig 2 000 Ft-ért igazítjuk a körmeiket."
    },
    {
        isActive: true,
        question: "Milyen típusú lakkozásokat kínáltok?",
        answer: "Kínálunk saját lakkal való lakkozást, gél lakkozást és díszítést is."
    },
    {
        isActive: true,
        question: "Mi a japán körömápolás?",
        answer: "A japán körömápolás egy speciális technika, amely során a köröm állapotát javítjuk és ápoljuk."
    },
    {
        isActive: true,
        question: "Hogyan működik a talp diagnosztika?",
        answer: "A talp diagnosztika segít az egészségi problémák azonosításában a láb reflexzónáin keresztül, amelyek összefüggnek a test más részeivel."
    },
    {
        isActive: true,
        question: "Miért jó a reflexológiai talpmasszázs?",
        answer: "A reflexológiai talpmasszázs stressz csökkentő és relaxáló hatással bír, és segít az energiaáramlás helyreállításában a testben."
    },
    {
        isActive: true,
        question: "Mire szolgál a Kinesio Tape?",
        answer: "A Kinesio Tape terápia segít csökkenteni a fájdalmat és támogatja a test helyes működését, különösen sportolók esetében."
    },
    {
        isActive: true,
        question: "Mik az előnyei a masszázs bérleteknek?",
        answer: "A masszázs bérletek segítenek időt és pénzt spórolni, mivel 4-et fizet 5 alkalommal kap, és lehetőséget nyújtanak rendszeres testápolásra."
    }
];

