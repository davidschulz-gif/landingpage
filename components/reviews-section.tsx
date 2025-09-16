"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BreathingAnimationText } from "./breathing-animation-text";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

export function ReviewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="w-full max-w-[80%] mx-auto px-4 py-16 overflow-hidden relative"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      {/* Header */}
      <div className="mb-12">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BreathingAnimationText animationType="black-gray">
            <h2
              className="text-[30px] font-normal text-black mb-6"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              WHAT EXPERTS SAY
            </h2>
          </BreathingAnimationText>
        </motion.div>
      </div>

      {/* Vertical Layout */}
      <div className="space-y-8">
        {/* Animated Reviews - Full Width with 3 Columns */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <style jsx>{`
            #testimonialto-b6f883ac-9b79-48ea-b5f2-20cadc234b2b {
              position: relative;
              border-radius: 16px;
              overflow: hidden;
            }
            #testimonialto-b6f883ac-9b79-48ea-b5f2-20cadc234b2b::after {
              content: "";
              position: absolute;
              bottom: 0;
              right: 0;
              width: 100px;
              height: 50px;
              background: #f0f0f0;
              z-index: 10;
            }
          `}</style>
          <div className="w-full mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
            <script
              type="text/javascript"
              src="https://testimonial.to/js/iframeResizer.min.js"
              async
            />
            <iframe
              id="testimonialto-b6f883ac-9b79-48ea-b5f2-20cadc234b2b"
              src="https://embed-v2.testimonial.to/w/yanus?id=b6f883ac-9b79-48ea-b5f2-20cadc234b2b&columns=3"
              scrolling="no"
              width="100%"
              height="600px"
              className="rounded-2xl"
            ></iframe>
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `iFrameResize({log: false, checkOrigin: false}, '#testimonialto-b6f883ac-9b79-48ea-b5f2-20cadc234b2b');`,
              }}
            />
          </div>
        </motion.div>

        {/* Featured Testimonial - Full Width */}
        <motion.div 
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-lg mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl border border-white/20">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Profile */}
              <motion.div
                className="text-center flex-shrink-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative inline-block mb-1">
                  <div className="w-40 h-40 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mx-auto">
                    <Image
                      src="/blog/blog_1.png"
                      alt="Dr. Dietmar Köring"
                      width={160}
                      height={160}
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
                    className="text-xs font-bold text-neutral-800 mb-0.5"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    DR. DIETMAR KÖRING
                  </h3>
                </BreathingAnimationText>
                <BreathingAnimationText animationType="black-gray">
                  <p className="text-[10px] text-neutral-600 uppercase tracking-wide">
                    ARPHENOTYPE
                  </p>
                </BreathingAnimationText>
              </motion.div>

              {/* Quote */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <BreathingAnimationText animationType="black-gray">
                  <blockquote className="text-[16px] font-normal leading-relaxed text-black mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
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
                    Read full article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
