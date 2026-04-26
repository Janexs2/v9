"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { BookOpen } from "lucide-react"
import Image from "next/image"

// Product cover images — fallback to ebook image
const productImages = [
  CONFIG.ebookImage,
  CONFIG.ebookImage,
  CONFIG.ebookImage,
]

export function HotmartSection() {
  const produtos = CONFIG.hotmartProdutos

  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9A33B]" />
            <span className="text-[#C9A33B] text-[11px] font-bold tracking-[0.3em] uppercase">Materiais Complementares</span>
            <div className="w-10 h-px bg-[#C9A33B]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0F1F35] uppercase leading-[0.92]">
            MATERIAIS{" "}
            <span className="text-[#0D3A7A]">COMPLEMENTARES</span>{" "}
            <span className="text-[#1B5FBF]">EXCLUSIVOS</span>
          </h2>
        </motion.div>

        {/* Cards grid — 3 col desktop, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {produtos.map((p, i) => (
            <motion.div
              key={p.titulo}
              className="bg-white rounded-2xl border border-[#DCE4EE] shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(27,95,191,0.14)] transition-shadow duration-300 flex flex-col group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              {/* Product image top */}
              <div className="relative aspect-[4/3] bg-[#DCE4EE] overflow-hidden">
                <Image
                  src={productImages[i] || CONFIG.ebookImage}
                  alt={p.titulo}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Number badge */}
                <div className="absolute top-3 left-3 w-8 h-8 bg-[#C9A33B] flex items-center justify-center rounded-sm">
                  <span className="text-white text-[11px] font-bold font-serif">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-[#C9A33B]/10 border border-[#C9A33B]/30 flex items-center justify-center mb-4 group-hover:bg-[#C9A33B] transition-colors duration-300">
                  <BookOpen className="w-4 h-4 text-[#C9A33B] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-bold text-[#0F1F35] text-base uppercase leading-snug mb-3 flex-1">
                  {p.titulo}
                </h3>

                <p className="text-[#0F1F35]/60 text-sm mb-6 leading-relaxed">
                  {p.descricao}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-[#DCE4EE] mb-5" />

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 bg-[#1B5FBF] hover:bg-[#C9A33B] text-white font-bold text-xs tracking-widest uppercase rounded-lg transition-all duration-300"
                >
                  Quero Adquirir
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
