import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useMediaQuery } from '../hooks/use-media-query'

const ALL_IMAGES = [
  // Top Cluster (More horizontal, premium renders)
  { src: 'https://prai-vision.s3.eu-central-1.amazonaws.com/templates/low-aerial-modern-residential.jpg', mobile: false, desktop: { width: 325, height: 175, x: 325, y: -325, rotate: 0, delay: 0.3 } },

  // Left Cluster
  { src: 'https://prai-vision.s3.eu-central-1.amazonaws.com/templates/european-waterfront-residential-building.jpg', mobile: false, desktop: { width: 300, height: 200, x: -625, y: -150, rotate: -1, delay: 0.5 } },
  { src: 'https://prai-vision.s3.eu-central-1.amazonaws.com/templates/berlin-modern-apartment.jpg', mobile: false, desktop: { width: 300, height: 175, x: -600, y: 25, rotate: -5, delay: 0.15 } },
  { src: 'https://prai-vision.s3.eu-central-1.amazonaws.com/templates/brutalist-cliffside-concrete-house.jpg', mobile: false, desktop: { width: 300, height: 175, x: -550, y: 200, rotate: -5, delay: 0.1 } },

  // Right Cluster
  { src: '/variation-8.jpg', mobile: false, desktop: { width: 325, height: 200, x: 350, y: -150, rotate: 1, delay: 0.5 } },
  { src: '/industrial-building-render.png', mobile: false, desktop: { width: 300, height: 175, x: 300, y: 25, rotate: 5, delay: 0.15 } },
  // { src: 'https://prai-vision.s3.eu-central-1.amazonaws.com/templates/mediterranean-coastal-apartment-terraces.jpg', mobile: false, desktop: { width: 300, height: 175, x: 300, y: 200, rotate: 5, delay: 0.15 } },
  { src: '/kernal-zoom/image-22072.png', mobile: false, desktop: { width: 300, height: 175, x: 300, y: 200, rotate: 5, delay: 0.15 } },

  // Lower/Grip clusters (Filling space)
  // { src: '/historic-building-renovation.png', mobile: false, desktop: { width: 220, height: 160, x: -250, y: 480, rotate: 3, delay: 0.6 } },
  // { src: '/mixed-use-development.png', mobile: false, desktop: { width: 240, height: 170, x: 250, y: 520, rotate: -6, delay: 0.7 } },

  // Grid images integrated
  { src: 'https://prai-vision.s3.eu-central-1.amazonaws.com/templates/low-aerial-courtyard-housing.jpg', mobile: false, desktop: { width: 325, height: 200, x: -650, y: -325, rotate: 0, delay: 0.3 } },
] 

//  { src: '/variation-10.jpg', mobile: false, desktop: { width: 380, height: 260, x: 480, y: -420, rotate: 4, delay: 0.3 } },

//   // Left Cluster
//   { src: '/variation-3.jpg', mobile: false, desktop: { width: 300, height: 210, x: -760, y: -140, rotate: -8, delay: 0.2 } },
//   { src: '/variation-4.jpg', mobile: false, desktop: { width: 375, height: 250, x: -790, y: 60, rotate: 6, delay: 0.4 } },
//   { src: '/variation-7.jpg', mobile: false, desktop: { width: 250, height: 175, x: -750, y: 280, rotate: -6, delay: 0.1 } },

//   // Right Cluster
//   { src: '/variation-8.jpg', mobile: false, desktop: { width: 280, height: 200, x: 520, y: -90, rotate: 5, delay: 0.5 } },
//   { src: '/industrial-building-render.png', mobile: false, desktop: { width: 320, height: 220, x: 530, y: 90, rotate: -4, delay: 0.15 } },
//   { src: '/cultural-center-render.png', mobile: false, desktop: { width: 300, height: 210, x: 540, y: 270, rotate: 8, delay: 0.45 } },

//   // Lower/Grip clusters (Filling space)
//   // { src: '/historic-building-renovation.png', mobile: false, desktop: { width: 220, height: 160, x: -250, y: 480, rotate: 3, delay: 0.6 } },
//   // { src: '/mixed-use-development.png', mobile: false, desktop: { width: 240, height: 170, x: 250, y: 520, rotate: -6, delay: 0.7 } },

//   // Grid images integrated
//   { src: '/variation-1.jpg', mobile: false, desktop: { width: 300, height: 240, x: -740, y: -380, rotate: 10, delay: 0.8 } },
  

export const FloatingCollage = () => {
  const { scrollY } = useScroll()
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')

  // Gentle parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, -120])
  const y2 = useTransform(scrollY, [0, 1000], [0, -200])
  const y3 = useTransform(scrollY, [0, 1000], [0, -80])

  const displayImages = isDesktop ? ALL_IMAGES : ALL_IMAGES.filter(img => img.mobile)

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle Grid Background for that designer look */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative w-full h-full max-w-[1700px] mx-auto flex items-center justify-center">
        {displayImages.map((img, i) => {
          const yTransform = i % 3 === 0 ? y1 : i % 3 === 1 ? y2 : y3

          let style: any = {
            position: 'absolute',
            zIndex: 10,
            y: yTransform,
          }

          if (isDesktop) {
            style = {
              ...style,
              left: `calc(50% + ${img.desktop.x}px)`,
              top: `calc(50% + ${img.desktop.y}px)`,
              width: img.desktop.width,
              height: img.desktop.height,
              rotate: img.desktop.rotate,
            }
          } else if (isTablet) {
            const scale = 0.65
            style = {
              ...style,
              left: `calc(50% + ${img.desktop.x * scale}px)`,
              top: `calc(50% + ${img.desktop.y * scale}px)`,
              width: img.desktop.width * scale,
              height: img.desktop.height * scale,
              rotate: img.desktop.rotate * 0.7,
            }
          } else {
            // Mobile: Gentle scatter around the center text
            const angle = (i / displayImages.length) * Math.PI * 2
            const radiusX = 140
            const radiusY = 220
            const w = 150
            const h = 100

            style = {
              ...style,
              left: `calc(50% + ${Math.cos(angle) * radiusX - w / 2}px)`,
              top: `calc(50% + ${Math.sin(angle) * radiusY - h / 2}px)`,
              width: w,
              height: h,
              rotate: (i % 2 === 0 ? 3 : -3),
            }
          }

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: isDesktop ? img.desktop.delay : i * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              style={style}
              className="rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[6px] border-white dark:border-neutral-800 backdrop-blur-sm"
            >
              <Image
                src={img.src}
                alt={`Hero display ${i}`}
                fill
                className="object-cover transition-all duration-700 hover:scale-110"
                sizes="(max-width: 768px) 200px, (max-width: 1200px) 400px, 600px"
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

