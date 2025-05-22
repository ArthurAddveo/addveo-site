"use client"

import { MorphingText } from "@/components/magicui/morphing-text"
import { Ripple } from "@/components/magicui/ripple"
import { Particles } from "@/components/magicui/particles"

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">

      {/* Particules par-dessus Ripple */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Particles
          className="w-full h-full"
          quantity={150}
          color="#ffffff" // Blanc = visible sur fond noir
        />
      </div>

      {/* Texte centré par-dessus tout */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <MorphingText
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center"
          texts={[
            "ADDVEO",
            "Propulse vos idées",
            "Gère vos projets",
            "Vous accompagne",
          ]}
        />
      </div>
    </main>
  )
}
