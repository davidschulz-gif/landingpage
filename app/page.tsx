"use client";
import { useState } from "react";
import { SplashScreen } from "@/components/splash-screen";
import TypusNavbar from "@/components/typus-navbar";
import { HeroParallax } from "@/components/hero-parallax";
import { FeatureShowcaseWidget } from "@/components/feature-showcase-widget";
import { TestimonialCarouselWidget } from "@/components/testimonial-carousel-widget";
import { CTASectionWidget } from "@/components/cta-section-widget";
import { FooterSection } from "@/components/footer-section";
import { StickySliderSection } from "@/components/sticky-slider-section";
import { ScrollZoomText } from "@/components/ui/scroll-zoom-text";
import { ProfessionalSlider } from "@/components/ui/professional-slider";
import { AnimatedText } from "@/components/animated-text";
import { ScrollRevealSection } from "@/components/sections/ScrollRevealSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSeparator } from "@/components/animated-separator";
import { HorizontalStopScroll } from "@/components/horizontal-stop-scroll";

const products = [
  {
    title: "Modern Villa Visualization",
    link: "https://app.typus.ai",
    thumbnail: "/modern-villa-render.png",
  },
  {
    title: "Commercial Building Design",
    link: "https://app.typus.ai",
    thumbnail: "/modern-office-building.png",
  },
  {
    title: "Residential Complex",
    link: "https://app.typus.ai",
    thumbnail: "/modern-apartment-complex.png",
  },
  {
    title: "Interior Design Visualization",
    link: "https://app.typus.ai",
    thumbnail: "/modern-interior-design.png",
  },
  {
    title: "Landscape Architecture",
    link: "https://app.typus.ai",
    thumbnail: "/placeholder-5dpn0.png",
  },
  {
    title: "Urban Planning",
    link: "https://app.typus.ai",
    thumbnail: "/urban-planning-visualization.png",
  },
  {
    title: "Sustainable Design",
    link: "https://app.typus.ai",
    thumbnail: "/sustainable-green-building.png",
  },
  {
    title: "Historic Renovation",
    link: "https://app.typus.ai",
    thumbnail: "/historic-building-renovation.png",
  },
  {
    title: "Futuristic Architecture",
    link: "https://app.typus.ai",
    thumbnail: "/placeholder-dh1xm.png",
  },
  {
    title: "Mixed-Use Development",
    link: "https://app.typus.ai",
    thumbnail: "/mixed-use-development.png",
  },
  {
    title: "Cultural Center",
    link: "https://app.typus.ai",
    thumbnail: "/cultural-center-render.png",
  },
  {
    title: "Educational Facility",
    link: "https://app.typus.ai",
    thumbnail: "/educational-building.png",
  },
  {
    title: "Healthcare Architecture",
    link: "https://app.typus.ai",
    thumbnail: "/modern-healthcare-facility.png",
  },
  {
    title: "Retail Space Design",
    link: "https://app.typus.ai",
    thumbnail: "/retail-space-interior.png",
  },
  {
    title: "Industrial Architecture",
    link: "https://app.typus.ai",
    thumbnail: "/industrial-building-render.png",
  },
];

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="relative w-full">
      <TypusNavbar />

      {/* Hero Section with Parallax */}
      <HeroParallax products={products} />

      {/* Animated Separator */}
      <AnimatedSeparator />

      {/* Sticky Slider Section */}
      <StickySliderSection />

      {/* Animated Separator */}
      <AnimatedSeparator />

      {/* Horizontal Stop Scroll Section */}
      <HorizontalStopScroll />

      {/* Animated Separator */}
      <AnimatedSeparator />

      {/* Feature Showcase Section */}
      <FeatureShowcaseWidget />

      {/* Animated Separator */}
      <AnimatedSeparator />

      {/* Testimonials Section */}
      <TestimonialCarouselWidget />

      {/* Animated Separator */}
      <AnimatedSeparator />

      {/* Enhanced CTA Section */}
      <CTASectionWidget />

      {/* Animated Separator */}
      <AnimatedSeparator />

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-16 sm:py-20 bg-white dark:bg-black transition-colors duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <AnimatedText
              text="Featured Projects"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto"
            >
              Explore stunning architectural visualizations created with
              <span style={{ color: "rgb(255, 54, 54)" }}> Typus.AI</span>
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.slice(0, 6).map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-black border border-black/10 dark:border-white/10 hover:border-[rgb(255,54,54)] dark:hover:border-[rgb(255,54,54)]">
                  <CardContent className="p-0">
                    <div className="relative h-48 sm:h-64 overflow-hidden">
                      <Image
                        src={product.thumbnail || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="font-semibold text-base sm:text-lg mb-2 text-black dark:text-white">
                        {product.title}
                      </h3>
                      <Link href={product.link}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="min-h-[44px] border-black dark:border-white text-black dark:text-white hover:bg-[rgb(255,54,54)] hover:text-white hover:border-[rgb(255,54,54)] transition-all duration-300"
                        >
                          View Project
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Separator */}
      <AnimatedSeparator />

      {/* Enhanced Footer */}
      <FooterSection />
    </div>
  );
}
