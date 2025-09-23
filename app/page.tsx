"use client";
import { HeroParallax } from "@/components/hero-parallax";
import { SplashScreen } from "@/components/splash-screen";
import TypusNavbar from "@/components/typus-navbar";
import { motion } from "framer-motion";

import { StickyBottomSheet } from "@/components/sticky-bottom-sheet";
import { measurePerformance } from "@/lib/performance";
import dynamic from 'next/dynamic';
import Script from "next/script";
import { useEffect, useState } from "react";

import CompareDemo from '@/components/compare-drag-demo';
import { VideoShowcaseSection } from '@/components/video-showcase-section';
const StickySliderSection = dynamic(() => import('@/components/sticky-slider-section').then(mod => mod.StickySliderSection), { ssr: false, loading: () => <div className="h-96 bg-gray-100 animate-pulse" /> });
const TabVideoShowcase = dynamic(() => import('@/components/tab-video-showcase').then(mod => mod.TabVideoShowcase), { ssr: false, loading: () => <div className="h-96 bg-gray-100 animate-pulse" /> });
const FeatureShowcaseWidget = dynamic(() => import('@/components/feature-showcase-widget').then(mod => mod.FeatureShowcaseWidget), { ssr: false, loading: () => <div className="h-96 bg-gray-100 animate-pulse" /> });
const ReviewsSection = dynamic(() => import('@/components/reviews-section').then(mod => mod.ReviewsSection), { ssr: false, loading: () => <div className="h-96 bg-gray-100 animate-pulse" /> });
const ManyChatPricingSection = dynamic(() => import('@/components/manychat-pricing-section').then(mod => mod.ManyChatPricingSection), { ssr: false, loading: () => <div className="h-96 bg-gray-100 animate-pulse" /> });
const MeetOurTeamSection = dynamic(() => import('@/components/meet-our-team-section').then(mod => mod.MeetOurTeamSection), { ssr: false, loading: () => <div className="h-96 bg-gray-100 animate-pulse" /> });
const ArticleCarouselSection = dynamic(() => import('@/components/article-carousel-section').then(mod => mod.ArticleCarouselSection), { ssr: false, loading: () => <div className="h-96 bg-gray-100 animate-pulse" /> });

const FooterSection = dynamic(() => import('@/components/footer-section').then(mod => mod.FooterSection), { ssr: false, loading: () => <div className="h-64 bg-gray-100 animate-pulse" /> });

// Row 1, 2, 3 images from row-1-2-3 folder
const row123Products = [
  {
    title: "Commercial Building",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/commercial building.png",
  },
  {
    title: "Conceptual Representation",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/conceptual representation.png",
  },
  {
    title: "Contemporary Residential Villa",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/contemporary residential villa.png",
  },
  {
    title: "Cultural Building",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/cultural building.png",
  },
  {
    title: "Curtain Wall Façade",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/Curtain wall façade.png",
  },
  {
    title: "Industrial Loft Style",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/industrial loft style.png",
  },
  {
    title: "Institutional Building",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/institutional building.png",
  },
  {
    title: "Japandi Style",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/japandi.png",
  },
  {
    title: "Modern Residential House",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/modern residential house.png",
  },
  {
    title: "Modern Single Family House",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/modern single family house.png",
  },
  {
    title: "Morning Light Sunbeams",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/morning light sunbeams.png",
  },
  {
    title: "Multi-Family House",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/multi-family house.png",
  },
  {
    title: "Multistory Compartment House",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/multistory compartment house.png",
  },
  {
    title: "Multistory Office Building",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/multistroy office building.png",
  },
  {
    title: "Pale Light From The Moon",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/PALE LIGHT FROM THE MOON.png",
  },
  {
    title: "Precast Concrete Panels",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/precast concrete panels.png",
  },
  {
    title: "Residential Building",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/residential building.png",
  },
  {
    title: "Shabby Chic",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/shabby chic.png",
  },
  {
    title: "Warm Sunlight After Sunrise",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-1-2-3/warm sunlight just after sunrise.png",
  },
];

// Row 4 images from row-4 folder
const row4Products = [
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-2eqryfjbvmo6ptttvn6khaq5qi.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-3danovrbb74jhxjjw6rbuldkwy.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-5sxa2lrb27dhm5www6pucj2qs4.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-6q7ztkrbuvz22gs3xmhsmgsnfe.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-b2goewrbzuw6qkccdkpfolpbhe.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-fgzcyqrb5yqqc64gqmeszwzh7i.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-hbbru2bbfsrx44rqjgpknel3e4.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-hg2suxbb4kjlb35amj7jgiseo4.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-hsuwavbbbsioh2nj3ggvtlmc74.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-jkhoezzb7nsxnqvmsg2dcsd5he.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-lucuvfrbovpno32e4wy4m6zlhi.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-mh7cfbzbuq3hvfs3j3pvvjvvue.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-np6tkcjbnfky7nnkj2zpomvnxu.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-r24c5zzbqua3anh66eywkxi5mm.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-rakarxbb2dqug5gg5czjxd2b4e.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-rybyolzbxov34yn4xaka6xvfpi.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-sv2kspbbnmszahkxsoc2xby6dm.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-ucyyzuzbzubtf5hpjdephj5e3e.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-va7ibhrbeshesmlskryvbzjubu.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-xz34dkjb66kihbm7g4qcwqxude.png",
  },
  {
    title: "",
    link: "https://app.typus.ai",
    thumbnail: "/hero-parallax-images/row-4/u_replicate-prediction-yofkahzbb5rhnld2qzblbpfza4.png",
  },
];

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
    console.log('🚀 Page load started at:', startTime);
    
    // Background preloading during splash - optimized for faster loading
    const preloadResources = async () => {
      try {
        // Preload only critical above-the-fold images
        const imagePromises = row123Products.slice(0, 2).map(product => {
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
        console.log(`📊 Performance: ${loadTime < 1500 ? 'Excellent' : loadTime < 2500 ? 'Good' : 'Needs improvement'}`);
        
        setIsPreloaded(true);
      } catch (error) {
        console.error('Preload error:', error);
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
      <TypusNavbar />

      {/* Hero Section with Parallax */}
      <HeroParallax row123Products={row123Products} row4Products={row4Products} />

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
            "name": "Typus AI",
            "description": "AI-powered architectural visualization platform that transforms CAD files and sketches into photorealistic renders while preserving structural integrity.",
            "url": "https://typus.ai",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "creator": {
              "@type": "Organization",
              "name": "Typus AI",
              "url": "https://typus.ai"
            },
            "featureList": [
              "AI-powered architectural visualization",
              "CAD file processing",
              "Photorealistic rendering",
              "Structure preservation",
              "Real-time processing"
            ]
          })
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
            "name": "Typus AI",
            "url": "https://typus.ai",
            "logo": "https://typus.ai/logo/typus_logo_red_transp.png",
            "description": "Leading AI-powered architectural visualization platform",
            "foundingDate": "2024",
            "industry": "Artificial Intelligence",
            "serviceArea": "Worldwide",
            "knowsAbout": [
              "Artificial Intelligence",
              "Architectural Visualization",
              "3D Rendering",
              "CAD Processing",
              "Design Automation"
            ]
          })
        }}
      />

      {/* Main Content - Always Rendered */}
      <MainContent />
      
      {/* Splash Screen Overlay */}
      {showSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
    </>
  );
}