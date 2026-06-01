'use client';
import React from 'react'
import { motion } from 'framer-motion'

const Reveal = ({ children, initial, whileInView, transition, viewport, className }: { children: React.ReactNode; initial?: any; whileInView?: any; transition?: any; viewport?: any; className?: string }) => {
  return (
     <motion.div
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          viewport={viewport}
          className={className}
        >
          {
            children
          }
        </motion.div>
  )
}

export default Reveal