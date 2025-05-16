// pages/impressum.js

import Head from 'next/head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export default function Impressum() {
    return (
        <>
            <Head>
                <title>Impressum | Your Site Name</title>
            </Head>
            <Navbar />
             <main className="impressum-content">
                <h1>Impressum</h1>
                <p>Little Bat Games UG</p>

                <p>Hauptsitz - Berlin Little Bat Games UG Bessemerstrasse 51, 1. OG, 12103 Berlin Sitz Berlin HRB 245273B, Amtsgericht Berlin-Charlottenburg Umsatzsteuer-Identifikationsnummer: DE 1850590</p>

                <p>Geschäftsführer: Cyrus Nemati</p>

                <p>Kontakt: hello@littlebat.games</p>

                <ol>
                <li>Haftungsbeschränkung Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Mit der reinen Nutzung der Website des Anbieters kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande.</li>
                <li>Externe Links Diese Website enthält Verknüpfungen zu Websites Dritter (“externe Links”). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle dieser externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.</li>
                <li>Urheber- und Leistungsschutzrechte Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.</li>
                <li>Datenschutz Diese Seite setzt nur die Cookies, die unabdingbar sind für den Betrieb dieser Website. Wir erfassen keine Statistiken über Website-Besucher:innen.</li>
                <li>Besondere Nutzungsbedingungen Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Nummern 1. bis 4. abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.</li>
                </ol>
            </main>
            <Footer />
        </>
    );
}
