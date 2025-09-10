"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BreathingAnimationText } from "./breathing-animation-text";

const teamMembers = [
  {
    id: 1,
    name: "Alex Chen",
    role: "CEO",
    focus: "AI Strategy"
  },
  {
    id: 2,
    name: "Sarah Rodriguez",
    role: "CTO", 
    focus: "Computer Vision"
  },
  {
    id: 3,
    name: "Marcus Thompson",
    role: "Design Lead",
    focus: "UX Systems"
  },
  {
    id: 4,
    name: "Dr. Emily Wang",
    role: "AI Research",
    focus: "Generative AI"
  }
];

export function MeetOurTeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef}
      className="py-32 relative"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <BreathingAnimationText
            animationType="black-gray"
            className="font-space-grotesk"
          >
            <h2
              className="text-[30px] font-normal text-black tracking-tight"
              style={{
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              }}
            >
              TEAM
            </h2>
          </BreathingAnimationText>
        </motion.div>

        {/* Ultra Minimal Team List */}
        <div className="space-y-1">
          {teamMembers.map((member, index) => (
            <TeamMemberRow 
              key={member.id} 
              member={member} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMemberRow({ member, index }: { member: typeof teamMembers[0], index: number }) {
  return (
    <motion.div
      className="group relative border-b border-black/10 last:border-b-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="py-8 px-4 cursor-pointer"
        whileHover={{ x: 8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {/* Minimal Avatar */}
            <motion.div
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <span 
                className="text-white text-sm font-medium"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {member.name.split(' ').map(n => n[0]).join('')}
              </span>
            </motion.div>
            
            {/* Name & Role */}
            <div>
              <BreathingAnimationText animationType="black-gray">
                <h3 
                  className="text-xl font-normal text-black"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {member.name}
                </h3>
              </BreathingAnimationText>
              <p 
                className="text-gray-500 text-sm mt-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {member.role}
              </p>
            </div>
          </div>
          
          {/* Focus Area */}
          <div className="text-right">
            <BreathingAnimationText animationType="black-gray">
              <p 
                className="text-black text-sm font-medium"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {member.focus}
              </p>
            </BreathingAnimationText>
          </div>
        </div>
        
        {/* Hover Line */}
        <motion.div
          className="h-px bg-black mt-4 origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
