"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"

const sintomas = [
  "comunicação", "sono", "seletividade",
  "hiperatividade", "falta de foco",
  "comportamentos desafiadores", "constipação", "dores abdominais",
]

export function Dores() {
  return (
    <section className="py-20 md:py-32 bg-[#0D3A7A] relative overflow-hidden">
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* Label */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-10 h-px bg-[#C9A33B]" />
          <span className="text-[#C9A33B] text-[11px] font-bold tracking-[0.3em] uppercase">
            A raiz do problema
          </span>
        </motion.div>

        <motion.h2
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.92] mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Se você sente<br />
          que já tentou<br />
          <span className="text-[#1B5FBF]">de tudo...</span>
        </motion.h2>

        <motion.p
          className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Talvez exista algo importante sendo ignorado: as causas orgânicas por trás dos sintomas. Muitas vezes, terapias têm resultados limitados porque questões como alterações intestinais, deficiências nutricionais e desequilíbrios do organismo não estão sendo investigados.
        </motion.p>

        {/* Quote */}
        <motion.div
          className="border-l-4 border-[#1B5FBF] pl-6 mb-12"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-serif text-xl md:text-2xl text-[#1B5FBF] italic leading-snug">
            "Eu não trato o autismo.<br />
            Eu trato a criança, adolescente e adulto autista."
          </p>
        </motion.div>

        {/* Symptom tags */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/30 text-[11px] font-bold tracking-[0.3em] uppercase mb-4">Sintomas tratáveis</p>
          <div className="flex flex-wrap gap-2">
            {sintomas.map((s) => (
              <span
                key={s}
                className="border border-white/15 text-white/60 px-4 py-2 text-sm rounded-md hover:border-[#1B5FBF]/50 hover:text-[#1B5FBF] transition-colors duration-200"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <a
          href={CONFIG.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 bg-[#C9A33B] text-white font-bold text-sm tracking-widest uppercase rounded-md hover:bg-[#0D3A7A] hover:shadow-[0_0_30px_rgba(201,163,59,0.35)] transition-shadow duration-300"
        >
              Agendar Minha Consulta
          <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out opacity-20" />
        </a>
      </div>
    </section>
  )
}
