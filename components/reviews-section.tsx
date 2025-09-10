"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BreathingAnimationText } from "./breathing-animation-text";

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
    <section className="py-0 overflow-hidden relative" style={{ backgroundColor: '#f0f0f0' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BreathingAnimationText
            animationType="black-gray"
            className="font-space-grotesk"
          >
            <h2
              className="text-[30px] font-normal text-black mb-6"
              style={{
                fontFamily:
                  "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              }}
            >
              WHAT EXPERTS SAY
            </h2>
          </BreathingAnimationText>
        </motion.div>
      </div>

      <div className="w-full">
        <style jsx>{`
          #testimonialto-b6f883ac-9b79-48ea-b5f2-20cadc234b2b {
            position: relative;
          }
          #testimonialto-b6f883ac-9b79-48ea-b5f2-20cadc234b2b::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100px;
            height: 50px;
            background: white;
            z-index: 10;
          }
        `}</style>
        <div className="w-full">
          <script 
            type="text/javascript" 
            src="https://testimonial.to/js/iframeResizer.min.js"
            async
          />
          <iframe 
            id="testimonialto-b6f883ac-9b79-48ea-b5f2-20cadc234b2b" 
            src="https://embed-v2.testimonial.to/w/yanus?id=b6f883ac-9b79-48ea-b5f2-20cadc234b2b" 
            frameBorder="0" 
            scrolling="no" 
            width="100%"
            className="min-h-[400px] rounded-lg"
            style={{ height: 'auto', minHeight: '400px' }}
          />
          <script 
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `iFrameResize({log: false, checkOrigin: false}, '#testimonialto-b6f883ac-9b79-48ea-b5f2-20cadc234b2b');`
            }}
          />
        </div>
      </div>

      {/* <motion.div
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
      </motion.div> */}
    </section>
  );
}