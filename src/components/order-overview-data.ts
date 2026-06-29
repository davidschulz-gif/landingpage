export function getOrderPageData(planId: string, locale: string, isEducational: boolean = false) {
  const isDe = locale === 'de'

  // Common bits
  const agbLink = isDe ? 'https://app.typus.ai/terms' : 'https://app.typus.ai/en/terms'

  if (isEducational) {
    if (planId === 'starter-monthly') {
      return {
        title: isDe ? 'Typus AI STARTER – Vertragsübersicht & Bestellung' : 'Typus AI STARTER – Contract Overview & Order',
        offer: isDe ? 'Angebot: Typus AI STARTER (Akademisch)' : 'Offer: Typus AI STARTER (Academic)',
        audience: isDe ? 'Für Studierende, Dozierende und akademische Zwecke.' : 'For students, educators and academic purposes.',
        pricingTitle: isDe ? 'Preis' : 'Price',
        pricingMain: isDe ? '6,00 € / Monat' : '€6.00 / month',
        pricingList: isDe ? [
          'Monatlich abgerechnet',
          'Zuzüglich 19 % MwSt.',
          'Jederzeit kündbar (keine Mindestlaufzeit)'
        ] : [
          'Billed monthly',
          'Plus 19% VAT',
          'Cancel anytime (no minimum contract term)'
        ],
        pricingDesc: isDe ? 'Kostenpflichtiges SaaS-Abonnement für akademische Architekturvisualisierung.' : 'Paid SaaS subscription for academic architectural visualization.',
        scopeTitle: isDe ? 'Leistungsumfang' : 'Scope of Services',
        scopeDesc: isDe ? [
          'Typus AI STARTER ist eine spezialisierte Softwareplattform für KI-gestützte Architekturvisualisierung im akademischen Umfeld.',
          'Die Plattform ist für Studierende und Lehrende konzipiert, die Visualisierungen für Semesterarbeiten, akademische Projekte und Lernzwecke erstellen.',
          'Die Modelle werden kontinuierlich dem aktuellen Stand der Technik angepasst.'
        ] : [
          'Typus AI STARTER is a specialized software platform for AI-supported architectural visualization in the academic environment.',
          'The platform is designed for students and educators who create visualizations for term papers, academic projects and learning purposes.',
          'The models are continuously adapted to the current state of the art.'
        ],
        creditSystemTitle: isDe ? 'Credit-System (Nutzungsbasis)' : 'Credit System (Usage Basis)',
        creditSystemDesc: isDe ? 'Die Nutzung erfolgt über ein Credit-System. Die folgende Übersicht dient als Richtwert zur Orientierung. Die tatsächliche Ausgabemenge kann je nach Modell, Prompt, Parameter und Systemlast variieren.' : 'Usage is based on a credit system. The following overview serves as a guideline. Actual output volume may vary depending on model, prompt, parameters, and system load.',
        includedCreditsTitle: isDe ? 'Enthaltene Credits' : 'Included Credits',
        includedCreditsMain: isDe ? '50 Credits pro Monat' : '50 Credits per month',
        includedCreditsSub: isDe ? '(Richtwert: typische Nutzung im studentischen Workflow)' : '(Guideline: typical usage in a student workflow)',
        creditNoticeTitle: isDe ? 'Wichtiger Hinweis zur Credit-Nutzung' : 'Important Note on Credit Usage',
        creditNoticeDesc: isDe ? 'Die monatlich enthaltenen Credits stellen ein laufendes Nutzungskontingent für den jeweiligen Abrechnungsmonat dar.' : 'The monthly included credits represent a continuous usage contingent for the respective billing month.',
        creditNoticeListTitle: isDe ? 'Nicht genutzte, im Rahmen des Abonnements enthaltene Credits:' : 'Unused credits included in the subscription:',
        creditNoticeList: isDe ? [
          'werden nicht in den Folgemonat übertragen',
          'können nicht angespart oder kumuliert werden'
        ] : [
          'are not carried over to the following month',
          'cannot be saved or accumulated'
        ],
        creditNoticeFooter: isDe ? 'Die Nutzung ist jeweils auf den laufenden Abrechnungszeitraum beschränkt.' : 'Usage is limited to the current billing period.',
        extraCreditsTitle: isDe ? 'Zusatzcredits (optional)' : 'Additional Credits (optional)',
        extraCreditsDesc: isDe ? 'Bei kurzfristig erhöhtem Bedarf besteht die Möglichkeit, zusätzliche Credits separat zu erwerben.' : 'In the event of short-term increased demand, there is the possibility to purchase additional credits separately.',
        extraCreditsListTitle: isDe ? 'Diese zusätzlich erworbenen Credits:' : 'These additionally purchased credits:',
        extraCreditsList: isDe ? [
          'werden dem Nutzerkonto unmittelbar gutgeschrieben',
          'können flexibel im Rahmen der Plattform genutzt werden',
          'sind über den jeweiligen Abrechnungsmonat hinaus gültig und übertragbar'
        ] : [
          'are credited to the user account immediately',
          'can be used flexibly within the platform',
          'are valid and transferable beyond the respective billing month'
        ],
        extraCreditsFooter: isDe ? 'Nicht genutzte Zusatzcredits bleiben erhalten und können zu einem späteren Zeitpunkt verwendet werden.' : 'Unused additional credits are retained and can be used at a later time.',
        tables: [
          {
            title: isDe ? 'Bilderstellung' : 'Image Generation',
            items: isDe ? ['1K Auflösung → 3 Credits', '2K Auflösung → 9 Credits', '4K Auflösung → 15 Credits'] : ['1K Resolution → 3 Credits', '2K Resolution → 9 Credits', '4K Resolution → 15 Credits']
          },
          {
            title: isDe ? 'Videoerstellung' : 'Video Generation',
            items: isDe ? ['4–5 Sekunden → 65 Credits', '8–10 Sekunden → 125 Credits', '12 Sekunden → 175 Credits'] : ['4-5 Seconds → 65 Credits', '8-10 Seconds → 125 Credits', '12 Seconds → 175 Credits']
          },
          {
            title: 'Upscaling',
            items: ['2x → 20 Credits', '4x → 40 Credits', '8x → 50 Credits', '16x → 80 Credits']
          }
        ],
        usageCategoryTitle: isDe ? 'Nutzungseinordnung' : 'Usage Classification',
        usageCategoryDesc: isDe ? [
          'Die enthaltenen 50 Credits ermöglichen grundlegende Renderings und Ausprobieren im studentischen Alltag.',
          'Die tatsächliche Anzahl generierter Ergebnisse hängt von der Modellwahl und Parametern ab.'
        ] : [
          'The included 50 credits enable basic renderings and experimentation in a student\'s daily routine.',
          'The actual number of generated results depends on the model choice and parameters.'
        ],
        supportTitle: isDe ? 'Support & Hilfe' : 'Support & Help',
        supportDesc: isDe ? [
          'Bei technischen Problemen oder Fragen zur Plattform steht unser E-Mail-Support zur Verfügung.'
        ] : [
          'For technical issues or questions about the platform, our email support is available.'
        ],
        includedFeaturesTitle: isDe ? 'Inklusive Leistungen' : 'Included Services',
        includedFeaturesList: isDe ? [
          '50 Credits / Monat',
          'Zusatzcredits zubuchbar',
          'Unbegrenzte gleichzeitige Jobs',
          'Integrierter Refiner',
          'Jederzeit kündbar',
          'Sichere Zahlung über Stripe',
          'Alle Plugin-Integrationen'
        ] : [
          '50 Credits / month',
          'Optional credit top-ups',
          'Unlimited concurrent jobs',
          'Integrated refiner',
          'Cancel anytime',
          'Secure payment on Stripe',
          'All plugin integrations'
        ],
        fundingTitle: isDe ? 'Hinweise zur Entwicklung' : 'Development Notes',
        fundingDesc: isDe ? [
          'Typus AI wird fortlaufend weiterentwickelt, um modernste KI-Visualisierungstechnologie für die Ausbildung bereitzustellen.'
        ] : [
          'Typus AI is continuously developed to provide state-of-the-art AI visualization technology for education.'
        ],
        termsTitle: isDe ? 'Vertragsbedingungen' : 'Contract Terms',
        termsDesc: isDe ? 'Durch Abschluss des Bestellvorgangs kommt ein Nutzungsvertrag zustande.' : 'By completing the order process, a user agreement is concluded.',
        termsList: isDe ? [
          'Laufzeit: Laufender Monat (monatlich verlängernd)',
          'Kündigung: Jederzeit zum Ende des Abrechnungszeitraums kündbar'
        ] : [
          'Term: Current month (renewing monthly)',
          'Cancellation: Cancel at any time to the end of the billing period'
        ],
        agbTitle: isDe ? 'AGB & Zustimmung' : 'Terms & Consent',
        agbDesc: isDe ? 'Mit der Bestellung bestätigen Sie:' : 'By ordering, you confirm:',
        agbLink: agbLink,
        finishOrderTitle: isDe ? 'Bestellung abschließen' : 'Complete Order',
        checkboxes: [
          isDe ? 'Ich schließe ein kostenpflichtiges Abonnement über 6 € / Monat ab' : 'I conclude a paid subscription for €6 / month',
          isDe ? 'Ich akzeptiere die monatliche Kündbarkeit' : 'I accept that the subscription is cancellable monthly',
          isDe ? 'Ich akzeptiere die AGB' : 'I accept the Terms and Conditions'
        ],
        noteTitle: isDe ? 'Hinweis' : 'Note',
        noteDesc: isDe ? 'Der Zugang zu Typus AI wird nach erfolgreicher Zahlung und Überprüfung des Studentenstatus freigeschaltet.' : 'Access to Typus AI will be unlocked after successful payment and verification of student status.'
      }
    } else if (planId === 'starter-yearly') {
      return {
        title: isDe ? 'Typus AI STARTER – Vertragsübersicht & Bestellung (Jährliche Abrechnung)' : 'Typus AI STARTER – Contract Overview & Order (Annual Billing)',
        offer: isDe ? 'Angebot: Typus AI STARTER (Akademisch)' : 'Offer: Typus AI STARTER (Academic)',
        audience: isDe ? 'Für Studierende, Dozierende und akademische Zwecke.' : 'For students, educators and academic purposes.',
        pricingTitle: isDe ? 'Preis' : 'Price',
        pricingMain: isDe ? '18,00 € / Jahr (entspricht 1,50 € / Monat)' : '€18.00 / year (equivalent to €1.50 / month)',
        pricingList: isDe ? [
          'Jährlich abgerechnet',
          'Zuzüglich 19 % MwSt.',
          'Mindestvertragslaufzeit: 12 Monate'
        ] : [
          'Billed annually',
          'Plus 19% VAT',
          'Minimum contract term: 12 months'
        ],
        pricingDesc: isDe ? 'Kostenpflichtiges SaaS-Abonnement für akademische Architekturvisualisierung.' : 'Paid SaaS subscription for academic architectural visualization.',
        scopeTitle: isDe ? 'Leistungsumfang' : 'Scope of Services',
        scopeDesc: isDe ? [
          'Typus AI STARTER ist eine spezialisierte Softwareplattform für KI-gestützte Architekturvisualisierung im akademischen Umfeld.',
          'Die Plattform ist für Studierende und Lehrende konzipiert, die Visualisierungen für Semesterarbeiten, akademische Projekte und Lernzwecke erstellen.',
          'Die Modelle werden kontinuierlich dem aktuellen Stand der Technik angepasst.'
        ] : [
          'Typus AI STARTER is a specialized software platform for AI-supported architectural visualization in the academic environment.',
          'The platform is designed for students and educators who create visualizations for term papers, academic projects and learning purposes.',
          'The models are continuously adapted to the current state of the art.'
        ],
        creditSystemTitle: isDe ? 'Credit-System (Nutzungsbasis)' : 'Credit System (Usage Basis)',
        creditSystemDesc: isDe ? 'Die Nutzung erfolgt über ein Credit-System. Die folgende Übersicht dient als Richtwert zur Orientierung. Die tatsächliche Ausgabemenge kann je nach Modell, Prompt, Parameter und Systemlast variieren.' : 'Usage is based on a credit system. The following overview serves as a guideline. Actual output volume may vary depending on model, prompt, parameters, and system load.',
        includedCreditsTitle: isDe ? 'Enthaltene Credits' : 'Included Credits',
        includedCreditsMain: isDe ? '50 Credits pro Monat' : '50 Credits per month',
        includedCreditsSub: isDe ? '(Richtwert: typische Nutzung im studentischen Workflow)' : '(Guideline: typical usage in a student workflow)',
        creditNoticeTitle: isDe ? 'Wichtiger Hinweis zur Credit-Nutzung' : 'Important Note on Credit Usage',
        creditNoticeDesc: isDe ? 'Die monatlich enthaltenen Credits stellen ein laufendes Nutzungskontingent für den jeweiligen Abrechnungsmonat dar.' : 'The monthly included credits represent a continuous usage contingent for the respective billing month.',
        creditNoticeListTitle: isDe ? 'Nicht genutzte, im Rahmen des Abonnements enthaltene Credits:' : 'Unused credits included in the subscription:',
        creditNoticeList: isDe ? [
          'werden nicht in den Folgemonat übertragen',
          'können nicht angespart oder kumuliert werden'
        ] : [
          'are not carried over to the following month',
          'cannot be saved or accumulated'
        ],
        creditNoticeFooter: isDe ? 'Die Nutzung ist jeweils auf den laufenden Abrechnungszeitraum beschränkt.' : 'Usage is limited to the current billing period.',
        extraCreditsTitle: isDe ? 'Zusatzcredits (optional)' : 'Additional Credits (optional)',
        extraCreditsDesc: isDe ? 'Bei kurzfristig erhöhtem Bedarf besteht die Möglichkeit, zusätzliche Credits separat zu erwerben.' : 'In the event of short-term increased demand, there is the possibility to purchase additional credits separately.',
        extraCreditsListTitle: isDe ? 'Diese zusätzlich erworbenen Credits:' : 'These additionally purchased credits:',
        extraCreditsList: isDe ? [
          'werden dem Nutzerkonto unmittelbar gutgeschrieben',
          'können flexibel im Rahmen der Plattform genutzt werden',
          'sind über den jeweiligen Abrechnungsmonat hinaus gültig und übertragbar'
        ] : [
          'are credited to the user account immediately',
          'can be used flexibly within the platform',
          'are valid and transferable beyond the respective billing month'
        ],
        extraCreditsFooter: isDe ? 'Nicht genutzte Zusatzcredits bleiben erhalten und können zu einem späteren Zeitpunkt verwendet werden.' : 'Unused additional credits are retained and can be used at a later time.',
        tables: [
          {
            title: isDe ? 'Bilderstellung' : 'Image Generation',
            items: isDe ? ['1K Auflösung → 3 Credits', '2K Auflösung → 9 Credits', '4K Auflösung → 15 Credits'] : ['1K Resolution → 3 Credits', '2K Resolution → 9 Credits', '4K Resolution → 15 Credits']
          },
          {
            title: isDe ? 'Videoerstellung' : 'Video Generation',
            items: isDe ? ['4–5 Sekunden → 65 Credits', '8–10 Sekunden → 125 Credits', '12 Sekunden → 175 Credits'] : ['4-5 Seconds → 65 Credits', '8-10 Seconds → 125 Credits', '12 Seconds → 175 Credits']
          },
          {
            title: 'Upscaling',
            items: ['2x → 20 Credits', '4x → 40 Credits', '8x → 50 Credits', '16x → 80 Credits']
          }
        ],
        usageCategoryTitle: isDe ? 'Nutzungseinordnung' : 'Usage Classification',
        usageCategoryDesc: isDe ? [
          'Die enthaltenen 50 Credits ermöglichen grundlegende Renderings und Ausprobieren im studentischen Alltag.',
          'Die tatsächliche Anzahl generierter Ergebnisse hängt von der Modellwahl und Parametern ab.'
        ] : [
          'The included 50 credits enable basic renderings and experimentation in a student\'s daily routine.',
          'The actual number of generated results depends on the model choice and parameters.'
        ],
        supportTitle: isDe ? 'Support & Hilfe' : 'Support & Help',
        supportDesc: isDe ? [
          'Bei technischen Problemen oder Fragen zur Plattform steht unser E-Mail-Support zur Verfügung.'
        ] : [
          'For technical issues or questions about the platform, our email support is available.'
        ],
        includedFeaturesTitle: isDe ? 'Inklusive Leistungen' : 'Included Services',
        includedFeaturesList: isDe ? [
          '50 Credits / Monat',
          'Zusatzcredits zubuchbar',
          'Unbegrenzte gleichzeitige Jobs',
          'Integrierter Refiner',
          'Jährliche Abrechnung (Ersparnis)',
          'Sichere Zahlung über Stripe',
          'Alle Plugin-Integrationen'
        ] : [
          '50 Credits / month',
          'Optional credit top-ups',
          'Unlimited concurrent jobs',
          'Integrated refiner',
          'Annual billing (Savings)',
          'Secure payment on Stripe',
          'All plugin integrations'
        ],
        fundingTitle: isDe ? 'Hinweise zur Entwicklung' : 'Development Notes',
        fundingDesc: isDe ? [
          'Typus AI wird fortlaufend weiterentwickelt, um modernste KI-Visualisierungstechnologie für die Ausbildung bereitzustellen.'
        ] : [
          'Typus AI is continuously developed to provide state-of-the-art AI visualization technology for education.'
        ],
        termsTitle: isDe ? 'Vertragsbedingungen' : 'Contract Terms',
        termsDesc: isDe ? 'Durch Abschluss des Bestellvorgangs kommt ein Nutzungsvertrag zustande.' : 'By completing the order process, a user agreement is concluded.',
        termsList: isDe ? [
          'Mindestlaufzeit: 12 Monate',
          'Kündigungsfrist: 30 Tage zum Laufzeitende',
          'Automatische Verlängerung um jeweils 12 Monate'
        ] : [
          'Minimum term: 12 months',
          'Cancellation period: 30 days to the end of the term',
          'Automatic renewal for 12 months each'
        ],
        agbTitle: isDe ? 'AGB & Zustimmung' : 'Terms & Consent',
        agbDesc: isDe ? 'Mit der Bestellung bestätigen Sie:' : 'By ordering, you confirm:',
        agbLink: agbLink,
        finishOrderTitle: isDe ? 'Bestellung abschließen' : 'Complete Order',
        checkboxes: [
          isDe ? 'Ich schließe ein kostenpflichtiges Abonnement über 18 € / Jahr ab' : 'I conclude a paid subscription for €18 / year',
          isDe ? 'Ich akzeptiere die Mindestlaufzeit von 12 Monaten' : 'I accept the minimum term of 12 months',
          isDe ? 'Ich akzeptiere die AGB' : 'I accept the Terms and Conditions'
        ],
        noteTitle: isDe ? 'Hinweis' : 'Note',
        noteDesc: isDe ? 'Der Zugang zu Typus AI wird nach erfolgreicher Zahlung und Überprüfung des Studentenstatus freigeschaltet.' : 'Access to Typus AI will be unlocked after successful payment and verification of student status.'
      }
    } else if (planId === 'explorer-monthly') {
      return {
        title: isDe ? 'Typus AI EXPLORER – Vertragsübersicht & Bestellung' : 'Typus AI EXPLORER – Contract Overview & Order',
        offer: isDe ? 'Angebot: Typus AI EXPLORER (Akademisch)' : 'Offer: Typus AI EXPLORER (Academic)',
        audience: isDe ? 'Für Studierende, Dozierende und akademische Zwecke.' : 'For students, educators and academic purposes.',
        pricingTitle: isDe ? 'Preis' : 'Price',
        pricingMain: isDe ? '12,00 € / Monat' : '€12.00 / month',
        pricingList: isDe ? [
          'Monatlich abgerechnet',
          'Zuzüglich 19 % MwSt.',
          'Jederzeit kündbar (keine Mindestlaufzeit)'
        ] : [
          'Billed monthly',
          'Plus 19% VAT',
          'Cancel anytime (no minimum contract term)'
        ],
        pricingDesc: isDe ? 'Kostenpflichtiges SaaS-Abonnement für akademische Architekturvisualisierung.' : 'Paid SaaS subscription for academic architectural visualization.',
        scopeTitle: isDe ? 'Leistungsumfang' : 'Scope of Services',
        scopeDesc: isDe ? [
          'Typus AI EXPLORER ist eine spezialisierte Softwareplattform für KI-gestützte Architekturvisualisierung im akademischen Umfeld.',
          'Die Plattform bietet erweiterte Credits und Funktionen für Studenten und Lehrende für anspruchsvollere Semesterarbeiten und Projekte.',
          'Die Modelle werden kontinuierlich dem aktuellen Stand der Technik angepasst.'
        ] : [
          'Typus AI EXPLORER is a specialized software platform for AI-supported architectural visualization in the academic environment.',
          'The platform offers expanded credits and features for students and educators for more demanding coursework and projects.',
          'The models are continuously adapted to the current state of the art.'
        ],
        creditSystemTitle: isDe ? 'Credit-System (Nutzungsbasis)' : 'Credit System (Usage Basis)',
        creditSystemDesc: isDe ? 'Die Nutzung erfolgt über ein Credit-System. Die folgende Übersicht dient als Richtwert zur Orientierung. Die tatsächliche Ausgabemenge kann je nach Modell, Prompt, Parameter und Systemlast variieren.' : 'Usage is based on a credit system. The following overview serves as a guideline. Actual output volume may vary depending on model, prompt, parameters, and system load.',
        includedCreditsTitle: isDe ? 'Enthaltene Credits' : 'Included Credits',
        includedCreditsMain: isDe ? '150 Credits pro Monat' : '150 Credits per month',
        includedCreditsSub: isDe ? '(Richtwert: typische Nutzung im studentischen Workflow)' : '(Guideline: typical usage in a student workflow)',
        creditNoticeTitle: isDe ? 'Wichtiger Hinweis zur Credit-Nutzung' : 'Important Note on Credit Usage',
        creditNoticeDesc: isDe ? 'Die monatlich enthaltenen Credits stellen ein laufendes Nutzungskontingent für den jeweiligen Abrechnungsmonat dar.' : 'The monthly included credits represent a continuous usage contingent for the respective billing month.',
        creditNoticeListTitle: isDe ? 'Nicht genutzte, im Rahmen des Abonnements enthaltene Credits:' : 'Unused credits included in the subscription:',
        creditNoticeList: isDe ? [
          'werden nicht in den Folgemonat übertragen',
          'können nicht angespart oder kumuliert werden'
        ] : [
          'are not carried over to the following month',
          'cannot be saved or accumulated'
        ],
        creditNoticeFooter: isDe ? 'Die Nutzung ist jeweils auf den laufenden Abrechnungszeitraum beschränkt.' : 'Usage is limited to the current billing period.',
        extraCreditsTitle: isDe ? 'Zusatzcredits (optional)' : 'Additional Credits (optional)',
        extraCreditsDesc: isDe ? 'Bei kurzfristig erhöhtem Bedarf besteht die Möglichkeit, zusätzliche Credits separat zu erwerben.' : 'In the event of short-term increased demand, there is the possibility to purchase additional credits separately.',
        extraCreditsListTitle: isDe ? 'Diese zusätzlich erworbenen Credits:' : 'These additionally purchased credits:',
        extraCreditsList: isDe ? [
          'werden dem Nutzerkonto unmittelbar gutgeschrieben',
          'können flexibel im Rahmen der Plattform genutzt werden',
          'sind über den jeweiligen Abrechnungsmonat hinaus gültig und übertragbar'
        ] : [
          'are credited to the user account immediately',
          'can be used flexibly within the platform',
          'are valid and transferable beyond the respective billing month'
        ],
        extraCreditsFooter: isDe ? 'Nicht genutzte Zusatzcredits bleiben erhalten und können zu einem späteren Zeitpunkt verwendet werden.' : 'Unused additional credits are retained and can be used at a later time.',
        tables: [
          {
            title: isDe ? 'Bilderstellung' : 'Image Generation',
            items: isDe ? ['1K Auflösung → 3 Credits', '2K Auflösung → 9 Credits', '4K Auflösung → 15 Credits'] : ['1K Resolution → 3 Credits', '2K Resolution → 9 Credits', '4K Resolution → 15 Credits']
          },
          {
            title: isDe ? 'Videoerstellung' : 'Video Generation',
            items: isDe ? ['4–5 Sekunden → 65 Credits', '8–10 Sekunden → 125 Credits', '12 Sekunden → 175 Credits'] : ['4-5 Seconds → 65 Credits', '8-10 Seconds → 125 Credits', '12 Seconds → 175 Credits']
          },
          {
            title: 'Upscaling',
            items: ['2x → 20 Credits', '4x → 40 Credits', '8x → 50 Credits', '16x → 80 Credits']
          }
        ],
        usageCategoryTitle: isDe ? 'Nutzungseinordnung' : 'Usage Classification',
        usageCategoryDesc: isDe ? [
          'Die enthaltenen 150 Credits ermöglichen erweiterte Renderings und detailreiche Ausarbeitungen.',
          'Die tatsächliche Anzahl generierter Ergebnisse hängt von der Modellwahl und Parametern ab.'
        ] : [
          'The included 150 credits enable advanced renderings and detailed elaborations.',
          'The actual number of generated results depends on the model choice and parameters.'
        ],
        supportTitle: isDe ? 'Support & Hilfe' : 'Support & Help',
        supportDesc: isDe ? [
          'Bei technischen Problemen oder Fragen zur Plattform steht unser E-Mail-Support zur Verfügung.'
        ] : [
          'For technical issues or questions about the platform, our email support is available.'
        ],
        includedFeaturesTitle: isDe ? 'Inklusive Leistungen' : 'Included Services',
        includedFeaturesList: isDe ? [
          'Alles aus dem Starter-Tarif',
          '150 Credits / Monat',
          '2 gleichzeitige Jobs',
          'Auflösung bis zu 4K',
          'Keine Warteschlange',
          'Jederzeit kündbar',
          'Sichere Zahlung über Stripe'
        ] : [
          'Everything from Starter',
          '150 Credits / month',
          '2 concurrent jobs',
          'Resolution up to 4K',
          'No queue',
          'Cancel anytime',
          'Secure payment on Stripe'
        ],
        fundingTitle: isDe ? 'Hinweise zur Entwicklung' : 'Development Notes',
        fundingDesc: isDe ? [
          'Typus AI wird fortlaufend weiterentwickelt, um modernste KI-Visualisierungstechnologie für die Ausbildung bereitzustellen.'
        ] : [
          'Typus AI is continuously developed to provide state-of-the-art AI visualization technology for education.'
        ],
        termsTitle: isDe ? 'Vertragsbedingungen' : 'Contract Terms',
        termsDesc: isDe ? 'Durch Abschluss des Bestellvorgangs kommt ein Nutzungsvertrag zustande.' : 'By completing the order process, a user agreement is concluded.',
        termsList: isDe ? [
          'Laufzeit: Laufender Monat (monatlich verlängernd)',
          'Kündigung: Jederzeit zum Ende des Abrechnungszeitraums kündbar'
        ] : [
          'Term: Current month (renewing monthly)',
          'Cancellation: Cancel at any time to the end of the billing period'
        ],
        agbTitle: isDe ? 'AGB & Zustimmung' : 'Terms & Consent',
        agbDesc: isDe ? 'Mit der Bestellung bestätigen Sie:' : 'By ordering, you confirm:',
        agbLink: agbLink,
        finishOrderTitle: isDe ? 'Bestellung abschließen' : 'Complete Order',
        checkboxes: [
          isDe ? 'Ich schließe ein kostenpflichtiges Abonnement über 12 € / Monat ab' : 'I conclude a paid subscription for €12 / month',
          isDe ? 'Ich akzeptiere die monatliche Kündbarkeit' : 'I accept that the subscription is cancellable monthly',
          isDe ? 'Ich akzeptiere die AGB' : 'I accept the Terms and Conditions'
        ],
        noteTitle: isDe ? 'Hinweis' : 'Note',
        noteDesc: isDe ? 'Der Zugang zu Typus AI wird nach erfolgreicher Zahlung und Überprüfung des Studentenstatus freigeschaltet.' : 'Access to Typus AI will be unlocked after successful payment and verification of student status.'
      }
    } else if (planId === 'explorer-yearly') {
      return {
        title: isDe ? 'Typus AI EXPLORER – Vertragsübersicht & Bestellung (Jährliche Abrechnung)' : 'Typus AI EXPLORER – Contract Overview & Order (Annual Billing)',
        offer: isDe ? 'Angebot: Typus AI EXPLORER (Akademisch)' : 'Offer: Typus AI EXPLORER (Academic)',
        audience: isDe ? 'Für Studierende, Dozierende und akademische Zwecke.' : 'For students, educators and academic purposes.',
        pricingTitle: isDe ? 'Preis' : 'Price',
        pricingMain: isDe ? '36,00 € / Jahr (entspricht 3,00 € / Monat)' : '€36.00 / year (equivalent to €3.00 / month)',
        pricingList: isDe ? [
          'Jährlich abgerechnet',
          'Zuzüglich 19 % MwSt.',
          'Mindestvertragslaufzeit: 12 Monate'
        ] : [
          'Billed annually',
          'Plus 19% VAT',
          'Minimum contract term: 12 months'
        ],
        pricingDesc: isDe ? 'Kostenpflichtiges SaaS-Abonnement für akademische Architekturvisualisierung.' : 'Paid SaaS subscription for academic architectural visualization.',
        scopeTitle: isDe ? 'Leistungsumfang' : 'Scope of Services',
        scopeDesc: isDe ? [
          'Typus AI EXPLORER ist eine spezialisierte Softwareplattform für KI-gestützte Architekturvisualisierung im akademischen Umfeld.',
          'Die Plattform bietet erweiterte Credits und Funktionen für Studenten und Lehrende für anspruchsvollere Semesterarbeiten und Projekte.',
          'Die Modelle werden kontinuierlich dem aktuellen Stand der Technik angepasst.'
        ] : [
          'Typus AI EXPLORER is a specialized software platform for AI-supported architectural visualization in the academic environment.',
          'The platform offers expanded credits and features for students and educators for more demanding coursework and projects.',
          'The models are continuously adapted to the current state of the art.'
        ],
        creditSystemTitle: isDe ? 'Credit-System (Nutzungsbasis)' : 'Credit System (Usage Basis)',
        creditSystemDesc: isDe ? 'Die Nutzung erfolgt über ein Credit-System. Die folgende Übersicht dient als Richtwert zur Orientierung. Die tatsächliche Ausgabemenge kann je nach Modell, Prompt, Parameter und Systemlast variieren.' : 'Usage is based on a credit system. The following overview serves as a guideline. Actual output volume may vary depending on model, prompt, parameters, and system load.',
        includedCreditsTitle: isDe ? 'Enthaltene Credits' : 'Included Credits',
        includedCreditsMain: isDe ? '150 Credits pro Monat' : '150 Credits per month',
        includedCreditsSub: isDe ? '(Richtwert: typische Nutzung im studentischen Workflow)' : '(Guideline: typical usage in a student workflow)',
        creditNoticeTitle: isDe ? 'Wichtiger Hinweis zur Credit-Nutzung' : 'Important Note on Credit Usage',
        creditNoticeDesc: isDe ? 'Die monatlich enthaltenen Credits stellen ein laufendes Nutzungskontingent für den jeweiligen Abrechnungsmonat dar.' : 'The monthly included credits represent a continuous usage contingent for the respective billing month.',
        creditNoticeListTitle: isDe ? 'Nicht genutzte, im Rahmen des Abonnements enthaltene Credits:' : 'Unused credits included in the subscription:',
        creditNoticeList: isDe ? [
          'werden nicht in den Folgemonat übertragen',
          'können nicht angespart oder kumuliert werden'
        ] : [
          'are not carried over to the following month',
          'cannot be saved or accumulated'
        ],
        creditNoticeFooter: isDe ? 'Die Nutzung ist jeweils auf den laufenden Abrechnungszeitraum beschränkt.' : 'Usage is limited to the current billing period.',
        extraCreditsTitle: isDe ? 'Zusatzcredits (optional)' : 'Additional Credits (optional)',
        extraCreditsDesc: isDe ? 'Bei kurzfristig erhöhtem Bedarf besteht die Möglichkeit, zusätzliche Credits separat zu erwerben.' : 'In the event of short-term increased demand, there is the possibility to purchase additional credits separately.',
        extraCreditsListTitle: isDe ? 'Diese zusätzlich erworbenen Credits:' : 'These additionally purchased credits:',
        extraCreditsList: isDe ? [
          'werden dem Nutzerkonto unmittelbar gutgeschrieben',
          'können flexibel im Rahmen der Plattform genutzt werden',
          'sind über den jeweiligen Abrechnungsmonat hinaus gültig und übertragbar'
        ] : [
          'are credited to the user account immediately',
          'can be used flexibly within the platform',
          'are valid and transferable beyond the respective billing month'
        ],
        extraCreditsFooter: isDe ? 'Nicht genutzte Zusatzcredits bleiben erhalten und können zu einem späteren Zeitpunkt verwendet werden.' : 'Unused additional credits are retained and can be used at a later time.',
        tables: [
          {
            title: isDe ? 'Bilderstellung' : 'Image Generation',
            items: isDe ? ['1K Auflösung → 3 Credits', '2K Auflösung → 9 Credits', '4K Auflösung → 15 Credits'] : ['1K Resolution → 3 Credits', '2K Resolution → 9 Credits', '4K Resolution → 15 Credits']
          },
          {
            title: isDe ? 'Videoerstellung' : 'Video Generation',
            items: isDe ? ['4–5 Sekunden → 65 Credits', '8–10 Sekunden → 125 Credits', '12 Sekunden → 175 Credits'] : ['4-5 Seconds → 65 Credits', '8-10 Seconds → 125 Credits', '12 Seconds → 175 Credits']
          },
          {
            title: 'Upscaling',
            items: ['2x → 20 Credits', '4x → 40 Credits', '8x → 50 Credits', '16x → 80 Credits']
          }
        ],
        usageCategoryTitle: isDe ? 'Nutzungseinordnung' : 'Usage Classification',
        usageCategoryDesc: isDe ? [
          'Die enthaltenen 150 Credits ermöglichen erweiterte Renderings und detailreiche Ausarbeitungen.',
          'Die tatsächliche Anzahl generierter Ergebnisse hängt von der Modellwahl und Parametern ab.'
        ] : [
          'The included 150 credits enable advanced renderings and detailed elaborations.',
          'The actual number of generated results depends on the model choice and parameters.'
        ],
        supportTitle: isDe ? 'Support & Hilfe' : 'Support & Help',
        supportDesc: isDe ? [
          'Bei technischen Problemen oder Fragen zur Plattform steht unser E-Mail-Support zur Verfügung.'
        ] : [
          'For technical issues or questions about the platform, our email support is available.'
        ],
        includedFeaturesTitle: isDe ? 'Inklusive Leistungen' : 'Included Services',
        includedFeaturesList: isDe ? [
          'Alles aus dem Starter-Tarif',
          '150 Credits / Monat',
          '2 gleichzeitige Jobs',
          'Auflösung bis zu 4K',
          'Keine Warteschlange',
          'Jährliche Abrechnung (Ersparnis)',
          'Sichere Zahlung über Stripe'
        ] : [
          'Everything from Starter',
          '150 Credits / month',
          '2 concurrent jobs',
          'Resolution up to 4K',
          'No queue',
          'Annual billing (Savings)',
          'Secure payment on Stripe'
        ],
        fundingTitle: isDe ? 'Hinweise zur Entwicklung' : 'Development Notes',
        fundingDesc: isDe ? [
          'Typus AI wird fortlaufend weiterentwickelt, um modernste KI-Visualisierungstechnologie für die Ausbildung bereitzustellen.'
        ] : [
          'Typus AI is continuously developed to provide state-of-the-art AI visualization technology for education.'
        ],
        termsTitle: isDe ? 'Vertragsbedingungen' : 'Contract Terms',
        termsDesc: isDe ? 'Durch Abschluss des Bestellvorgangs kommt ein Nutzungsvertrag zustande.' : 'By completing the order process, a user agreement is concluded.',
        termsList: isDe ? [
          'Mindestlaufzeit: 12 Monate',
          'Kündigungsfrist: 30 Tage zum Laufzeitende',
          'Automatische Verlängerung um jeweils 12 Monate'
        ] : [
          'Minimum term: 12 months',
          'Cancellation period: 30 days to the end of the term',
          'Automatic renewal for 12 months each'
        ],
        agbTitle: isDe ? 'AGB & Zustimmung' : 'Terms & Consent',
        agbDesc: isDe ? 'Mit der Bestellung bestätigen Sie:' : 'By ordering, you confirm:',
        agbLink: agbLink,
        finishOrderTitle: isDe ? 'Bestellung abschließen' : 'Complete Order',
        checkboxes: [
          isDe ? 'Ich schließe ein kostenpflichtiges Abonnement über 36 € / Jahr ab' : 'I conclude a paid subscription for €36 / year',
          isDe ? 'Ich akzeptiere die Mindestlaufzeit von 12 Monaten' : 'I accept the minimum term of 12 months',
          isDe ? 'Ich akzeptiere die AGB' : 'I accept the Terms and Conditions'
        ],
        noteTitle: isDe ? 'Hinweis' : 'Note',
        noteDesc: isDe ? 'Der Zugang zu Typus AI wird nach erfolgreicher Zahlung und Überprüfung des Studentenstatus freigeschaltet.' : 'Access to Typus AI will be unlocked after successful payment and verification of student status.'
      }
    } else if (planId === 'pro-monthly') {
      return {
        title: isDe ? 'Typus AI PRO (Akademisch) – Vertragsübersicht & Bestellung' : 'Typus AI PRO (Academic) – Contract Overview & Order',
        offer: isDe ? 'Angebot: Typus AI PRO (Akademisch)' : 'Offer: Typus AI PRO (Academic)',
        audience: isDe ? 'Für Studierende, Dozierende und akademische Zwecke.' : 'For students, educators and academic purposes.',
        pricingTitle: isDe ? 'Preis' : 'Price',
        pricingMain: isDe ? '18,00 € / Monat' : '€18.00 / month',
        pricingList: isDe ? [
          'Monatlich abgerechnet',
          'Zuzüglich 19 % MwSt.',
          'Jederzeit kündbar (keine Mindestlaufzeit)'
        ] : [
          'Billed monthly',
          'Plus 19% VAT',
          'Cancel anytime (no minimum contract term)'
        ],
        pricingDesc: isDe ? 'Kostenpflichtiges SaaS-Abonnement für akademische Architekturvisualisierung.' : 'Paid SaaS subscription for academic architectural visualization.',
        scopeTitle: isDe ? 'Leistungsumfang' : 'Scope of Services',
        scopeDesc: isDe ? [
          'Typus AI PRO ist das leistungsstärkste akademische Angebot für KI-gestützte Architekturvisualisierung.',
          'Die Plattform bietet eine hohe Credit-Kapazität und Premium-Features wie die Generierung in bis zu 8K und Live Video-Support für anspruchsvollste akademische Projekte und Ausbildungen.',
          'Die Modelle werden kontinuierlich dem aktuellen Stand der Technik angepasst.'
        ] : [
          'Typus AI PRO is the most powerful academic offer for AI-supported architectural visualization.',
          'The platform offers high credit capacity and premium features like generation up to 8K and live video support for the most demanding academic projects and courses.',
          'The models are continuously adapted to the current state of the art.'
        ],
        creditSystemTitle: isDe ? 'Credit-System (Nutzungsbasis)' : 'Credit System (Usage Basis)',
        creditSystemDesc: isDe ? 'Die Nutzung erfolgt über ein Credit-System. Die folgende Übersicht dient als Richtwert zur Orientierung. Die tatsächliche Ausgabemenge kann je nach Modell, Prompt, Parameter und Systemlast variieren.' : 'Usage is based on a credit system. The following overview serves as a guideline. Actual output volume may vary depending on model, prompt, parameters, and system load.',
        includedCreditsTitle: isDe ? 'Enthaltene Credits' : 'Included Credits',
        includedCreditsMain: isDe ? '1.000 Credits pro Monat' : '1,000 Credits per month',
        includedCreditsSub: isDe ? '(Richtwert: typische Nutzung im studentischen Workflow)' : '(Guideline: typical usage in a student workflow)',
        creditNoticeTitle: isDe ? 'Wichtiger Hinweis zur Credit-Nutzung' : 'Important Note on Credit Usage',
        creditNoticeDesc: isDe ? 'Die monatlich enthaltenen Credits stellen ein laufendes Nutzungskontingent für den jeweiligen Abrechnungsmonat dar.' : 'The monthly included credits represent a continuous usage contingent for the respective billing month.',
        creditNoticeListTitle: isDe ? 'Nicht genutzte, im Rahmen des Abonnements enthaltene Credits:' : 'Unused credits included in the subscription:',
        creditNoticeList: isDe ? [
          'werden nicht in den Folgemonat übertragen',
          'können nicht angespart oder kumuliert werden'
        ] : [
          'are not carried over to the following month',
          'cannot be saved or accumulated'
        ],
        creditNoticeFooter: isDe ? 'Die Nutzung ist jeweils auf den laufenden Abrechnungszeitraum beschränkt.' : 'Usage is limited to the current billing period.',
        extraCreditsTitle: isDe ? 'Zusatzcredits (optional)' : 'Additional Credits (optional)',
        extraCreditsDesc: isDe ? 'Bei kurzfristig erhöhtem Bedarf besteht die Möglichkeit, zusätzliche Credits separat zu erwerben.' : 'In the event of short-term increased demand, there is the possibility to purchase additional credits separately.',
        extraCreditsListTitle: isDe ? 'Diese zusätzlich erworbenen Credits:' : 'These additionally purchased credits:',
        extraCreditsList: isDe ? [
          'werden dem Nutzerkonto unmittelbar gutgeschrieben',
          'können flexibel im Rahmen der Plattform genutzt werden',
          'sind über den jeweiligen Abrechnungsmonat hinaus gültig und übertragbar'
        ] : [
          'are credited to the user account immediately',
          'can be used flexibly within the platform',
          'are valid and transferable beyond the respective billing month'
        ],
        extraCreditsFooter: isDe ? 'Nicht genutzte Zusatzcredits bleiben erhalten und können zu einem späteren Zeitpunkt verwendet werden.' : 'Unused additional credits are retained and can be used at a later time.',
        tables: [
          {
            title: isDe ? 'Bilderstellung' : 'Image Generation',
            items: isDe ? ['1K Auflösung → 3 Credits', '2K Auflösung → 9 Credits', '4K Auflösung → 15 Credits'] : ['1K Resolution → 3 Credits', '2K Resolution → 9 Credits', '4K Resolution → 15 Credits']
          },
          {
            title: isDe ? 'Videoerstellung' : 'Video Generation',
            items: isDe ? ['4–5 Sekunden → 65 Credits', '8–10 Sekunden → 125 Credits', '12 Sekunden → 175 Credits'] : ['4-5 Seconds → 65 Credits', '8-10 Seconds → 125 Credits', '12 Seconds → 175 Credits']
          },
          {
            title: 'Upscaling',
            items: ['2x → 20 Credits', '4x → 40 Credits', '8x → 50 Credits', '16x → 80 Credits']
          }
        ],
        usageCategoryTitle: isDe ? 'Nutzungseinordnung' : 'Usage Classification',
        usageCategoryDesc: isDe ? [
          'Die enthaltenen 1.000 Credits ermöglichen umfangreiche Visualisierungsprojekte und Renderings für Abschlussarbeiten.',
          'Die tatsächliche Anzahl generierter Ergebnisse hängt von der Modellwahl und Parametern ab.'
        ] : [
          'The included 1,000 credits enable extensive visualization projects and renderings for thesis work.',
          'The actual number of generated results depends on the model choice and parameters.'
        ],
        supportTitle: isDe ? 'Premium Support' : 'Premium Support',
        supportDesc: isDe ? [
          'Beinhaltet E-Mail-Support sowie Premium 1:1 Live Video-Anruf Support bei komplexen Fragen.'
        ] : [
          'Includes email support and premium 1:1 live video call support for complex questions.'
        ],
        includedFeaturesTitle: isDe ? 'Inklusive Leistungen' : 'Included Services',
        includedFeaturesList: isDe ? [
          'Alles aus dem Explorer-Tarif',
          '1.000 Credits / Monat',
          '4 gleichzeitige Jobs',
          'Premium Live Video-Support',
          'Erhöhte Generierungsgeschwindigkeit',
          'Auflösung bis zu 8K',
          'Jederzeit kündbar'
        ] : [
          'Everything from Explorer',
          '1,000 Credits / month',
          '4 concurrent jobs',
          'Premium live video call support',
          'Increased generation speed',
          'Resolution up to 8K',
          'Cancel anytime'
        ],
        fundingTitle: isDe ? 'Hinweise zur Entwicklung' : 'Development Notes',
        fundingDesc: isDe ? [
          'Typus AI wird fortlaufend weiterentwickelt, um modernste KI-Visualisierungstechnologie für die Ausbildung bereitzustellen.'
        ] : [
          'Typus AI is continuously developed to provide state-of-the-art AI visualization technology for education.'
        ],
        termsTitle: isDe ? 'Vertragsbedingungen' : 'Contract Terms',
        termsDesc: isDe ? 'Durch Abschluss des Bestellvorgangs kommt ein Nutzungsvertrag zustande.' : 'By completing the order process, a user agreement is concluded.',
        termsList: isDe ? [
          'Laufzeit: Laufender Monat (monatlich verlängernd)',
          'Kündigung: Jederzeit zum Ende des Abrechnungszeitraums kündbar'
        ] : [
          'Term: Current month (renewing monthly)',
          'Cancellation: Cancel at any time to the end of the billing period'
        ],
        agbTitle: isDe ? 'AGB & Zustimmung' : 'Terms & Consent',
        agbDesc: isDe ? 'Mit der Bestellung bestätigen Sie:' : 'By ordering, you confirm:',
        agbLink: agbLink,
        finishOrderTitle: isDe ? 'Bestellung abschließen' : 'Complete Order',
        checkboxes: [
          isDe ? 'Ich schließe ein kostenpflichtiges Abonnement über 18 € / Monat ab' : 'I conclude a paid subscription for €18 / month',
          isDe ? 'Ich akzeptiere die monatliche Kündbarkeit' : 'I accept that the subscription is cancellable monthly',
          isDe ? 'Ich akzeptiere die AGB' : 'I accept the Terms and Conditions'
        ],
        noteTitle: isDe ? 'Hinweis' : 'Note',
        noteDesc: isDe ? 'Der Zugang zu Typus AI wird nach erfolgreicher Zahlung und Überprüfung des Studentenstatus freigeschaltet.' : 'Access to Typus AI will be unlocked after successful payment and verification of student status.'
      }
    } else if (planId === 'pro-yearly') {
      return {
        title: isDe ? 'Typus AI PRO (Akademisch) – Vertragsübersicht & Bestellung (Jährliche Abrechnung)' : 'Typus AI PRO (Academic) – Contract Overview & Order (Annual Billing)',
        offer: isDe ? 'Angebot: Typus AI PRO (Akademisch)' : 'Offer: Typus AI PRO (Academic)',
        audience: isDe ? 'Für Studierende, Dozierende und akademische Zwecke.' : 'For students, educators and academic purposes.',
        pricingTitle: isDe ? 'Preis' : 'Price',
        pricingMain: isDe ? '54,00 € / Jahr (entspricht 4,50 € / Monat)' : '€54.00 / year (equivalent to €4.50 / month)',
        pricingList: isDe ? [
          'Jährlich abgerechnet',
          'Zuzüglich 19 % MwSt.',
          'Mindestvertragslaufzeit: 12 Monate'
        ] : [
          'Billed annually',
          'Plus 19% VAT',
          'Minimum contract term: 12 months'
        ],
        pricingDesc: isDe ? 'Kostenpflichtiges SaaS-Abonnement für akademische Architekturvisualisierung.' : 'Paid SaaS subscription for academic architectural visualization.',
        scopeTitle: isDe ? 'Leistungsumfang' : 'Scope of Services',
        scopeDesc: isDe ? [
          'Typus AI PRO ist das akademische Premium-Angebot für KI-gestützte Architekturvisualisierung.',
          'Die Plattform bietet eine hohe Credit-Kapazität und Premium-Features wie die Generierung in bis zu 8K und Live Video-Support für anspruchsvollste akademische Projekte und Ausbildungen.',
          'Die Modelle werden kontinuierlich dem aktuellen Stand der Technik angepasst.'
        ] : [
          'Typus AI PRO is the academic premium offer for AI-supported architectural visualization.',
          'The platform offers high credit capacity and premium features like generation up to 8K and live video support for the most demanding academic projects and courses.',
          'The models are continuously adapted to the current state of the art.'
        ],
        creditSystemTitle: isDe ? 'Credit-System (Nutzungsbasis)' : 'Credit System (Usage Basis)',
        creditSystemDesc: isDe ? 'Die Nutzung erfolgt über ein Credit-System. Die folgende Übersicht dient als Richtwert zur Orientierung. Die tatsächliche Ausgabemenge kann je nach Modell, Prompt, Parameter und Systemlast variieren.' : 'Usage is based on a credit system. The following overview serves as a guideline. Actual output volume may vary depending on model, prompt, parameters, and system load.',
        includedCreditsTitle: isDe ? 'Enthaltene Credits' : 'Included Credits',
        includedCreditsMain: isDe ? '1.000 Credits pro Monat' : '1,000 Credits per month',
        includedCreditsSub: isDe ? '(Richtwert: typische Nutzung im studentischen Workflow)' : '(Guideline: typical usage in a student workflow)',
        creditNoticeTitle: isDe ? 'Wichtiger Hinweis zur Credit-Nutzung' : 'Important Note on Credit Usage',
        creditNoticeDesc: isDe ? 'Die monatlich enthaltenen Credits stellen ein laufendes Nutzungskontingent für den jeweiligen Abrechnungsmonat dar.' : 'The monthly included credits represent a continuous usage contingent for the respective billing month.',
        creditNoticeListTitle: isDe ? 'Nicht genutzte, im Rahmen des Abonnements enthaltene Credits:' : 'Unused credits included in the subscription:',
        creditNoticeList: isDe ? [
          'werden nicht in den Folgemonat übertragen',
          'können nicht angespart oder kumuliert werden'
        ] : [
          'are not carried over to the following month',
          'cannot be saved or accumulated'
        ],
        creditNoticeFooter: isDe ? 'Die Nutzung ist jeweils auf den laufenden Abrechnungszeitraum beschränkt.' : 'Usage is limited to the current billing period.',
        extraCreditsTitle: isDe ? 'Zusatzcredits (optional)' : 'Additional Credits (optional)',
        extraCreditsDesc: isDe ? 'Bei kurzfristig erhöhtem Bedarf besteht die Möglichkeit, zusätzliche Credits separat zu erwerben.' : 'In the event of short-term increased demand, there is the possibility to purchase additional credits separately.',
        extraCreditsListTitle: isDe ? 'Diese zusätzlich erworbenen Credits:' : 'These additionally purchased credits:',
        extraCreditsList: isDe ? [
          'werden dem Nutzerkonto unmittelbar gutgeschrieben',
          'können flexibel im Rahmen der Plattform genutzt werden',
          'sind über den jeweiligen Abrechnungsmonat hinaus gültig und übertragbar'
        ] : [
          'are credited to the user account immediately',
          'can be used flexibly within the platform',
          'are valid and transferable beyond the respective billing month'
        ],
        extraCreditsFooter: isDe ? 'Nicht genutzte Zusatzcredits bleiben erhalten und können zu einem späteren Zeitpunkt verwendet werden.' : 'Unused additional credits are retained and can be used at a later time.',
        tables: [
          {
            title: isDe ? 'Bilderstellung' : 'Image Generation',
            items: isDe ? ['1K Auflösung → 3 Credits', '2K Auflösung → 9 Credits', '4K Auflösung → 15 Credits'] : ['1K Resolution → 3 Credits', '2K Resolution → 9 Credits', '4K Resolution → 15 Credits']
          },
          {
            title: isDe ? 'Videoerstellung' : 'Video Generation',
            items: isDe ? ['4–5 Sekunden → 65 Credits', '8–10 Sekunden → 125 Credits', '12 Sekunden → 175 Credits'] : ['4-5 Seconds → 65 Credits', '8-10 Seconds → 125 Credits', '12 Seconds → 175 Credits']
          },
          {
            title: 'Upscaling',
            items: ['2x → 20 Credits', '4x → 40 Credits', '8x → 50 Credits', '16x → 80 Credits']
          }
        ],
        usageCategoryTitle: isDe ? 'Nutzungseinordnung' : 'Usage Classification',
        usageCategoryDesc: isDe ? [
          'Die enthaltenen 1.000 Credits ermöglichen umfangreiche Visualisierungsprojekte und Renderings für Abschlussarbeiten.',
          'Die tatsächliche Anzahl generierter Ergebnisse hängt von der Modellwahl und Parametern ab.'
        ] : [
          'The included 1,000 credits enable extensive visualization projects and renderings for thesis work.',
          'The actual number of generated results depends on the model choice and parameters.'
        ],
        supportTitle: isDe ? 'Premium Support' : 'Premium Support',
        supportDesc: isDe ? [
          'Beinhaltet E-Mail-Support sowie Premium 1:1 Live Video-Anruf Support bei komplexen Fragen.'
        ] : [
          'Includes email support and premium 1:1 live video call support for complex questions.'
        ],
        includedFeaturesTitle: isDe ? 'Inklusive Leistungen' : 'Included Services',
        includedFeaturesList: isDe ? [
          'Alles aus dem Explorer-Tarif',
          '1.000 Credits / Monat',
          '4 gleichzeitige Jobs',
          'Premium Live Video-Support',
          'Erhöhte Generierungsgeschwindigkeit',
          'Auflösung bis zu 8K',
          'Jährliche Abrechnung (Ersparnis)'
        ] : [
          'Everything from Explorer',
          '1,000 Credits / month',
          '4 concurrent jobs',
          'Premium live video call support',
          'Increased generation speed',
          'Resolution up to 8K',
          'Annual billing (Savings)'
        ],
        fundingTitle: isDe ? 'Hinweise zur Entwicklung' : 'Development Notes',
        fundingDesc: isDe ? [
          'Typus AI wird fortlaufend weiterentwickelt, um modernste KI-Visualisierungstechnologie für die Ausbildung bereitzustellen.'
        ] : [
          'Typus AI is continuously developed to provide state-of-the-art AI visualization technology for education.'
        ],
        termsTitle: isDe ? 'Vertragsbedingungen' : 'Contract Terms',
        termsDesc: isDe ? 'Durch Abschluss des Bestellvorgangs kommt ein Nutzungsvertrag zustande.' : 'By completing the order process, a user agreement is concluded.',
        termsList: isDe ? [
          'Mindestlaufzeit: 12 Monate',
          'Kündigungsfrist: 30 Tage zum Laufzeitende',
          'Automatische Verlängerung um jeweils 12 Monate'
        ] : [
          'Minimum term: 12 months',
          'Cancellation period: 30 days to the end of the term',
          'Automatic renewal for 12 months each'
        ],
        agbTitle: isDe ? 'AGB & Zustimmung' : 'Terms & Consent',
        agbDesc: isDe ? 'Mit der Bestellung bestätigen Sie:' : 'By ordering, you confirm:',
        agbLink: agbLink,
        finishOrderTitle: isDe ? 'Bestellung abschließen' : 'Complete Order',
        checkboxes: [
          isDe ? 'Ich schließe ein kostenpflichtiges Abonnement über 54 € / Jahr ab' : 'I conclude a paid subscription for €54 / year',
          isDe ? 'Ich akzeptiere die Mindestlaufzeit von 12 Monaten' : 'I accept the minimum term of 12 months',
          isDe ? 'Ich akzeptiere die AGB' : 'I accept the Terms and Conditions'
        ],
        noteTitle: isDe ? 'Hinweis' : 'Note',
        noteDesc: isDe ? 'Der Zugang zu Typus AI wird nach erfolgreicher Zahlung und Überprüfung des Studentenstatus freigeschaltet.' : 'Access to Typus AI will be unlocked after successful payment and verification of student status.'
      }
    }
  }

  if (planId === 'pro-monthly') {
    return {
      title: isDe ? 'Typus AI PRO – Vertragsübersicht & Bestellung' : 'Typus AI PRO – Contract Overview & Order',
      offer: isDe ? 'Angebot: Typus AI PRO' : 'Offer: Typus AI PRO',
      audience: isDe ? 'Für Solo-Selbstständige, Architekt:innen, Designer und kreative Professionals.' : 'For solo self-employed, architects, designers and creative professionals.',
      pricingTitle: isDe ? 'Preis' : 'Price',
      pricingMain: isDe ? '149,00 € / Monat' : '€149.00 / month',
      pricingList: isDe ? [
        'Monatlich abgerechnet',
        'Zuzüglich 19 % MwSt.',
        'Mindestvertragslaufzeit: 12 Monate'
      ] : [
        'Billed monthly',
        'Plus 19% VAT',
        'Minimum contract term: 12 months'
      ],
      pricingDesc: isDe ? 'Kostenpflichtiges SaaS-Abonnement für Architekturvisualisierung.' : 'Paid SaaS subscription for architectural visualization.',
      scopeTitle: isDe ? 'Leistungsumfang' : 'Scope of Services',
      scopeDesc: isDe ? [
        'Typus AI PRO ist eine spezialisierte Softwareplattform für KI-gestützte Architekturvisualisierung.',
        'Die Plattform ist insbesondere für Solo-Selbstständige, freiberuflich tätige Architekt, Designer und kleinere Planungseinheiten konzipiert, die Visualisierungen im Rahmen einzelner Projekte oder klar abgegrenzter Aufgabenstellungen erstellen.',
        'Der Leistungsfokus liegt auf der effizienten Erstellung, Iteration und Verfeinerung von Architekturvisualisierungen innerhalb einzelner Projekte oder überschaubarer Projektkontexte.',
        'Typus AI PRO ist darauf ausgelegt, einen flexiblen kreativen Arbeitsprozess zu unterstützen und eine schnelle Umsetzung sowie Optimierung einzelner Visualisierungsaufgaben zu ermöglichen, ohne den Fokus auf umfangreiche Parallelisierung oder großvolumige Produktionspipelines zu legen.',
        'Die Plattform verwendet KI-Modelle von Drittanbietern, die kontinuierlich entsprechend dem aktuellen Stand der Technik aktualisiert und weiterentwickelt werden. Diese Modelle werden dem Kunden in ihrer jeweils aktuellen Version innerhalb der Plattform bereitgestellt.'
      ] : [
        'Typus AI PRO is a specialized software platform for AI-supported architectural visualization.',
        'The platform is specifically designed for solo self-employed, freelance architects, designers and smaller planning units that create visualizations within individual projects or clearly defined tasks.',
        'The performance focus is on the efficient creation, iteration and refinement of architectural visualizations within individual projects or manageable project contexts.',
        'Typus AI PRO is designed to support a flexible creative work process and enable the rapid implementation and optimization of individual visualization tasks without focusing on extensive parallelization or large-volume production pipelines.',
        'The platform uses third-party AI models that are continuously updated and further developed in accordance with the current state of the art. These models are made available to the customer in their respective current versions within the platform.'
      ],
      creditSystemTitle: isDe ? 'Credit-System (Nutzungsbasis)' : 'Credit System (Usage Basis)',
      creditSystemDesc: isDe ? 'Die Nutzung erfolgt über ein Credit-System. Die folgende Übersicht dient als Richtwert zur Orientierung. Die tatsächliche Ausgabemenge kann je nach Modell, Prompt, Parameter und Systemlast variieren.' : 'Usage is based on a credit system. The following overview serves as a guideline. Actual output volume may vary depending on model, prompt, parameters, and system load.',
      includedCreditsTitle: isDe ? 'Enthaltene Credits' : 'Included Credits',
      includedCreditsMain: isDe ? '1.000 Credits pro Monat' : '1,000 Credits per month',
      includedCreditsSub: isDe ? '(Richtwert: typische Nutzung im Solo-Workflow innerhalb eines Fair-Use-Rahmens der Plattform)' : '(Guideline: typical usage in a solo workflow within a fair use framework of the platform)',
      creditNoticeTitle: isDe ? 'Wichtiger Hinweis zur Credit-Nutzung' : 'Important Note on Credit Usage',
      creditNoticeDesc: isDe ? 'Die monatlich enthaltenen Credits stellen ein laufendes Nutzungskontingent für den jeweiligen Abrechnungsmonat dar.' : 'The monthly included credits represent a continuous usage contingent for the respective billing month.',
      creditNoticeListTitle: isDe ? 'Nicht genutzte, im Rahmen des Abonnements enthaltene Credits:' : 'Unused credits included in the subscription:',
      creditNoticeList: isDe ? [
        'werden nicht in den Folgemonat übertragen',
        'können nicht angespart oder kumuliert werden'
      ] : [
        'are not carried over to the following month',
        'cannot be saved or accumulated'
      ],
      creditNoticeFooter: isDe ? 'Die Nutzung ist jeweils auf den laufenden Abrechnungszeitraum beschränkt.' : 'Usage is limited to the current billing period.',
      extraCreditsTitle: isDe ? 'Zusatzcredits (optional)' : 'Additional Credits (optional)',
      extraCreditsDesc: isDe ? 'Bei kurzfristig erhöhtem oder projektbedingt gesteigertem Bedarf besteht die Möglichkeit, zusätzliche Credits separat zu erwerben.' : 'In the event of short-term increased or project-related demand, there is the possibility to purchase additional credits separately.',
      extraCreditsListTitle: isDe ? 'Diese zusätzlich erworbenen Credits:' : 'These additionally purchased credits:',
      extraCreditsList: isDe ? [
        'werden dem Nutzerkonto unmittelbar gutgeschrieben',
        'können flexibel im Rahmen der Plattform genutzt werden',
        'sind über den jeweiligen Abrechnungsmonat hinaus gültig und übertragbar'
      ] : [
        'are credited to the user account immediately',
        'can be used flexibly within the platform',
        'are valid and transferable beyond the respective billing month'
      ],
      extraCreditsFooter: isDe ? 'Nicht genutzte Zusatzcredits bleiben erhalten und können zu einem späteren Zeitpunkt verwendet werden.' : 'Unused additional credits are retained and can be used at a later time.',
      tables: [
        {
          title: isDe ? 'Bilderstellung' : 'Image Generation',
          items: isDe ? ['1K Auflösung → 3 Credits', '2K Auflösung → 9 Credits', '4K Auflösung → 15 Credits'] : ['1K Resolution → 3 Credits', '2K Resolution → 9 Credits', '4K Resolution → 15 Credits']
        },
        {
          title: isDe ? 'Videoerstellung' : 'Video Generation',
          items: isDe ? ['4–5 Sekunden → 65 Credits', '8–10 Sekunden → 125 Credits', '12 Sekunden → 175 Credits'] : ['4-5 Seconds → 65 Credits', '8-10 Seconds → 125 Credits', '12 Seconds → 175 Credits']
        },
        {
          title: 'Upscaling',
          items: ['2x → 20 Credits', '4x → 40 Credits', '8x → 50 Credits', '16x → 80 Credits']
        }
      ],
      usageCategoryTitle: isDe ? 'Nutzungseinordnung' : 'Usage Classification',
      usageCategoryDesc: isDe ? [
        'Die enthaltenen 1.000 Credits ermöglichen eine effiziente Nutzung und sind für den professionellen Projektbetrieb ausgelegt.',
        'Die Richtwerte entsprechen ca. 80–400 Bildern pro Monat, abhängig von Nutzung, Modellwahl und Einstellungen.',
        'Bei gemischter Nutzung (Bild-, Video- und Upscaling-Anwendungen) reduziert sich die verfügbare Kapazität entsprechend der jeweiligen Credit-Verbrauchsstruktur. Insbesondere Video- und Upscaling-Funktionen führen zu einem erhöhten Ressourcenverbrauch.',
        'Die tatsächliche Anzahl generierbarer Ergebnisse ist abhängig von den jeweils verwendeten Modellen, Parametern und der Systemauslastung.',
        'Die Credit-Abzugssystematik kann sich ändern, wenn sich die technischen Anforderungen der eingesetzten KI-Modelle oder die erforderliche Rechenleistung ändern.'
      ] : [
        'The included 1,000 credits enable efficient usage and are designed for professional project operations.',
        'The guidelines correspond to approx. 80-400 images per month, depending on usage, model selection, and settings.',
        'With mixed usage (image, video, and upscaling applications), the available capacity is reduced according to the respective credit consumption structure. Video and upscaling functions in particular lead to increased resource consumption.',
        'The actual number of generated results depends on the models used, parameters, and system load.',
        'The credit deduction system can change if the technical requirements of the AI models used or the required computing power change.'
      ],
      supportTitle: isDe ? 'Support, Live-Webinare und Zufriedenheitsorientierung' : 'Support, Live Webinars and Satisfaction Orientation',
      supportDesc: isDe ? [
        'Im Rahmen des Typus AI PRO-Abonnements werden regelmäßig Live-Webinare zur Einführung, Schulung und Vertiefung der Plattformnutzung angeboten.',
        'Diese Live-Webinare dienen der strukturierten Vermittlung von Anwendungswissen und Best Practices für die Nutzung von Typus AI im Bereich der Architekturvisualisierung. Gleichzeitig bieten sie den Teilnehmer die Möglichkeit, Fragen zur Anwendung, zu Workflows sowie zu projektbezogenen Einsatzszenarien zu stellen.',
        'Die Webinare finden als Gruppen-Live-Calls mit mehreren Typus AI Kund statt. Hierdurch entsteht ein dynamischer Austausch zwischen den Nutzer, insbesondere hinsichtlich unterschiedlicher Anwendungsfälle, Arbeitsweisen und Projektkontexte.'
      ] : [
        'As part of the Typus AI PRO subscription, live webinars are regularly offered for the introduction, training, and deepening of platform usage.',
        'These live webinars serve the structured transfer of application knowledge and best practices for the use of Typus AI in the field of architectural visualization. At the same time, they offer participants the opportunity to ask questions about the application, workflows, and project-related deployment scenarios.',
        'The webinars take place as group live calls with several Typus AI customers. This creates a dynamic exchange between users, particularly with regard to different use cases, ways of working, and project contexts.'
      ],
      satisfactionTitle: isDe ? 'Hinweis zur Zufriedenheitsorientierung' : 'Note on Satisfaction Orientation',
      satisfactionDesc: isDe ? [
        'Die bereitgestellten Live-Webinare dienen der unterstützenden Begleitung der Nutzer:innen bei der Anwendung von Typus AI.',
        'Sie stellen kein garantiertes Ergebnis im Sinne einer individuellen Erfolgserwartung dar.',
        'Ein Anspruch auf Rückerstattung des Abonnemententgelts aufgrund der Teilnahme oder Nichtteilnahme an Webinaren besteht nicht.'
      ] : [
        'The live webinars provided serve as supportive guidance for users when using Typus AI.',
        'They do not constitute a guaranteed result in the sense of an individual expectation of success.',
        'There is no entitlement to a refund of the subscription fee due to participation or non-participation in webinars.'
      ],
      includedFeaturesTitle: isDe ? 'Inklusive Leistungen' : 'Included Services',
      includedFeaturesList: isDe ? [
        'Erstellung von Bildern in 2K–4K',
        'Bearbeitung per Chat (Prompt-Optimierung & Iteration)',
        'Hochwertige KI-gestützte Rendering-Ergebnisse',
        'Hochskalierung bis zu 8K',
        'E-Mail Support',
        'Onboarding Video-Call (1:1 Einführung)',
        'Live-Webinare (2× pro Monat)'
      ] : [
        'Creation of images in 2K-4K resolution',
        'Chat-based editing (Prompt optimization & iteration)',
        'High-quality AI-supported rendering results',
        'Upscaling up to 8K',
        'E-Mail Support',
        'Onboarding Video Call (1:1 Introduction)',
        'Live Webinars (2x per month)'
      ],
      fundingTitle: isDe ? 'Hinweise zur Entwicklung des Förderprojekts' : 'Notes on the Development of the Funding Project',
      fundingDesc: isDe ? [
        'Ein durch das EFRE-Programm der Europäischen Union für regionale Entwicklung gefördertes Forschungs- und Entwicklungsprojekt befindet sich derzeit in Entwicklung.',
        'Dieses Projekt ist nicht Bestandteil des aktuellen Angebots und wird derzeit nicht vertrieben oder bereitgestellt, da es sich noch in der Entwicklungsphase befindet.',
        'Die geplante Veröffentlichung ist voraussichtlich Ende 2026.',
        'Nach Veröffentlichung kann vorgesehen sein, dass Kunden von Typus AI PRO als Beta-Nutzer Zugang zu diesem System erhalten können.',
        'Details hierzu sind in den AGB geregelt.'
      ] : [
        'A research and development project funded by the ERDF program of the European Union for Regional Development is currently under development.',
        'This project is not part of the current offer and is currently not distributed or provided, as it is still in the development phase.',
        'The planned release is expected to be at the end of 2026.',
        'After release, it may be planned that customers of Typus AI PRO can gain access to this system as beta users.',
        'Details can be found in the Terms and Conditions.'
      ],
      termsTitle: isDe ? 'Vertragsbedingungen' : 'Contract Terms',
      termsDesc: isDe ? 'Durch Abschluss des Bestellvorgangs kommt ein verbindlicher Nutzungsvertrag zustande.' : 'By completing the order process, a binding user agreement is formed.',
      termsList: isDe ? [
        'Mindestlaufzeit: 12 Monate',
        'Kündigungsfrist: 30 Tage zum Laufzeitende',
        'Automatische Verlängerung nach Ablauf der Mindestlaufzeit'
      ] : [
        'Minimum term: 12 months',
        'Cancellation period: 30 days to the end of the term',
        'Automatic renewal after the minimum term expires'
      ],
      agbTitle: isDe ? 'AGB & Zustimmung' : 'Terms & Consent',
      agbDesc: isDe ? 'Mit der Bestellung bestätigen Sie:' : 'By placing the order you confirm:',
      agbList: isDe ? [
        'Zustimmung zu den AGB',
        'Abschluss eines kostenpflichtigen Abonnements',
        'Akzeptanz der Mindestvertragslaufzeit'
      ] : [
        'Consent to the Terms and Conditions',
        'Conclusion of a paid subscription',
        'Acceptance of the minimum contract term'
      ],
      agbLink: agbLink,
      finishOrderTitle: isDe ? 'Bestellung abschließen' : 'Complete Order',
      checkboxes: [
        isDe ? 'Ich schließe ein kostenpflichtiges Abonnement über 149 € / Monat ab' : 'I am concluding a paid subscription for €149 / month',
        isDe ? 'Ich akzeptiere die Mindestvertragslaufzeit von 12 Monaten' : 'I accept the minimum contract term of 12 months',
        isDe ? 'Ich akzeptiere die AGB' : 'I accept the Terms and Conditions'
      ],
      noteTitle: isDe ? 'Hinweis' : 'Note',
      noteDesc: isDe ? 'Diese Bestellung stellt einen verbindlichen Vertragsschluss dar. Der Zugang zu Typus AI PRO wird nach erfolgreicher Zahlung automatisch freigeschaltet.' : 'This order constitutes a binding contract. Access to Typus AI PRO will be unlocked automatically after successful payment.'
    }
  } else if (planId === 'pro-yearly') {
    return {
      title: isDe ? 'Typus AI PRO – Vertragsübersicht & Bestellung (Jährliche Abrechnung)' : 'Typus AI PRO – Contract Overview & Order (Annual Billing)',
      offer: isDe ? 'Angebot: Typus AI PRO' : 'Offer: Typus AI PRO',
      audience: isDe ? 'Für Solo-Selbstständige, freiberuflich tätige Architekt:innen, Designer:innen und kreative Professionals.' : 'For solo self-employed, freelance architects, designers and creative professionals.',
      pricingTitle: isDe ? 'Vergütung' : 'Remuneration',
      pricingMain: isDe ? '€119,17 / Monat' : '€119.17 / month',
      pricingList: isDe ? [
        'Jährliche Abrechnung: €1.430 / Jahr',
        'Regulärer Monatspreis: €149 / Monat (jährlich rabattiert)',
        'Ersparnis: ca. 20 % (€358 pro Jahr)',
        'Zuzüglich 19 % gesetzlicher Umsatzsteuer',
        'Mindestvertragslaufzeit: 12 Monate'
      ] : [
        'Annual billing: €1,430 / year',
        'Regular monthly price: €149 / month (annual discount)',
        'Savings: approx. 20% (€358 per year)',
        'Plus 19% statutory VAT',
        'Minimum contract term: 12 months'
      ],
      pricingDesc: isDe ? 'Es handelt sich um ein kostenpflichtiges Software-as-a-Service-Abonnement zur Nutzung einer KI-gestützten Plattform für Architekturvisualisierung.' : 'This is a paid Software-as-a-Service subscription for the use of an AI-supported platform for architectural visualization.',
      scopeTitle: isDe ? 'Leistungsumfang' : 'Scope of Services',
      scopeDesc: isDe ? [
        'Typus AI PRO ist eine spezialisierte Softwareplattform für KI-gestützte Architekturvisualisierung.',
        'Die Plattform ist insbesondere für Einzelanwender:innen konzipiert, die eigenständig Visualisierungen im Rahmen einzelner Projekte oder klar abgegrenzter Aufgabenstellungen erstellen.',
        'Der Leistungsfokus liegt auf der effizienten Erstellung, Iteration und Verfeinerung von Architekturvisualisierungen innerhalb einzelner Projektkontexte.',
        'Typus AI PRO unterstützt einen flexiblen kreativen Arbeitsprozess und ermöglicht eine schnelle Umsetzung sowie Optimierung einzelner Visualisierungsaufgaben ohne den Fokus auf großvolumige Parallelproduktion.',
        'Die Plattform verwendet KI-Modelle von Drittanbietern, die kontinuierlich entsprechend dem aktuellen Stand der Technik aktualisiert und weiterentwickelt werden. Diese Modelle werden dem Kunden in ihrer jeweils aktuellen Version innerhalb der Plattform bereitgestellt.'
      ] : [
        'Typus AI PRO is a specialized software platform for AI-supported architectural visualization.',
        'The platform is specifically designed for single users who independently create visualizations within individual projects or clearly defined tasks.',
        'The performance focus is on the efficient creation, iteration and refinement of architectural visualizations within individual project contexts.',
        'Typus AI PRO supports a flexible creative work process and enables the rapid implementation and optimization of individual visualization tasks without focusing on large-volume parallel production.',
        'The platform uses third-party AI models that are continuously updated and further developed in accordance with the current state of the art. These models are made available to the customer in their respective current versions within the platform.'
      ],
      creditSystemTitle: isDe ? 'Credit-System (Nutzungsbasis)' : 'Credit System (Usage Basis)',
      creditSystemDesc: isDe ? 'Die Nutzung der Plattform erfolgt auf Basis eines Credit-Systems. Die nachfolgende Übersicht dient ausschließlich der Orientierung. Die tatsächliche Auslastung kann je nach Modell, Parametrierung, Eingabequalität und Systemlast variieren.' : 'Platform usage is based on a credit system. The following overview serves solely for orientation. Actual utilization may vary depending on model, parameterization, input quality, and system load.',
      includedCreditsTitle: isDe ? 'Enthaltene Credits' : 'Included Credits',
      includedCreditsMain: isDe ? '1.000 Credits pro Monat' : '1,000 Credits per month',
      includedCreditsSub: isDe ? '(Richtwert: typische Nutzung im Solo-Workflow innerhalb eines Fair-Use-Rahmens der Plattform)' : '(Guideline: typical usage in a solo workflow within a fair use framework of the platform)',
      creditNoticeTitle: isDe ? 'Wichtiger Hinweis zur Credit-Nutzung' : 'Important Note on Credit Usage',
      creditNoticeDesc: isDe ? 'Die monatlich enthaltenen Credits stellen ein laufendes Nutzungskontingent für den jeweiligen Abrechnungszeitraum dar.' : 'The monthly included credits represent a continuous usage contingent for the respective billing period.',
      creditNoticeListTitle: isDe ? 'Nicht genutzte, im Rahmen des Abonnements enthaltene Credits:' : 'Unused credits included in the subscription:',
      creditNoticeList: isDe ? [
        'werden nicht in den Folgemonat übertragen',
        'können nicht angespart oder kumuliert werden'
      ] : [
        'are not carried over to the following month',
        'cannot be saved or accumulated'
      ],
      creditNoticeFooter: isDe ? 'Die Nutzung ist auf den jeweiligen Abrechnungsmonat beschränkt.' : 'Usage is limited to the current billing month.',
      extraCreditsTitle: isDe ? 'Zusatzcredits (optional)' : 'Additional Credits (optional)',
      extraCreditsDesc: isDe ? 'Bei erhöhtem oder projektbedingt gesteigertem Bedarf besteht die Möglichkeit, zusätzliche Credits separat zu erwerben.' : 'In the event of increased or project-related demand, there is the possibility to purchase additional credits separately.',
      extraCreditsListTitle: isDe ? 'Diese zusätzlich erworbenen Credits:' : 'These additionally purchased credits:',
      extraCreditsList: isDe ? [
        'werden dem Nutzerkonto unmittelbar gutgeschrieben',
        'sind flexibel nutzbar',
        'sind über den Abrechnungszeitraum hinaus gültig und übertragbar',
        'nicht genutzte Zusatzcredits bleiben erhalten'
      ] : [
        'are credited to the user account immediately',
        'are flexibly usable',
        'are valid and transferable beyond the billing period',
        'unused additional credits are retained'
      ],
      extraCreditsFooter: null,
      tables: [
        {
          title: isDe ? 'Bilderstellung' : 'Image Generation',
          items: isDe ? ['1K Auflösung → 3 Credits', '2K Auflösung → 9 Credits', '4K Auflösung → 15 Credits'] : ['1K Resolution → 3 Credits', '2K Resolution → 9 Credits', '4K Resolution → 15 Credits']
        },
        {
          title: isDe ? 'Videoerstellung' : 'Video Generation',
          items: isDe ? ['4–5 Sekunden → 65 Credits', '8–10 Sekunden → 125 Credits', '12 Sekunden → 175 Credits'] : ['4-5 Seconds → 65 Credits', '8-10 Seconds → 125 Credits', '12 Seconds → 175 Credits']
        },
        {
          title: 'Upscaling',
          items: ['2x → 20 Credits', '4x → 40 Credits', '8x → 50 Credits', '16x → 80 Credits']
        }
      ],
      usageCategoryTitle: isDe ? 'Nutzungseinordnung' : 'Usage Classification',
      usageCategoryDesc: isDe ? [
        'Die enthaltenen 1.000 Credits ermöglichen eine effiziente Nutzung der Plattform für Einzelanwender:innen im professionellen Architektur- und Designkontext.',
        'Die Richtwerte entsprechen einer geschätzten Kapazität von ca. 80–400 Bildern pro Monat, abhängig von Nutzung, Modellwahl und Einstellungen.',
        'Bei gemischter Nutzung (Bild-, Video- und Upscaling-Anwendungen) reduziert sich die verfügbare Kapazität entsprechend der jeweiligen Credit-Verbrauchsstruktur.',
        'Die tatsächliche Anzahl generierbarer Ergebnisse ist abhängig von den verwendeten Modellen, Parametern und der Systemauslastung.',
        'Die Credit-Abzugssystematik kann angepasst werden, sofern sich technische Anforderungen der eingesetzten KI-Modelle oder deren Rechenaufwand ändern.'
      ] : [
        'The included 1,000 credits enable efficient use of the platform for single users in a professional architecture and design context.',
        'The guidelines correspond to an estimated capacity of approx. 80-400 images per month, depending on usage, model selection, and settings.',
        'With mixed usage (image, video, and upscaling applications), the available capacity is reduced according to the respective credit consumption structure.',
        'The actual number of generated results depends on the models used, parameters, and system load.',
        'The credit deduction system can be adjusted if the technical requirements of the AI models used or their computing power change.'
      ],
      supportTitle: isDe ? 'Support, Live-Webinare und Zufriedenheitsorientierung' : 'Support, Live Webinars and Satisfaction Orientation',
      supportDesc: isDe ? [
        'Im Rahmen des Typus AI PRO-Abonnements werden regelmäßig Live-Webinare zur Einführung, Schulung und Vertiefung der Plattformnutzung angeboten.',
        'Diese dienen der Vermittlung von Anwendungswissen sowie Best Practices im Bereich der Architekturvisualisierung und ermöglichen den Austausch zu Workflows und Projektanwendungen.',
        'Die Webinare werden als Gruppen-Live-Calls mit mehreren Nutzer:innen durchgeführt.'
      ] : [
        'As part of the Typus AI PRO subscription, live webinars are regularly offered for the introduction, training, and deepening of platform usage.',
        'These serve to impart application knowledge and best practices in the area of architectural visualization and enable the exchange of workflows and project applications.',
        'The webinars are conducted as group live calls with multiple users.'
      ],
      satisfactionTitle: isDe ? 'Hinweis zur Zufriedenheitsorientierung' : 'Note on Satisfaction Orientation',
      satisfactionDesc: isDe ? [
        'Die bereitgestellten Live-Webinare dienen der unterstützenden Begleitung der Nutzer:innen bei der Anwendung von Typus AI.',
        'Sie stellen kein garantiertes Ergebnis im Sinne einer individuellen Erfolgserwartung dar.',
        'Ein Anspruch auf Rückerstattung des Abonnemententgelts aufgrund der Teilnahme oder Nichtteilnahme an Webinaren besteht nicht.'
      ] : [
        'The live webinars provided serve to support users in the application of Typus AI.',
        'They do not represent a guaranteed result in the sense of an individual expectation of success.',
        'There is no claim to a refund of the subscription fee due to participation or non-participation in webinars.'
      ],
      includedFeaturesTitle: isDe ? 'Inklusive Leistungen' : 'Included Services',
      includedFeaturesList: isDe ? [
        'Erstellung von Bildern in 2K–4K',
        'Bearbeitung per Chat (Prompt-Optimierung & Iteration)',
        'Hochwertige KI-gestützte Rendering-Ergebnisse',
        'Hochskalierung bis zu 8K',
        'E-Mail Support',
        'Onboarding Video-Call (1:1 Einführung)',
        'Live-Webinare (2× pro Monat)'
      ] : [
        'Creation of images in 2K-4K resolution',
        'Chat-based editing (Prompt optimization & iteration)',
        'High-quality AI-supported rendering results',
        'Upscaling up to 8K',
        'E-Mail Support',
        'Onboarding Video Call (1:1 Introduction)',
        'Live Webinars (2x per month)'
      ],
      fundingTitle: isDe ? 'Hinweise zur Entwicklung des Förderprojekts' : 'Notes on the Development of the Funding Project',
      fundingDesc: isDe ? [
        'Ein durch das EFRE-Programm der Europäischen Union für regionale Entwicklung gefördertes Forschungs- und Entwicklungsprojekt befindet sich derzeit in Entwicklung.',
        'Dieses Projekt ist nicht Bestandteil des aktuellen Angebots und wird derzeit nicht vertrieben oder bereitgestellt, da es sich noch in der Entwicklungsphase befindet.',
        'Die geplante Veröffentlichung ist voraussichtlich Ende 2026.',
        'Nach Veröffentlichung kann vorgesehen sein, dass Kunden von Typus AI PRO als Beta-Nutzer Zugang zu diesem System erhalten können.',
        'Details hierzu sind in den AGB geregelt.'
      ] : [
        'A research and development project funded by the ERDF program of the European Union for Regional Development is currently under development.',
        'This project is not part of the current offer and is currently not distributed or provided, as it is still in the development phase.',
        'The planned release is expected to be at the end of 2026.',
        'After release, it may be planned that customers of Typus AI PRO can gain access to this system as beta users.',
        'Details can be found in the Terms and Conditions.'
      ],
      termsTitle: isDe ? 'Vertragsbedingungen' : 'Contract Terms',
      termsDesc: isDe ? 'Durch Abschluss des Bestellvorgangs kommt ein verbindlicher Nutzungsvertrag zwischen dem Anbieter und dem Kunden zustande.' : 'By completing the order process, a binding user agreement is concluded between the provider and the customer.',
      termsList: isDe ? [
        'Mindestvertragslaufzeit: 12 Monate',
        'Kündigungsfrist: 30 Tage zum Ende der Laufzeit',
        'Automatische Verlängerung nach Ablauf der Mindestvertragslaufzeit'
      ] : [
        'Minimum contract term: 12 months',
        'Cancellation period: 30 days to the end of the term',
        'Automatic renewal after expiration of the minimum contract term'
      ],
      agbTitle: isDe ? 'AGB & Zustimmung' : 'Terms & Consent',
      agbDesc: isDe ? 'Mit Abschluss der Bestellung bestätigt der Kunde:' : 'By completing the order, the customer confirms:',
      agbList: isDe ? [
        'Abschluss eines kostenpflichtigen SaaS-Abonnements (PRO)',
        'Mindestvertragslaufzeit von 12 Monaten',
        'Kenntnisnahme und Zustimmung zu den AGB'
      ] : [
        'Conclusion of a paid SaaS subscription (PRO)',
        'Minimum contract term of 12 months',
        'Knowledge of and consent to the Terms and Conditions'
      ],
      agbLink: agbLink,
      finishOrderTitle: isDe ? 'Bestellung abschließen' : 'Complete Order',
      checkboxes: [
        isDe ? 'Abschluss eines kostenpflichtigen SaaS-Abonnements (PRO)' : 'Conclusion of a paid SaaS subscription (PRO)',
        isDe ? 'Mindestvertragslaufzeit von 12 Monaten' : 'Minimum contract term of 12 months',
        isDe ? 'Kenntnisnahme und Zustimmung zu den AGB' : 'Knowledge and consent to the Terms and Conditions'
      ],
      noteTitle: isDe ? 'Hinweis' : 'Note',
      noteDesc: isDe ? 'Diese Bestellung stellt einen verbindlichen Vertragsschluss dar. Der Zugang zu Typus AI PRO wird nach erfolgreicher Zahlung automatisch freigeschaltet.' : 'This order constitutes a binding contract. Access to Typus AI PRO will be unlocked automatically after successful payment.'
    }
  } else if (planId === 'business-monthly') {
    return {
      title: isDe ? 'Typus AI BUSINESS – Vertragsübersicht & Bestellung' : 'Typus AI BUSINESS – Contract Overview & Order',
      offer: isDe ? 'Angebot: Typus AI BUSINESS' : 'Offer: Typus AI BUSINESS',
      audience: isDe ? 'Für Architekturbüros, Planungsbüros und Designstudios mit organisatorischer oder projektbezogener Teamstruktur.' : 'For architecture firms, planning offices, and design studios with organizational or project-based team structures.',
      pricingTitle: isDe ? 'Vergütung' : 'Remuneration',
      pricingMain: isDe ? '299,00 € / Monat' : '€299.00 / month',
      pricingList: isDe ? [
        'Monatliche Abrechnung',
        'Zuzüglich 19 % gesetzlicher Umsatzsteuer',
        'Mindestvertragslaufzeit: 12 Monate'
      ] : [
        'Monthly billing',
        'Plus 19% statutory VAT',
        'Minimum contract term: 12 months'
      ],
      pricingDesc: isDe ? 'Es handelt sich um ein kostenpflichtiges Software-as-a-Service-Abonnement zur Nutzung einer KI-gestützten Plattform für Architekturvisualisierung.' : 'This is a paid Software-as-a-Service subscription for the use of an AI-supported platform for architectural visualization.',
      scopeTitle: isDe ? 'Leistungsumfang' : 'Scope of Services',
      scopeDesc: isDe ? [
        'Typus AI BUSINESS ist eine spezialisierte Softwareplattform für KI-gestützte Architekturvisualisierung.',
        'Die Plattform ist insbesondere für professionelle Planungseinheiten konzipiert, die regelmäßig eine hohe Anzahl an Visualisierungen für unterschiedliche Projekte erstellen und mehrere Entwurfs-, Planungs- und Präsentationsprozesse parallel bearbeiten.',
        'Der Leistungsfokus liegt auf der effizienten Erstellung, Iteration und Skalierung von Architekturvisualisierungen über mehrere Projekte hinweg innerhalb eines strukturierten digitalen Workflows.',
        'Typus AI BUSINESS ist darauf ausgelegt, eine hohe Produktionslast effizient zu verarbeiten und parallele Projektanforderungen zu unterstützen, um insbesondere wiederkehrende Visualisierungs- und Überarbeitungsprozesse zu beschleunigen.',
        'Die Plattform verwendet KI-Modelle von Drittanbietern, die kontinuierlich entsprechend dem aktuellen Stand der Technik aktualisiert und weiterentwickelt werden. Diese Modelle werden dem Kunden in ihrer jeweils aktuellen Version innerhalb der Plattform bereitgestellt.',
        'Die Nutzung ist ausschließlich auf Mitarbeiter:innen desselben Unternehmens beschränkt. Eine Weitergabe von Zugangsdaten oder eine Nutzung durch Dritte außerhalb des Unternehmens ist nicht gestattet.'
      ] : [
        'Typus AI BUSINESS is a specialized software platform for AI-supported architectural visualization.',
        'The platform is specifically designed for professional planning units that regularly create a high number of visualizations for different projects and process several design, planning, and presentation processes in parallel.',
        'The performance focus is on the efficient creation, iteration, and scaling of architectural visualizations across multiple projects within a structured digital workflow.',
        'Typus AI BUSINESS is designed to process a high production load efficiently and support parallel project requirements in order to accelerate recurring visualization and revision processes in particular.',
        'The platform uses third-party AI models that are continuously updated and further developed in accordance with the current state of the art. These models are made available to the customer in their respective current versions within the platform.',
        'Usage is strictly limited to employees of the same company. Sharing access data or use by third parties outside the company is not permitted.'
      ],
      creditSystemTitle: isDe ? 'Credit-System (Nutzungsbasis)' : 'Credit System (Usage Basis)',
      creditSystemDesc: isDe ? 'Die Nutzung der Plattform erfolgt auf Basis eines Credit-Systems. Die nachfolgende Übersicht dient ausschließlich der Orientierung. Die tatsächliche Auslastung kann je nach Modell, Parametrierung, Eingabequalität und Systemlast variieren.' : 'Platform usage is based on a credit system. The following overview serves solely for orientation. Actual utilization may vary depending on model, parameterization, input quality, and system load.',
      includedCreditsTitle: isDe ? 'Enthaltene Credits' : 'Included Credits',
      includedCreditsMain: isDe ? '5.000 Credits pro Monat' : '5,000 Credits per month',
      includedCreditsSub: isDe ? '(Richtwert: hohe Nutzungskapazität innerhalb eines Fair-Use-Rahmens der Plattform)' : '(Guideline: high usage capacity within a fair use framework of the platform)',
      creditNoticeTitle: isDe ? 'Wichtiger Hinweis zur Credit-Nutzung' : 'Important Note on Credit Usage',
      creditNoticeDesc: isDe ? 'Die monatlich enthaltenen Credits stellen ein laufendes Nutzungskontingent für den jeweiligen Abrechnungsmonat dar.' : 'The monthly included credits represent a continuous usage contingent for the respective billing month.',
      creditNoticeListTitle: isDe ? 'Nicht genutzte, im Rahmen des Abonnements enthaltene Credits:' : 'Unused credits included in the subscription:',
      creditNoticeList: isDe ? [
        'werden nicht in den Folgemonat übertragen',
        'können nicht angespart oder kumuliert werden'
      ] : [
        'are not carried over to the following month',
        'cannot be saved or accumulated'
      ],
      creditNoticeFooter: isDe ? 'Die Nutzung ist jeweils auf den laufenden Abrechnungszeitraum beschränkt.' : 'Usage is limited to the current billing period.',
      extraCreditsTitle: isDe ? 'Zusatzcredits (optional)' : 'Additional Credits (optional)',
      extraCreditsDesc: isDe ? 'Bei kurzfristig erhöhtem oder projektbedingt gesteigertem Bedarf besteht die Möglichkeit, zusätzliche Credits separat zu erwerben.' : 'In the event of short-term increased or project-related demand, there is the possibility to purchase additional credits separately.',
      extraCreditsListTitle: isDe ? 'Diese zusätzlich erworbenen Credits:' : 'These additionally purchased credits:',
      extraCreditsList: isDe ? [
        'werden dem Nutzerkonto unmittelbar gutgeschrieben',
        'können flexibel im Rahmen der Plattform genutzt werden',
        'sind über den jeweiligen Abrechnungsmonat hinaus gültig und übertragbar'
      ] : [
        'are credited to the user account immediately',
        'can be used flexibly within the platform',
        'are valid and transferable beyond the respective billing month'
      ],
      extraCreditsFooter: isDe ? 'Nicht genutzte Zusatzcredits bleiben erhalten und können zu einem späteren Zeitpunkt verwendet werden.' : 'Unused additional credits are retained and can be used at a later time.',
      tables: [
        {
          title: isDe ? 'Bilderstellung' : 'Image Generation',
          items: isDe ? ['1K Auflösung → 3 Credits', '2K Auflösung → 9 Credits', '4K Auflösung → 15 Credits'] : ['1K Resolution → 3 Credits', '2K Resolution → 9 Credits', '4K Resolution → 15 Credits']
        },
        {
          title: isDe ? 'Videoerstellung' : 'Video Generation',
          items: isDe ? ['4–5 Sekunden → 65 Credits', '8–10 Sekunden → 125 Credits', '12 Sekunden → 175 Credits'] : ['4-5 Seconds → 65 Credits', '8-10 Seconds → 125 Credits', '12 Seconds → 175 Credits']
        },
        {
          title: 'Upscaling',
          items: ['2x → 20 Credits', '4x → 40 Credits', '8x → 50 Credits', '16x → 80 Credits']
        }
      ],
      usageCategoryTitle: isDe ? 'Nutzungseinordnung' : 'Usage Classification',
      usageCategoryDesc: isDe ? [
        'Die enthaltenen 5.000 Credits ermöglichen eine deutlich erhöhte Nutzung gegenüber dem PRO-Tarif und sind für den professionellen Büro- und Projektbetrieb ausgelegt.',
        'Die Richtwerte entsprechen einer geschätzten Kapazität von ca. 330–1.100 Bildern pro Monat, abhängig von Nutzung, Modellwahl und Einstellungen.',
        'Bei gemischter Nutzung (Bild-, Video- und Upscaling-Anwendungen) reduziert sich die verfügbare Kapazität entsprechend der jeweiligen Credit-Verbrauchsstruktur. Insbesondere Video- und Upscaling-Funktionen führen zu einem erhöhten Ressourcenverbrauch.',
        'Die tatsächliche Anzahl generierbarer Ergebnisse ist abhängig von den jeweils verwendeten Modellen, Parametern und der Systemauslastung.',
        'Die Credit-Abzugssystematik kann angepasst werden, sofern sich technische Anforderungen der eingesetzten KI-Modelle oder deren Rechenaufwand ändern.'
      ] : [
        'The included 5,000 credits enable significantly increased usage compared to the PRO tariff and are designed for professional office and project operations.',
        'The guidelines correspond to an estimated capacity of approx. 330-1,100 images per month, depending on usage, model selection, and settings.',
        'With mixed usage (image, video, and upscaling applications), the available capacity is reduced according to the respective credit consumption structure. Video and upscaling functions in particular lead to increased resource consumption.',
        'The actual number of generated results depends on the models used, parameters, and system load.',
        'The credit deduction system can be adjusted if the technical requirements of the AI models used or their computing power change.'
      ],
      supportTitle: isDe ? 'Support, Live-Webinare und Zufriedenheitsorientierung' : 'Support, Live Webinars and Satisfaction Orientation',
      supportDesc: isDe ? [
        'Im Rahmen des Typus AI PRO- und BUSINESS-Abonnements werden regelmäßig Live-Webinare zur Einführung, Schulung und Vertiefung der Plattformnutzung angeboten.',
        'Diese Live-Webinare dienen der strukturierten Vermittlung von Anwendungswissen und Best Practices für die Nutzung von Typus AI im Bereich der Architekturvisualisierung. Gleichzeitig bieten sie den Teilnehmer die Möglichkeit, Fragen zur Anwendung, zu Workflows sowie zu projektbezogenen Einsatzszenarien zu stellen.',
        'Die Webinare finden als Gruppen-Live-Calls mit mehreren Typus AI Kund statt. Hierdurch entsteht ein dynamischer Austausch zwischen den Nutzer, insbesondere hinsichtlich unterschiedlicher Anwendungsfälle, Arbeitsweisen und Projektkontexte.'
      ] : [
        'As part of the Typus AI PRO and BUSINESS subscriptions, live webinars are regularly offered for the introduction, training, and deepening of platform usage.',
        'These live webinars serve the structured transfer of application knowledge and best practices for the use of Typus AI in the field of architectural visualization. At the same time, they offer participants the opportunity to ask questions about the application, workflows, and project-related deployment scenarios.',
        'The webinars take place as group live calls with several Typus AI customers. This creates a dynamic exchange between users, particularly with regard to different use cases, ways of working, and project contexts.'
      ],
      satisfactionTitle: isDe ? 'BUSINESS-Erweiterung (1:1 Live Sessions)' : 'BUSINESS Extension (1:1 Live Sessions)',
      satisfactionDesc: isDe ? [
        'Im BUSINESS-Tarif werden die Live-Webinare durch zusätzliche individuelle 1:1 Live-Video-Sessions ergänzt.',
        'Diese Einzelsessions ermöglichen eine vertiefte, projektspezifische Betreuung sowie die gezielte Besprechung individueller Workflows und Anwendungsfragen.',
        'Insbesondere bei sensiblen oder vertraulichen Projekten besteht die Möglichkeit, diese Themen im Rahmen eines privaten 1:1 Live-Calls außerhalb der Gruppenformate zu behandeln.'
      ] : [
        'In the BUSINESS tariff, the live webinars are supplemented by additional individual 1:1 live video sessions.',
        'These individual sessions enable in-depth, project-specific support as well as the targeted discussion of individual workflows and application questions.',
        'Particularly for sensitive or confidential projects, it is possible to discuss these topics in a private 1:1 live call outside the group formats.'
      ],
      includedFeaturesTitle: isDe ? 'Inklusive Leistungen' : 'Included Services',
      includedFeaturesList: isDe ? [
        'Erstellen von Bildern in 2K-4K Bildauflösung',
        'Bearbeitung per Chat (Prompt-Optimierung und Iteration)',
        'Hochwertige KI-gestützte Rendering-Ergebnisse',
        'Hochskalierung bis zu 8K',
        'E-Mail Support',
        'Onboarding Video-Call (1:1 Einführung)',
        'Live-Webinare (2× pro Monat)',
        '1:1 Live Video Session (1× pro Monat)'
      ] : [
        'Creation of images in 2K-4K resolution',
        'Chat-based editing (Prompt optimization & iteration)',
        'High-quality AI-supported rendering results',
        'Upscaling up to 8K',
        'E-Mail Support',
        'Onboarding Video Call (1:1 Introduction)',
        'Live Webinars (2x per month)',
        '1:1 Live Video Session (1x per month)'
      ],
      fundingTitle: isDe ? 'Hinweise zur Entwicklung des Förderprojekts' : 'Notes on the Development of the Funding Project',
      fundingDesc: isDe ? [
        'Ein durch das EFRE-Programm der Europäischen Union für regionale Entwicklung gefördertes Forschungs- und Entwicklungsprojekt befindet sich derzeit in Entwicklung.',
        'Dieses Projekt ist nicht Bestandteil des aktuellen Angebots und wird derzeit nicht vertrieben oder bereitgestellt, da es sich noch in der Entwicklungsphase befindet.',
        'Die geplante Veröffentlichung ist voraussichtlich Ende 2026.',
        'Nach Veröffentlichung kann vorgesehen sein, dass Kunden von Typus AI PRO als Beta-Nutzer Zugang zu diesem System erhalten können.',
        'Details hierzu sind in den AGB geregelt.'
      ] : [
        'A research and development project funded by the ERDF program of the European Union for Regional Development is currently under development.',
        'This project is not part of the current offer and is currently not distributed or provided, as it is still in the development phase.',
        'The planned release is expected to be at the end of 2026.',
        'After release, it may be planned that customers of Typus AI PRO can gain access to this system as beta users.',
        'Details can be found in the Terms and Conditions.'
      ],
      termsTitle: isDe ? 'Vertragsbedingungen' : 'Contract Terms',
      termsDesc: isDe ? 'Durch Abschluss des Bestellvorgangs kommt ein verbindlicher Nutzungsvertrag zwischen dem Anbieter und dem Kunden zustande.' : 'By completing the order process, a binding user agreement is concluded between the provider and the customer.',
      termsList: isDe ? [
        'Mindestvertragslaufzeit: 12 Monate',
        'Kündigungsfrist: 30 Tage zum Ende der Laufzeit',
        'Automatische Verlängerung nach Ablauf der Mindestvertragslaufzeit'
      ] : [
        'Minimum contract term: 12 months',
        'Cancellation period: 30 days to the end of the term',
        'Automatic renewal after expiration of the minimum contract term'
      ],
      agbTitle: isDe ? 'AGB & Zustimmung' : 'Terms & Consent',
      agbDesc: isDe ? 'Mit Abschluss der Bestellung bestätigt der Kunde:' : 'By completing the order, the customer confirms:',
      agbList: isDe ? [
        'Abschluss eines kostenpflichtigen SaaS-Abonnements (BUSINESS)',
        'Mindestvertragslaufzeit von 12 Monaten',
        'Kenntnisnahme und Zustimmung zu den AGB'
      ] : [
        'Conclusion of a paid SaaS subscription (BUSINESS)',
        'Minimum contract term of 12 months',
        'Knowledge of and consent to the Terms and Conditions'
      ],
      agbLink: agbLink,
      finishOrderTitle: isDe ? 'Bestellung abschließen' : 'Complete Order',
      checkboxes: [
        isDe ? 'Abschluss eines kostenpflichtigen SaaS-Abonnements (BUSINESS)' : 'Conclusion of a paid SaaS subscription (BUSINESS)',
        isDe ? 'Mindestvertragslaufzeit von 12 Monaten' : 'Minimum contract term of 12 months',
        isDe ? 'Kenntnisnahme und Zustimmung zu den AGB' : 'Knowledge and consent to the Terms and Conditions'
      ],
      noteTitle: isDe ? 'Hinweis' : 'Note',
      noteDesc: isDe ? 'Diese Bestellung stellt einen verbindlichen Vertragsschluss dar. Der Zugang zu Typus AI BUSINESS wird nach erfolgreicher Zahlung automatisch freigeschaltet.' : 'This order constitutes a binding contract. Access to Typus AI BUSINESS will be unlocked automatically after successful payment.'
    }
  } else if (planId === 'business-yearly') {
    return {
      title: isDe ? 'Typus AI BUSINESS – Vertragsübersicht & Bestellung (Jährliche Abrechnung)' : 'Typus AI BUSINESS – Contract Overview & Order (Annual Billing)',
      offer: isDe ? 'Angebot: Typus AI BUSINESS' : 'Offer: Typus AI BUSINESS',
      audience: isDe ? 'Für Architekturbüros, Planungsbüros und Designstudios mit organisatorischer oder projektbezogener Struktur.' : 'For architecture firms, planning offices, and design studios with organizational or project-based structures.',
      pricingTitle: isDe ? 'Vergütung' : 'Remuneration',
      pricingMain: isDe ? '€239,17 / Monat (jährlich abgerechnet)' : '€239.17 / month (billed annually)',
      pricingList: isDe ? [
        '€2.870 / Jahr Gesamtbetrag',
        'Regulärer Monatspreis: €299 (monatliche Alternative)',
        'Ersparnis: ca. 20 % (€718 pro Jahr)',
        'Zuzüglich 19 % gesetzlicher Umsatzsteuer',
        'Mindestvertragslaufzeit: 12 Monate',
        'Abrechnung erfolgt jährlich im Voraus'
      ] : [
        '€2,870 / year total amount',
        'Regular monthly price: €299 (monthly alternative)',
        'Savings: approx. 20% (€718 per year)',
        'Plus 19% statutory VAT',
        'Minimum contract term: 12 months',
        'Billing occurs annually in advance'
      ],
      pricingDesc: isDe ? 'Es handelt sich um ein kostenpflichtiges Software-as-a-Service-Abonnement zur Nutzung einer KI-gestützten Plattform für Architekturvisualisierung.' : 'This is a paid Software-as-a-Service subscription for the use of an AI-supported platform for architectural visualization.',
      scopeTitle: isDe ? 'Leistungsumfang' : 'Scope of Services',
      scopeDesc: isDe ? [
        'Typus AI BUSINESS ist eine spezialisierte Softwareplattform für KI-gestützte Architekturvisualisierung.',
        'Die Plattform ist insbesondere für Architekturbüros, Planungsbüros und Designstudios konzipiert, die regelmäßig eine hohe Anzahl an Visualisierungen für unterschiedliche Projekte erstellen und mehrere Entwurfs-, Planungs- und Präsentationsprozesse parallel bearbeiten.',
        'Der Leistungsfokus liegt auf der effizienten Erstellung, Iteration und Skalierung von Architekturvisualisierungen über mehrere Projekte hinweg innerhalb eines strukturierten digitalen Workflows.',
        'Typus AI BUSINESS ist darauf ausgelegt, eine hohe Produktionslast effizient zu verarbeiten und parallele Projektanforderungen zu unterstützen, um insbesondere wiederkehrende Visualisierungs- und Überarbeitungsprozesse zu beschleunigen.',
        'Die Plattform verwendet KI-Modelle von Drittanbietern, die kontinuierlich entsprechend dem aktuellen Stand der Technik aktualisiert und weiterentwickelt werden. Diese Modelle werden dem Kunden in jeweils aktueller Version innerhalb der Plattform bereitgestellt.'
      ] : [
        'Typus AI BUSINESS is a specialized software platform for AI-supported architectural visualization.',
        'The platform is specifically designed for architecture firms, planning offices, and design studios that regularly create a high number of visualizations for different projects and process several design, planning, and presentation processes in parallel.',
        'The performance focus is on the efficient creation, iteration, and scaling of architectural visualizations across multiple projects within a structured digital workflow.',
        'Typus AI BUSINESS is designed to process a high production load efficiently and support parallel project requirements in order to accelerate recurring visualization and revision processes in particular.',
        'The platform uses third-party AI models that are continuously updated and further developed in accordance with the current state of the art. These models are made available to the customer in their respective current versions within the platform.'
      ],
      creditSystemTitle: isDe ? 'Nutzungsumfang' : 'Scope of Use',
      creditSystemDesc: null,
      includedCreditsTitle: isDe ? 'Enthaltene Credits' : 'Included Credits',
      includedCreditsMain: isDe ? '5.000 Credits pro Monat' : '5,000 Credits per month',
      includedCreditsSub: isDe ? 'Richtwert: „Unbegrenzt“ innerhalb eines Fair-Use-Rahmens der Plattformkapazitäten' : 'Guideline: "Unlimited" within a fair use framework of platform capacities',
      creditNoticeTitle: isDe ? 'Wichtiger Hinweis zur Credit-Nutzung' : 'Important Note on Credit Usage',
      creditNoticeDesc: isDe ? 'Die monatlich enthaltenen Credits stellen ein laufendes Nutzungskontingent für den jeweiligen Abrechnungszeitraum dar.' : 'The monthly included credits represent a continuous usage contingent for the respective billing period.',
      creditNoticeListTitle: isDe ? 'Nicht genutzte Credits:' : 'Unused credits:',
      creditNoticeList: isDe ? [
        'werden nicht in den Folgemonat übertragen',
        'können nicht angespart oder kumuliert werden'
      ] : [
        'are not carried over to the following month',
        'cannot be saved or accumulated'
      ],
      creditNoticeFooter: isDe ? 'Die Nutzung ist auf den jeweiligen Abrechnungszeitraum beschränkt.' : 'Usage is limited to the current billing period.',
      extraCreditsTitle: isDe ? 'Zusatzcredits (optional)' : 'Additional Credits (optional)',
      extraCreditsDesc: isDe ? 'Bei erhöhtem oder projektbedingt gesteigertem Bedarf besteht die Möglichkeit, zusätzliche Credits separat zu erwerben.' : 'In the event of increased or project-related demand, there is the possibility to purchase additional credits separately.',
      extraCreditsListTitle: isDe ? 'Diese zusätzlich erworbenen Credits:' : 'These additionally purchased credits:',
      extraCreditsList: isDe ? [
        'werden dem Nutzerkonto unmittelbar gutgeschrieben',
        'sind flexibel nutzbar',
        'sind über den Abrechnungszeitraum hinaus gültig und übertragbar',
        'nicht genutzte Zusatzcredits bleiben erhalten'
      ] : [
        'are credited to the user account immediately',
        'are flexibly usable',
        'are valid and transferable beyond the billing period',
        'unused additional credits are retained'
      ],
      extraCreditsFooter: null,
      tables: [
        {
          title: isDe ? 'Bilderstellung' : 'Image Generation',
          items: isDe ? ['1K Auflösung → 3 Credits', '2K Auflösung → 9 Credits', '4K Auflösung → 15 Credits'] : ['1K Resolution → 3 Credits', '2K Resolution → 9 Credits', '4K Resolution → 15 Credits']
        },
        {
          title: isDe ? 'Videoerstellung' : 'Video Generation',
          items: isDe ? ['4–5 Sekunden → 65 Credits', '8–10 Sekunden → 125 Credits', '12 Sekunden → 175 Credits'] : ['4-5 Seconds → 65 Credits', '8-10 Seconds → 125 Credits', '12 Seconds → 175 Credits']
        },
        {
          title: 'Upscaling',
          items: ['2x → 20 Credits', '4x → 40 Credits', '8x → 50 Credits', '16x → 80 Credits']
        }
      ],
      usageCategoryTitle: isDe ? 'Nutzungseinordnung' : 'Usage Classification',
      usageCategoryDesc: isDe ? [
        'Die enthaltenen 5.000 Credits ermöglichen eine deutlich erhöhte Nutzung gegenüber dem PRO-Tarif und sind für den professionellen Büro- und Projektbetrieb ausgelegt.',
        'Die Richtwerte entsprechen einer geschätzten Kapazität von ca. 330–1.100 Bildern pro Monat, abhängig von Nutzung, Modellwahl und Einstellungen.',
        'Bei gemischter Nutzung reduziert sich die verfügbare Kapazität entsprechend der jeweiligen Credit-Verbrauchsstruktur.',
        'Die tatsächliche Anzahl generierbarer Ergebnisse ist abhängig von Modellen, Parametern und Systemauslastung.',
        'Die Credit-Abzugssystematik kann angepasst werden, sofern sich technische Anforderungen oder Rechenaufwände der eingesetzten KI-Modelle ändern.'
      ] : [
        'The included 5,000 credits enable significantly increased usage compared to the PRO tariff and are designed for professional office and project operations.',
        'The guidelines correspond to an estimated capacity of approx. 330-1,100 images per month, depending on usage, model selection, and settings.',
        'With mixed usage, the available capacity is reduced according to the respective credit consumption structure.',
        'The actual number of generated results depends on models, parameters, and system load.',
        'The credit deduction system can be adjusted if the technical requirements or computing efforts of the AI models used change.'
      ],
      supportTitle: isDe ? 'Support, Live-Webinare und Zufriedenheitsorientierung' : 'Support, Live Webinars and Satisfaction Orientation',
      supportDesc: isDe ? [
        'Im Rahmen des Abonnements werden regelmäßig Live-Webinare zur Einführung, Schulung und Vertiefung der Plattformnutzung angeboten.',
        'Diese dienen der Vermittlung von Anwendungswissen sowie Best Practices im Bereich Architekturvisualisierung und ermöglichen den Austausch zu unterschiedlichen Arbeitsweisen und Projektkontexten.',
        'Die Webinare werden als Gruppen-Live-Calls mit mehreren Nutzer:innen durchgeführt.'
      ] : [
        'As part of the subscription, live webinars are regularly offered for the introduction, training, and deepening of platform usage.',
        'These serve to impart application knowledge and best practices in the area of architectural visualization and enable the exchange on different ways of working and project contexts.',
        'The webinars are conducted as group live calls with multiple users.'
      ],
      satisfactionTitle: isDe ? 'BUSINESS-Erweiterung (1:1 Live Sessions)' : 'BUSINESS Extension (1:1 Live Sessions)',
      satisfactionDesc: isDe ? [
        'Im BUSINESS-Tarif werden zusätzlich individuelle 1:1 Live-Video-Sessions bereitgestellt.',
        'Diese dienen der vertieften, projektbezogenen Betreuung sowie der individuellen Besprechung von Workflows und Anwendungsfragen. Bei sensiblen Projekten können Inhalte im Rahmen eines privaten Einzelcalls behandelt werden.'
      ] : [
        'In the BUSINESS tariff, additional individual 1:1 live video sessions are provided.',
        'These serve for in-depth, project-specific support as well as the individual discussion of workflows and application questions. For sensitive projects, content can be handled in a private 1:1 call.'
      ],
      satisfactionNoticeTitle: isDe ? 'Hinweis zur Zufriedenheitsorientierung' : 'Note on Satisfaction Orientation',
      satisfactionNoticeDesc: isDe ? [
        'Die bereitgestellten Live-Webinare und 1:1 Sessions stellen unterstützende Leistungen zur Anwendung der Plattform dar und dienen der Verbesserung der Nutzungserfahrung.',
        'Sie stellen kein garantiertes Ergebnis im Sinne einer individuellen Erfolgserwartung dar.',
        'Ein Anspruch auf Rückerstattung des Abonnemententgelts aufgrund der Teilnahme oder Nichtteilnahme besteht nicht.'
      ] : [
        'The live webinars and 1:1 sessions provided are supporting services for the use of the platform and serve to improve the user experience.',
        'They do not constitute a guaranteed result in the sense of an individual expectation of success.',
        'There is no entitlement to a refund of the subscription fee due to participation or non-participation.'
      ],
      includedFeaturesTitle: isDe ? 'Inklusive Leistungen' : 'Included Services',
      includedFeaturesList: isDe ? [
        'Erstellung von Bildern in 2K–4K',
        'Chat-basierte Bearbeitung (Prompt-Optimierung & Iteration)',
        'Hochwertige KI-Renderings',
        'Hochskalierung bis 8K',
        'E-Mail Support',
        'Onboarding Video-Call (1:1 Einführung)',
        'Live-Webinare (2× pro Monat)',
        '1:1 Live Video Session (1× pro Monat)',
        'Team-/Büro-Zugang für interne Nutzung'
      ] : [
        'Creation of images in 2K-4K resolution',
        'Chat-based editing (Prompt optimization & iteration)',
        'High-quality AI renderings',
        'Upscaling up to 8K',
        'E-Mail Support',
        'Onboarding Video Call (1:1 Introduction)',
        'Live Webinars (2x per month)',
        '1:1 Live Video Session (1x per month)',
        'Team/Office access for internal use'
      ],
      fundingTitle: isDe ? 'Hinweise zur Entwicklung des Förderprojekts' : 'Notes on the Development of the Funding Project',
      fundingDesc: isDe ? [
        'Ein durch das EFRE-Programm der Europäischen Union gefördertes Forschungs- und Entwicklungsprojekt befindet sich derzeit in Entwicklung.',
        'Dieses Projekt ist nicht Bestandteil des aktuellen Angebots und wird derzeit nicht vertrieben oder bereitgestellt.',
        'Die geplante Veröffentlichung ist voraussichtlich Ende 2026.',
        'Nach Veröffentlichung kann vorgesehen sein, dass Kunden von Typus AI BUSINESS als Beta-Nutzer Zugang zu diesem System erhalten. Dies erfolgt ausschließlich nach Verfügbarkeit.',
        'Details hierzu sind in den AGB geregelt.'
      ] : [
        'A research and development project funded by the ERDF program of the European Union is currently under development.',
        'This project is not part of the current offer and is currently not distributed or provided.',
        'The planned release is expected to be at the end of 2026.',
        'After release, it may be planned that customers of Typus AI BUSINESS gain access to this system as beta users. This is exclusively subject to availability.',
        'Details can be found in the Terms and Conditions.'
      ],
      termsTitle: isDe ? 'Vertragsbedingungen' : 'Contract Terms',
      termsDesc: null,
      termsList: isDe ? [
        'Mindestvertragslaufzeit: 12 Monate',
        'Kündigungsfrist: 30 Tage zum Laufzeitende',
        'Automatische Verlängerung um jeweils 12 Monate'
      ] : [
        'Minimum contract term: 12 months',
        'Cancellation period: 30 days to the end of the term',
        'Automatic renewal for 12 months each'
      ],
      agbTitle: isDe ? 'AGB & Zustimmung' : 'Terms & Consent',
      agbDesc: isDe ? 'Mit Abschluss der Bestellung erklärt der Kunde:' : 'By completing the order, the customer declares:',
      agbList: null,
      agbLink: agbLink,
      finishOrderTitle: isDe ? 'Bestellung abschließen' : 'Complete Order',
      checkboxes: [
        isDe ? 'Abschluss eines kostenpflichtigen SaaS-Abonnements (BUSINESS)' : 'Conclusion of a paid SaaS subscription (BUSINESS)',
        isDe ? 'Kenntnis der jährlichen Abrechnung und Mindestlaufzeit' : 'Knowledge of the annual billing and minimum term',
        isDe ? 'Zustimmung zu den AGB' : 'Consent to the Terms and Conditions'
      ],
      noteTitle: isDe ? 'Hinweis' : 'Note',
      noteDesc: isDe ? 'Diese Bestellung stellt einen verbindlichen Vertragsschluss dar. Der Zugang zu Typus AI BUSINESS wird nach erfolgreicher Zahlung automatisch freigeschaltet.' : 'This order constitutes a binding contract. Access to Typus AI BUSINESS will be unlocked automatically after successful payment.'
    }
  } else if (planId === 'solo-monthly') {
    return {
      title: isDe ? 'Typus AI SOLO – Vertragsübersicht & Bestellung' : 'Typus AI SOLO – Contract Overview & Order',
      offer: isDe ? 'Angebot: Typus AI SOLO' : 'Offer: Typus AI SOLO',
      audience: isDe ? 'Für Solo-Selbstständige, Architekt:innen, Designer und kreative Professionals.' : 'For solo self-employed, freelance architects, designers and creative professionals.',
      pricingTitle: isDe ? 'Preis' : 'Price',
      pricingMain: isDe ? '59,00 € / Monat' : '€59.00 / month',
      pricingList: isDe ? [
        'Monatlich abgerechnet',
        'Zuzüglich 19 % MwSt.',
        'Mindestvertragslaufzeit: 12 Monate'
      ] : [
        'Billed monthly',
        'Plus 19% VAT',
        'Minimum contract term: 12 months'
      ],
      pricingDesc: isDe ? 'Kostenpflichtiges SaaS-Abonnement für Architekturvisualisierung.' : 'Paid SaaS subscription for architectural visualization.',
      scopeTitle: isDe ? 'Leistungsumfang' : 'Scope of Services',
      scopeDesc: isDe ? [
        'Typus AI SOLO ist eine spezialisierte Softwareplattform für KI-gestützte Architekturvisualisierung.',
        'Die Plattform ist insbesondere für Solo-Selbstständige, freiberuflich tätige Architekt, Designer und kleinere Planungseinheiten konzipiert, die Visualisierungen im Rahmen einzelner Projekte oder klar abgegrenzter Aufgabenstellungen erstellen.',
        'Der Leistungsfokus liegt auf der effizienten Erstellung, Iteration und Verfeinerung von Architekturvisualisierungen innerhalb einzelner Projekte oder überschaubarer Projektkontexte.',
        'Typus AI PRO ist darauf ausgelegt, einen flexiblen kreativen Arbeitsprozess zu unterstützen und eine schnelle Umsetzung sowie Optimierung einzelner Visualisierungsaufgaben zu ermöglichen, ohne den Fokus auf umfangreiche Parallelisierung oder großvolumige Produktionspipelines zu legen.',
        'Die Plattform verwendet KI-Modelle von Drittanbietern, die kontinuierlich entsprechend dem aktuellen Stand der Technik aktualisiert und weiterentwickelt werden. Diese Modelle werden dem Kunden in ihrer jeweils aktuellen Version innerhalb der Plattform bereitgestellt.',
        'Typus.ai unterscheidet sich insbesondere dadurch, dass die Plattform speziell für Architektur-Anwendungen entwickelt wurde. Während generische KI-Tools meist lediglich eine einfache Prompt-Eingabe bieten und der Nutzer sämtliche Anforderungen manuell in Textform beschreiben muss, stellt Typus.ai eine speziell auf Architekten zugeschnittene Benutzeroberfläche mit intelligenten Assistenzfunktionen bereit.',
        'Dazu gehören unter anderem:',
        '• Intuitive Prompt-Engineering-Hilfen über strukturierte Dropdown-Menüs',
        '• Architektur-spezifische Eingabemasken und Workflows',
        '• Multi-Prompting-Funktionen zur gezielten Material- und Texturzuweisung',
        '• Unterstützung bei der Weiterentwicklung eines Bildes zu konsistenten Bildserien mit Diagrammen und kohärenten Kameraperspektiven',
        '• Interaktive Tutorials und geführte Anwendungsprozesse',
        '• Kontinuierliche Integration der aktuell leistungsstärksten KI-Modelle am Markt'
      ] : [
        'Typus AI SOLO is a specialized software platform for AI-supported architectural visualization.',
        'The platform is specifically designed for solo self-employed, freelance architects, designers and smaller planning units that create visualizations within individual projects or clearly defined tasks.',
        'The performance focus is on the efficient creation, iteration and refinement of architectural visualizations within individual projects or manageable project contexts.',
        'Typus AI PRO is designed to support a flexible creative work process and enable the rapid implementation and optimization of individual visualization tasks without focusing on extensive parallelization or large-volume production pipelines.',
        'The platform uses third-party AI models that are continuously updated and further developed in accordance with the current state of the art. These models are made available to the customer in their respective current versions within the platform.',
        'Typus.ai differs in particular in that the platform was developed specifically for architectural applications. While generic AI tools mostly only offer a simple prompt input and the user has to describe all requirements manually in text form, Typus.ai provides a user interface specially tailored to architects with intelligent assistance functions.',
        'These include:',
        '• Intuitive prompt engineering aids via structured drop-down menus',
        '• Architecture-specific input masks and workflows',
        '• Multi-prompting functions for targeted material and texture assignment',
        '• Support in further developing an image into consistent image series with diagrams and coherent camera perspectives',
        '• Interactive tutorials and guided application processes',
        '• Continuous integration of the currently most powerful AI models on the market'
      ],
      creditSystemTitle: isDe ? 'Credit-System (Nutzungsbasis)' : 'Credit System (Usage Basis)',
      creditSystemDesc: isDe ? 'Die Nutzung erfolgt über ein Credit-System. Die folgende Übersicht dient als Richtwert zur Orientierung. Die tatsächliche Ausgabemenge kann je nach Modell, Prompt, Parameter und Systemlast variieren.' : 'Usage is based on a credit system. The following overview serves as a guideline. Actual output volume may vary depending on model, prompt, parameters, and system load.',
      includedCreditsTitle: isDe ? 'Enthaltene Credits' : 'Included Credits',
      includedCreditsMain: isDe ? '200 Credits pro Monat' : '200 Credits per month',
      includedCreditsSub: null,
      creditNoticeTitle: isDe ? 'Hinweis zur Credit-Nutzung' : 'Important Note on Credit Usage',
      creditNoticeDesc: isDe ? 'Im Solo-Abonnement können nicht genutzte Credits in die Folgemonate übertragen und für bis zu drei aufeinanderfolgende Abrechnungsmonate (ein Quartal) angespart werden. Nach Ablauf von drei Monaten ab ihrer jeweiligen Gutschrift verfallen die betreffenden Credits automatisch.' : 'In the Solo subscription, unused credits can be carried over to the following months and saved for up to three consecutive billing months (one quarter). After three months from their respective credit, the relevant credits expire automatically.',
      creditNoticeListTitle: isDe ? 'Nicht genutzte Credits:' : 'Unused credits:',
      creditNoticeList: isDe ? [
        'können innerhalb eines Zeitraums von bis zu drei Monaten kumuliert werden,',
        'verfallen nach Ablauf von drei Monaten,',
        'sind nicht auszahlbar und nicht auf andere Nutzerkonten übertragbar.'
      ] : [
        'can be accumulated within a period of up to three months,',
        'expire after three months,',
        'are not paid out and not transferable to other user accounts.'
      ],
      creditNoticeFooter: null,
      extraCreditsTitle: isDe ? 'Zusatzcredits (optional)' : 'Additional Credits (optional)',
      extraCreditsDesc: isDe ? 'Bei kurzfristig erhöhtem oder projektbedingt gesteigertem Bedarf besteht die Möglichkeit, zusätzliche Credits separat zu erwerben.' : 'In the event of short-term increased or project-related demand, there is the possibility to purchase additional credits separately.',
      extraCreditsListTitle: isDe ? 'Diese zusätzlich erworbenen Credits:' : 'These additionally purchased credits:',
      extraCreditsList: isDe ? [
        'werden dem Nutzerkonto unmittelbar gutgeschrieben',
        'können flexibel im Rahmen der Plattform genutzt werden',
        'sind über den jeweiligen Abrechnungsmonat hinaus gültig und übertragbar'
      ] : [
        'are credited to the user account immediately',
        'can be used flexibly within the platform',
        'are valid and transferable beyond the respective billing month'
      ],
      extraCreditsFooter: isDe ? 'Nicht genutzte Zusatzcredits bleiben erhalten und können zu einem späteren Zeitpunkt verwendet werden.' : 'Unused additional credits are retained and can be used at a later time.',
      tables: [
        {
          title: isDe ? 'Bilderstellung' : 'Image Generation',
          items: isDe ? ['1K → 3 Credits', '2K → 9 Credits', '4K → 15 Credits'] : ['1K → 3 Credits', '2K → 9 Credits', '4K → 15 Credits']
        },
        {
          title: isDe ? 'Videoerstellung' : 'Video Generation',
          items: isDe ? ['4–5 Sekunden → 65 Credits', '8–10 Sekunden → 125 Credits', '12 Sekunden → 175 Credits'] : ['4-5 Seconds → 65 Credits', '8-10 Seconds → 125 Credits', '12 Seconds → 175 Credits']
        },
        {
          title: 'Upscaling',
          items: ['2x → 20 Credits', '4x → 40 Credits', '8x → 50 Credits', '16x → 80 Credits']
        }
      ],
      usageCategoryTitle: isDe ? 'Nutzungseinordnung' : 'Usage Classification',
      usageCategoryDesc: isDe ? [
        'Die enthaltenen 200 Credits ermöglichen Renderings und Skizzen im Solo-Workflow.',
        'Die Richtwerte entsprechen ca. 13–66 Bildern pro Monat, abhängig von Nutzung, Modellwahl und Einstellungen.',
        'Bei gemischter Nutzung (Bild-, Video- und Upscaling-Anwendungen) reduziert sich die verfügbare Kapazität entsprechend der jeweiligen Credit-Verbrauchsstruktur. Insbesondere Video- und Upscaling-Funktionen führen zu einem erhöhten Ressourcenverbrauch.',
        'Die tatsächliche Anzahl generierbarer Ergebnisse ist abhängig von den jeweils verwendeten Modellen, Parametern und der Systemauslastung.',
        'Die Credit-Abzugssystematik kann sich ändern, wenn sich die technischen Anforderungen der eingesetzten KI-Modelle oder die erforderliche Rechenleistung ändern.'
      ] : [
        'The included 200 credits enable renderings and sketches in a solo workflow.',
        'The guidelines correspond to approx. 13-66 images per month, depending on usage, model selection, and settings.',
        'With mixed usage (image, video, and upscaling applications), the available capacity is reduced according to the respective credit consumption structure. Video and upscaling functions in particular lead to increased resource consumption.',
        'The actual number of generated results depends on the models used, parameters, and system load.',
        'The credit deduction system can change if the technical requirements of the AI models used or the required computing power change.'
      ],
      supportTitle: isDe ? 'Support, Live-Webinare und Zufriedenheitsorientierung' : 'Support, Live Webinars and Satisfaction Orientation',
      supportDesc: isDe ? [
        'Es werden regelmäßig Live-Webinare zur Einführung, Schulung und Vertiefung der Plattformnutzung angeboten.',
        'Diese Live-Webinare dienen der strukturierten Vermittlung von Anwendungswissen und Best Practices für die Nutzung von Typus AI im Bereich der Architekturvisualisierung. Gleichzeitig bieten sie den Teilnehmer die Möglichkeit, Fragen zur Anwendung, zu Workflows sowie zu projektbezogenen Einsatzszenarien zu stellen.',
        'Die Webinare finden als Gruppen-Live-Calls mit mehreren Typus AI Kunden statt. Hierdurch entsteht ein dynamischer Austausch zwischen den Nutzer, insbesondere hinsichtlich unterschiedlicher Anwendungsfälle, Arbeitsweisen und Projektkontexte.'
      ] : [
        'Live webinars are regularly offered for the introduction, training, and deepening of platform usage.',
        'These live webinars serve the structured transfer of application knowledge and best practices for the use of Typus AI in the field of architectural visualization. At the same time, they offer participants the opportunity to ask questions about the application, workflows, and project-related deployment scenarios.',
        'The webinars take place as group live calls with several Typus AI customers. This creates a dynamic exchange between users, particularly with regard to different use cases, ways of working, and project contexts.'
      ],
      satisfactionTitle: isDe ? 'Hinweis zur Zufriedenheitsorientierung' : 'Note on Satisfaction Orientation',
      satisfactionDesc: isDe ? [
        'Die bereitgestellten Live-Webinare sowie 1:1 Sessions dienen der bestmöglichen Unterstützung der Nutzer bei der Anwendung von Typus AI und sind Ausdruck des fortlaufenden Bemühens, den Kunden einen maximalen Nutzen aus dem jeweiligen Abonnement zu ermöglichen.',
        'Sie stellen kein garantiertes Ergebnis im Sinne einer bestimmten individuellen Erfolgserwartung dar.',
        'Ein Anspruch auf Rückerstattung des Abonnemententgelts aufgrund der Teilnahme oder Nichtteilnahme an Webinaren oder Live-Sessions besteht nicht.',
        'Die angebotenen Unterstützungsformate sind als freiwillige, ergänzende Serviceleistung zur Verbesserung der Anwendungserfahrung zu verstehen.'
      ] : [
        'The live webinars and 1:1 sessions provided serve to optimally support users in their application of Typus AI and are an expression of the ongoing effort to enable customers to gain maximum benefit from the respective subscription.',
        'They do not constitute a guaranteed result in the sense of a specific individual expectation of success.',
        'There is no entitlement to a refund of the subscription fee due to participation or non-participation in webinars or live sessions.',
        'The offered support formats are to be understood as voluntary, supplementary services to improve the application experience.'
      ],
      includedFeaturesTitle: isDe ? 'Inklusive Leistungen' : 'Included Services',
      includedFeaturesList: isDe ? [
        'Erstellen von Bildern in 2K-4K Bildauflösung',
        'Bearbeitung per Chat (Prompt-Optimierung und Iteration)',
        'Hochwertige KI-gestützte Rendering-Ergebnisse',
        'E-Mail Support',
        'Onboarding Video-Call (1:1 Einführung)',
        'Live-Webinare (2× pro Monat)'
      ] : [
        'Creation of images in 2K-4K resolution',
        'Chat-based editing (Prompt optimization & iteration)',
        'High-quality AI-supported rendering results',
        'E-Mail Support',
        'Onboarding Video Call (1:1 Introduction)',
        'Live Webinars (2x per month)'
      ],
      fundingTitle: isDe ? 'Hinweise zur Entwicklung des Förderprojekts' : 'Notes on the Development of the Funding Project',
      fundingDesc: isDe ? [
        'Ein durch das EFRE-Programm der Europäischen Union für regionale Entwicklung gefördertes Forschungs- und Entwicklungsprojekt befindet sich derzeit in Entwicklung.',
        'Dieses Projekt ist nicht Bestandteil des aktuellen Angebots und wird derzeit nicht vertrieben oder bereitgestellt, da es sich noch in der Entwicklungsphase befindet.',
        'Die geplante Veröffentlichung ist voraussichtlich Ende 2026.',
        'Nach Veröffentlichung ist vorgesehen, dass Kunden von Typus AI PRO als Beta-Nutzer Zugang zu diesem System erhalten können.',
        'Details hierzu sind in den AGB geregelt.'
      ] : [
        'A research and development project funded by the ERDF program of the European Union for Regional Development is currently under development.',
        'This project is not part of the current offer and is currently not distributed or provided, as it is still in the development phase.',
        'The planned release is expected to be at the end of 2026.',
        'After release, it may be planned that customers of Typus AI PRO can gain access to this system as beta users.',
        'Details can be found in the Terms and Conditions.'
      ],
      termsTitle: isDe ? 'Vertragsbedingungen' : 'Contract Terms',
      termsDesc: isDe ? 'Durch Abschluss des Bestellvorgangs kommt ein verbindlicher Nutzungsvertrag zustande.' : 'By completing the order process, a binding user agreement is formed.',
      termsList: isDe ? [
        'Mindestlaufzeit: 12 Monate',
        'Kündigungsfrist: 30 Tage zum Laufzeitende',
        'Automatische Verlängerung um weitere 12 Monate nach Ablauf der Mindestlaufzeit'
      ] : [
        'Minimum contract term: 12 months',
        'Cancellation period: 30 days to the end of the term',
        'Automatic renewal for further 12 months after expiration of the minimum term'
      ],
      agbTitle: isDe ? 'AGB & Zustimmung' : 'Terms & Consent',
      agbDesc: isDe ? 'Mit der Bestellung bestätigen Sie:' : 'By ordering, you confirm:',
      agbList: null,
      agbLink: agbLink,
      finishOrderTitle: isDe ? 'Bestellung abschließen' : 'Complete Order',
      checkboxes: [
        isDe ? 'Ich schließe ein kostenpflichtiges Abonnement über 59 € / Monat ab' : 'I am taking out a paid subscription for €59 / month',
        isDe ? 'Ich akzeptiere die Mindestvertragslaufzeit von 12 Monaten' : 'I accept the minimum contract term of 12 months',
        isDe ? 'Ich akzeptiere die AGB' : 'I accept the Terms and Conditions'
      ],
      noteTitle: isDe ? 'Hinweis' : 'Note',
      noteDesc: isDe ? 'Diese Bestellung stellt einen verbindlichen Vertragsschluss dar. Der Zugang zu Typus AI wird nach erfolgreicher Zahlung automatisch freigeschaltet.' : 'This order constitutes a binding contract. Access to Typus AI will be unlocked automatically after successful payment.'
    }
  } else if (planId === 'solo-yearly') {
    return {
      title: isDe ? 'Typus AI SOLO – Vertragsübersicht & Bestellung (Jährliche Abrechnung)' : 'Typus AI SOLO – Contract Overview & Order (Annual Billing)',
      offer: isDe ? 'Angebot: Typus AI SOLO' : 'Offer: Typus AI SOLO',
      audience: isDe ? 'Für Solo-Selbstständige, Architekt:innen, Designer und kreative Professionals.' : 'For solo self-employed, freelance architects, designers and creative professionals.',
      pricingTitle: isDe ? 'Vergütung' : 'Remuneration',
      pricingMain: isDe ? '€46,40 / Monat (jährlich abgerechnet)' : '€46.40 / month (billed annually)',
      pricingList: isDe ? [
        '€556,80 / Jahr Gesamtbetrag',
        'Regulärer Monatspreis: €59 (monatliche Alternative)',
        'Ersparnis: ca. 21 % (€151,20 pro Jahr)',
        'Zuzüglich 19 % gesetzlicher Umsatzsteuer',
        'Mindestvertragslaufzeit: 12 Monate',
        'Abrechnung erfolgt jährlich im Voraus'
      ] : [
        '€556.80 / year total amount',
        'Regular monthly price: €59 (monthly alternative)',
        'Savings: approx. 21% (€151.20 per year)',
        'Plus 19% statutory VAT',
        'Minimum contract term: 12 months',
        'Billing is done annually in advance'
      ],
      pricingDesc: isDe ? 'Es handelt sich um ein kostenpflichtiges Software-as-a-Service-Abonnement zur Nutzung einer KI-gestützten Plattform für Architekturvisualisierung.' : 'This is a paid Software-as-a-Service subscription for the use of an AI-supported platform for architectural visualization.',
      scopeTitle: isDe ? 'Leistungsumfang' : 'Scope of Services',
      scopeDesc: isDe ? [
        'Typus AI ist eine spezialisierte Softwareplattform für KI-gestützte Architekturvisualisierung.',
        'Der Leistungsfokus liegt auf der effizienten Erstellung, Iteration und Verfeinerung von Architekturvisualisierungen innerhalb einzelner Projekte. Typus AI ist darauf ausgelegt, einen flexiblen kreativen Arbeitsprozess zu unterstützen und eine schnelle Umsetzung sowie Optimierung einzelner Visualisierungsaufgaben zu ermöglichen.',
        'Die Plattform verwendet KI-Modelle von Drittanbietern, die kontinuierlich entsprechend dem aktuellen Stand der Technik aktualisiert und weiterentwickelt werden. Diese Modelle werden dem Kunden in ihrer jeweils aktuellen Version innerhalb der Plattform bereitgestellt.',
        'Typus.ai unterscheidet sich insbesondere dadurch, dass die Plattform speziell für Architektur-Anwendungen entwickelt wurde. Während generische KI-Tools meist lediglich eine einfache Prompt-Eingabe bieten und der Nutzer sämtliche Anforderungen manuell in Textform beschreiben muss, stellt Typus.ai eine speziell auf Architekten zugeschnittene Benutzeroberfläche mit intelligenten Assistenzfunktionen bereit.',
        'Dazu gehören unter anderem:',
        '• Intuitive Prompt-Engineering-Hilfen über strukturierte Dropdown-Menüs',
        '• Architektur-spezifische Eingabemasken und Workflows',
        '• Multi-Prompting-Funktionen zur gezielten Material- und Texturzuweisung',
        '• Unterstützung bei der Weiterentwicklung eines Bildes zu konsistenten Bildserien mit Diagrammen und kohärenten Kameraperspektiven',
        '• Interaktive Tutorials und geführte Anwendungsprozesse',
        '• Kontinuierliche Integration der aktuell leistungsstärksten KI-Modelle am Markt'
      ] : [
        'Typus AI is a specialized software platform for AI-supported architectural visualization.',
        'The performance focus is on the efficient creation, iteration and refinement of architectural visualizations within individual projects. Typus AI is designed to support a flexible creative work process and enable rapid implementation and optimization of individual visualization tasks.',
        'The platform uses third-party AI models that are continuously updated and further developed in accordance with the current state of the art. These models are made available to the customer in their respective current versions within the platform.',
        'Typus.ai differs in particular in that the platform was developed specifically for architectural applications. While generic AI tools mostly only offer a simple prompt input and the user has to describe all requirements manually in text form, Typus.ai provides a user interface specially tailored to architects with intelligent assistance functions.',
        'These include:',
        '• Intuitive prompt engineering aids via structured drop-down menus',
        '• Architecture-specific input masks and workflows',
        '• Multi-prompting functions for targeted material and texture assignment',
        '• Support in further developing an image into consistent image series with diagrams and coherent camera perspectives',
        '• Interactive tutorials and guided application processes',
        '• Continuous integration of the currently most powerful AI models on the market'
      ],
      creditSystemTitle: isDe ? 'Credit-System (Nutzungsbasis)' : 'Credit System (Usage Basis)',
      creditSystemDesc: isDe ? 'Die Nutzung erfolgt über ein Credit-System. Die folgende Übersicht dient als Richtwert zur Orientierung. Die tatsächliche Ausgabemenge kann je nach Modell, Prompt, Parameter und Systemlast variieren.' : 'Usage is based on a credit system. The following overview serves as a guideline. Actual output volume may vary depending on model, prompt, parameters, and system load.',
      includedCreditsTitle: isDe ? 'Enthaltene Credits' : 'Included Credits',
      includedCreditsMain: isDe ? '200 Credits pro Monat' : '200 Credits per month',
      includedCreditsSub: null,
      creditNoticeTitle: isDe ? 'Hinweis zur Credit-Nutzung' : 'Important Note on Credit Usage',
      creditNoticeDesc: isDe ? 'Im Solo-Abonnement können nicht genutzte Credits in die Folgemonate übertragen und für bis zu drei aufeinanderfolgende Abrechnungsmonate (ein Quartal) angespart werden. Nach Ablauf von drei Monaten ab ihrer jeweiligen Gutschrift verfallen die betreffenden Credits automatisch.' : 'In the Solo subscription, unused credits can be carried over to the following months and saved for up to three consecutive billing months (one quarter). After three months from their respective credit, the relevant credits expire automatically.',
      creditNoticeListTitle: isDe ? 'Nicht genutzte Credits:' : 'Unused credits:',
      creditNoticeList: isDe ? [
        'können innerhalb eines Zeitraums von bis zu drei Monaten kumuliert werden,',
        'verfallen nach Ablauf von drei Monaten,',
        'sind nicht auszahlbar und nicht auf andere Nutzerkonten übertragbar.'
      ] : [
        'can be accumulated within a period of up to three months,',
        'expire after three months,',
        'are not paid out and not transferable to other user accounts.'
      ],
      creditNoticeFooter: null,
      extraCreditsTitle: isDe ? 'Zusatzcredits (optional)' : 'Additional Credits (optional)',
      extraCreditsDesc: isDe ? 'Bei kurzfristig erhöhtem oder projektbedingt gesteigertem Bedarf besteht die Möglichkeit, zusätzliche Credits separat zu erwerben.' : 'In the event of short-term increased or project-related demand, there is the possibility to purchase additional credits separately.',
      extraCreditsListTitle: isDe ? 'Diese zusätzlich erworbenen Credits:' : 'These additionally purchased credits:',
      extraCreditsList: isDe ? [
        'werden dem Nutzerkonto unmittelbar gutgeschrieben',
        'können flexibel im Rahmen der Plattform genutzt werden',
        'sind über den jeweiligen Abrechnungsmonat hinaus gültig und übertragbar'
      ] : [
        'are credited to the user account immediately',
        'can be used flexibly within the platform',
        'are valid and transferable beyond the respective billing month'
      ],
      extraCreditsFooter: isDe ? 'Nicht genutzte Zusatzcredits bleiben erhalten und können zu einem späteren Zeitpunkt verwendet werden.' : 'Unused additional credits are retained and can be used at a later time.',
      tables: [
        {
          title: isDe ? 'Bilderstellung' : 'Image Generation',
          items: isDe ? ['1K → 3 Credits', '2K → 9 Credits', '4K → 15 Credits'] : ['1K → 3 Credits', '2K → 9 Credits', '4K → 15 Credits']
        },
        {
          title: isDe ? 'Videoerstellung' : 'Video Generation',
          items: isDe ? ['4–5 Sekunden → 65 Credits', '8–10 Sekunden → 125 Credits', '12 Sekunden → 175 Credits'] : ['4-5 Seconds → 65 Credits', '8-10 Seconds → 125 Credits', '12 Seconds → 175 Credits']
        },
        {
          title: 'Upscaling',
          items: ['2x → 20 Credits', '4x → 40 Credits', '8x → 50 Credits', '16x → 80 Credits']
        }
      ],
      usageCategoryTitle: isDe ? 'Nutzungseinordnung' : 'Usage Classification',
      usageCategoryDesc: isDe ? [
        'Die enthaltenen 200 Credits ermöglichen Renderings und Skizzen im Solo-Workflow.',
        'Die Richtwerte entsprechen ca. 13–66 Bildern pro Monat, abhängig von Nutzung, Modellwahl und Einstellungen.',
        'Bei gemischter Nutzung (Bild-, Video- und Upscaling-Anwendungen) reduziert sich die verfügbare Kapazität entsprechend der jeweiligen Credit-Verbrauchsstruktur. Insbesondere Video- und Upscaling-Funktionen führen zu einem erhöhten Ressourcenverbrauch.',
        'Die tatsächliche Anzahl generierbarer Ergebnisse ist abhängig von den jeweils verwendeten Modellen, Parametern und der Systemauslastung.',
        'Die Credit-Abzugssystematik kann sich ändern, wenn sich die technischen Anforderungen der eingesetzten KI-Modelle oder die erforderliche Rechenleistung ändern.'
      ] : [
        'The included 200 credits enable renderings and sketches in a solo workflow.',
        'The guidelines correspond to approx. 13-66 images per month, depending on usage, model selection, and settings.',
        'With mixed usage (image, video, and upscaling applications), the available capacity is reduced according to the respective credit consumption structure. Video and upscaling functions in particular lead to increased resource consumption.',
        'The actual number of generated results depends on the models used, parameters, and system load.',
        'The credit deduction system can change if the technical requirements of the AI models used or the required computing power change.'
      ],
      supportTitle: isDe ? 'Support, Live-Webinare und Zufriedenheitsorientierung' : 'Support, Live Webinars and Satisfaction Orientation',
      supportDesc: isDe ? [
        'Es werden regelmäßig Live-Webinare zur Einführung, Schulung und Vertiefung der Plattformnutzung angeboten.',
        'Diese Live-Webinare dienen der strukturierten Vermittlung von Anwendungswissen und Best Practices für die Nutzung von Typus AI im Bereich der Architekturvisualisierung. Gleichzeitig bieten sie den Teilnehmer die Möglichkeit, Fragen zur Anwendung, zu Workflows sowie zu projektbezogenen Einsatzszenarien zu stellen.',
        'Die Webinare finden als Gruppen-Live-Calls mit mehreren Typus AI Kunden statt. Hierdurch entsteht ein dynamischer Austausch zwischen den Nutzer, insbesondere hinsichtlich unterschiedlicher Anwendungsfälle, Arbeitsweisen und Projektkontexte.'
      ] : [
        'Live webinars are regularly offered for the introduction, training, and deepening of platform usage.',
        'These live webinars serve the structured transfer of application knowledge and best practices for the use of Typus AI in the field of architectural visualization. At the same time, they offer participants the opportunity to ask questions about the application, workflows, and project-related deployment scenarios.',
        'The webinars take place as group live calls with several Typus AI customers. This creates a dynamic exchange between users, particularly with regard to different use cases, ways of working, and project contexts.'
      ],
      satisfactionTitle: isDe ? 'Hinweis zur Zufriedenheitsorientierung' : 'Note on Satisfaction Orientation',
      satisfactionDesc: isDe ? [
        'Die bereitgestellten Live-Webinare sowie 1:1 Sessions dienen der bestmöglichen Unterstützung der Nutzer bei der Anwendung von Typus AI und sind Ausdruck des fortlaufenden Bemühens, den Kunden einen maximalen Nutzen aus dem jeweiligen Abonnement zu ermöglichen.',
        'Sie stellen kein garantiertes Ergebnis im Sinne einer bestimmten individuellen Erfolgserwartung dar.',
        'Ein Anspruch auf Rückerstattung des Abonnemententgelts aufgrund der Teilnahme oder Nichtteilnahme an Webinaren oder Live-Sessions besteht nicht.',
        'Die angebotenen Unterstützungsformate sind als freiwillige, ergänzende Serviceleistung zur Verbesserung der Anwendungserfahrung zu verstehen.'
      ] : [
        'The live webinars and 1:1 sessions provided serve to optimally support users in their application of Typus AI and are an expression of the ongoing effort to enable customers to gain maximum benefit from the respective subscription.',
        'They do not constitute a guaranteed result in the sense of a specific individual expectation of success.',
        'There is no entitlement to a refund of the subscription fee due to participation or non-participation in webinars or live sessions.',
        'The offered support formats are to be understood as voluntary, supplementary services to improve the application experience.'
      ],
      includedFeaturesTitle: isDe ? 'Inklusive Leistungen' : 'Included Services',
      includedFeaturesList: isDe ? [
        'Erstellen von Bildern in 2K-4K Bildauflösung',
        'Bearbeitung per Chat (Prompt-Optimierung und Iteration)',
        'Hochwertige KI-gestützte Rendering-Ergebnisse',
        'E-Mail Support',
        'Onboarding Video-Call (1:1 Einführung)',
        'Live-Webinare (2× pro Monat)'
      ] : [
        'Creation of images in 2K-4K resolution',
        'Chat-based editing (Prompt optimization & iteration)',
        'High-quality AI-supported rendering results',
        'E-Mail Support',
        'Onboarding Video Call (1:1 Introduction)',
        'Live Webinars (2x per month)'
      ],
      fundingTitle: isDe ? 'Hinweise zur Entwicklung des Förderprojekts' : 'Notes on the Development of the Funding Project',
      fundingDesc: isDe ? [
        'Ein durch das EFRE-Programm der Europäischen Union für regionale Entwicklung gefördertes Forschungs- und Entwicklungsprojekt befindet sich derzeit in Entwicklung.',
        'Dieses Projekt ist nicht Bestandteil des aktuellen Angebots und wird derzeit nicht vertrieben oder bereitgestellt, da es sich noch in der Entwicklungsphase befindet.',
        'Die geplante Veröffentlichung ist voraussichtlich Ende 2026.',
        'Nach Veröffentlichung ist vorgesehen, dass Kunden von Typus AI PRO als Beta-Nutzer Zugang zu diesem System erhalten können.',
        'Details hierzu sind in den AGB geregelt.'
      ] : [
        'A research and development project funded by the ERDF program of the European Union for Regional Development is currently under development.',
        'This project is not part of the current offer and is currently not distributed or provided, as it is still in the development phase.',
        'The planned release is expected to be at the end of 2026.',
        'After release, it may be planned that customers of Typus AI PRO can gain access to this system as beta users.',
        'Details can be found in the Terms and Conditions.'
      ],
      termsTitle: isDe ? 'Vertragsbedingungen' : 'Contract Terms',
      termsDesc: null,
      termsList: isDe ? [
        'Mindestvertragslaufzeit: 12 Monate',
        'Kündigungsfrist: 30 Tage zum Laufzeitende',
        'Automatische Verlängerung um jeweils 12 Monate'
      ] : [
        'Minimum contract term: 12 months',
        'Cancellation period: 30 days to the end of the term',
        'Automatic renewal for 12 months each'
      ],
      agbTitle: isDe ? 'AGB & Zustimmung' : 'Terms & Consent',
      agbDesc: isDe ? 'Mit der Bestellung bestätigen Sie:' : 'By ordering, you confirm:',
      agbList: null,
      agbLink: agbLink,
      finishOrderTitle: isDe ? 'Bestellung abschließen' : 'Complete Order',
      checkboxes: [
        isDe ? 'Ich schließe ein kostenpflichtiges Abonnement über 556,80 € / Jahr ab' : 'I am taking out a paid subscription for €556.80 / year',
        isDe ? 'Ich akzeptiere die Mindestvertragslaufzeit von 12 Monaten' : 'I accept the minimum contract term of 12 months',
        isDe ? 'Ich akzeptiere die AGB' : 'I accept the Terms and Conditions'
      ],
      noteTitle: isDe ? 'Hinweis' : 'Note',
      noteDesc: isDe ? 'Diese Bestellung stellt einen verbindlichen Vertragsschluss dar. Der Zugang zu Typus AI wird nach erfolgreicher Zahlung automatisch freigeschaltet.' : 'This order constitutes a binding contract. Access to Typus AI will be unlocked automatically after successful payment.'
    }
  }

  return null
}
