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
                                Heti 1-2 kezelés javasolt
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
                        `Érintett területek: Vizelet kiválasztórendszer, emésztésirendszer, légzőrendszer, nyirokrendszer; keringés szervrendszere, agy,- idegrendszer, hormonrendszer, érzékszervek, mozgásszervek, nemiszervek. (97 reflexzónás pontot érint)`,
                        `Reflexzónás masszázs:

                        A masszázs segíti beindítani az öngyógyítási folyamatokat.
                        A masszázst célszerű több alkalommal igénybe venni az elején, hogy az öngyógyítási folyamatok elkezdődjenek.Ha teheted, heti 2x vagy 3x, ahogy az időd engedi és utána havi 1x legalább érdemes megismételni.
                        Sok betegség megelőzésére, illetve meglévő betegség javulására, – szinten tartására, alkalmazhatóak.Az egész testre jótékony hatással van.`,
                        `Alkalmazását tekintve: 1, 5 - 2 éves kortól az egészen idős emberekig, figyelembe véve a tiltó körülményeket.`,
                        `Ellenjavallatok - tilos a talpreflexológia az alábbi esetekben:

                Kérlek vedd ezeket figyelembe a magad egészséged érdekében.
                        Bármi kérdés merül fel benned, bizonytalan vagy hívj nyugodtan.
                        
                        - várandóság időszakában(kivéve néhány zónában)
                - veszélyeztetett terhesség esetén tilos
                - nagyfokú érelmeszesedés, trombózis esetén
                - kezeletlen magas vérnyomás(ha kezelt lehet)
                - súlyos szív és keringési problémával küzdő, pacemakert használóknak
                - súlyos cukorbetegség fennállásakor
                - erősen visszeres, gyulladt, ödémás láb esetén
                - magas láz esetén
                - fertőző betegségeknél
                - nyílt seb, gombásodás a lábon
                - sérülések, törés, ficam, üszkösödés a lábon
                - vérzéses betegségek, beleértve a menstruációt is. (tekintettel a masszázs keringést fokozó voltára előidézhet egy erős menzeszt, mely kapcsán a kezelt személy sok vért veszíthet)
                - nem javaslom epe -, illetve vesekövesség esetén sem - mivel a távolhatás kapcsán a mozgások fokozódnak – a kő elmozdulhat a helyéről, majd szűkebb szakaszba kerülve beékelődhet, és erős görcsöket okozhat.
                        - erős idegkimerültség esetén`,
                    ],
                },
                {
                    name: 'Méregtelenítő talp masszázs',
                    description: [
                        `A vizelet és emésztésirendszerre épül.A belső szervek méregtelenítését segíti elő.A lerakódott salakanyagokat segít kiüríteni.`,
                        `Méregtelenítő masszázs:

                A masszázs segíti beindítani az öngyógyítási folyamatokat.
                        A masszázst célszerű több alkalommal igénybe venni az elején, hogy az öngyógyítási folyamatok elkezdődjenek.Ha teheted, heti 2x vagy 3x, ahogy az időd engedi és utána havi 1x legalább érdemes megismételni.
                        Sok betegség megelőzésére, illetve meglévő betegség javulására, – szinten tartására, alkalmazhatóak.Az egész testre jótékony hatással van.`,
                        `Talpmasszázs általános tudnivalók:

                -frissítés céllal
                - megelőzésképpen
                - állapot felmérés céljából
                - méregtelenítésre, salaktalanításra
                - hatásmechanizmusát tekintve számos betegség esetén terápiás eljárásként
                - feszültségoldó hatású, depresszió esetén is jól alkalmazható a szorongás és félelem oldására
                - fájdalom csillapító`,
                        `Alkalmazását tekintve: 1, 5 - 2 éves kortól az egészen idős emberekig, figyelembe véve a tiltó körülményeket.`,
                        `Ellenjavallatok - tilos a talpreflexológia az alábbi esetekben:

                Kérlek vedd ezeket figyelembe a magad egészséged érdekében.
                        Bármi kérdés merül fel benned, bizonytalan vagy hívj nyugodtan.
                        
                        - várandóság időszakában(kivéve néhány zónában)
                - veszélyeztetett terhesség esetén tilos
                - nagyfokú érelmeszesedés, trombózis esetén
                - kezeletlen magas vérnyomás(ha kezelt lehet)
                - súlyos szív és keringési problémával küzdő, pacemakert használóknak
                - súlyos cukorbetegség fennállásakor
                - erősen visszeres, gyulladt, ödémás láb esetén
                - magas láz esetén
                - fertőző betegségeknél
                - nyílt seb, gombásodás a lábon
                - sérülések, törés, ficam, üszkösödés a lábon
                - vérzéses betegségek, beleértve a menstruációt is. (tekintettel a masszázs keringést fokozó voltára előidézhet egy erős menzeszt, mely kapcsán a kezelt személy sok vért veszíthet)
                - nem javaslom epe -, illetve vesekövesség esetén sem - mivel a távolhatás kapcsán a mozgások fokozódnak – a kő elmozdulhat a helyéről, majd szűkebb szakaszba kerülve beékelődhet, és erős görcsöket okozhat.
                        - erős idegkimerültség esetén`,
                    ],
                },
                {
                    name: 'Bathi Thai olajos talp masszázs',
                    description: [
                        'A thai masszázs egy speciális masszázs fajta, amely a relaxáció és helyreállító kezeléseket ötvözi. A módszer a test speciális pontjainak aktiválásán alapul, amely a belső energiákért felelős. Helyre állítja az ember fizikai erejét, nem feledkezve meg a spiritualitásról.',
                        `Talpmasszázs általános tudnivalók:

                -lazító
                - feszültségoldó
                - fájdalom csillapító hatású
                - testileg és lelkileg frissebbé, aktívabbá, kiegyensúlyozottabbá tesz
                - az energia vonalak, meridiánok kezelésének hatására javul a vérkeringés, és a nyirokkeringés, ezáltal erősíti a szervezet méregtelenítését, a salakanyagok eltávolítását
                - stimulálja a vegetatív idegrendszert, a belső szerveket, serkenti azok működését, egyensúlyba hozza a test energiarendszerét
                - a nyújtások, „kihúzások” mobilizációk oldják az izmok és az ízületek merevségét, feszültségét, növelik a test rugalmasságát
                - masszázs után frissnek, rugalmasnak érzi magát a vendég, könnyebben mozog, megszűnik izmainak merevsége
                - depresszió, szorongás oldására, pánikbetegségekre, lelki betegségek oldására`,

                        `Tilos alkalmazni a következő esetekben:

                -lázas állapot esetén
                - ha a vendég betegnek, gyengének érzi magát, akkor is, ha nincsenek egyértelmű tünetek
                - nyirokrendszer betegségeiben, ödémás láb esetén, súlyos visszértágulatnál
                - sebek, fekély esetén
                - bőrbetegségek a lábon
                - alsó végtagokat érintő rándulás, ficam, csonttörés esetében a gyógyulásig
                - daganatos betegség esetén - csak orvosi javaslatra
                        
                        Egyedi elbírálást igényelnek:
                -magas vérnyomás, szívbetegség esetén - ha a vendég orvosi kezelés alatt áll, és a kezelés eredményeként jól érzi magát, kaphat talpmasszázst
                - protézist viselőknek pl.: térd -, vagy csípőprotézis
                - epilepsziás betegeknek – ha a vendég orvosi kezelés alatt áll, és a kezelés eredményeként jól érzi magát, kaphat talpmasszázst
                - terhesség idején – ha a kismama terhessége zavartalan, frissítő, relaxáló célzattal - néhány fogás kihagyásával – kaphat talpmasszázst`,
                    ],
                },
                {
                    name: 'Talpcsakra masszázs',
                    description: [
                        `A talpcsakra masszázs kezelési módszer képes a csakraenergiákat befolyásolni, ezáltal harmóniát teremteni.

                        A csakra energia területek harmónizálása által pozitív tudatállapot - változás áll be.Az új és harmonikus rezgésterület nyomán mentesülünk a betegségektől, lelki összhangra teszünk szert`,

                        `Talpmasszázs általános tudnivalók:

                -frissítés céllal
                - megelőzésképpen
                - állapot felmérés céljából
                - méregtelenítésre, salaktalanításra
                - hatásmechanizmusát tekintve számos betegség esetén terápiás eljárásként
                - feszültségoldó hatású, depresszió esetén is jól alkalmazható a szorongás és félelem oldására
                - fájdalom csillapító`,

                        `Alkalmazását tekintve: 1, 5 - 2 éves kortól az egészen idős emberekig, figyelembe véve a tiltó körülményeket.`,

                        `Ellenjavallatok - tilos az alábbi esetekben:

                Kérlek vedd ezeket figyelembe a magad egészséged érdekében.Bármi kérdés merül fel benned, bizonytalan vagy hívj nyugodtan.
                        - várandóság időszakában(kivéve néhány zónában)
                - veszélyeztetett terhesség esetén tilos
                - nagyfokú érelmeszesedés, trombózis esetén
                - kezeletlen magas vérnyomás(ha kezelt lehet)
                - súlyos szív és keringési problémával küzdő, pacemakert használóknak
                - súlyos cukorbetegség fennállásakor
                - erősen visszeres, gyulladt, ödémás láb esetén
                - magas láz esetén
                - fertőző betegségeknél
                - nyílt seb, gombásodás a lábon
                - sérülések, törés, ficam, üszkösödés a lábon
                - vérzéses betegségek, beleértve a menstruációt is. (tekintettel a masszázs keringést fokozó voltára előidézhet egy erős menzeszt, mely kapcsán a kezelt személy sok vért veszíthet)
                - nem javaslom epe -, illetve vesekövesség esetén sem - mivel a távolhatás kapcsán a mozgások fokozódnak – a kő elmozdulhat a helyéről, majd szűkebb szakaszba kerülve beékelődhet, és erős görcsöket okozhat.
                        - erős idegkimerültség esetén`,

                        `A csakrák: `,

                        `1. Alap csakra(gyökér csakra): energia
                        A hátgerinc alsó végénél helyezkedik el.Felelős a fizikai erőlétért és vitalitásunkért.A munka, a hivatás, az energia, az aktivitás elsődleges mozgató rugója.
                    Szervei: mellékvese, vesék, és a hátgerinc.
                    Színe: vörös
                        Eleme: föld
                        Betegségek: Aranyér, bélgyulladás, fogínygyulladás, gerincpanaszok, hasmenés, székrekedés, hideg végtagok.
                        Gyógyító színe: vörös`,

                        `2. Szakrális, vagy szex – csakra: hit
                        Nemi szervek magasságában helyezkedik el, a kreativitás csakrája.Irányítja viselkedésünket kapcsolatainkban, a nemi életben, és ez által a szaporodásban.A gyökér csakrával együtt felelős az emberi szexualitás örömeiért és problémáiért.
                    Színe: narancssárga
                        Eleme: víz
                        Betegségek: Bélgörcs, felfúvódás, gombás fertőzés, hajhullás, hereproblémák, méhproblémák, petefészek - ciszta, impotencia, a prosztata megbetegedései, mellbetegségek, étkezési zavarok, kóros elhízás, orgazmusproblémák.
                        Gyógyító színe: narancssárga
                        Gyógyító köve: a karneol
                        Gyógyító hangja: a naphang
                        Gyógyító olaja: a narancsvirágolaj`,

                        `3. Köldök csakra vagy Napfonat(plexus Solaris): tudás
                        A gyomorszáj alatt helyezkedik el.
                    Szervei: hasnyálmirigy, epehólyag, távolról szabályozza az idegrendszert is, hozzá tartozik még a szem, vagyis a látás és a gyomor, máj is.
                    Felelős: Az érzelmi érzékenység és személyes erő központja.A köldök csakra szenvedélyeink és saját énünk irányítója.
                    Színe: sárga
                        Eleme: tűz
                        Betegségek: Cukorbetegség, epepanaszok, emésztési problémák, gyomorfekély, epe és májbetegség.
                        Gyógyító színe: a sárga
                        Gyógyító köve: a citrin
                        Gyógyító hangja: a naphang
                        Gyógyító olaja: a citromolaj`,

                        `4. Szív csakra: szeretet
                        A szív magasságában található.
                    Szervei: szív, csecsemőmirigy
                        Felelős: A szívet, a vér minőségét, és a vérkeringést irányítja, valamit az immunrendszert szabályozza.A szeretet központja.
                    Színe: zöld
                        Eleme: levegő
                        Betegségek: az immunrendszerrel és a vérkeringéssel kapcsolatos betegségek, az antitestképzés, a fehérvérsejtek képzése, és végül a szív, mint szerv.
                        Gyógyító színe: a rózsaszín
                        Gyógyító köve: a rózsakvarc
                        Gyógyító hangja: a föld hanga
                        Gyógyító olaja: a rózsaolaj`,

                        `5. Torok csakra: felvevő állomás
                        A toroknál található.
                    Szervei: pajzsmirigy, nyak és száj
                        irányítja: a tüdőt, a hangszállakat, a hörgőket és az anyagcserét.Elsősorban a légzéssel, a beszéddel és az önkifejezéssel kapcsolatos.
                    Színe: kék
                        Eleme: éter
                        Betegségek: beszédproblémák, köhögés, torokfájdalom, rekedtség.Az elnyomott érzelmek elzárhatják a totok csakra energiáját.
                        Gyógyító színe: kék
                        Gyógyító köve: a kék türkiz
                        Gyógyító hangja: a holdhang
                        Gyógyító olaja: a levendulaolaj`,

                        `6. Homlok csakra = harmadik szem: leadó állomás
                        A homlok közepén, a két szemöldök között található.
                    Szervei: agyalapi mirigy, agy alsó része, idegrendszer, a fül, az orr, és a bal szem irányítását végzi.
                    Felelős: A lélek színhelye.Ez vezérli a meditációt, az elmélkedés irányát, az intuíciót.
                    Színe: indigókék(alkalmanként vörös és kék kominációjaként is megjelenik)
                        Eleme: nem tartozik hozzá elem
                        Betegségek: folyamatosan visszaköszönő fejfájás, látászavarok(rövid és távollátás, kancsalság, kötőhártya gyulladás)
                        Gyógyító színe: ibolyalila - ibolyakék
                        Gyógyító köve: a hegyi kristály
                        Gyógyító hangja: a Jupiter hang
                        Gyógyító olaj: a levendula`,

                        `7. Korona csakra: bölcsesség
                        A fejtetőn a kutacsnál található.
                    Felelős: A korona csakra a legmagasabb tudati szintet szimbolizálja.E csakrán keresztül lehet felvenni Teremtőkkel a kapcsolatot.
                    Színe: ibolyaszín, fehér fény
                        Eleme: nincs
                        Betegségek: Általában lelki, pszichés eredetű betegségek, esetleg személyiségváltozások(Parkinson - kór, Alzheimer - kór, depresszió, epilepszia) fordulhatnak elő.
                        Gyógyító színe: az arany
                        Gyógyító köve: az ametiszt
                        Gyógyító hangja: a Karuna - hang
                        Gyógyító olaja: illatkeverék`,

                        `Az egész test gyógyító színe: zöld`,
                    ],
                },
                {
                    name: 'Tigger pont masszázs',
                    description: [
                        'Description needed!',
                    ],
                },
                {
                    name: 'Reflexzónás arcmasszázs',
                    description: [
                        `Az alábbi szervrendszereket érinti: Vizelet kiválasztórendszer, emésztésirendszer, légzőrendszer, nyirokrendszer; keringés szervrendszere, agy,- idegrendszer, hormonrendszer, mozgásszervek, nemiszervek. (24 reflexzónás pontot érint)`,
                        `Reflexzónás arcmasszázs:

            A masszázs segíti beindítani az öngyógyítási folyamatokat.A masszázst célszerű több alkalommal igénybe venni az elején, hogy az öngyógyítási folyamatok elkezdődjenek.Ha teheted, heti 2x vagy 3x, ahogy az időd engedi és utána havi 1x legalább érdemes megismételni.Sok betegség megelőzésére, illetve meglévő betegség javulására, – szinten tartására, alkalmazhatóak.Az egész testre jótékony hatással van.
                        
                        Az arcmasszázs, természetes fájdalomcsillapító, gyógyító, frissítő eljárás.Műtéti beavatkozás után a felépülési idő megrövidül, mert felgyorsulnak a természetes gyógyulási folyamatokat.Kevés az ellenjavallata, nincsenek mellékhatásai.`,
                        `Általános tudnivalók:
            -frissítés céllal
                        - megelőzésképpen
    - állapot felmérés céljából
    - méregtelenítésre, salaktalanításra
    - hatásmechanizmusát tekintve számos betegség esetén terápiás eljárásként
    - feszültségoldó hatású, depresszió esetén is jól alkalmazható a szorongás és félelem oldására
    - fájdalom csillapító
                        
                        Alkalmazását tekintve: 1, 5 - 2 éves kortól az egészen idős emberekig, figyelembe véve a tiltó körülményeket.`,
                        `Ellenjavallatok:

    Kérlek vedd ezeket figyelembe a magad egészséged érdekében.
                        Bármi kérdés merül fel benned, bizonytalan vagy hívj nyugodtan.
                        
                        - lázas állapot
    - heveny fertőző betegségeknél, pl.: felső léguti fertőzés, nátha…stb.
                        - súlyos szívbetegség, ingadozó magas vérnyomás
    - akut gyulladás az arc, nyak, dekoltázs területén
    - daganatos beteg(csak orvosi engedéllyel)
    - friss trauma, műtét utáni állapot(4 - 6 - 8 hét műtéttől függően) pl: foghúzás után 2 hétig nem lehet masszírozni.
                        - hámhiány
    - Rheumatoid arthritis aktív fázisában – amikor a gyulladás tünetei fennállnak
    - előrehaladott csontritkulás
    - be nem állított magas vérnyomás
    - nem kezelt szív és keringési problémák
    - visszeresség
    - alkoholos állapot
    - trombózis`,
                        `Arc masszázs esetén nem kizáró ok:
    -terhesség
    - menstruáció`,
                    ],
                },
                {
                    name: 'Kismama, baba és gyerekmasszázs',
                    description: [
                        `Baba: (0 - 3 éves korig)
    A baba masszázs számtalan előnnyel jár.Minden gyengéd érintéssel a csecsemő szeretve fogja érzi magát, megerősítve az anya és a gyermek között fennálló köteléket.Lehetővé teszik a baba számára, hogy nyugodtabbá váljon, ami javítja az alvásukat, étvágyukat, immunrendszerüket, gyorsabban épülnek fel a betegségekből.
        Gyerek: (3 - 12 éves korig)
    A gyerekek ebben a korban gyorsan fejlődnek.A növés folyamatában minden gyermek másképpen reagál.Ezért ajánlatos lehet számukra egy talp masszázs, vagy egy hát masszázs.`,

                        `Baba masszázs:

    Ha a gyermekének valamilyen egészségügyi problémája van, akkor először beszéljen orvosával, vagy védőnőjével, hogy eldöntse, fogja - e masszírozni.
                        
                        Alkalmazását tekintve:
    Javaslat: Ha a baba még nem született meg, érdemes előtte elsajátítani a masszázst, hogy mire a kicsi megérkezik, magabiztosan tudjuk masszírozni.
                        - Ha a szülő jártas a babamasszázs technika alkalmazásában, akkor már 2 hetes kortól megkezdheti az alkalmazást.
                        - Csoportos vagy egyéni foglalkozásra, a babát 6 hetes kortól lehet vinni, ha a baba egészséges.
                        
                        Fontos tudni!
                        0 - 3 éves korig a szülő masszírozza a gyermekét.Kivéve, ha valami speciális helyzet áll elő.
                        A masszázson egy babán van bemutatva a fogások, amiket a szülők sajátítanak el az órákon.`,

                        `Általános tudnivalók:

    -nyugtat
    - elősegíti az alvást
    - a rendszeres azonos időben végzett masszázs, segíti a tájékozódást a napon belül a gyermek számára
    - jó hatással van a keringésre, légzőszervrendszerre, emésztésre, mozgás és kiválasztó szervrendszerre is
    - a rendszeres masszázsban részesülő gyermekek jobban kötődnek a szülőkhöz, testvérekhez, családtagokhoz, nyitottabbak
    - sírás, ijedség után sokkal könnyebb őket megnyugtatni
    - segíti a napi testtömeg - növekedést
    - javítja a baba alkalmazkodását az éjszakai alváshoz, és segíti mélyebben aludni
    - enyhíti az orrdugulást és a fogakkal járó kellemetlenséget
    - elősegíti a jó izomtónus, koordináció és a rugalmasság kialakulását
    - javítják a test tudatosságát
    - erősíti az immunrendszert
    - javítja a bőr textúráját`,

                        `Mire kell odafigyelni:

    -oda kell figyelni a baba hangulatára
    - a babának nyugodtnak, ébernek és elégedettnek kell lennie, ha készen áll a masszázsra
    - soha nem végezzünk olyan masszázst, ami kényelmetlen a babának, nem esik jól neki
    - vannak gyerekek, akiknél több idő kell megszokni a masszázst, nem szabad rájuk erőltetni
    - ha a gyermek megunja a foglalkozást, éhes lesz, pelust kell cserélni, akkor tegye azt a szülő, ami a babának kényelmét szolgálja`
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
                        `Szolgáltatások

                        alap, -speciális, illetve - mini pedikűr
                        japán körömápolás
                        lakkozás`,

                        `Lábápolást kizáró körülmények:

                        – nyílt seb
                        – vírusos vagy baktérium okozta fertőzések(szemölcs)
                        – anyajegyek, ha a kezelendő felületre esik
                        – lázas állapot
                        – ittas állapot
                        – olyan általános betegség, ami immunrendszer gyengeséggel jár(callux)
                        – rosszindulatú daganat vérképző rendszeri betegségek leukémia, vérszegénység(callux)
                        – specifikus fertőző betegség TBC, ADIS
                        – ha a végtagon vagy a lábon orbánc, ekcéma, allergiás bőrreakció van`,

                        `Lábápolást befolyásoló tényezők:

                        – cukorbetegség
                        – perifériás érbetegség
                        – vérhígító
                        – magas vérnyomás
                        – ízületi deformitások`,

                        `
Körmök
                        Sokan nem mertek eljönni pedikűrre, pedig tudjátok, hogy probléma van a körmötökkel.

                        Szeretnék egy kis segítséget nyújtani, hogy bátran, minden félelem nélkül el merjetek jönni, és megmutassátok mi is a gond valójában.
                        
                        Kezdjük a köröm deformitásokkal.
                        
                        Köröm deformitásnak nevezzük az átlagtól eltérő növekedésű körmöket.
                        
                        Ezeknek az okai lehetnek veleszületett és szerzett.
                        
                        A szerzett oka lehet:
                        
                        – belső probléma, pl.: belgyógyászati
                        
                        – külső probléma, mechanikai pl.: cipő
                        
                        Felsorolok néhány példát nektek:
                        
                        –        Erősen barázdált köröm
                        
                        –        Lapos körmök
                        
                        –        Sas köröm(karvaly)
                        
                        –        Kanál alakú köröm
                        
                        –        Óraüvegköröm
                        
                        –        Karom köröm
                        
                        –        Harapófog köröm
                        
                        –        Körömlemez elválása
                        
                        –        Körömlemez vastagodás
                        
                        –        Körömlemez kettéválás
                        
                        –        Benőtt köröm
                        
                        –        Szálkavérzés
                        
                        –        Zöldes színűvé válhat a köröm
                        
                        –        Kékes elszíneződés
                        
                        –        A körmön fehér foltok
                        
                        –        Tejüveg köröm
                        
                        –        A körmökön apró pöttyök
                        
                        –        Olajfolt, olajcsepp
                        
                        –        Gombás fertőzések
                        
                        –        Sárga köröm
                        
                        –        Barna köröm
                        
                        –        Körömrágás

Most, hogy megismerkedtél milyen sokféle köröm probléma, elváltozás is lehet, láthatod, hogy nem vagy egyedül a problémáddal.
                        
                        A lényeg, ha bármi változást tapasztalsz, most már tudod, hogy segítségre lehet szükséged.
                        
                        Amiben én tudok segíteni neked, ha látom a körmödet tudom merre menj tovább, vagy maradj nálam pl.: körömgomba kezelésen.
                        
                        Amit tudnod kell körömgomba kezelés elkezdése előtt: A körömgomba nem múlik el az egyik percről a másikra.A terjedelemtől, a gomba típusától, súlyosságától függően a
                        
                        kezelések akár több hónapig is le tarthatnak.Vannak esetek amikor gyógyszer szedése is javasolt, ezt a bőrgyógyász írja fel neked.
                        
                        Fontos tudnod, hogy:
                        
                        a lábon a köröm kb 240 – 260 nap, vagyis ~8 - 10 hónap mire teljesen kicserélődik,

    míg a kézen ez kb 100 – 120 nap, vagyis ~3 - 6 hónap csupán.

        Tehát, légy türelmes.
                        
                        Ha bármilyen kérdésed, problémád van jelentkezz be hozzám, és ha pedikűri munkámon felül problémát észlelek, abban az esetben, a megfelelő szakorvoshoz foglak

irányítani.
                        
                        Az egészséges szép lábakért.
                        
                        De egyet ne feledj, a gyógyuláshoz a Te akaratod is szükséges. 
                        
                         
                        
                        Ha többet szeretnél tudni a felsorolt köröm tünetekről:
                        
                        –        Erősen barázdált köröm: Amikor a köröm lemezben hosszanti vagy keresztirányú bordák találhatók.Oka lehet: oka lehet belgyógyászati vagy mechanikai sérülés.
                        
                        –        Lapos köröm: Amikor a körömlemez oldalnézetből lapos, illetve felfelé ívelt.
                        
                        –        Sas köröm: (karvaly) Amikor a szabad szél résznél lefelé fog nőni.pl.: a kalapács ujjú embereknél
                        
                        –        Kanál alakú köröm: Mélyedés van a körömben, vagyis a körömágy közepén van egy gödör.
                        
                                  gyakran társul vashiányhoz, vérszegénységhez.
                        
                        –        Óraüvegköröm: A körmök felszíne domborúvá válik, az utolsó ujjpercek pedig szélesebbek lesznek, megvastagodnak.A háttérben a szív és a tüdő súlyos betegségei,

    keringési problémák deríthetők ki.
                        
                        –        Karom köröm: piszkos barna színűvé válik.Szűk cipő viselése, ismétlődő sérülés, érszűkület okozhatja.
                        
                        –        Harapófog köröm: Körömlemez haránt irányban domborodik.Szűk cipő viselése, körömgomba okozhatja.
                        
                        –        Körömlemez elválása: fonalas gomba fertőzés, nem termelődik átmenetileg körömlemez. (Gyógyszerek, terhesség, sérülés…)
                        
                        –        Körömlemez vastagodás: gombásodás, pikkelysömör, érszűkület esetén látható leggyakrabban.
                        
                        –        Körömlemez kettéválás: Leggyakrabban vegyszerek, körömlakkok, lemosók használata, valamint fizikai behatolások váltják ki.
                        
                        –        Benőtt köröm: Gyakori és nagyon kellemetlen állapot.A körömlemez oldalsó része behatol a körmöt körülvevő szövetbe.Itt gyulladás, fájdalom és úgynevezett
                        
                                  sarjszövet képződik.
                        
                        –        Szálkavérzés: Vörös majd barnás színű csíkok.Sérülés, keringési zavar, pajzsmirigy túltengés esetén alakul ki.
                        
                        –        Zöldes színűvé válhat a köröm, ha alatta bizonyos pigmenteket termelő baktériumok szaporodnak el.
                        
                        –        Kékes elszíneződés kialakulhat szív - tüdő betegségekben a vér alacsonyabb oxigén telítettségét jelezve, de ezüstöt tartalmazó gyógyszerek is állhatnak a hátterében.
                        
                        –        A körmön fehér foltok is megjelenhetnek, ezek hátterében vitaminhiány vagy ásványi anyag hiányt feltételeznek.
                        
                        –        Tejüveg köröm: A körömház teljes elszíneződése.Oka a körömágy erezetének csökkenése.
                        
                        –        A körmökön apró pöttyök figyelhetők meg pikkelysömör esetében.
                        
                        –        Olajfolt, olajcsepp: A körmön sárgásbarna foltok találhatóak.A pikkelysömör jellegzetes bőrtünete.
                        
                        –        Gombás fertőzések is elszínezi a köröm állományát.
                        
                        –        Sárga köröm: Dohányzás vagy súlyos májbetegség.
                        
                        –        Barna: gyógyszerek, rákos betegség.
                        
                        –        Körömrágás: rossz szokás, valamilyen szorongás állhat a hátterében.`,
                    ],
                },
                {
                    name: 'Bőrápolás',
                    description: [
                        `Szolgáltatások

                        tyúkszem eltávolítás
                        körömgomba kezelés`,

                        `Lábápolást kizáró körülmények:

                        – nyílt seb
                        – vírusos vagy baktérium okozta fertőzések(szemölcs)
                        – anyajegyek, ha a kezelendő felületre esik
                        – lázas állapot
                        – ittas állapot
                        – olyan általános betegség, ami immunrendszer gyengeséggel jár(callux)
                        – rosszindulatú daganat vérképző rendszeri betegségek leukémia, vérszegénység(callux)
                        – specifikus fertőző betegség TBC, ADIS
                        – ha a végtagon vagy a lábon orbánc, ekcéma, allergiás bőrreakció van`,

                        `Lábápolást befolyásoló tényezők:

                        – cukorbetegség
                        – perifériás érbetegség
                        – vérhígító
                        – magas vérnyomás
                        – ízületi deformitások`,

                        `Bőrkeményedés
                        A bőrkeményedés kialakulásának a helye, milyensége, mértékletessége egyéntől függő.
                        Kialakulását befolyásolja például a bőr típusa, a láb ortopédiai elváltozása, a rossz cipő viselése.
                        A láb egészségi állapota befolyásolja a járást, teherbírásunkat, fertőzésre való hajlamunkat.
                        Érdemes megelőzni a problémát.Ne várd meg még a bőrkeményedés nagyon megvastagodik, kirepedezik.Ha nem tudod magadnak kellően elvégezni a bőrkeményedés eltávolítását, kérj időpontot.A megfelelő eszközökkel, hatóanyagos áztató sókkal, bőrpuhítókkal, bőrradírokkal, Rád szabott krémekkel, kezelve lesz az érintett terület, illetve területek.
                        
                        Keress bátran 😊
                        
                        És hogy miért is mondom ezt ?
                        – A bőrtípusnak megfelelő kezelést tudom ajánlani;
                        – Ha valamilyen betegségben szenvedsz, tudok segíteni hogyan tartsd karban otthon is lábad;
                        – A bőrtípusodnak megfelelően tudok időpontot meghatározni, hogy mikor is lenne esedékes az újabb pedikűrözés még az erős bőrkeményedés, a kellemetlen érzés, fájdalom kialakulása előtt.
    Segítek, hogy tudd mire is kell figyelni, például:
                        – Ha hetente szeded le a bőrkeményedést, azzal csak ártasz saját magadnak.
                        Sokkal gyorsabban kezd el majd a bőrkeményedés kialakulni, de az is lehet, hogy túlságosan elvékonyítod a bőr rétegét és a járásod fájdalmassá, illetve a talpad sérülékenyebbé is válhat.
                        – Ha nagyon ritkán végzed el, akkor pedig nagyon megvastagodik, és a repedés is mélyebb lesz, ami nem csak vérzéssel, de fájdalommal is járhat, ami szintén befolyásolja a járásod.
                        – A sarok repedés esélyt ad a fertőzések összeszedéséhez.pl.: ha szokott vérezni elég mély a repedés és elmész egy uszodába, ahol esetleg valaki gombás, szemölcsös lehetett, elég nagy eséllyel haza is viszed.`,

                        `Tyúkszem
                        A tyúkszem a nem megfelelő súlypont elosztásától, a szűk cipő hordásától alakulhat ki.
                        Van kemény és puha vagyis lágy tyúkszem.
                        A kemény tyúkszem a talpadon található, melyet egy megvastagodott bőrkeményedés fedi.
                        Általában a lábujjak alatti puha párnácskákon és a sarkon találhatóak.
                        A lágy tyúkszem a lábujjak között alakul ki, itt folyamatosan kapja a nedvességet.Ez esetben gyakori a láb gombásodása is.
                         
                        Sokszor hallom, hogy otthon próbáljátok kiszedni, de valamiért vissza nő, továbbra is fáj, esetleg begyullad, és ami még rosszabb, hogy olyan eszközökkel próbálkoztok, amikkel nem is lenne szabad.
                        Találkozok olyan esetekkel is, hogy tyúkszemként lett kezelve, de valójában szemölcs volt.
    Szóval, ha azt érzékelitek valami van, de nem tudjátok, hogy tyúkszem vagy szemölcs, véletlen se nyúlj hozzá.
                        A szemölcs ugyanis fertőző, így saját magad is tovább fertőződ és még a környezetedben élőket is megfertőzheted.
                         
                        Kérj időpontot és engedd, hogy szakszerűen legyen eltávolítva a tyúkszemed.
                        A tyúkszem szakszerű eltávolításakor a gyökere is kivételre kerül, így ugyan ott már nem nő vissza.
                        A kellemetlen fájdalom, ami eddig a tyúkszemmel járt megszűnik.
                        A járásod újra a régi lesz.`,

                        `Szemölcs
                        Jó ha van egy kis ismereted a szemölcsről is.
                        A szemölcsnek több típusa is ismert.Tenyéren, talpon és a nemi szervek körül(HPV fertőzések) illetve kisgyermekeken pl.: uszodaszemölcs igen gyakori.
                        A fertőzést könnyen el lehet kapni, a bőr apró sérülésein keresztül jutnak be a szervezetbe.
                        Megjelenési formájuk, fennállási ideje és kezelési módja nagyon függ a szemölcs típusától, elhelyezkedésétől.
                        Elsősorban a diagnózis megállapításához elengedhetetlen a bőrgyógyász segítsége, ugyanis például a szemölcsként öndiagnosztizált, házilagosan, maró szerekkel ecsetelt anyajegy kezelése végzetes is lehet.
                        HPV fertőzések:
-közönséges szemölcs
    - talpi szemölcs
        - lapos vagy futó szemölcs
            - hegyes függöly

Uszodaszemölcs:
                        kásaszerű massza ürül a gömbölyűkicsi, kemény göbcsékből közepük behúzódott gyerekeknél járványt okoz fiatalokon a borotva okoz fertőzéseket uszodában lehet elkapni nemi úton is átvihető`,

                        `Bőrgomba
                        Sokszor nem is tudjátok, vagy nem veszitek időben észre, hogy a talpatokon vagy a lábujjaitok között megjelent a bőrgomba.Meglepődve néztek rám mikor eljöttök egy alap pedikűrre és jelzem felétek, hogy jobban figyeljetek oda lábatokra. 
                        A bőrgomba általában bőrpírral jár, hámlással és viszketéssel jelentkezik.Fehér pikkelyek válhatnak le a bőr felületéről.
                        Megjelenését vitaminhiány, immunitás gyengülése, hosszabb antibiotikum kúra és a meleg, sötét nedves környezet is elősegíti.
                        A talpatok meghálálja, ha:
                        – minden fürdés után a lábujjak között is alaposan meg törlitek,
                        – pamut zoknit viseltek műszálas helyett,
                        – a lábbeliteket időnként fertőtlenítitek`,


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
                        `Description needed!`,
                        `A szolgáltatást nem tudod igénybe venni, ha bőr - vagy köröm gombád van.A szolgáltatásba bele tartozik egy általad kiválasztott krém bemasszírozása is.`,
                    ],
                },
                {
                    name: 'Parafinn ápolás',
                    description: [
                        `Description needed!`,
                        `A szolgáltatást pedikűr nélkül nem tudod igénybe venni, illetve amennyiben bőr - vagy köröm gombád van.Választhatsz alap, -speciális, illetve - mini pedikűrt.`,
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
            snippet: "A kinezio tapasz rendkívül hasznos segítség a sérülések és fájdalmak kezelésében. Rugalmas kialakítása lehetővé teszi, hogy könnyen alkalmazható legyen a bőrön anélkül, hogy mozgásunkat korlátozná. A tapasz támogatja az izmokat és szalagokat, javítja a vérkeringést, és enyhíti a fájdalmat. Használata segít az izomfeszültség csökkentésében, sérülések utáni gyorsabb regenerációban, és javítja a sportteljesítményt. A kinezio tapasz egy kiváló eszköz a gyógyuláshoz és a mozgás szabadságának visszaszerzéséhez.",
            main: [
                {
                    name: 'Kinezio Tape',
                    description: [
                        `A Kinezio szalag a bőrrel együtt mozogva folyamatos mikro masszázs hatást vált ki a kezelt területen.Segít az ingerek regenerálódásában, a fájdalom érzet jelentős csökkenésében.`,

                        `A kinezio tape hatásai:
-fájdalom csillapítás(gyógyszerek nélkül) - aktiválja az öngyógyító fájdalomcsillapító rendszert
    - beindul az idegrendszer ingerlése a C rostokon keresztül az agyba futó fájdalmi ingerek gátlása
                        Fájdalom csillapító hatása révén nagyobb terhelhetőséget biztosít, a beteg többet és nagyobb mozgásterjedelemben mozog.
                        - tartásjavítás
    - ízületi problémák korrekciója – a szalag javítja a mozgástartományt és kiigazítja az instabilitásból eredő egyenletlenségektől megfeszült izmokat.
                        - izmok támogatása(pl.: edzés, vagy egyéb fizikai megterhelések után csökkenti az izomlázat, görcsöket.)
    - izomtónus normalizálása(hipertónus lazítja – túl feszes ill.hipotónusos – túl laza izomzat)
        - torzult, részlegesen szakad izomok korrekciója, rehabilitációja
            - izomhúzódás, izomzúzódás, részleges szalagsérülés, bevérzések, ízületi folyadékgyülemek oldására fokozott izomtónus, íngyulladás okozta bántalmak, mozgásszervi rehabilitációra, egyéb mozgásszervi panaszok és menstruációs görcsök enyhítésére is alkalmazható.
                        - instabil ízület rögzítése, támasztása(pl.: ficam megelőzése)
    - sérülékenyebb izmok, szalagok támogatása(pl.: komolyabb igénybevétel)
        - izmok fáradságának csökkenése
            - izomerő növekedés
                - csökkenti a duzzanatot -> gyulladáscsökkentés: segíti a felhalmozódott nyirokfolyadék, ödémák eltávolítását, a nyirok áramlását – a kineziológiai szalag javítja a vér - és nyirokkeringést, csökkenti a gyulladást, segíti a felesleges sejtanyagcsere termékek, gyulladásos anyagok elszállítását a szövetekből.
                        – fokozza a vér - és nyirok keringés, az anyagcserét, és méregtelenítést.
                        – az alvó immunsejtek aktiválása, immunstimulálás, immunserkentés,
    -az egész szervezet teljesítőképességének, egészségmegőrző, betegségmegelőző, védekezőképességének javulása
        - pszichovegetatív zavarok megszüntetése(folyamatos stressz hatására az izmok hipertónusos állapotba kerülnek)
            - lélektanilag a fájdalom pszichés hatása, hogy az ember kímélni kezdi a sérült, beteg testrészét`,

                        `Általános tudnivalók:
                        A jó mozgáshoz elengedhetetlenek az egészséges harántcsíkolt izmok és megfelelő megfelelőmozgásterjedelemben működő ízületek.A feszült, sérült izmok, inak lassabb vagy gyengébb, működést engednek, mozgás beszűkülést okoznak.Innovatív eszközök és technikák segítségével lehet védeni és kezelni az izmokat, inakat és ízületeket.
                        A túlterhelt, feszült izmok, szalagok, ízületi fájdalmak, sérülések kezelésére több mechanoterápiás eljárás is rendelkezésükre áll: masszázsterápia, mozgásterápia, akupunktúra…stb.
                        A hagyományos kezelések javítják a vérkeringést, nyújtják az izmokat, segítik a mozgásterjedelem növelését, fájdalmat csökkentenek, vagyis gyorsítják a gyógyulási – rehabilitációs – időszakot, az ismételt mozgás alkalmával azonban nem védik, kímélik, tehermentesítik a sérült részt, vagy gátolják a mozgást.
                        A Kinezio szalag a megfelelő rögzítés mellett lehetővé teszi a teljes mozgást.A szalag kissé megemeli a bőrt és kötőszövetet, biztosítva ezzel a rétegek közötti nyirokáramlást, tisztítva a gyulladt szövetet.A kinezio szalag a test öngyógyításának felhasználása mellett valójában egy egész nap működő „információs terápia”. Segítségével a test újra tud működni.`,

                        `Alkalmazások:

Izmok, ízületek:
                        
                        Nyaki terület(pl.: nyaki fájdalom, merevség, nyaki porckorong problémák, ízületi problémák)

Lapocka, C 7 csigolya rögzítése, Trapéz izom, Hát izom, Deltaizom, Vállízület, Bicepsz, Karizom, Golf könyök, Tenisz könyök, carpaltunel szindróma - csuklótáji alagút szindróma, Lumbágó - derékfájdalom, Scoliosis – gerincferdülés, Csípő, Comb, Térd ízület, Vádli, Sarok, Lúdtalp, Achilles, Boka, Bütyök
                        
                        Nyirok területek: alsó - felső végtagok

Véraláfutások
                        
                        Myalgiás csomók`,

                        `Színterápia a szalagok világában:

                        A színek a pszichés állapotunkat befolyásolják, mindig olyat használunk amilyet Te szívesen használsz.
                        Színek hatása a szervezetre – színterápia
Kék: Nyugalom.Hűsítő, nyugtató, pihentető szín.Görcsoldó, gyulladáscsökkentő hatású.
    Fekete: Erő.Fokozza a piros és a kék szín hatását.
        Bézs: Semleges.Testszínű, semleges hatású, egyáltalán nem feltűnő, esztétikai okokból gyakran használt szín.
            Pink: Lazítás.Nyugtató hatással van a testre, az izmokat is ellazítja.
                Narancs: Serkentés.Meleg, aktív szín, enyhíti az izmok feszültségeit és görcseit.az immunrendszert egészében erősíti, ezzel együtt mozgósítja a test összes öngyógyító erejét.
                    Piros: Aktivitás.melegséget, aktivitást, dinamizmust sugároz.Energetizáló hatású, fokozza a vérkeringést.Legyengült izomzat, lassú vérkeringés esetén kifejezetten ajánlott, gyulladás esetében azonban inkább vállaszunk a hideg színek közül.
                        Lila: Kiegyenlítődés.Egyesíti a kék hűsítő és a piros aktivizáló hatását.
                            Zöld: Harmónia.Relaxációs és nyugtató hatású.Ízületi gyulladásra ajánlott.
                                Citromsárga: Élénkítés.A nap színe, meleget és lelkesedést sugároz, élénkíti az idegrendszert.Jó hatással van a bőrproblémákra, a reumára valamit az ízületi gyulladásra.
                                    Fehér: Tisztaság.A fény, a tisztaság, az egyszerűség jelképe.a fehér nem csak tiszta, de tisztító hatású is.`,
                    ],
                },
            ],
        },
    },
];
