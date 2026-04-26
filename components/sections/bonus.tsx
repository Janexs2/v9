"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Gift } from "lucide-react"
import Image from "next/image"

export function Bonus() {
  return (
    <section className="py-20 md:py-32 bg-[#0D3A7A] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* Label */}
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-8 h-8 bg-[#C9A33B] flex items-center justify-center flex-shrink-0">
            <Gift className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 h-px bg-[#1B5FBF]/25" />
          <span className="text-[#1B5FBF] text-[11px] font-bold tracking-[0.3em] uppercase flex-shrink-0">Bônus exclusivo</span>
          <div className="flex-1 h-px bg-[#1B5FBF]/25" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Book */}
          <motion.div
            className="w-40 sm:w-52 lg:w-64 flex-shrink-0 mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#1B5FBF]/25 pointer-events-none" />
              <div className="overflow-hidden shadow-2xl aspect-[3/4] bg-[#0a3a47]">
                <Image
                  src={CONFIG.ebookImage}
                  alt="E-book Receitas para Crianças Atípicas"
                  width={256}
                  height={341}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white uppercase leading-[0.92] mb-6">
              <span className="text-[#1B5FBF]">BÔNUS ESPECIAL:</span><br />
              E-BOOK RECEITAS<br />
              PARA CRIANÇAS ATÍPICAS
            </h3>

            <div className="h-px bg-[#1B5FBF]/25 mb-6" />

            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-4">
              Receba de presente após a primeira consulta nosso e-book de receitas sem glúten e sem caseína, desenvolvido especialmente para crianças autistas ou com TDAH.
            </p>

            <div className="bg-white/5 border border-white/10 px-5 py-4 mb-8 text-left">
              <p className="text-white/50 text-sm leading-relaxed">
                Leites vegetais para crianças atípicas, com alergias alimentares, APLV ou intolerância a lactose + 13 sucos detox simples e rápidos.
              </p>
            </div>

            <a
              href={CONFIG.bonusLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 bg-[#C9A33B] text-white font-bold text-sm tracking-widest uppercase rounded-md hover:bg-[#1B5FBF] hover:shadow-[0_0_30px_rgba(201,163,59,0.35)] transition-all duration-300"
            >
              Quero Meu Bônus
              <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out opacity-20" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
