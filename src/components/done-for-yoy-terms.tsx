import { Linkedin, Instagram } from 'lucide-react';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const DoneForYouTerms = () => {
    const locale = useLocale();

    const ContentDE = () => (
        <div style={{ fontFamily: 'sans-serif' }} className="md:p-8 space-y-6">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Allgemeine Geschäftsbedingungen (AGB)</h1>
                <p className="text-lg text-gray-600 mt-2">für „Done-for-you“-Visualisierungsservices</p>
            </div>

            <section>
                <h2 className="text-xl font-semibold mb-3">1. Geltungsbereich</h2>
                <p className="mb-2">(1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der<br />
                    TYPUS Lab UG (haftungsbeschränkt), Im Mediapark 5, 50674 Köln<br />
                    – nachfolgend „Anbieter“ –<br />
                    und ihren Kunden – nachfolgend „Kunde“ –<br />
                    über die Erbringung von KI-gestützten Visualisierungs- und Gestaltungsdienstleistungen.</p>
                <p className="mb-2">(2) Das Angebot richtet sich ausschließlich an Unternehmer im Sinne von § 14 BGB (B2B).</p>
                <p>(3) Abweichende Bedingungen des Kunden finden keine Anwendung, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">2. Vertragsgegenstand</h2>
                <p className="mb-2">(1) Der Anbieter erbringt Dienstleistungen im Bereich der KI-gestützten Erstellung von Architekturvisualisierungen, insbesondere Renderings, Bildgenerierungen und gestalterische Variantenentwicklungen („Leistungen“).</p>
                <p className="mb-2">(2) Die Leistungen können als Jahresabonnement von je 12 und 24 Monaten Laufzeit angeboten werden. Zahlbar:</p>
                <ul className="list-disc ml-6 mb-2">
                    <li>monatlich</li>
                    <li>jährlich (vergünstigt)</li>
                </ul>
                <p>(3) Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot oder Vertrag.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">3. Vertragsschluss</h2>
                <p className="mb-2">(1) Angebote des Anbieters sind freibleibend und unverbindlich.</p>
                <p className="mb-2">(2) Ein Vertrag kommt zustande durch:</p>
                <ul className="list-disc ml-6 mb-2">
                    <li>Annahme eines Angebots durch den Kunden oder</li>
                    <li>Beauftragung über die Plattform / Website des Anbieters.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">4. Leistungserbringung</h2>
                <p className="mb-2">(1) Der Anbieter erbringt die Leistungen nach bestem Wissen und unter Einsatz von KI-Technologien.</p>
                <p className="mb-2">(2) Der Anbieter schuldet keinen bestimmten künstlerischen Erfolg, sondern die vertragsgemäße Durchführung der Leistung.</p>
                <p className="mb-2">(3) Die angegebenen Lieferzeiten sind unverbindlich und sind nur Richtwerte.</p>
                <p>(4) Visualisierungsanfragen sind nur im vereinbarten Umfang enthalten.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">5. Mitwirkungspflichten des Kunden</h2>
                <p className="mb-2">(1) Der Kunde stellt alle erforderlichen Daten, Modelle und Informationen zur Verfügung.</p>
                <p className="mb-2">(2) Der Kunde stellt sicher, dass er über alle erforderlichen Rechte an den bereitgestellten Inhalten verfügt.</p>
                <p>(3) Verzögerungen aufgrund fehlender Mitwirkung gehen nicht zu Lasten des Anbieters.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">6. Nutzungsrechte</h2>
                <p className="mb-2">(1) Nach vollständiger Zahlung erhält der Kunde ein einfaches, nicht-exklusives Nutzungsrecht an den erstellten Visualisierungen.</p>
                <p className="mb-2">(2) Sofern nicht anders vereinbart:</p>
                <ul className="list-disc ml-6 mb-2">
                    <li>dürfen die Inhalte für Präsentations- und Marketingzwecke genutzt werden</li>
                    <li>ist eine Weitergabe an Dritte zulässig im Rahmen des Projekts</li>
                </ul>
                <p>(3) Der Anbieter behält sich das Recht vor, die erstellten Inhalte zu Referenzzwecken zu verwenden, sofern der Kunde nicht ausdrücklich widerspricht.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">7. Vergütung</h2>
                <p className="mb-2">(1) Die Vergütung richtet sich nach dem jeweiligen Angebot.</p>
                <p className="mb-2">(2) Alle Preise verstehen sich netto zzgl. gesetzlicher Umsatzsteuer.</p>
                <p className="mb-2">(3) Bei Abonnements erfolgt die Abrechnung monatlich im Voraus.</p>
                <p>(4) Zahlungen sind innerhalb von 14 Tagen nach Rechnungsstellung fällig, sofern nicht anders vereinbart.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">8. Haftung</h2>
                <p className="mb-2">(1) Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit.</p>
                <p className="mb-2">(2) Bei einfacher Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und begrenzt auf den vertragstypischen, vorhersehbaren Schaden.</p>
                <p className="mb-2">(3) Eine Haftung für:</p>
                <ul className="list-disc ml-6 mb-2">
                    <li>wirtschaftliche Entscheidungen des Kunden</li>
                    <li>bau- oder planungsrelevante Richtigkeit</li>
                    <li>oder rechtliche Zulässigkeit von Entwürfen</li>
                </ul>
                <p>ist ausgeschlossen.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">9. KI-spezifische Bestimmungen</h2>
                <p className="mb-2">(1) Die Leistungen basieren auf KI-Systemen, die variierende Ergebnisse erzeugen können.</p>
                <p className="mb-2">(2) Der Anbieter übernimmt keine Gewähr für:</p>
                <ul className="list-disc ml-6 mb-2">
                    <li>absolute Originalität</li>
                    <li>vollständige Übereinstimmung mit Referenzen</li>
                    <li>oder technische Umsetzbarkeit im Bauwesen</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">10. Gewährleistung</h2>
                <p className="mb-2">(1) Es gelten die gesetzlichen Gewährleistungsrechte.</p>
                <p>(2) Offensichtliche Mängel sind innerhalb von 7 Tagen nach Lieferung anzuzeigen.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">11. Vertragslaufzeit und Kündigung</h2>
                <p className="mb-2">(1) Bei Abonnementmodellen beträgt die Mindestlaufzeit 12 Monate.</p>
                <p>(2) Der Vertrag verlängert sich automatisch, sofern er nicht mit einer Frist von 14 Tagen gekündigt wird.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">12. Widerrufsrecht</h2>
                <p className="mb-2">(1) Verbraucher haben grundsätzlich ein gesetzliches Widerrufsrecht bei Fernabsatzverträgen.</p>
                <p className="mb-2">(2) Das Widerrufsrecht erlischt jedoch gemäß § 356 Abs. 5 BGB bei Verträgen über die Bereitstellung von digitalen Inhalten oder digitalen Dienstleistungen vorzeitig, wenn:</p>
                <ul className="list-disc ml-6 mb-2">
                    <li>der Nutzer ausdrücklich zugestimmt hat, dass mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist begonnen wird, und</li>
                    <li>der Nutzer seine Kenntnis davon bestätigt hat, dass er durch diese Zustimmung mit Beginn der Ausführung sein Widerrufsrecht verliert.</li>
                </ul>
                <p className="mb-2">(3) Mit Abschluss des Abonnements und Nutzung der Plattform typus.ai erklärt sich der Nutzer ausdrücklich damit einverstanden, dass die Leistung unmittelbar bereitgestellt wird und bestätigt zugleich den Verlust des Widerrufsrechts mit Beginn der Nutzung.</p>
                <p className="mb-2">(4) Ein Widerruf nach Beginn der Nutzung der digitalen Dienstleistung ist daher ausgeschlossen.</p>
                <p className="mb-2">(5) Das Recht zur Kündigung des Abonnements bleibt hiervon unberührt.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">13. Vertraulichkeit</h2>
                <p className="mb-2">(1) Beide Parteien verpflichten sich, alle vertraulichen Informationen geheim zu halten.</p>
                <p className="mb-2">(2) Dies gilt insbesondere für:</p>
                <ul className="list-disc ml-6 mb-2">
                    <li>Entwurfsdaten</li>
                    <li>Geschäftsstrategien</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">14. Datenschutz</h2>
                <p className="mb-2">(1) Die Verarbeitung personenbezogener Daten erfolgt gemäß DSGVO.</p>
                <p>(2) Weitere Informationen ergeben sich aus der Datenschutzerklärung des Anbieters.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">15. Schlussbestimmungen</h2>
                <p className="mb-2">(1) Es gilt das Recht der Bundesrepublik Deutschland.</p>
                <p className="mb-2">(2) Gerichtsstand ist der Sitz des Anbieters, sofern gesetzlich zulässig.</p>
                <p>(3) Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
            </section>

            <div className="border-t pt-4 mt-8">
                <p className="text-sm text-gray-600">
                    <strong>Stand:</strong> 23.03.2026
                </p>
            </div>
        </div>
    );

    const ContentEN = () => (
        <div style={{ fontFamily: 'sans-serif' }} className="md:p-8 space-y-6">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">General Terms and Conditions (GTC)</h1>
                <p className="text-lg text-gray-600 mt-2">for "Done-for-you" Visualization Services</p>
            </div>

            <section>
                <h2 className="text-xl font-semibold mb-3">1. Scope</h2>
                <p className="mb-2">(1) These General Terms and Conditions (GTC) govern all contracts between<br />
                    TYPUS Lab UG (haftungsbeschränkt), Im Mediapark 5, 50674 Cologne, Germany<br />
                    – hereinafter referred to as "Provider" –<br />
                    and its customers – hereinafter referred to as "Customer" –<br />
                    regarding the provision of AI-supported visualization and design services.</p>
                <p className="mb-2">(2) The offer is aimed exclusively at entrepreneurs within the meaning of § 14 BGB (B2B).</p>
                <p>(3) Deviating terms and conditions of the Customer shall not apply unless the Provider expressly agrees to their validity in writing.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">2. Subject Matter of the Contract</h2>
                <p className="mb-2">(1) The Provider renders services in the field of AI-supported creation of architectural visualizations, in particular renderings, image generation, and design variant development ("Services").</p>
                <p className="mb-2">(2) The Services can be offered as an annual subscription with terms of 12 and 24 months. Payable:</p>
                <ul className="list-disc ml-6 mb-2">
                    <li>monthly</li>
                    <li>annually (discounted)</li>
                </ul>
                <p>(3) The specific scope of services is detailed in the respective offer or contract.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">3. Conclusion of Contract</h2>
                <p className="mb-2">(1) Offers made by the Provider are subject to change and non-binding.</p>
                <p className="mb-2">(2) A contract is concluded by:</p>
                <ul className="list-disc ml-6 mb-2">
                    <li>Acceptance of an offer by the Customer or</li>
                    <li>Commissioning via the Provider's platform / website.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">4. Service Provision</h2>
                <p className="mb-2">(1) The Provider provides the Services to the best of its knowledge and using AI technologies.</p>
                <p className="mb-2">(2) The Provider does not owe any specific artistic success, but rather the contractual execution of the service.</p>
                <p className="mb-2">(3) Stated delivery times are non-binding and serve only as reference points.</p>
                <p>(4) Visualization requests are included only to the agreed extent.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">5. Customer's Duty to Cooperate</h2>
                <p className="mb-2">(1) The Customer shall provide all necessary data, models, and information.</p>
                <p className="mb-2">(2) The Customer ensures that they possess all necessary rights to the provided content.</p>
                <p>(3) Delays due to a lack of cooperation shall not be at the Provider's expense.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">6. Rights of Use</h2>
                <p className="mb-2">(1) Upon full payment, the Customer receives a simple, non-exclusive right of use to the created visualizations.</p>
                <p className="mb-2">(2) Unless otherwise agreed:</p>
                <ul className="list-disc ml-6 mb-2">
                    <li>the content may be used for presentation and marketing purposes</li>
                    <li>sharing with third parties is permitted within the context of the project</li>
                </ul>
                <p>(3) The Provider reserves the right to use the created content for reference purposes, provided the Customer does not explicitly object.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">7. Remuneration</h2>
                <p className="mb-2">(1) The remuneration is based on the respective offer.</p>
                <p className="mb-2">(2) All prices are net plus statutory value-added tax.</p>
                <p className="mb-2">(3) For subscriptions, billing occurs monthly in advance.</p>
                <p>(4) Payments are due within 14 days of invoicing, unless otherwise agreed.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">8. Liability</h2>
                <p className="mb-2">(1) The Provider is liable without limitation for intent and gross negligence.</p>
                <p className="mb-2">(2) In cases of simple negligence, the Provider is only liable for the breach of essential contractual obligations (cardinal obligations) and limited to the foreseeable damage typical for the contract.</p>
                <p className="mb-2">(3) Liability for:</p>
                <ul className="list-disc ml-6 mb-2">
                    <li>the Customer's economic decisions</li>
                    <li>structural or planning accuracy</li>
                    <li>or legal admissibility of designs</li>
                </ul>
                <p>is excluded.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">9. AI-specific Provisions</h2>
                <p className="mb-2">(1) The Services are based on AI systems that may produce varying results.</p>
                <p className="mb-2">(2) The Provider offers no warranty for:</p>
                <ul className="list-disc ml-6 mb-2">
                    <li>absolute originality</li>
                    <li>complete match with references</li>
                    <li>or technical feasibility in construction</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">10. Warranty</h2>
                <p className="mb-2">(1) Statutory warranty rights apply.</p>
                <p>(2) Obvious defects must be reported within 7 days of delivery.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">11. Contract Duration and Termination</h2>
                <p className="mb-2">(1) For subscription models, the minimum term is 12 months.</p>
                <p>(2) The contract automatically renews unless canceled with a notice period of 14 days.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">12. Right of Withdrawal</h2>
                <p className="mb-2">(1) Consumers generally have a statutory right of withdrawal in distance selling contracts.</p>
                <p className="mb-2">(2) However, in accordance with Section 356 (5) BGB, the right of withdrawal expires prematurely for contracts concerning the provision of digital content or digital services if:</p>
                <ul className="list-disc ml-6 mb-2">
                    <li>the user has expressly agreed that the execution of the contract shall begin before the end of the withdrawal period, and</li>
                    <li>the user has confirmed their knowledge that by agreeing to the commencement of execution, they lose their right of withdrawal.</li>
                </ul>
                <p className="mb-2">(3) By concluding the subscription and using the typus.ai platform, the user expressly agrees that the service will be provided immediately and at the same time confirms the loss of the right of withdrawal upon commencement of use.</p>
                <p className="mb-2">(4) A withdrawal after the commencement of the use of the digital service is therefore excluded.</p>
                <p className="mb-2">(5) The right to terminate the subscription remains unaffected by this.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">13. Confidentiality</h2>
                <p className="mb-2">(1) Both parties commit to keeping all confidential information secret.</p>
                <p className="mb-2">(2) This specifically applies to:</p>
                <ul className="list-disc ml-6 mb-2">
                    <li>Design data</li>
                    <li>Business strategies</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">14. Data Protection</h2>
                <p className="mb-2">(1) The processing of personal data occurs in accordance with the GDPR.</p>
                <p>(2) Further information can be found in the Provider's privacy policy.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">15. Final Provisions</h2>
                <p className="mb-2">(1) The laws of the Federal Republic of Germany apply.</p>
                <p className="mb-2">(2) The place of jurisdiction is the Provider's registered office, where legally permissible.</p>
                <p>(3) Should individual provisions be invalid, the validity of the remaining provisions remains unaffected.</p>
            </section>

            <div className="border-t pt-4 mt-8">
                <p className="text-sm text-gray-600">
                    <strong>Last Updated:</strong> 2026-03-23
                </p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-site-white flex flex-col">
            {/* Header with Logo */}
            <div className="py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <a href="https://app.typus.ai/" className="flex justify-center">
                        <img src={'/typus_logo_black_transparent.png'} alt="Typus Logo" className="h-24 w-auto" />
                    </a>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {locale === 'de' ? <ContentDE /> : <ContentEN />}
                </div>
            </div>
            <div className="flex justify-center">
                <Link href="/" className="bg-black  px-4 py-2 mb-4 text-white font-semibold">
                    Back to Home
                </Link>
            </div>

            {/* Footer */}
            <footer className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center space-y-4">
                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/company/100254850"
                                className="text-gray-600 hover:text-black transition-colors"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/typus.ai/"
                                className="text-gray-600 hover:text-black transition-colors"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram className="h-6 w-6" />
                            </a>
                        </div>

                        {/* Copyright */}
                        <p className="text-sm text-gray-600">
                            COPYRIGHT © 2026 | TYPUS.AI ™
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DoneForYouTerms;