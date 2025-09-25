"use client";
import AdaptiveNavbar from "@/components/adaptive-navbar";
import { HeroParallax } from "@/components/hero-parallax";
import { SplashScreen } from "@/components/splash-screen";
import { motion } from "framer-motion";

import { StickyBottomSheet } from "@/components/sticky-bottom-sheet";
import { measurePerformance } from "@/lib/performance";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useEffect, useState } from "react";

import CompareDemo from "@/components/compare-drag-demo";
import { VideoShowcaseSection } from "@/components/video-showcase-section";
import { row123Products, row4Products } from "@/constants/homePage";
import { NavbarDemo } from "@/components/adaptive-navbar-2";
const StickySliderSection = dynamic(
  () =>
    import("@/components/sticky-slider-section").then(
      (mod) => mod.StickySliderSection
    ),
  {
    ssr: false,
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  }
);
const TabVideoShowcase = dynamic(
  () =>
    import("@/components/tab-video-showcase").then(
      (mod) => mod.TabVideoShowcase
    ),
  {
    ssr: false,
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  }
);
const ReviewsSection = dynamic(
  () =>
    import("@/components/reviews-section").then((mod) => mod.ReviewsSection),
  {
    ssr: false,
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  }
);
const ManyChatPricingSection = dynamic(
  () =>
    import("@/components/manychat-pricing-section").then(
      (mod) => mod.ManyChatPricingSection
    ),
  {
    ssr: false,
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  }
);
const MeetOurTeamSection = dynamic(
  () =>
    import("@/components/meet-our-team-section").then(
      (mod) => mod.MeetOurTeamSection
    ),
  {
    ssr: false,
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  }
);
const ArticleCarouselSection = dynamic(
  () =>
    import("@/components/article-carousel-section").then(
      (mod) => mod.ArticleCarouselSection
    ),
  {
    ssr: false,
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  }
);

const FooterSection = dynamic(
  () => import("@/components/footer-section").then((mod) => mod.FooterSection),
  {
    ssr: false,
    loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
  }
);

// Row 1, 2, 3 images from row-1-2-3 folder

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Initialize performance monitoring
    measurePerformance();

    // Performance monitoring
    const startTime = performance.now();
    console.log("🚀 Page load started at:", startTime);

    // Background preloading during splash - optimized for faster loading
    const preloadResources = async () => {
      try {
        // Preload only critical above-the-fold images
        const imagePromises = row123Products.slice(0, 2).map((product) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = product.thumbnail;
          });
        });

        // Await critical images
        await Promise.all(imagePromises);

        const endTime = performance.now();
        const loadTime = endTime - startTime;
        console.log(`✅ Resources preloaded in ${loadTime.toFixed(2)}ms`);
        console.log(
          `📊 Performance: ${
            loadTime < 1500
              ? "Excellent"
              : loadTime < 2500
              ? "Good"
              : "Needs improvement"
          }`
        );

        setIsPreloaded(true);
      } catch (error) {
        console.error("Preload error:", error);
        setIsPreloaded(true);
      }
    };

    preloadResources();
  }, []);

  const handleSplashComplete = () => {
    if (isPreloaded) {
      setShowSplash(false);
    } else {
      // Wait for preloading to complete
      setTimeout(() => setShowSplash(false), 100); // Reduced from 500ms
    }
  };

  const MainContent = () => (
    <div className="relative w-full">
      {/* Navbar */}
      {/* <AdaptiveNavbar /> */}
      <NavbarDemo />

      {/* Hero Section with Parallax */}
      <HeroParallax
        row123Products={row123Products}
        row4Products={row4Products}
      />

      {/* Video Showcase Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Reduced from 0.8s
        viewport={{ once: true, margin: "-100px" }}
      >
        <VideoShowcaseSection />
      </motion.div>

      {/* Sticky Slider Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Reduced from 0.8s
        viewport={{ once: true, margin: "-100px" }}
      >
        <StickySliderSection />
      </motion.div>

      {/* Tab Video Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Reduced from 0.8s
        viewport={{ once: true, margin: "-100px" }}
      >
        <TabVideoShowcase />
      </motion.div>

      {/* Before & After Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Reduced from 0.8s
        viewport={{ once: true, margin: "-100px" }}
      >
        <CompareDemo />
      </motion.div>

      {/* Pricing Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Reduced from 0.8s
        viewport={{ once: true, margin: "-100px" }}
      >
        <ManyChatPricingSection />
      </motion.div>

      {/* Meet Our Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Reduced from 0.8s
        viewport={{ once: true, margin: "-100px" }}
      >
        <MeetOurTeamSection />
      </motion.div>

      {/* Article Carousel Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Reduced from 0.8s
        viewport={{ once: true, margin: "-100px" }}
      >
        <ArticleCarouselSection />
      </motion.div>

      {/* Reviews Section with Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Reduced from 0.8s
        viewport={{ once: true, margin: "-100px" }}
      >
        <ReviewsSection />
      </motion.div>

      {/* Enhanced Footer */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Reduced from 0.8s
        viewport={{ once: true, margin: "-100px" }}
      >
        <FooterSection />
      </motion.div>

      {/* Sticky Bottom Sheet */}
      <StickyBottomSheet showOnlyInHero={true} />
    </div>
  );

  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Typus AI",
            description:
              "AI-powered architectural visualization platform that transforms CAD files and sketches into photorealistic renders while preserving structural integrity.",
            url: "https://typus.ai",
            applicationCategory: "DesignApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            creator: {
              "@type": "Organization",
              name: "Typus AI",
              url: "https://typus.ai",
            },
            featureList: [
              "AI-powered architectural visualization",
              "CAD file processing",
              "Photorealistic rendering",
              "Structure preservation",
              "Real-time processing",
            ],
          }),
        }}
      />

      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Typus AI",
            url: "https://typus.ai",
            logo: "https://typus.ai/logo/typus_logo_red_transp.png",
            description:
              "Leading AI-powered architectural visualization platform",
            foundingDate: "2024",
            industry: "Artificial Intelligence",
            serviceArea: "Worldwide",
            knowsAbout: [
              "Artificial Intelligence",
              "Architectural Visualization",
              "3D Rendering",
              "CAD Processing",
              "Design Automation",
            ],
          }),
        }}
      />

      {/* Main Content - Always Rendered */}
      <MainContent />

      {/* Splash Screen Overlay */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
    </>
  );
}
