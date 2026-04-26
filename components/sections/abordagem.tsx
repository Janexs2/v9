"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Brain, Heart, Leaf } from "lucide-react"

const categorias = [
  {
    icon: Brain,
    titulo: "Neuro & Comportamento",
    itens: [
      "Eixo intestino-cérebro desregulado",
      "Irritabilidade e agitação",
      "Dificuldade de foco e atenção",
      "Sono ruim ou despertares noturnos",
    ],
  },
  {
    icon: Leaf,
    titulo: "Digestão & Intestino",
    itens: [
      "Constipação ou diarreia frequente",
      "Dores abdominais recorrentes",
      "Baixa imunidade",
    ],
  },
  {
    icon: Heart,
    titulo: "Alimentação & Nutrição",
    itens: [
      "Seletividade alimentar intensa",
      "Recusa de frutas, verduras e proteínas",
      "Dificuldade de crescimento ou baixo peso",
      "Necessidade de suplementação correta",
    ],
  },
]

export function Abordagem() {
  return (
    <section id="abordagem" className="py-20 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(15,76,92,0.35) 0%, transparent 55%), radial-gradient(ellipse at bottom left, rgba(212,175,55,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9A33B]" />
            <span className="text-[#C9A33B] text-[11px] font-bold tracking-[0.3em] uppercase">
              Para quem é
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white uppercase leading-[0.95] mb-5">
            PARA QUEM É<br />
            ESSE{" "}
            <span className="text-[#1B5FBF]">ATENDIMENTO?</span>
          </h2>
          <p className="text-white/50 text-lg">
            Se você é mãe ou pai atípico e seu filho apresenta algum desses sinais, esse acompanhamento foi feito para você.
          </p>
        </motion.div>

        {/* Category cards — 3 columns desktop, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 mb-12">
          {categorias.map((cat, ci) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.titulo}
                className="bg-[#0A0A0A] hover:bg-[#0D3A7A]/20 transition-colors duration-300 p-7 md:p-8 flex flex-col gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * ci }}
              >
                {/* Icon + title */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#1B5FBF]/10 border border-[#1B5FBF]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#1B5FBF]" />
                  </div>
                  <h3 className="text-[#1B5FBF] font-bold text-sm tracking-widest uppercase">
                    {cat.titulo}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-2.5">
                  {cat.itens.map((item) => (
                    <li key={item} className="flex items-start.5 text-white/60 text-sm leading-snug">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1B5FBF]/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* CTA row */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/60 text-base max-w-sm">
            Se algum desses sinais descreve o seu filho, estou aqui para ajudar.
          </p>
          <a
            href={CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 bg-[#1B5FBF] text-white font-bold text-sm tracking-widest uppercase rounded-md flex-shrink-0 hover:shadow-[0_0_30px_rgba(201,163,59,0.35)] transition-shadow duration-300"
          >
              Quero Agendar Agora
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out opacity-20" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
