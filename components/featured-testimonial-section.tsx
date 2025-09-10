"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BreathingAnimationText } from "./breathing-animation-text";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

export function FeaturedTestimonialSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative mx-auto flex max-w-7xl flex-col px-4 py-32 text-neutral-800 dark:text-neutral-200"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      {/* Background Effects - Matching website pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(240, 240, 240, 0.4) 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 12.5px 12.5px, rgba(240, 240, 240, 0.3) 1px, transparent 1px)`,
            backgroundSize: "25px 25px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "-25px -25px", "0px 0px"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <motion.div className="relative z-10 w-full" style={{ y, opacity }}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BreathingAnimationText animationType="black-gray">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-neutral-200 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              WHAT EXPERTS SAY
            </h2>
          </BreathingAnimationText>
          <BreathingAnimationText animationType="black-gray">
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Leading architects and industry professionals share their
              experience with Typus AI
            </p>
          </BreathingAnimationText>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Profile */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mx-auto">
                  <Image
                    src="/blog/blog_1.png"
                    alt="Dr. Dietmar Köring"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-1 -right-1 w-6 h-6 bg-black rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Quote className="w-3 h-3 text-white" />
                </motion.div>
              </div>

              <BreathingAnimationText animationType="black-gray">
                <h3
                  className="text-lg font-bold text-neutral-800 mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  DR. DIETMAR KÖRING
                </h3>
              </BreathingAnimationText>
              <BreathingAnimationText animationType="black-gray">
                <p className="text-sm text-neutral-600 uppercase tracking-wide">
                  ARPHENOTYPE
                </p>
              </BreathingAnimationText>
            </motion.div>

            {/* Quote */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <BreathingAnimationText animationType="black-gray">
                <blockquote className="text-lg md:text-xl font-light leading-relaxed text-neutral-700 mb-6">
                  "Sehr vielversprechend sieht derzeit die Anwendung Yanus aus.
                  Wenn man dies in Zukunft mit Materialien und deren Herstellung
                  abstimmt, wäre das ein
                  <span className="text-black font-medium">
                    {" "}
                    enormer Gewinn
                  </span>
                  . Auch könnte man so entsprechende Moods in Sekunden
                  erstellen."
                </blockquote>
              </BreathingAnimationText>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <BreathingAnimationText animationType="black-gray">
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">
                    DAB ONLINE INTERVIEW
                  </p>
                </BreathingAnimationText>

                <Button
                  className="animate-breathe-primary-hover bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  read full article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
