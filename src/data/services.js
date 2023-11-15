import massageIco from '../img/ico-massage.png'
import footIco from '../img/ico-pedicure.png'
import spaIco from '../img/ico-spa.png'
import kinesioIco from '../img/ico-kinesio.png'

import massage from '../img/szolg_massage3.png'
import pedicure from '../img/szolg_lab3.png'
import spa from '../img/szolg_spa.jpg'
import kinesio from '../img/szolg_kinesio.png'

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
            snippet: "A masszázs számos előnnyel jár a test és az elme számára. Segíti a stressz csökkentését, javítja a vérkeringést, lazítja az izmokat, és növeli a relaxációt. Emellett segít a fájdalomcsillapításban és a test teljesítőképességének javításában. A masszázs egy hatékony módja a test és az elme harmóniájának megteremtésének.",
            main: [
                {
                    name: 'Talp és arc diagnosztika',
                    description: [
                        <>
                            <h3>Talp:</h3>
                            <p>
                                A talp egy nagy nyitott könyv. A talp olvasója számára megmutatod az életed. A talp feltérképezés szemmel, tapintással, masszázzsal egybe kötve történik. A talp diagnosztikán elmondom, milyen betegségeket, lelki eredetű tüneteket tapasztalok. Diagnosztika után érdemes a legmegfelelőbb talp masszázst kiválasztani.
                            </p>
                        </>,
                        <>
                            <h3>Arc:</h3>
                            <p>
                                Ahogy a szem a lélek tükre, úgy arcunk is magában hordozza a múltunkat, érzelmeinket azt, hogy milyen stressz ért minket az idők folyamán, de azt is milyen az élet vitelünk, mennyire táplálkozunk helyesen. Az arc feltérképezés szemmel, tapintással, masszázzsal egybe kötve történik. Az arc diagnosztikán elmondom, milyen betegségeket, lelki eredetű tüneteket tapasztalok.
                            </p>
                        </>
                    ],
                },
                {
                    name: 'Frissítő / Svéd masszázs',
                    description: [
                        <>
                            <h3>Az izomstimuláló masszázs:</h3>
                            <p>
                                Egészségmegőrzés, frissítés, közérzetjavítás céljából egészséges, de keveset mozgó emberek számára ajánlott.
                                Ez a masszázs olyan hatást képes kiváltani az izomzatban, mint egy sporttevékenység.
                                Fokozódik a vérkeringés, javul az izmok tónusa.
                            </p>
                        </>,
                        <>
                            <h3>A kezelés célja:</h3>
                            <p>
                                A kezelés célja az általános frissítés, vagyis, hogy javuljon az izmokban a keringés és ezáltal jobb legyen az izmok terhelhetősége.
                                Segíti az izmokban lévő salakanyagok kiürítését.
                                Fokozódik a keringés.
                                Élénkül az izomanyagcsere.
                                Meggyorsul a salakanyagok kiürülése.
                                Az izomzat teljesítő képessége nő.
                                Az izmokban létrejött fáradság, feszültség, fokozott tónus is megszűnik.
                                A frissítő masszázs technika hozzájárul a mozgásszervrendszer épségének megőrzéséhez.
                                Heti 1-2 kezelés javasolt.
                            </p>
                        </>,
                        <>
                            <h3>Ellenjavallatok:</h3>
                            <ul>
                                <li>Kezeletlen magas vérnyomás (ha kezelt lehet)</li>
                                <li>Nem kezelt szív és keringési problémák (ha kezelt akkor lehet)</li>
                                <li>Be nem állított vérnyomás (ha gyógyszert szed lehet)</li>
                                <li>Magas láz esetén</li>
                                <li>Fertőző betegségeknél</li>
                                <li>Akut gyulladás</li>
                                <li>Daganatos betegség (csak orvosi engedéllyel)</li>
                                <li>Friss trauma, műtét utáni állapot (4 - 6 - 8 hét műtéttől függően)</li>
                                <li>Foghúzás után (2 hét után csak)</li>
                                <li>Rheumatoid arthritis aktív fázisa, amikor a gyulladás tünetei fennállnak, akkor tilos a masszázs</li>
                                <li>Előrehaladott csontritkulás</li>
                                <li>Visszeresség, az érintett végtagon nem, de máshol lehet</li>
                                <li>Alkoholos állapotban tilos</li>
                                <li>Trombózis</li>
                                <li>Terhesség első és harmadik trimeszterében csak orvosi engedéllyel lehet</li>
                                <li>Menstruáció, a masszázs keringés fokozó hatása erősíti a vérzést, a görcsoldó fájdalomcsillapító hatása pedig megkönnyíti a menstruáció elviselését, ezért a masszázs egyéni mérlegelést és döntést igényel</li>
                            </ul>
                        </>
                    ],
                },
                {
                    name: 'Reflexológiai talp masszázs',
                    description: [
                        <>
                            <h3>Érintett területek:</h3>
                            <p>
                                Vizelet kiválasztórendszer, emésztésirendszer, légzőrendszer, nyirokrendszer, keringés szervrendszere,
                                agy, idegrendszer, hormonrendszer, érzékszervek, mozgásszervek, nemiszervek.
                                97 reflexzónás pontot érint.
                            </p>
                        </>,
                        <>
                            <h3>Reflexzónás masszázs:</h3>
                            <p>
                                A masszázs segíti beindítani az öngyógyítási folyamatokat.
                                A masszázst célszerű több alkalommal igénybe venni az elején, hogy az öngyógyítási folyamatok elkezdődjenek.
                                Ha teheted, heti 2x vagy 3x, ahogy az időd engedi és utána havi 1x legalább érdemes megismételni.
                                Sok betegség megelőzésére, illetve meglévő betegség javulására, szinten tartására alkalmazhatóak.
                                Az egész testre jótékony hatással van.
                            </p>
                        </>,
                        <>
                            <h3>Alkalmazását tekintve:</h3>
                            <p>
                                1, 5 - 2 éves kortól az egészen idős emberekig, figyelembe véve a tiltó körülményeket.
                            </p>
                        </>,
                        <>
                            <h3>Tilos a talpreflexológia az alábbi esetekben:</h3>
                            <ul>
                                <li>várandóság időszakában (kivéve néhány zónában)</li>
                                <li>veszélyeztetett terhesség esetén tilos</li>
                                <li>nagyfokú érelmeszesedés, trombózis esetén</li>
                                <li>kezeletlen magas vérnyomás (ha kezelt lehet)</li>
                                <li>súlyos szív és keringési problémával küzdő, pacemakert használóknak</li>
                                <li>súlyos cukorbetegség fennállásakor</li>
                                <li>erősen visszeres, gyulladt, ödémás láb esetén</li>
                                <li>magas láz esetén</li>
                                <li>fertőző betegségeknél</li>
                                <li>nyílt seb, gombásodás a lábon</li>
                                <li>sérülések, törés, ficam, üszkösödés a lábon</li>
                                <li>vérzéses betegségek, beleértve a menstruációt is (tekintettel a masszázs keringést fokozó voltára előidézhet egy erős menzeszt, mely kapcsán a kezelt személy sok vért veszíthet)</li>
                                <li>nem javaslom epe, illetve vesekövesség esetén sem, mivel a távolhatás kapcsán a mozgások fokozódnak, a kő elmozdulhat a helyéről, majd szűkebb szakaszba kerülve beékelődhet, és erős görcsöket okozhat.</li>
                                <li>erős idegkimerültség esetén</li>
                            </ul>
                        </>
                    ],
                },
                {
                    name: 'Méregtelenítő talp masszázs',
                    description: [
                        <>
                            <h3>Méregtelenítő masszázs</h3>
                            <p>
                                A vizelet és emésztésirendszerre épül.
                                A belső szervek méregtelenítését segíti elő.
                                A lerakódott salakanyagokat segít kiüríteni.
                                A masszázs segíti beindítani az öngyógyítási folyamatokat.
                                A masszázst célszerű több alkalommal igénybe venni az elején, hogy az öngyógyítási folyamatok elkezdődjenek.
                                Ha teheted, heti 2x vagy 3x, ahogy az időd engedi és utána havi 1x legalább érdemes megismételni.
                                Sok betegség megelőzésére, illetve meglévő betegség javulására, szinten tartására, alkalmazhatóak.
                                Az egész testre jótékony hatással van.
                            </p>
                        </>,
                        <>
                            <h3>A masszázs célja:</h3>
                            <ul>
                                <li>frissítés céllal</li>
                                <li>megelőzésképpen</li>
                                <li>állapot felmérés céljából</li>
                                <li>méregtelenítésre, salaktalanításra</li>
                                <li>hatásmechanizmusát tekintve számos betegség esetén terápiás eljárásként</li>
                                <li>feszültségoldó hatású, depresszió esetén is jól alkalmazható a szorongás és félelem oldására</li>
                                <li>fájdalom csillapító</li>
                            </ul>

                        </>,
                    ],
                },
                {
                    name: 'Bathi Thai olajos talp masszázs',
                    description: [
                        <>
                            <p>
                                A thai masszázs egy speciális masszázs fajta, amely a relaxáció és helyreállító kezeléseket ötvözi. A módszer a test speciális pontjainak aktiválásán alapul, amely a belső energiákért felelős. Helyre állítja az ember fizikai erejét, nem feledkezve meg a spiritualitásról.
                            </p>
                        </>,
                        <>
                            <h3>Talpmasszázs általános tudnivalók:</h3>
                            <ul>
                                <li>lazító</li>
                                <li>feszültségoldó</li>
                                <li>fájdalomcsillapító hatású</li>
                                <li>testileg és lelkileg frissebbé, aktívabbá, kiegyensúlyozottabbá tesz</li>
                                <li>az energia vonalak, meridiánok kezelésének hatására javul a vérkeringés, és a nyirokkeringés, ezáltal erősíti a szervezet méregtelenítését, a salakanyagok eltávolítását</li>
                                <li>stimulálja a vegetatív idegrendszert, a belső szerveket, serkenti azok működését, egyensúlyba hozza a test energiarendszerét</li>
                                <li>a nyújtások, „kihúzások” mobilizációk oldják az izmok és az ízületek merevségét, feszültségét, növelik a test rugalmasságát</li>
                                <li>masszázs után frissnek, rugalmasnak érzi magát a vendég, könnyebben mozog, megszűnik izmainak merevsége</li>
                                <li>depresszió, szorongás oldására, pánikbetegségekre, lelki betegségek oldására</li>
                            </ul>
                        </>,
                        <>
                            <h3>Tilos alkalmazni a következő esetekben:</h3>
                            <ul>
                                <li>lázas állapot esetén</li>
                                <li>ha a vendég betegnek, gyengének érzi magát, akkor is, ha nincsenek egyértelmű tünetek</li>
                                <li>nyirokrendszer betegségeiben, ödémás láb esetén, súlyos visszértágulatnál</li>
                                <li>sebek, fekély esetén</li>
                                <li>bőrbetegségek a lábon</li>
                                <li>alsó végtagokat érintő rándulás, ficam, csonttörés esetében a gyógyulásig</li>
                                <li>daganatos betegség esetén - csak orvosi javaslatra</li>
                            </ul>
                        </>,
                        <>
                            <h3>Egyedi elbírálást igényelnek:</h3>
                            <ul>
                                <li>magas vérnyomás, szívbetegség esetén - ha a vendég orvosi kezelés alatt áll, és a kezelés eredményeként jól érzi magát, kaphat talpmasszázst</li>
                                <li>protézist viselőknek pl.: térd-, vagy csípőprotézis</li>
                                <li>epilepsziás betegeknek – ha a vendég orvosi kezelés alatt áll, és a kezelés eredményeként jól érzi magát, kaphat talpmasszázst</li>
                                <li>terhesség idején – ha a kismama terhessége zavartalan, frissítő, relaxáló célzattal - néhány fogás kihagyásával – kaphat talpmasszázst</li>
                            </ul>
                        </>,
                    ],
                },
                {
                    name: 'Talpcsakra masszázs',
                    description: [
                        <>
                            <h3>Mire jó:</h3>
                            <p>
                                A talpcsakra masszázs kezelési módszer képes a csakraenergiákat befolyásolni, ezáltal harmóniát teremteni.
                            </p>
                            <p>
                                A csakra energia területek harmónizálása által pozitív tudatállapot-változás áll be. Az új és harmonikus rezgésterület nyomán mentesülünk a betegségektől, lelki összhangra teszünk szert.
                            </p>
                        </>,
                        <>
                            <h3>Talpmasszázs általános tudnivalók:</h3>
                            <ul>
                                <li>frissítés céllal</li>
                                <li>megelőzésképpen</li>
                                <li>állapot felmérés céljából</li>
                                <li>méregtelenítésre, salaktalanításra</li>
                                <li>hatásmechanizmusát tekintve számos betegség esetén terápiás eljárásként</li>
                                <li>feszültségoldó hatású, depresszió esetén is jól alkalmazható a szorongás és félelem oldására</li>
                                <li>fájdalom csillapító</li>
                            </ul>
                        </>,
                        <>
                            <h3>Alkalmazható:</h3>
                            <p>
                                1,5 - 2 éves kortól az egészen idős emberekig, figyelembe véve a tiltó körülményeket.
                            </p>
                        </>,
                        <>
                            <h3>Ellenjavallatok - tilos az alábbi esetekben:</h3>
                            <ul>
                                <li>várandóság időszakában (kivéve néhány zónában)</li>
                                <li>veszélyeztetett terhesség esetén tilos</li>
                                <li>nagyfokú érelmeszesedés, trombózis esetén</li>
                                <li>kezeletlen magas vérnyomás (ha kezelt lehet)</li>
                                <li>súlyos szív és keringési problémával küzdő, pacemakert használóknak</li>
                                <li>súlyos cukorbetegség fennállásakor</li>
                                <li>erősen visszeres, gyulladt, ödémás láb esetén</li>
                                <li>magas láz esetén</li>
                                <li>fertőző betegségeknél</li>
                                <li>nyílt seb, gombásodás a lábon</li>
                                <li>sérülések, törés, ficam, üszkösödés a lábon</li>
                                <li>vérzéses betegségek, beleértve a menstruációt is. (tekintettel a masszázs keringést fokozó voltára előidézhet egy erős menzeszt, mely kapcsán a kezelt személy sok vért veszíthet)</li>
                                <li>nem javaslom epe -, illetve vesekövesség esetén sem - mivel a távolhatás kapcsán a mozgások fokozódnak – a kő elmozdulhat a helyéről, majd szűkebb szakaszba kerülve beékelődhet, és erős görcsöket okozhat.</li>
                                <li>erős idegkimerültség esetén</li>
                            </ul>
                        </>,
                        <>
                            <h3>1. Alap csakra (gyökér csakra): energia</h3>
                            <ul>
                                <li>A hátgerinc alsó végénél helyezkedik el.</li>
                                <li>Felelős a fizikai erőlétért és vitalitásunkért.</li>
                                <li>A munka, a hivatás, az energia, az aktivitás elsődleges mozgató rugója.</li>
                                <li>Szervei: mellékvese, vesék, és a hátgerinc.</li>
                                <li>Színe: vörös.</li>
                                <li>Eleme: föld.</li>
                                <li>Betegségek: Aranyér, bélgyulladás, fogínygyulladás, gerincpanaszok, hasmenés, székrekedés, hideg végtagok.</li>
                                <li>Gyógyító színe: vörös.</li>
                            </ul>
                        </>,
                        <>
                            <h3>2. Szakrális, vagy szex csakra: hit</h3>
                            <ul>
                                <li>Nemi szervek magasságában helyezkedik el, a kreativitás csakrája. Irányítja viselkedésünket kapcsolatainkban, a nemi életben, és ez által a szaporodásban. A gyökér csakrával együtt felelős az emberi szexualitás örömeiért és problémáiért.</li>
                                <li>Színe: narancssárga</li>
                                <li>Eleme: víz</li>
                                <li>Betegségek: Bélgörcs, felfúvódás, gombás fertőzés, hajhullás, hereproblémák, méhproblémák, petefészek - ciszta, impotencia, a prosztata megbetegedései, mellbetegségek, étkezési zavarok, kóros elhízás, orgazmusproblémák.</li>
                                <li>Gyógyító színe: narancssárga</li>
                                <li>Gyógyító köve: a karneol</li>
                                <li>Gyógyító hangja: a naphang</li>
                                <li>Gyógyító olaja: a narancsvirágolaj</li>
                            </ul>
                        </>,
                        <>
                            <h3>3. Köldök csakra vagy Napfonat (plexus Solaris): tudás</h3>
                            <ul>
                                <li>A gyomorszáj alatt helyezkedik el.</li>
                                <li>Szervei: hasnyálmirigy, epehólyag, távolról szabályozza az idegrendszert is, hozzá tartozik még a szem, vagyis a látás és a gyomor, máj is.</li>
                                <li>Felelős: Az érzelmi érzékenység és személyes erő központja. A köldök csakra szenvedélyeink és saját énünk irányítója.</li>
                                <li>Színe: sárga</li>
                                <li>Eleme: tűz</li>
                                <li>Betegségek: Cukorbetegség, epepanaszok, emésztési problémák, gyomorfekély, epe és májbetegség.</li>
                                <li>Gyógyító színe: a sárga</li>
                                <li>Gyógyító köve: a citrin</li>
                                <li>Gyógyító hangja: a naphang</li>
                                <li>Gyógyító olaja: a citromolaj</li>
                            </ul>
                        </>,
                        <>
                            <h3>4. Szív csakra: szeretet</h3>
                            <ul>
                                <li>A szív magasságában található.</li>
                                <li>Szervei: szív, csecsemőmirigy</li>
                                <li>Felelős: A szívet, a vér minőségét, és a vérkeringést irányítja, valamit az immunrendszert szabályozza. A szeretet központja.</li>
                                <li>Színe: zöld</li>
                                <li>Eleme: levegő</li>
                                <li>Betegségek: az immunrendszerrel és a vérkeringéssel kapcsolatos betegségek, az antitestképzés, a fehérvérsejtek képzése, és végül a szív, mint szerv.</li>
                                <li>Gyógyító színe: a rózsaszín</li>
                                <li>Gyógyító köve: a rózsakvarc</li>
                                <li>Gyógyító hangja: a föld hanga</li>
                                <li>Gyógyító olaja: a rózsaolaj</li>
                            </ul>
                        </>,
                        <>
                            <h3>5. Torok csakra: felvevő állomás</h3>
                            <ul>
                                <li>A toroknál található.</li>
                                <li>Szervei: pajzsmirigy, nyak és száj irányítja: a tüdőt, a hangszállakat, a hörgőket és az anyagcserét. Elsősorban a légzéssel, a beszéddel és az önkifejezéssel kapcsolatos.</li>
                                <li>Színe: kék</li>
                                <li>Eleme: éter</li>
                                <li>Betegségek: beszédproblémák, köhögés, torokfájdalom, rekedtség. Az elnyomott érzelmek elzárhatják a torok csakra energiáját.</li>
                                <li>Gyógyító színe: kék</li>
                                <li>Gyógyító köve: a kék türkiz</li>
                                <li>Gyógyító hangja: a holdhang</li>
                                <li>Gyógyító olaja: a levendulaolaj</li>
                            </ul>
                        </>,
                        <>
                            <h3>6. Homlok csakra (harmadik szem): leadó állomás</h3>
                            <ul>
                                <li>A homlok közepén, a két szemöldök között található.</li>
                                <li>Szervei: agyalapi mirigy, agy alsó része, idegrendszer, a fül, az orr, és a bal szem irányítását végzi.</li>
                                <li>Felelős: A lélek színhelye. Ez vezérli a meditációt, az elmélkedés irányát, az intuíciót.</li>
                                <li>Színe: indigókék (alkalmanként vörös és kék kominációjaként is megjelenik)</li>
                                <li>Eleme: nem tartozik hozzá elem</li>
                                <li>Betegségek: folyamatosan visszaköszönő fejfájás, látászavarok (rövid és távollátás, kancsalság, kötőhártya gyulladás)</li>
                                <li>Gyógyító színe: ibolyalila - ibolyakék</li>
                                <li>Gyógyító köve: a hegyi kristály</li>
                                <li>Gyógyító hangja: a Jupiter hang</li>
                                <li>Gyógyító olaj: a levendula</li>
                            </ul>
                        </>,
                        <>
                            <h3>7. Korona csakra: bölcsesség</h3>
                            <ul>
                                <li>A fejtetőn a kutacsnál található.</li>
                                <li>Felelős: A korona csakra a legmagasabb tudati szintet szimbolizálja. E csakrán keresztül lehet felvenni Teremtőkkel a kapcsolatot.</li>
                                <li>Színe: ibolyaszín, fehér fény</li>
                                <li>Eleme: nincs</li>
                                <li>Betegségek: Általában lelki, pszichés eredetű betegségek, esetleg személyiségváltozások (Parkinson - kór, Alzheimer - kór, depresszió, epilepszia) fordulhatnak elő.</li>
                                <li>Gyógyító színe: az arany</li>
                                <li>Gyógyító köve: az ametiszt</li>
                                <li>Gyógyító hangja: a Karuna - hang</li>
                                <li>Gyógyító olaja: illatkeverék</li>
                            </ul>
                        </>,
                        <>
                            <p>
                                Az egész test gyógyító szín: zöld.
                            </p>
                        </>
                    ],
                },
                {
                    name: 'Trigger pont masszázs',
                    description: [
                        <>
                            <h3>Hamarosan...</h3>
                            <p>
                                Az oldal feltöltés alatt áll, kérlek látogass vissza kicsit később.
                            </p>
                        </>
                    ],
                },
                {
                    name: 'Reflexzónás arcmasszázs',
                    description: [
                        <>
                            <h3>Az alábbi szervrendszereket érinti:</h3>
                            <p>
                                Vizelet kiválasztórendszer, emésztésirendszer, légzőrendszer, nyirokrendszer; keringés szervrendszere, agy,- idegrendszer, hormonrendszer, mozgásszervek, nemiszervek. (24 reflexzónás pontot érint)
                            </p>
                        </>,
                        <>
                            <h3>Reflexzónás arcmasszázs:</h3>
                            <p>
                                A masszázs segíti beindítani az öngyógyítási folyamatokat.
                                A masszázst célszerű több alkalommal igénybe venni az elején, hogy az öngyógyítási folyamatok elkezdődjenek.
                                Ha teheted, heti 2x vagy 3x, ahogy az időd engedi és utána havi 1x legalább érdemes megismételni.
                                Sok betegség megelőzésére, illetve meglévő betegség javulására, – szinten tartására, alkalmazhatóak.
                                Az egész testre jótékony hatással van.
                            </p>
                            <p>
                                Az arcmasszázs, természetes fájdalomcsillapító, gyógyító, frissítő eljárás.
                                Műtéti beavatkozás után a felépülési idő megrövidül, mert felgyorsulnak a természetes gyógyulási folyamatokat.
                                Kevés az ellenjavallata, nincsenek mellékhatásai.
                            </p>
                        </>,
                        <>
                            <h3>Általános tudnivalók:</h3>
                            <ul>
                                <li>frissítés céllal</li>
                                <li>megelőzésképpen</li>
                                <li>állapot felmérés céljából</li>
                                <li>méregtelenítésre, salaktalanításra</li>
                                <li>hatásmechanizmusát tekintve számos betegség esetén terápiás eljárásként</li>
                                <li>feszültségoldó hatású, depresszió esetén is jól alkalmazható a szorongás és félelem oldására</li>
                                <li>fájdalomcsillapító</li>
                            </ul>
                        </>,
                        <>
                            <h3>Alkalmazható:</h3>
                            <p>
                                1,5 - 2 éves kortól az egészen idős emberekig, figyelembe véve a tiltó körülményeket.
                            </p>
                        </>,
                        <>
                            <h3>Ellenjavallatok:</h3>
                            <ul>
                                <li>lázas állapot</li>
                                <li>heveny fertőző betegségeknél, pl.: felső léguti fertőzés, nátha…stb.</li>
                                <li>súlyos szívbetegség, ingadozó magas vérnyomás</li>
                                <li>akut gyulladás az arc, nyak, dekoltázs területén</li>
                                <li>daganatos beteg(csak orvosi engedéllyel)</li>
                                <li>friss trauma, műtét utáni állapot(4 - 6 - 8 hét műtéttől függően) pl: foghúzás után 2 hétig nem lehet masszírozni.</li>
                                <li>hámhiány</li>
                                <li>Rheumatoid arthritis aktív fázisában – amikor a gyulladás tünetei fennállnak</li>
                                <li>előrehaladott csontritkulás</li>
                                <li>be nem állított magas vérnyomás</li>
                                <li>nem kezelt szív és keringési problémák</li>
                                <li>visszeresség</li>
                                <li>alkoholos állapot</li>
                                <li>trombózis</li>
                            </ul>
                        </>,
                        <>
                            <h3>Arc masszázs esetén nem kizáró ok:</h3>
                            <ul>
                                <li>terhesség</li>
                                <li>menstruáció</li>
                            </ul>
                        </>
                    ],
                },
                {
                    name: 'Kismama, baba és gyerekmasszázs',
                    description: [
                        <>
                            <h3>Baba, 0...3 éves korig:</h3>
                            <p>
                                Ha a gyermekének valamilyen egészségügyi problémája van, akkor először beszéljen orvosával, vagy védőnőjével, hogy eldöntse, fogja -e masszírozni.
                            </p>
                            <p>
                                A baba masszázs számtalan előnnyel jár.
                                Minden gyengéd érintéssel a csecsemő szeretve fogja érzi magát, megerősítve az anya és a gyermek között fennálló köteléket.
                                Lehetővé teszik a baba számára, hogy nyugodtabbá váljon, ami javítja az alvásukat, étvágyukat, immunrendszerüket, gyorsabban épülnek fel a betegségekből.
                            </p>
                        </>,
                        <>
                            <h3>Alkalmazását tekintve:</h3>
                            <p>
                                Ha a baba még nem született meg, érdemes előtte elsajátítani a masszázst, hogy mire a kicsi megérkezik, magabiztosan tudjuk masszírozni.
                                Ha a szülő jártas a babamasszázs technika alkalmazásában, akkor már 2 hetes kortól megkezdheti az alkalmazást.
                                Csoportos vagy egyéni foglalkozásra, a babát 6 hetes kortól lehet vinni, ha a baba egészséges.
                            </p>
                        </>,
                        <>
                            <h3>Fontos tudni:</h3>
                            <p>
                                0...3 éves korig a szülő masszírozza a gyermekét.
                                Kivéve, ha valami speciális helyzet áll elő.
                                A masszázson egy babán van bemutatva a fogások, amiket a szülők sajátítanak el az órákon.
                            </p>
                        </>,
                        <>
                            <h3>Általános tudnivalók:</h3>
                            <ul>
                                <li>nyugtat</li>
                                <li>elősegíti az alvást</li>
                                <li>a rendszeres azonos időben végzett masszázs, segíti a tájékozódást a napon belül a gyermek számára</li>
                                <li>jó hatással van a keringésre, légzőszervrendszerre, emésztésre, mozgás és kiválasztó szervrendszerre is</li>
                                <li>a rendszeres masszázsban részesülő gyermekek jobban kötődnek a szülőkhöz, testvérekhez, családtagokhoz, nyitottabbak</li>
                                <li>sírás, ijedség után sokkal könnyebb őket megnyugtatni</li>
                                <li>segíti a napi testtömeg - növekedést</li>
                                <li>javítja a baba alkalmazkodását az éjszakai alváshoz, és segíti mélyebben aludni</li>
                                <li>enyhíti az orrdugulást és a fogakkal járó kellemetlenséget</li>
                                <li>elősegíti a jó izomtónus, koordináció és a rugalmasság kialakulását</li>
                                <li>javítják a test tudatosságát</li>
                                <li>erősíti az immunrendszert</li>
                                <li>javítja a bőr textúráját</li>
                            </ul>
                        </>,
                        <>
                            <h3>Mire kell odafigyelni:</h3>
                            <ul>
                                <li>Oda kell figyelni a baba hangulatára.</li>
                                <li>A babának nyugodtnak, ébernek és elégedettnek kell lennie, ha készen áll a masszázsra.</li>
                                <li>Soha ne végezzünk olyan masszázst, ami kényelmetlen a babának, nem esik jól neki.</li>
                                <li>Vannak gyerekek, akiknél több idő kell megszokni a masszázst, nem szabad rájuk erőltetni.</li>
                                <li>Ha a gyermek megunja a foglalkozást, éhes lesz, pelust kell cserélni, akkor tegye azt a szülő, ami a babának kényelmét szolgálja.</li>
                            </ul>
                        </>,
                        <>
                            <h3>Gyerek, 3...12 éves korig:</h3>
                            <p>
                                A gyerekek ebben a korban gyorsan fejlődnek.
                                A növés folyamatában minden gyermek másképpen reagál.
                                Ezért ajánlatos lehet számukra egy talp masszázs, vagy egy hát masszázs.
                            </p>
                        </>
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
            snippet: "A lábápolás és pedikűr fontosak a lábak egészségének és szépségének fenntartásához. A gondoskodó pedikűr segít megszabadulni az elhalt bőrrétegektől, körömcsontról és körömápolásról gondoskodik. Emellett a lábmasszázs felfrissíti a fáradt lábakat, növeli a vérkeringést, és csökkenti a stresszt. Az egészséges és ápolt lábak nemcsak jól néznek ki, hanem növelik a komfortérzetet is.",
            main: [
                {
                    name: 'Körömápolás',
                    description: [
                        <>
                            <h3>Szolgáltatások:</h3>
                            <ul>
                                <li>alap, -speciális, illetve - mini pedikűr</li>
                                <li>japán körömápolás</li>
                                <li>lakkozás</li>
                            </ul>
                        </>,
                        <>
                            <h3>Lábápolást kizáró körülmények:</h3>
                            <ul>
                                <li>nyílt seb</li>
                                <li>vírusos vagy baktérium okozta fertőzések (szemölcs)</li>
                                <li>anyajegyek, ha a kezelendő felületre esik</li>
                                <li>lázas állapot</li>
                                <li>ittas állapot</li>
                                <li>olyan általános betegség, ami immunrendszer gyengeséggel jár (callux)</li>
                                <li>rosszindulatú daganat vérképző rendszeri betegségek leukémia, vérszegénység (callux)</li>
                                <li>specifikus fertőző betegség TBC, ADIS</li>
                                <li>ha a végtagon vagy a lábon orbánc, ekcéma, allergiás bőrreakció van</li>
                            </ul>
                        </>,
                        <>
                            <h3>Lábápolást befolyásoló tényezők:</h3>
                            <ul>
                                <li>cukorbetegség</li>
                                <li>perifériás érbetegség</li>
                                <li>vérhígító</li>
                                <li>magas vérnyomás</li>
                                <li>ízületi deformitások</li>
                            </ul>
                        </>,
                        <>
                            <h3>Körmök:</h3>
                            <p>
                                Sokan nem mertek eljönni pedikűrre, pedig tudjátok, hogy probléma van a körmötökkel.
                                Szeretnék egy kis segítséget nyújtani, hogy bátran, minden félelem nélkül el merjetek jönni, és megmutassátok mi is a gond valójában.
                                Kezdjük a köröm deformitásokkal.
                                Köröm deformitásnak nevezzük az átlagtól eltérő növekedésű körmöket.
                                Ezeknek az okai lehetnek veleszületett és szerzett.
                            </p>
                            <h3>A szerzett oka lehet:</h3>
                            <ul>
                                <li>belső probléma, pl.: belgyógyászati</li>
                                <li>külső probléma, mechanikai pl.: cipő</li>
                            </ul>
                            <h3>Felsorolok néhány példát nektek:</h3>
                            <ul>
                                <li>Erősen barázdált köröm</li>
                                <li>Lapos körmök</li>
                                <li>Sas köröm (karvaly)</li>
                                <li>Kanál alakú köröm</li>
                                <li>Óraüvegköröm</li>
                                <li>Karom köröm</li>
                                <li>Harapófog köröm</li>
                                <li>Körömlemez elválása</li>
                                <li>Körömlemez vastagodás</li>
                                <li>Körömlemez kettéválás</li>
                                <li>Benőtt köröm</li>
                                <li>Szálkavérzés</li>
                                <li>Zöldes színűvé válhat a köröm</li>
                                <li>Kékes elszíneződés</li>
                                <li>A körmön fehér foltok</li>
                                <li>Tejüveg köröm</li>
                                <li>A körmökön apró pöttyök</li>
                                <li>Olajfolt, olajcsepp</li>
                                <li>Gombás fertőzések</li>
                                <li>Sárga köröm</li>
                                <li>Barna köröm</li>
                                <li>Körömrágás</li>
                            </ul>
                            <p>
                                Most, hogy megismerkedtél milyen sokféle köröm probléma, elváltozás is lehet, láthatod, hogy nem vagy egyedül a problémáddal.
                                A lényeg, ha bármi változást tapasztalsz, most már tudod, hogy segítségre lehet szükséged.
                                Amiben én tudok segíteni neked, ha látom a körmödet tudom merre menj tovább, vagy maradj nálam pl.: körömgomba kezelésen.
                                Amit tudnod kell körömgomba kezelés elkezdése előtt: A körömgomba nem múlik el az egyik percről a másikra.
                                A terjedelemtől, a gomba típusától, súlyosságától függően a kezelések akár több hónapig is eltarthatnak.
                                Vannak esetek amikor gyógyszer szedése is javasolt, ezt a bőrgyógyász írja fel neked.
                            </p>
                        </>,
                        <>
                            <h3>Fontos tudnod, hogy:</h3>
                            <p>
                                A lábon a köröm kb 240 ... 260 nap, vagyis 8 ... 10 hónap mire teljesen kicserélődik, míg a kézen ez kb 100 ... 120 nap, vagyis 3 ... 6 hónap csupán.
                                Tehát, légy türelmes.
                                Ha bármilyen kérdésed, problémád van jelentkezz be hozzám, és ha pedikűri munkámon felül problémát észlelek, abban az esetben, a megfelelő szakorvoshoz foglak irányítani.
                            </p>
                        </>,
                        <>
                            <h3>Ha többet szeretnél tudni a felsorolt köröm tünetekről:</h3>
                            <ul>
                                <li>
                                    <strong>Erősen barázdált köröm:</strong> Amikor a körömlemezben hosszanti vagy keresztirányú bordák találhatók. Oka lehet belgyógyászati vagy mechanikai sérülés.
                                </li>
                                <li>
                                    <strong>Lapos köröm:</strong> Amikor a körömlemez oldalnézetből lapos, illetve felfelé ívelt.
                                </li>
                                <li>
                                    <strong>Sas köröm (karvaly):</strong> Amikor a szabad szél résznél lefelé nő. Például a kalapácsujjú embereknél.
                                </li>
                                <li>
                                    <strong>Kanál alakú köröm:</strong> Mélyedés van a körömben, vagyis a körömágy közepén van egy gödör. Gyakran társul vashiányhoz, vérszegénységhez.
                                </li>
                                <li>
                                    <strong>Óraüvegköröm:</strong> A körmök felszíne domborúvá válik, az utolsó ujjpercek pedig szélesebbek lesznek, megvastagodnak. A háttérben a szív és a tüdő súlyos betegségei, keringési problémák deríthetők ki.
                                </li>
                                <li>
                                    <strong>Karom köröm:</strong> Piszkos barna színűvé válik. Szűk cipő viselése, ismétlődő sérülés, érszűkület okozhatja.
                                </li>
                                <li>
                                    <strong>Harapófog köröm:</strong> A körömlemez haránt irányban domborodik. Szűk cipő viselése, körömgomba okozhatja.
                                </li>
                                <li>
                                    <strong>Körömlemez elválása:</strong> Fonalas gomba fertőzés, nem termelődik átmenetileg körömlemez (gyógyszerek, terhesség, sérülés stb.).
                                </li>
                                <li>
                                    <strong>Körömlemez vastagodás:</strong> Gombásodás, pikkelysömör, érszűkület esetén látható leggyakrabban.
                                </li>
                                <li>
                                    <strong>Körömlemez kettéválás:</strong> Leggyakrabban vegyszerek, körömlakkok, lemosók használata, valamint fizikai behatolások váltják ki.
                                </li>
                                <li>
                                    <strong>Benőtt köröm:</strong> Gyakori és nagyon kellemetlen állapot. A körömlemez oldalsó része behatol a körmöt körülvevő szövetbe. Itt gyulladás, fájdalom és úgynevezett sarjszövet képződik.
                                </li>
                                <li>
                                    <strong>Szálkavérzés:</strong> Vörös majd barnás színű csíkok. Sérülés, keringési zavar, pajzsmirigy túltengés esetén alakul ki.
                                </li>
                                <li>
                                    <strong>Zöldes színűvé válhat a köröm,</strong> ha alatta bizonyos pigmenteket termelő baktériumok szaporodnak el.
                                </li>
                                <li>
                                    <strong>Kékes elszíneződés:</strong> Kialakulhat szív- és tüdőbetegségekben a vér alacsonyabb oxigéntelítettségét jelezve, de ezüstöt tartalmazó gyógyszerek is állhatnak a hátterében.
                                </li>
                                <li>
                                    <strong>A körmön fehér foltok:</strong> is megjelenhetnek, ezek hátterében vitaminhiány vagy ásványi anyag hiányt feltételeznek.
                                </li>
                                <li>
                                    <strong>Tejüveg köröm:</strong> A körömház teljes elszíneződése. Oka a körömágy erezetének csökkenése.
                                </li>
                                <li>
                                    <strong>A körmökön apró pöttyök:</strong> figyelhetők meg pikkelysömör esetében.
                                </li>
                                <li>
                                    <strong>Olajfolt, olajcsepp:</strong> A körmön sárgásbarna foltok találhatók. A pikkelysömör jellegzetes bőrtünete.
                                </li>
                                <li>
                                    <strong>Gombás fertőzések:</strong> is elszínezik a köröm állományát.
                                </li>
                                <li>
                                    <strong>Sárga köröm:</strong> Dohányzás vagy súlyos májbetegség.
                                </li>
                                <li>
                                    <strong>Barna:</strong> gyógyszerek vagy rákos betegség is állhat a hátterében.
                                </li>
                                <li>
                                    <strong>Körömrágás:</strong> Rossz szokás, valamilyen szorongás is állhat a hátterében.
                                </li>
                            </ul>
                        </>
                    ],
                },
                {
                    name: 'Bőrápolás',
                    description: [
                        <>
                            <h3>Szolgáltatások:</h3>
                            <ul>
                                <li>tyúkszem eltávolítás</li>
                                <li>körömgomba kezelés</li>
                            </ul>
                        </>,
                        <>
                            <h3>Lábápolást kizáró körülmények:</h3>
                            <ul>
                                <li>nyílt seb</li>
                                <li>vírusos vagy baktérium okozta fertőzések (szemölcs)</li>
                                <li>anyajegyek, ha a kezelendő felületre esik</li>
                                <li>lázas állapot</li>
                                <li>ittas állapot</li>
                                <li>olyan általános betegség, ami immunrendszer gyengeséggel jár (callux)</li>
                                <li>rosszindulatú daganat vérképző rendszeri betegségek (leukémia, vérszegénység, callux)</li>
                                <li>specifikus fertőző betegség (TBC, AIDS)</li>
                                <li>ha a végtagon vagy a lábon orbánc, ekcéma, allergiás bőrreakció van</li>
                            </ul>
                        </>,
                        <>
                            <h3>Lábápolást befolyásoló tényezők:</h3>
                            <ul>
                                <li>cukorbetegség</li>
                                <li>perifériás érbetegség</li>
                                <li>vérhígító</li>
                                <li>magas vérnyomás</li>
                                <li>ízületi deformitások</li>
                            </ul>
                        </>,
                        <>
                            <h3>Bőrkeményedés</h3>
                            <p>
                                A bőrkeményedés kialakulásának a helye, milyensége, mértékletessége egyéntől függő.
                                Kialakulását befolyásolja például a bőr típusa, a láb ortopédiai elváltozása, a rossz cipő viselése.
                                A láb egészségi állapota befolyásolja a járást, teherbírásunkat, fertőzésre való hajlamunkat.
                                Érdemes megelőzni a problémát.
                                Ne várd meg még a bőrkeményedés nagyon megvastagodik, kirepedezik.
                                Ha nem tudod magadnak kellően elvégezni a bőrkeményedés eltávolítását, kérj időpontot.
                                A megfelelő eszközökkel, hatóanyagos áztató sókkal, bőrpuhítókkal, bőrradírokkal, rád szabott krémekkel, kezelve lesz az érintett terület, illetve területek.
                            </p>
                        </>,
                        <>
                            <h3>Keress bátran, mert:</h3>
                            <ul>
                                <li>A bőrtípusnak megfelelő kezelést tudom ajánlani;</li>
                                <li>Ha valamilyen betegségben szenvedsz, tudok segíteni, hogyan tartsd karban otthon a lábad;</li>
                                <li>A bőrtípusodnak megfelelően tudok időpontot meghatározni, hogy mikor is lenne esedékes az újabb pedikűrözés még az erős bőrkeményedés, a kellemetlen érzés, fájdalom kialakulása előtt.</li>
                                <li>Segítek, hogy tudd mire is kell figyelni, például:</li>
                                <ul>
                                    <li>Ha hetente szeded le a bőrkeményedést, azzal csak ártasz saját magadnak.</li>
                                    <li>Sokkal gyorsabban kezd majd kialakulni a bőrkeményedés, de az is lehet, hogy túlságosan elvékonyítod a bőr rétegét, és a járásod fájdalmassá, illetve a talpad sérülékenyebbé is válhat.</li>
                                    <li>Ha nagyon ritkán végzed el, akkor pedig nagyon megvastagodik, és a repedés is mélyebb lesz, ami nem csak vérzéssel, de fájdalommal is járhat, ami szintén befolyásolja a járásod.</li>
                                    <li>A sarok repedés esélyt ad a fertőzések összeszedéséhez, például, ha szokott vérezni elég mély a repedés, és elmész egy uszodába, ahol esetleg valaki gombás vagy szemölcsös lehetett, elég nagy eséllyel haza is viszed.</li>
                                </ul>
                            </ul>
                        </>,
                        <>
                            <h3>Tyúkszem:</h3>
                            <p>
                                A tyúkszem a nem megfelelő súlypont elosztásától, a szűk cipő hordásától alakulhat ki.
                                Van kemény és puha vagyis lágy tyúkszem.
                                A kemény tyúkszem a talpadon található, melyet egy megvastagodott bőrkeményedés fedi.
                                Általában a lábujjak alatti puha párnácskákon és a sarkon találhatóak.
                                A lágy tyúkszem a lábujjak között alakul ki, itt folyamatosan kapja a nedvességet.
                                Ez esetben gyakori a láb gombásodása is.
                            </p>
                            <p>
                                Sokszor hallom, hogy otthon próbáljátok kiszedni, de valamiért vissza nő, továbbra is fáj, esetleg begyullad, és ami még rosszabb, hogy olyan eszközökkel próbálkoztok, amikkel nem is lenne szabad.
                                Találkozok olyan esetekkel is, hogy tyúkszemként lett kezelve, de valójában szemölcs volt.
                                Szóval, ha azt érzékelitek valami van, de nem tudjátok, hogy tyúkszem vagy szemölcs, véletlen se nyúlj hozzá.
                                A szemölcs ugyanis fertőző, így saját magad is tovább fertőződ és még a környezetedben élőket is megfertőzheted.
                            </p>
                            <p>
                                Kérj időpontot és engedd, hogy szakszerűen legyen eltávolítva a tyúkszemed.
                                A tyúkszem szakszerű eltávolításakor a gyökere is kivételre kerül, így ugyan ott már nem nő vissza.
                                A kellemetlen fájdalom, ami eddig a tyúkszemmel járt megszűnik.
                                A járásod újra a régi lesz.
                            </p>
                        </>,
                        <>
                            <h3>Szemölcs:</h3>
                            <p>
                                Jó ha van egy kis ismereted a szemölcsről is.
                                A szemölcsnek több típusa is ismert.
                                Tenyéren, talpon és a nemi szervek körül (HPV fertőzések) illetve kisgyermekeken pl.: uszodaszemölcs igen gyakori.
                                A fertőzést könnyen el lehet kapni, a bőr apró sérülésein keresztül jutnak be a szervezetbe.
                                Megjelenési formájuk, fennállási ideje és kezelési módja nagyon függ a szemölcs típusától, elhelyezkedésétől.
                                Elsősorban a diagnózis megállapításához elengedhetetlen a bőrgyógyász segítsége, ugyanis például a szemölcsként öndiagnosztizált, házilagosan, maró szerekkel ecsetelt anyajegy kezelése végzetes is lehet.
                            </p>
                            <h3>HPV fertőzések:</h3>
                            <ul>
                                <li>közönséges szemölcs</li>
                                <li>talpi szemölcs</li>
                                <li>lapos vagy futó szemölcs</li>
                                <li>hegyes függöly</li>
                            </ul>
                        </>,
                        <>
                            <h3>Uszodaszemölcs:</h3>
                            <p>
                                Kásaszerű massza ürül a gömbölyűkicsi, kemény göbcsékből közepük behúzódott gyerekeknél járványt okoz fiatalokon a borotva okoz fertőzéseket uszodában lehet elkapni nemi úton is átvihető.
                            </p>
                        </>,
                        <>
                            <h3>Bőrgomba:</h3>
                            <p>
                                Sokszor nem is tudjátok, vagy nem veszitek időben észre, hogy a talpatokon vagy a lábujjaitok között megjelent a bőrgomba.
                                Meglepődve néztek rám mikor eljöttök egy alap pedikűrre és jelzem felétek, hogy jobban figyeljetek oda lábatokra.
                                A bőrgomba általában bőrpírral jár, hámlással és viszketéssel jelentkezik.
                                Fehér pikkelyek válhatnak le a bőr felületéről.
                                Megjelenését vitaminhiány, immunitás gyengülése, hosszabb antibiotikum kúra és a meleg, sötét nedves környezet is elősegíti.
                            </p>
                            <h3>A talpatok meghálálja, ha:</h3>
                            <ul>
                                <li>minden fürdés után a lábujjak között is alaposan meg törlitek,</li>
                                <li>pamut zoknit viseltek műszálas helyett,</li>
                                <li>a lábbeliteket időnként fertőtlenítitek,</li>
                            </ul>
                        </>
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
            snippet: "A lábfürdő és kényeztető lábápolás kiváló módja a lábak feltöltésének és ellazításának. A forró víz, masszázs és aromaterápia összjátéka segít enyhíteni a feszültséget, javítja a vérkeringést, és pihentető élményt nyújt. A lábfürdő segít megszüntetni a fáradtságot, hidratálja a bőrt, és frissességet ad a lábaknak. Ez egy kiváló módja annak, hogy kikapcsolódjunk és gondoskodjunk lábaink egészségéről és szépségéről.",
            main: [
                {
                    name: 'Vizes talpmasszázs',
                    description: [
                        <p>
                            A szolgáltatást nem tudod igénybe venni, ha bőr, vagy köröm gombád van.
                            A szolgáltatásba bele tartozik egy általad kiválasztott krém bemasszírozása is.
                        </p>,
                    ],
                },
                {
                    name: 'Parafinn ápolás',
                    description: [
                        <p>
                            A szolgáltatást pedikűr nélkül nem tudod igénybe venni, illetve amennyiben bőr, vagy köröm gombád van.
                            Választhatsz alap, speciális, illetve mini pedikűrt.
                        </p>,
                    ],
                },
            ],
        },
    },
    {
        name: 'Kinesio Tape',
        isActive: true,
        id: 'kinesio',
        img: {
            snippet: {
                src: kinesioIco,
                alt: '',
            },
            main: {
                src: kinesio,
                alt: "Kinesio image",
            },
        },
        description: {
            snippet: "A kinezio tapasz rendkívül hasznos segítség a sérülések és fájdalmak kezelésében. Rugalmas kialakítása lehetővé teszi, hogy könnyen alkalmazható legyen a bőrön anélkül, hogy mozgásunkat korlátozná. A tapasz támogatja az izmokat és szalagokat, javítja a vérkeringést, és enyhíti a fájdalmat. Használata segít az izomfeszültség csökkentésében, sérülések utáni gyorsabb regenerációban, és javítja a sportteljesítményt. A kinezio tapasz egy kiváló eszköz a gyógyuláshoz és a mozgás szabadságának visszaszerzéséhez.",
            main: [
                {
                    name: 'Kinesio Tape',
                    description: [
                        <p>
                            A Kinesio szalag a bőrrel együtt mozogva folyamatos mikro masszázs hatást vált ki a kezelt területen.
                            Segít az ingerek regenerálódásában, a fájdalom érzet jelentős csökkenésében.
                        </p>,
                        <>
                            <h3>A kinezio tape hatásai:</h3>
                            <ul>
                                <li>fájdalom csillapítás (gyógyszerek nélkül) - aktiválja az öngyógyító fájdalomcsillapító rendszert</li>
                                <li>beindul az idegrendszer ingerlése a C rostokon keresztül az agyba futó fájdalmi ingerek gátlása</li>
                                <li>fájdalom csillapító hatása révén nagyobb terhelhetőséget biztosít, a beteg többet és nagyobb mozgásterjedelemben mozog.</li>
                                <li>tartásjavítás</li>
                                <li>ízületi problémák korrekciója – a szalag javítja a mozgástartományt és kiigazítja az instabilitásból eredő egyenletlenségektől megfeszült izmokat.</li>
                                <li>izmok támogatása (pl.: edzés, vagy egyéb fizikai megterhelések után csökkenti az izomlázat, görcsöket.)</li>
                                <li>izomtónus normalizálása (hipertónus lazítja – túl feszes ill. hipotónusos – túl laza izomzat)</li>
                                <li>torzult, részlegesen szakad izomok korrekciója, rehabilitációja</li>
                                <li>izomhúzódás, izomzúzódás, részleges szalagsérülés, bevérzések, ízületi folyadékgyülemek oldására fokozott izomtónus, íngyulladás okozta bántalmak, mozgásszervi rehabilitációra, egyéb mozgásszervi panaszok és menstruációs görcsök enyhítésére is alkalmazható.</li>
                                <li>instabil ízület rögzítése, támasztása (pl.: ficam megelőzése)</li>
                                <li>sérülékenyebb izmok, szalagok támogatása (pl.: komolyabb igénybevétel)</li>
                                <li>izmok fáradságának csökkenése</li>
                                <li>izomerő növekedés</li>
                                <li>csökkenti a duzzanatot, gyulladáscsökkentés: segíti a felhalmozódott nyirokfolyadék, ödémák eltávolítását, a nyirok áramlását – a kineziológiai szalag javítja a vér - és nyirokkeringést, csökkenti a gyulladást, segíti a felesleges sejtanyagcsere termékek, gyulladásos anyagok elszállítását a szövetekből.</li>
                                <li>fokozza a vér - és nyirok keringés, az anyagcsere, és méregtelenítést.</li>
                                <li>az alvó immunsejtek aktiválása, immunstimulálás, immunserkentés</li>
                                <li>az egész szervezet teljesítőképességének, egészségmegőrző, betegségmegelőző, védekezőképességének javulása</li>
                                <li>pszichovegetatív zavarok megszüntetése (folyamatos stressz hatására az izmok hipertónusos állapotba kerülnek)</li>
                                <li>lélektanilag a fájdalom pszichés hatása, hogy az ember kímélni kezdi a sérült, beteg testrészét</li>
                            </ul>
                        </>,
                        <>
                            <h3>Általános tudnivalók:</h3>
                            <p>
                                A jó mozgáshoz elengedhetetlenek az egészséges harántcsíkolt izmok és megfelelő megfelelőmozgásterjedelemben működő ízületek.
                                A feszült, sérült izmok, inak lassabb vagy gyengébb, működést engednek, mozgás beszűkülést okoznak.
                                Innovatív eszközök és technikák segítségével lehet védeni és kezelni az izmokat, inakat és ízületeket.
                                A túlterhelt, feszült izmok, szalagok, ízületi fájdalmak, sérülések kezelésére több mechanoterápiás eljárás is rendelkezésükre áll: masszázsterápia, mozgásterápia, akupunktúra, stb...
                                A hagyományos kezelések javítják a vérkeringést, nyújtják az izmokat, segítik a mozgásterjedelem növelését, fájdalmat csökkentenek, vagyis gyorsítják a gyógyulási, rehabilitációs időszakot, az ismételt mozgás alkalmával azonban nem védik, kímélik, tehermentesítik a sérült részt, vagy gátolják a mozgást.
                                A Kinesio szalag a megfelelő rögzítés mellett lehetővé teszi a teljes mozgást.
                                A szalag kissé megemeli a bőrt és kötőszövetet, biztosítva ezzel a rétegek közötti nyirokáramlást, tisztítva a gyulladt szövetet.
                                A kinezio szalag a test öngyógyításának felhasználása mellett valójában egy egész nap működő „információs terápia”.
                                Segítségével a test újra tud működni.
                            </p>
                        </>,
                        <>
                            <h3>Alkalmazások:</h3>
                            <ul>
                                <li>Izmok, ízületek</li>
                                <li>Nyaki terület (pl.: nyaki fájdalom, merevség, nyaki porckorong problémák, ízületi problémák)</li>
                                <li>Lapocka, C 7 csigolya rögzítése, Trapéz izom, Hát izom, Deltaizom, Vállízület, Bicepsz, Karizom, Golf könyök, Tenisz könyök, carpaltunel szindróma - csuklótáji alagút szindróma, Lumbágó - derékfájdalom, Scoliosis – gerincferdülés, Csípő, Comb, Térd ízület, Vádli, Sarok, Lúdtalp, Achilles, Boka, Bütyök</li>
                                <li>Nyirok területek: alsó - felső végtagok</li>
                                <li>Véraláfutások</li>
                                <li>Myalgiás csomók</li>
                            </ul>
                        </>,
                        <>
                            <h3>Színterápia a szalagok világában:</h3>
                            <p>
                                A színek a pszichés állapotunkat befolyásolják, mindig olyat használunk amilyet Te szívesen használsz.
                            </p>
                            <ul>
                                <li>Kék: Nyugalom. Hűsítő, nyugtató, pihentető szín. Görcsoldó, gyulladáscsökkentő hatású.</li>
                                <li>Fekete: Erő. Fokozza a piros és a kék szín hatását.</li>
                                <li>Bézs: Semleges. Testszínű, semleges hatású, egyáltalán nem feltűnő, esztétikai okokból gyakran használt szín.</li>
                                <li>Pink: Lazítás. Nyugtató hatással van a testre, az izmokat is ellazítja.</li>
                                <li>Narancs: Serkentés. Meleg, aktív szín, enyhíti az izmok feszültségeit és görcseit. Az immunrendszert egészében erősíti, ezzel együtt mozgósítja a test összes öngyógyító erejét.</li>
                                <li>Piros: Aktivitás. Melegséget, aktivitást, dinamizmust sugároz. Energetizáló hatású, fokozza a vérkeringést. Legyengült izomzat, lassú vérkeringés esetén kifejezetten ajánlott, gyulladás esetében azonban inkább válaszunk a hideg színek közül.</li>
                                <li>Lila: Kiegyenlítődés. Egyesíti a kék hűsítő és a piros aktivizáló hatását.</li>
                                <li>Zöld: Harmónia. Relaxációs és nyugtató hatású. Ízületi gyulladásra ajánlott.</li>
                                <li>Citromsárga: Élénkítés. A nap színe, meleget és lelkesedést sugároz, élénkíti az idegrendszert. Jó hatással van a bőrproblémákra, a reumára valamint az ízületi gyulladásra.</li>
                                <li>Fehér: Tisztaság. A fény, a tisztaság, az egyszerűség jelképe. A fehér nem csak tiszta, de tisztító hatású is.</li>
                            </ul>
                        </>
                    ],
                },
            ],
        },
    },
];
