"use client"
import { motion } from "framer-motion"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import Image from "next/image"

const materialsContent = [
  {
    title: "WOOD",
    description:
      "Experience the natural beauty and warmth of wood textures. From brushed textured wood grains to fine-grained veneers and lacquered durable coatings, our AI captures every detail of wood's organic patterns and rich character.",
    content: (
      <div className="h-full w-full relative overflow-hidden rounded-lg">
        <Image src="/wood-texture-showcase.png" alt="Wood textures showcase" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20" />
      </div>
    ),
  },
  {
    title: "CONCRETE",
    description:
      "Discover the industrial elegance of concrete surfaces. From etched acid-treated finishes to polished reflective surfaces and glossy concrete textures, our platform renders every nuance of this versatile material.",
    content: (
      <div className="h-full w-full relative overflow-hidden rounded-lg">
        <Image src="/concrete-texture-showcase.png" alt="Concrete textures showcase" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-slate-600/20" />
      </div>
    ),
  },
  {
    title: "PLASTER",
    description:
      "Explore the artisanal quality of plaster finishes. From distressed weathered surfaces to lime natural breathable textures and satin soft applications, each plaster variation tells its own story.",
    content: (
      <div className="h-full w-full relative overflow-hidden rounded-lg">
        <Image src="/plaster-texture-showcase.png" alt="Plaster textures showcase" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-400/20 to-neutral-500/20" />
      </div>
    ),
  },
  {
    title: "METAL",
    description:
      "Master the precision of metallic surfaces. From brushed metal finishes to anodized steel surfaces and textured metal applications, our AI technology captures the reflective properties and industrial beauty of metals.",
    content: (
      <div className="h-full w-full relative overflow-hidden rounded-lg">
        <Image src="/metal-texture-showcase.png" alt="Metal textures showcase" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/20 to-gray-600/20" />
      </div>
    ),
  },
]

export function MaterialsShowcase() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="space-y-6">
            {[
              "TYPUS.AI IS WEBBASED.",
              "EASY TO USE.",
              "NO TECHNICAL SKILLS REQUIRED.",
              "AI FOR ARCHITECTS & 3D ARTISTS.",
            ].map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className="perspective-1000"
              >
                <motion.h2
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight cursor-default ${
                    index === 3
                      ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {line.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15 + charIndex * 0.02,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h2>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <StickyScroll content={materialsContent} />
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-24"
        >
          {[
            { number: "500+", label: "Material Types" },
            { number: "50+", label: "Texture Variations" },
            { number: "4K", label: "Resolution Quality" },
            { number: "Real-time", label: "Rendering Speed" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 sm:p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
