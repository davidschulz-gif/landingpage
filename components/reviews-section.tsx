"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Sarah Chen",
    role: "Senior Architect",
    company: "Modern Design Studio",
    content: "Typus AI has revolutionized our workflow. The quality of renders is exceptional and the speed is unmatched.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Project Manager",
    company: "Urban Planning Corp",
    content: "The structure preservation feature is incredible. Our CAD files are transformed while maintaining every detail.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Design Director",
    company: "Thompson Architecture",
    content: "Client presentations have never been more impressive. Typus AI delivers photorealistic results in minutes.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Visualization Specialist",
    company: "Park Design Group",
    content: "The AI understands architectural principles perfectly. It's like having a rendering expert on our team 24/7.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Principal Architect",
    company: "Anderson & Associates",
    content: "Typus AI has cut our rendering time by 80%. The quality is consistently outstanding across all projects.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Creative Director",
    company: "Wilson Studios",
    content: "The integration with our existing CAD workflow is seamless. Typus AI feels like a natural extension of our tools.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
  },
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
  return (
    <motion.div
      className="relative w-72 mx-2 mb-4 p-5 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-md"
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex items-center mb-4">
        <Image
          src={review.avatar}
          alt={review.name}
          width={48}
          height={48}
          className="rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {review.name}
          </h4>
          <p className="text-sm text-gray-600">
            {review.role} at {review.company}
          </p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      
      <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        "{review.content}"
      </p>
    </motion.div>
  );
};

export function ReviewsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Trusted by <span className="text-red-500">Architects</span> Worldwide
          </h2>
          <p 
            className="text-lg text-gray-600 leading-relaxed"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Join thousands of professionals who have transformed their architectural visualization workflow with Typus AI.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Blurred edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex justify-center gap-2 h-[500px] max-w-6xl mx-auto">
          <div className="flex-1 max-w-xs">
            <Marquee vertical pauseOnHover className="[--duration:30s] [--gap:1rem] h-full">
              {reviews.slice(0, 3).map((review, index) => (
                <ReviewCard key={`col1-${index}`} review={review} />
              ))}
            </Marquee>
          </div>
          
          <div className="flex-1 max-w-xs">
            <Marquee vertical reverse pauseOnHover className="[--duration:35s] [--gap:1rem] h-full">
              {reviews.slice(1, 4).map((review, index) => (
                <ReviewCard key={`col2-${index}`} review={review} />
              ))}
            </Marquee>
          </div>
          
          <div className="hidden md:block flex-1 max-w-xs">
            <Marquee vertical pauseOnHover className="[--duration:40s] [--gap:1rem] h-full">
              {reviews.slice(2, 5).map((review, index) => (
                <ReviewCard key={`col3-${index}`} review={review} />
              ))}
            </Marquee>
          </div>
          
          <div className="hidden lg:block flex-1 max-w-xs">
            <Marquee vertical reverse pauseOnHover className="[--duration:25s] [--gap:1rem] h-full">
              {reviews.slice(3, 6).map((review, index) => (
                <ReviewCard key={`col4-${index}`} review={review} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center space-x-8 text-gray-500">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900 mr-2">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="h-6 w-px bg-gray-300"></div>
          <span className="font-medium">500+ Reviews</span>
          <div className="h-6 w-px bg-gray-300"></div>
          <span className="font-medium">50+ Countries</span>
        </div>
      </motion.div>
    </section>
  );
}