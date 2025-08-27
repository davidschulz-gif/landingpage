"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MaterialItem {
  id: string
  title: string
  category: string
  image: string
  description: string
}

const materialsData: MaterialItem[] = [
  // WOOD
  {
    id: "wood-1",
    title: "Brushed Textured Wood Grains",
    category: "WOOD",
    image: "https://typus.ai/wp-content/uploads/2024/07/Brushed-Textured-wood-grains.png",
    description: "Natural wood texture with brushed finish",
  },
  {
    id: "wood-2",
    title: "Fine-grained Wood Veneer",
    category: "WOOD",
    image: "https://typus.ai/wp-content/uploads/2024/07/Fine-grained-wood-veneer.png",
    description: "Premium veneer with fine grain patterns",
  },
  {
    id: "wood-3",
    title: "Lacquered Durable Wood Coatings",
    category: "WOOD",
    image: "https://typus.ai/wp-content/uploads/2024/07/Lacquered-Durable-wood-coatings.png",
    description: "High-gloss protective wood finish",
  },
  {
    id: "wood-4",
    title: "Lightly Painted Wood Surfaces",
    category: "WOOD",
    image: "https://typus.ai/wp-content/uploads/2024/07/Lightly-painted-wood-surfaces.png",
    description: "Subtle painted wood with natural undertones",
  },
  {
    id: "wood-5",
    title: "Horizontally Arranged Wood Planks",
    category: "WOOD",
    image: "https://typus.ai/wp-content/uploads/2024/07/Horizontally-arranged-wood-planks.png",
    description: "Modern horizontal plank arrangement",
  },
  {
    id: "wood-6",
    title: "Weathered Aged Wood Siding",
    category: "WOOD",
    image: "https://typus.ai/wp-content/uploads/2024/07/Weathered-Aged-wood-siding.png",
    description: "Rustic weathered wood with character",
  },
  {
    id: "wood-7",
    title: "Modern Clean-lined Wood Panels",
    category: "WOOD",
    image: "https://typus.ai/wp-content/uploads/2024/07/Modern-Clean-lined-wood-panels.png",
    description: "Contemporary clean wood paneling",
  },
  {
    id: "wood-8",
    title: "Organic Flowing Wood Elements",
    category: "WOOD",
    image: "https://typus.ai/wp-content/uploads/2024/07/Organic-Flowing-wood-elements.png",
    description: "Natural flowing wood grain patterns",
  },

  // CONCRETE
  {
    id: "concrete-1",
    title: "Etched Acid-treated Concrete",
    category: "CONCRETE",
    image: "https://typus.ai/wp-content/uploads/2024/07/Etched-Acid-treated-concrete.png",
    description: "Industrial concrete with acid etching",
  },
  {
    id: "concrete-2",
    title: "Polished Reflective Concrete Surfaces",
    category: "CONCRETE",
    image: "https://typus.ai/wp-content/uploads/2024/07/Polished-Reflective-concrete-surfaces.png",
    description: "High-gloss polished concrete finish",
  },
  {
    id: "concrete-3",
    title: "Glossy Shiny Concrete Surfaces",
    category: "CONCRETE",
    image: "https://typus.ai/wp-content/uploads/2024/07/Glossy-Shiny-concrete-surfaces.png",
    description: "Mirror-like concrete surface treatment",
  },
  {
    id: "concrete-4",
    title: "Soundproof Noise-reducing Concrete Walls",
    category: "CONCRETE",
    image: "https://typus.ai/wp-content/uploads/2024/07/Soundproof-Noise-reducing-concrete-walls.png",
    description: "Acoustic concrete with sound dampening",
  },
  {
    id: "concrete-5",
    title: "Porous Permeable Concrete Surfaces",
    category: "CONCRETE",
    image: "https://typus.ai/wp-content/uploads/2024/07/Porous-Permeable-concrete-surfaces.png",
    description: "Eco-friendly permeable concrete design",
  },
  {
    id: "concrete-6",
    title: "Patinated Aged Concrete Finishes",
    category: "CONCRETE",
    image: "https://typus.ai/wp-content/uploads/2024/07/Patinated-Aged-concrete-finishes.png",
    description: "Weathered concrete with natural patina",
  },
  {
    id: "concrete-7",
    title: "Modular Prefabricated Concrete Panels",
    category: "CONCRETE",
    image: "https://typus.ai/wp-content/uploads/2024/07/Modular-Prefabricated-concrete-panels.png",
    description: "Modern modular concrete system",
  },
  {
    id: "concrete-8",
    title: "Industrial Exposed Concrete Walls",
    category: "CONCRETE",
    image: "https://typus.ai/wp-content/uploads/2024/07/Industrial-Exposed-concrete-walls.png",
    description: "Raw industrial concrete aesthetic",
  },

  // PLASTER
  {
    id: "plaster-1",
    title: "Distressed Weathered Plaster",
    category: "PLASTER",
    image: "https://typus.ai/wp-content/uploads/2024/07/Distressed-Weathered-plaster-surface.png",
    description: "Aged plaster with weathered character",
  },
  {
    id: "plaster-2",
    title: "Lime Natural Breathable Plaster",
    category: "PLASTER",
    image: "https://typus.ai/wp-content/uploads/2024/07/Lime-Natural-breathable-plaster.png",
    description: "Eco-friendly lime-based plaster",
  },
  {
    id: "plaster-3",
    title: "Satin Soft Plaster",
    category: "PLASTER",
    image: "https://typus.ai/wp-content/uploads/2024/07/Satin-Soft-plaster.png",
    description: "Smooth satin finish plaster",
  },
  {
    id: "plaster-4",
    title: "Stucco Textured Plaster",
    category: "PLASTER",
    image: "https://typus.ai/wp-content/uploads/2024/07/Stucco-Textured-plaster.png",
    description: "Traditional textured stucco finish",
  },
  {
    id: "plaster-5",
    title: "Venetian Polished Glossy Plaster",
    category: "PLASTER",
    image: "https://typus.ai/wp-content/uploads/2024/07/Venetian-Polished-glossy-plaster.png",
    description: "Luxurious Venetian plaster technique",
  },
  {
    id: "plaster-6",
    title: "Troweled Hand-applied Textures",
    category: "PLASTER",
    image: "https://typus.ai/wp-content/uploads/2024/07/Troweled-Hand-applied-textures.png",
    description: "Artisanal hand-troweled plaster",
  },
  {
    id: "plaster-7",
    title: "Textured Rough-hewn Finishes",
    category: "PLASTER",
    image: "https://typus.ai/wp-content/uploads/2024/07/Textured-Rough-hewn-finishes.png",
    description: "Rustic rough-textured plaster",
  },
  {
    id: "plaster-8",
    title: "Smooth Sleek Plaster",
    category: "PLASTER",
    image: "https://typus.ai/wp-content/uploads/2024/07/Smooth-Sleek-plaster.png",
    description: "Contemporary smooth plaster finish",
  },

  // METAL
  {
    id: "metal-1",
    title: "Brushed Metal",
    category: "METAL",
    image: "https://typus.ai/wp-content/uploads/2024/07/Brushed-metal.png",
    description: "Classic brushed metal finish",
  },
  {
    id: "metal-2",
    title: "Anodized Steel Surfaces",
    category: "METAL",
    image: "https://typus.ai/wp-content/uploads/2024/07/Anodized-steel-surfaces.png",
    description: "Durable anodized steel treatment",
  },
  {
    id: "metal-3",
    title: "Brushed Textured Metal",
    category: "METAL",
    image: "https://typus.ai/wp-content/uploads/2024/07/Brushed-Textured-metal.png",
    description: "Textured brushed metal surface",
  },
  {
    id: "metal-4",
    title: "Corrugated Ribbed Metal",
    category: "METAL",
    image: "https://typus.ai/wp-content/uploads/2024/07/Corrugated-Ribbed-metal.png",
    description: "Industrial corrugated metal sheets",
  },
  {
    id: "metal-5",
    title: "Polished Mirror-like Metal Finishes",
    category: "METAL",
    image: "https://typus.ai/wp-content/uploads/2024/07/Polished-Mirror-like-metal-finishes.png",
    description: "High-polish reflective metal",
  },
  {
    id: "metal-6",
    title: "Antiqued Aged Metal Surfaces",
    category: "METAL",
    image: "https://typus.ai/wp-content/uploads/2024/07/Antiqued-Aged-metal-surfaces.png",
    description: "Vintage aged metal patina",
  },
  {
    id: "metal-7",
    title: "Etched Decorative Metal Patterns",
    category: "METAL",
    image: "https://typus.ai/wp-content/uploads/2024/07/Etched-Decorative-metal-patterns.png",
    description: "Artistic etched metal designs",
  },
  {
    id: "metal-8",
    title: "Hammered Rough-textured Metal",
    category: "METAL",
    image: "https://typus.ai/wp-content/uploads/2024/07/Hammered-Rough-textured-metal.png",
    description: "Hand-hammered metal texture",
  },
]

