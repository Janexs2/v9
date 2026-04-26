"use client"

import { motion } from "framer-motion"

const pilares = [
  { num: "01", label: "Cognição", desc: "Melhora da função cognitiva e aprendizado" },
  { num: "02", label: "Foco", desc: "Atenção e concentração sustentadas" },
  { num: "03", label: "Comportamento", desc: "Redução de crises e regulação emocional" },
  { num: "04", label: "Intestino", desc: "Eixo intestino-cérebro equilibrado" },
]

export function Neurosuplementacao() {
  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Label */}
        <motion.div
          className="inline-flex items-center gap-3 border border-[#1B5FBF]/40 px-5 py-2 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="w-1.5 h-1.5 bg-[#1B5FBF]" />
          <span className="text-[#C9A33B] text-[11px] font-bold tracking-[0.3em] uppercase">Metodologia exclusiva</span>
        </motion.div>

        {/* Headline + intro */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:items-end mb-16">
          <motion.h2
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#0A0A0A] uppercase leading-[0.92] lg:w-1/2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            COM A{" "}
            <span className="text-[#0D3A7A]">NEURO&shy;SUPLE&shy;MENTAÇÃO</span>
          </motion.h2>
          <motion.p
            className="text-[#4a4a4a] text-lg leading-relaxed lg:w-1/2 lg:pb-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Uma estratégia nutricional voltada para o equilíbrio e desempenho neurológico. Utilizamos vitaminas, minerais, ácidos graxos essenciais, aminoácidos e outros nutrientes fundamentais para favorecer o funcionamento saudável do cérebro.
          </motion.p>
        </div>

        {/* Pillars — 2x2 mobile, 4 col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8e3da] mb-12">
          {pilares.map((p, i) => (
            <motion.div
              key={p.label}
              className="bg-[#F8FAFC] p-6 md:p-8 group hover:bg-[#0D3A7A] transition-colors duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <div className="text-3xl font-serif font-bold text-[#1B5FBF]/20 group-hover:text-[#1B5FBF]/40 mb-3 transition-colors leading-none">
                {p.num}
              </div>
              <p className="font-bold text-[#0A0A0A] group-hover:text-[#1B5FBF] text-base mb-1.5 transition-colors duration-300">
                {p.label}
              </p>
              <p className="text-[#4a4a4a] group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-[#4a4a4a] text-base md:text-lg leading-relaxed border-l-4 border-[#1B5FBF] pl-5 max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Tudo isso por meio de um atendimento personalizado, que enxerga a criança de forma integral, investigando causas e necessidades específicas — indo muito além de diagnósticos prontos.
        </motion.p>
      </div>
    </section>
  )
}
