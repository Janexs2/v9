"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Depoimentos() {
  const [active, setActive] = useState(0)
  const dep = CONFIG.depoimentos
  const prev = () => setActive((a) => (a === 0 ? dep.length - 1 : a - 1))
  const next = () => setActive((a) => (a === dep.length - 1 ? 0 : a + 1))

  return (
    <section className="py-20 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(15,76,92,0.3) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9A33B]" />
            <span className="text-[#C9A33B] text-[11px] font-bold tracking-[0.3em] uppercase">Resultados reais</span>
            <div className="w-10 h-px bg-[#C9A33B]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white uppercase leading-[0.92]">
            VEJA O QUE FAMÍLIAS<br />
            <span className="text-[#1B5FBF]">COMPARTILHAM</span>
          </h2>
        </motion.div>

        {/* Desktop: all 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-px bg-white/5 mb-12">
          {dep.map((d, i) => (
            <motion.div
              key={i}
              className="bg-[#0A0A0A] hover:bg-[#0D3A7A]/25 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <div className="bg-[#075E54] px-5 py-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{d.nome.charAt(0)}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm truncate">{d.nome}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                    <span className="text-white/50 text-xs">online</span>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-[#111] min-h-[160px]">
                <div className="bg-white/8 border border-white/5 rounded-tr-2xl rounded-b-2xl p-4 max-w-[92%]">
                  <p className="text-white/70 text-sm leading-relaxed">{d.texto}</p>
                  <span className="text-white/25 text-xs block text-right mt-2">✓✓</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden mb-10">
          <div className="bg-[#0A0A0A] border border-white/8 mb-4">
            <div className="bg-[#075E54] px-5 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">{dep[active].nome.charAt(0)}</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{dep[active].nome}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  <span className="text-white/50 text-xs">online</span>
                </div>
              </div>
            </div>
            <div className="p-5 bg-[#111] min-h-[140px]">
              <div className="bg-white/8 border border-white/5 rounded-tr-2xl rounded-b-2xl p-4">
                <p className="text-white/70 text-sm leading-relaxed">{dep[active].texto}</p>
                <span className="text-white/25 text-xs block text-right mt-2">✓✓</span>
              </div>
            </div>
          </div>
          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4">
            <button onClick={prev} className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 hover:border-[#1B5FBF] hover:text-[#1B5FBF] transition-colors rounded-md">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {dep.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-[#1B5FBF]" : "bg-white/20"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 hover:border-[#1B5FBF] hover:text-[#1B5FBF] transition-colors rounded-md">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-4 bg-[#1B5FBF] text-white font-bold text-sm tracking-widest uppercase rounded-md hover:shadow-[0_0_30px_rgba(201,163,59,0.35)] transition-shadow duration-300"
          >
              Agendar Minha Consulta Agora
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out opacity-20" />
          </a>
        </div>
      </div>
    </section>
  )
}
