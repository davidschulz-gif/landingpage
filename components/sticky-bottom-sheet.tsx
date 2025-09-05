"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { TrustedBySection } from "./trusted-by-section";

export const StickyBottomSheet = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleClose = () => {
    setIsVisible(false);
  };



  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-transparent"
        >
          <div className="relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white/90 rounded-full shadow-sm transition-all duration-200"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
            <TrustedBySection />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};