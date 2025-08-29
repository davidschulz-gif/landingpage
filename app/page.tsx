"use client";
import { AnimatedSeparator } from "@/components/animated-separator";
import { CTASectionWidget } from "@/components/cta-section-widget";
import { FeatureShowcaseWidget } from "@/components/feature-showcase-widget";
import { FooterSection } from "@/components/footer-section";
import { HeroParallax } from "@/components/hero-parallax";
import { HorizontalStopScroll } from "@/components/horizontal-stop-scroll";
import { SplashScreen } from "@/components/splash-screen";
import { StickySliderSection } from "@/components/sticky-slider-section";
import { TestimonialCarouselWidget } from "@/components/testimonial-carousel-widget";
import TypusNavbar from "@/components/typus-navbar";
import { VideoShowcaseSection } from "@/components/video-showcase-section";
import { TabVideoShowcase } from "@/components/tab-video-showcase";
import { useEffect, useState } from "react";

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const MainContent = () => (
    <div className="relative w-full">
      <TypusNavbar />

      {/* Hero Section with Parallax */}
      <HeroParallax products={products} />

      {/* Video Showcase Section */}
      <VideoShowcaseSection />

      {/* Animated Separator */}
      {/* <AnimatedSeparator /> */}

      {/* Sticky Slider Section */}
      <StickySliderSection />

      {/* Animated Separator */}
      {/* <AnimatedSeparator /> */}

      {/* Horizontal Stop Scroll Section */}
      {/* <HorizontalStopScroll /> */}

      {/* Animated Separator */}
      {/* <AnimatedSeparator /> */}

      {/* Tab Video Showcase */}
      <TabVideoShowcase />
      
      {/* Feature Showcase Section */}
      <FeatureShowcaseWidget />

      {/* Animated Separator */}
      {/* <AnimatedSeparator /> */}

      {/* Testimonials Section */}
      <TestimonialCarouselWidget />

      {/* Animated Separator */}
      {/* <AnimatedSeparator /> */}

      {/* Enhanced CTA Section */}
      {/* <CTASectionWidget /> */}

      {/* Animated Separator */}
      {/* <AnimatedSeparator /> */}

      {/* Enhanced Footer */}
      <FooterSection />
    </div>
  );

  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Main Content - Always Rendered */}
      <MainContent />
      
      {/* Splash Screen Overlay */}
      {showSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
    </>
  );
}
