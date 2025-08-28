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

      {/* Enhanced Footer */}
      <FooterSection />
    </div>
  );
}