export default function AppleMaterialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % materialsData.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + materialsData.length) % materialsData.length)
  }

  const getVisibleCards = () => {
    const cards = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + materialsData.length) % materialsData.length
      cards.push({ ...materialsData[index], position: i })
    }
    return cards
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "WOOD":
        return "from-amber-500 to-orange-600"
      case "CONCRETE":
        return "from-gray-500 to-slate-600"
      case "PLASTER":
        return "from-stone-500 to-neutral-600"
      case "METAL":
        return "from-zinc-500 to-gray-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[size:20px_20px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Material Library
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive collection of architectural materials with AI-powered visualization
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative h-[600px] flex items-center justify-center" ref={sliderRef}>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-sm border border-gray-200/50 hover:bg-white hover:shadow-md flex items-center justify-center transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-sm border border-gray-200/50 hover:bg-white hover:shadow-md flex items-center justify-center transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            {getVisibleCards().map((item) => (
              <div
                key={`${item.id}-${item.position}`}
                className="absolute"
                style={{
                  transform: `translateX(${item.position * 280}px) scale(${item.position === 0 ? 1 : 0.85})`,
                  opacity: Math.abs(item.position) <= 2 ? 1 : 0,
                  zIndex: item.position === 0 ? 10 : 5 - Math.abs(item.position),
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-in-out",
                }}
              >
                <div className="relative w-72 h-96 group cursor-pointer">
                  {/* Card */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    {/* Image */}
                    <div className="relative w-full h-64 overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Category Badge */}
                      <div
                        className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(item.category)} text-white text-sm font-semibold shadow-lg`}
                      >
                        {item.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-white">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {materialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-cyan-500 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
