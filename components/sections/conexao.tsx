"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Check } from "lucide-react"

const evaluationItems = [
  "Histórico clínico completo",
  "Exames laboratoriais",
  "Sintomas gastrointestinais",
  "Comportamento alimentar",
  "Rotina da família",
  "Sensibilidades sensoriais",
  "Sono e comportamento",
  "Necessidade de suplementação",
]

export function Conexao() {
  return (
    <section className="py-20 md:py-32 bg-[#0D3A7A] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)`,
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
            <span className="text-[#C9A33B] text-[11px] font-bold tracking-[0.3em] uppercase">Como funciona</span>
            <div className="w-10 h-px bg-[#C9A33B]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white uppercase leading-[0.92] mb-4">
            CONSULTA<br />
            <span className="text-[#1B5FBF]">INDIVIDUALIZADA</span>
          </h2>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            Cada criança é única. Por isso, o plano também precisa ser.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Evaluation grid */}
          <motion.div
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="col-span-full bg-[#0a3a47] px-5 py-3">
              <p className="text-[#C9A33B] text-[11px] font-bold tracking-[0.3em] uppercase">
                Na avaliação, analiso:
              </p>
            </div>
            {evaluationItems.map((item, i) => (
              <div
                key={item}
                className="bg-[#0a3a47] px-5 py-4 flex items-center gap-3 hover:bg-white/5 transition-colors"
              >
                <Check className="w-3.5 h-3.5 text-[#1B5FBF] flex-shrink-0" />
                <span className="text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Right side */}
          <motion.div
            className="lg:w-80 flex flex-col gap-4"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            <div className="bg-[#1B5FBF] p-6 md:p-7">
              <p className="text-[#0A0A0A] font-bold text-base leading-relaxed">
                Depois disso, você recebe um plano estratégico totalmente personalizado.
              </p>
            </div>
            <div className="border border-white/15 p-6 md:p-7 flex-1">
              <p className="text-white/60 text-sm leading-relaxed">
                Entre as consultas,{" "}
                <span className="text-[#1B5FBF] font-semibold">meu WhatsApp estará sempre disponível</span>{" "}
                para dúvidas e acompanhamento contínuo da evolução do seu filho.
              </p>
            </div>
            <a
              href={CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#0D3A7A] font-bold text-sm tracking-widest uppercase rounded-md hover:bg-[#1B5FBF] hover:text-[#0A0A0A] transition-colors duration-300"
            >
              Agendar Consulta Agora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
