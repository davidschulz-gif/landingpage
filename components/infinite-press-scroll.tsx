"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const pressLogos = [
  {
    id: 1,
    src: "https://typus.ai/wp-content/uploads/2025/06/cropped-Neues-Bauen_vertikal-300x163.png",
    alt: "Neues Bauen",
    href: "https://80-sekunden.de/",
    width: 300,
    height: 163
  },
  {
    id: 2,
    src: "https://typus.ai/wp-content/uploads/2025/05/Screenshot-2025-05-10-103415.png",
    alt: "Heinze",
    href: "https://www.heinze.de/aktuelles/praei-materialien-gezielt-steuern-ki-visualisierung-neu-definiert/48536808/",
    width: 105,
    height: 40
  },
  {
    id: 3,
    src: "https://typus.ai/wp-content/uploads/2024/12/dabonline_logo_white.png-300x197.png",
    alt: "DAB Online",
    href: "https://www.dabonline.de/digital/architektur-visualisierung-ki-bildgeneratoren/",
    width: 300,
    height: 197
  },
  {
    id: 4,
    src: "https://typus.ai/wp-content/uploads/2025/05/baunetz-newsletter-logo-24-300x92.png",
    alt: "Baunetz",
    href: "https://www.baunetz.de/newsletter/archiv/show_nl.php?fn=ausgabe_9917426.html&wt_mc=nla.2025-05-09.service.browseransicht&context=2239",
    width: 300,
    height: 92
  },
  {
    id: 5,
    src: "https://typus.ai/wp-content/uploads/2025/06/FA-Konferenzen-Logo-280px.png",
    alt: "FA Konferenzen",
    href: "https://bauforum-innovationen.de/startups/",
    width: 280,
    height: 72
  }
];

export function InfinitePressScroll() {
  const duplicatedLogos = [...pressLogos, ...pressLogos, ...pressLogos];

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="max-w-4xl mx-auto relative overflow-hidden">
        {/* Blur edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        
        <motion.div
          className="flex space-x-8 items-center"
          animate={{
            x: [0, -50 * pressLogos.length]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }
          }}
          style={{ width: `${150 * duplicatedLogos.length}px` }}
        >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            style={{
              transform: `translateY(${Math.sin(index * 0.5) * 10}px)`
            }}
          >
            <a
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </a>
          </motion.div>
        ))}
        </motion.div>
      </div>
    </div>
  );
}