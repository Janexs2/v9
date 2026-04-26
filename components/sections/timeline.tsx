"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CONFIG } from "@/lib/config"
import Image from "next/image"

const etapas = [
  {
    id: "antes",
    titulo: "ANTES",
    numero: "01",
    conteudo: "Envio um questionário prévio para saber mais sobre o paciente e seu histórico clínico.",
  },
  {
    id: "durante",
    titulo: "DURANTE",
    numero: "02",
    conteudo: "Realizo a anamnese, onde o paciente especifica suas principais queixas. Conversamos sobre o estilo de vida, hábitos alimentares, saúde intestinal e muito mais. Realizamos as primeiras metas de intervenção.",
  },
  {
    id: "apos",
    titulo: "APÓS",
    numero: "03",
    conteudo: "Realizo a prescrição de suplementações iniciais para o acompanhamento nutricional. Envio o plano alimentar e o pedido de exames laboratoriais para investigação de alergias, deficiências nutricionais, inflamação etc.",
  },
  {
    id: "proxima",
    titulo: "PRÓXIMA",
    numero: "04",
    conteudo: "Avaliamos os ganhos da primeira fase e fazemos a leitura dos exames. Cada consulta tem uma fase específica do tratamento, individualizado de acordo com a necessidade de cada paciente.",
  },
]

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="timeline" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9A33B]" />
            <span className="text-[#C9A33B] text-[11px] font-bold tracking-[0.3em] uppercase">Jornada da consulta</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0A0A0A] uppercase leading-[0.92]">
            COMO É A SUA<br />
            <span className="text-[#0D3A7A]">CONSULTA</span>
          </h2>
        </motion.div>

        {/* Tabs — 2x2 on mobile, row on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#e8e3da] mb-0">
          {etapas.map((e, i) => (
            <button
              key={e.id}
              onClick={() => setActiveIndex(i)}
              className={`flex flex-col items-center gap-1 px-4 py-4 font-bold text-xs tracking-widest uppercase transition-all duration-300 ${
                i === activeIndex
                  ? "bg-[#0D3A7A] text-[#1B5FBF]"
                  : "bg-white text-[#4a4a4a] hover:bg-[#F8FAFC]"
              }`}
            >
              <span className={`text-2xl font-serif font-bold leading-none ${i === activeIndex ? "text-[#1B5FBF]/40" : "text-[#e5e5e5]"}`}>
                {e.numero}
              </span>
              {e.titulo}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="bg-[#0D3A7A] p-8 md:p-12 mb-10"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start">
              <div className="text-[5rem] font-serif font-bold text-[#1B5FBF]/10 leading-none flex-shrink-0 hidden lg:block">
                {etapas[activeIndex].numero}
              </div>
              <div>
                <h3 className="text-[#1B5FBF] font-serif text-xl md:text-2xl italic mb-3">
                  {etapas[activeIndex].titulo}
                </h3>
                <p className="text-white/75 text-base md:text-lg leading-relaxed">
                  {etapas[activeIndex].conteudo}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* WhatsApp support */}
        <motion.div
          className="border border-[#1B5FBF]/20 p-6 md:p-8 flex flex-col sm:flex-row items-center gap-5 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 overflow-hidden border border-[#0D3A7A]/20">
              <Image src={CONFIG.fotoCircular} alt={CONFIG.nome} width={64} height={64} className="object-cover w-full h-full" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#25D366] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
          </div>
          <p className="text-[#4a4a4a] text-sm md:text-base text-center sm:text-left flex-1">
            Entre uma consulta e outra,{" "}
            <span className="text-[#1B5FBF] font-semibold">meu WhatsApp estará sempre disponível</span>{" "}
            para tirar dúvidas e acompanhar a evolução do seu filho.
          </p>
        </motion.div>

        <a
          href={CONFIG.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 bg-[#0D3A7A] text-white font-bold text-sm tracking-widest uppercase rounded-md hover:bg-[#1B5FBF] hover:text-[#0A0A0A] transition-colors duration-300"
        >
              Agendar Minha Consulta Agora
        </a>
      </div>
    </section>
  )
}
