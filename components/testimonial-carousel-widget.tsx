"use client"
import { motion } from "framer-motion"
import { InfiniteMovingCardsVertical } from "@/components/ui/infinite-moving-cards-vertical"

const testimonials = [
  {
    quote: "It helps us achieve what was once thought impossible. The AI's capabilities are groundbreaking and have opened new avenues for us.",
    name: "Innovation Lead",
    title: "Tech Company",
  },
  {
    quote: "I can't imagine going back to how things were before this AI. It has not only improved my work efficiency but also my daily life.",
    name: "Cathy Lee",
    title: "Product Manager",
  },
  {
    quote: "The results are always impressive. This AI has helped us to not only meet but exceed our performance targets.",
    name: "Jack Brown",
    title: "Performance Manager",
  },
  {
    quote: "The best investment we've made in years. It's not just a tool; it's a game-changer that has propelled our business forward.",
    name: "Nathan Hill",
    title: "Investment Analyst",
  },
  {
    quote: "A robust solution that fits perfectly into our workflow. It has enhanced our team's capabilities and allowed us to tackle more complex projects.",
    name: "Frank Moore",
    title: "Project Manager",
  },
  {
    quote: "A seamless integration into our daily tasks. It has enhanced our productivity and allowed us to focus on more strategic initiatives.",
    name: "Peter White",
    title: "Strategic Planner",
  },
  {
    quote: "It's a game-changer for our business. The insights it provides are invaluable and have driven substantial growth for us.",
    name: "Quinn Taylor",
    title: "Growth Manager",
  },
  {
    quote: "This AI has transformed the way I work! It's not just efficient, but also incredibly intuitive and user-friendly.",
    name: "Ivy Wilson",
    title: "Business Consultant",
  },
  {
    quote: "This AI has transformed the way I work! It's incredibly efficient and has made complex tasks much more manageable.",
    name: "Alice Johnson",
    title: "Senior Software Engineer",
  },
];

export function TestimonialCarouselWidget() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Loved by people all over the universe
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Every AI is used by millions of people around the globe. Our APIs have fan bases and people fight for us over twitter.
          </p>
        </motion.div>

        <div className="relative h-[500px] w-full overflow-hidden flex items-center justify-center">
          <div className="flex w-full max-w-6xl mx-auto gap-4">
            {/* First Column */}
            <div className="flex-1">
              <InfiniteMovingCardsVertical
                items={[...testimonials, ...testimonials]}
                direction="up"
                speed="normal"
              />
            </div>
            
            {/* Second Column */}
            <div className="flex-1">
              <InfiniteMovingCardsVertical
                items={[...testimonials.reverse(), ...testimonials]}
                direction="down"
                speed="normal"
              />
            </div>
            
            {/* Third Column */}
            <div className="flex-1">
              <InfiniteMovingCardsVertical
                items={[...testimonials, ...testimonials]}
                direction="up"
                speed="normal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}