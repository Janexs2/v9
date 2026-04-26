"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import Image from "next/image"
import { MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-[#0D3A7A] overflow-hidden">

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Top bar */}
      <motion.div
        className="relative z-30 py-5 px-6 md:px-10 flex items-center justify-between"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-[#C9A33B]/60 flex items-center justify-center">
            <span className="text-xs font-bold text-[#C9A33B] font-serif tracking-wide">JM</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-white/90 font-semibold text-sm tracking-wide">Joice Mazzini</p>
            <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase">Nutrição Funcional</p>
          </div>
        </div>
        <div className="flex items-center gap-2 border border-[#C9A33B]/50 px-4 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A33B] animate-pulse" />
          <span className="text-[#C9A33B] text-[11px] font-bold tracking-[0.25em] uppercase">Vagas Abertas</span>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════
          MOBILE (< 1024px) — card orgânico: texto sobre imagem
      ═══════════════════════════════════════════════ */}
      <div className="lg:hidden px-4 pb-12 pt-1 relative z-10">
        <motion.div
          className="relative mx-auto overflow-hidden"
          style={{
            width: "90%",
            maxWidth: 400,
            borderRadius: "24px 28px 20px 26px",
            border: "3px solid rgba(255,255,255,0.18)",
            boxShadow: "0 28px 60px rgba(0,0,0,0.5), 0 4px 16px rgba(13,58,122,0.6)",
            minHeight: 500,
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          {/* Photo — fills entire card */}
          <Image
            src={CONFIG.fotoHero}
            alt={CONFIG.nome}
            fill
            className="object-cover object-top"
            priority
          />

          {/* Gradient from bottom — só atrás do texto, não cobre a foto inteira */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(5,18,45,0.88) 0%, rgba(8,28,65,0.55) 38%, transparent 65%)",
            }}
          />

          {/* Subtle left-side gradient — anchors text block */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(5,18,45,0.30) 0%, transparent 55%)",
            }}
          />

          {/* Text — positioned at bottom-left, overlaid naturally */}
          <div
            className="absolute bottom-0 left-0 right-0 px-6 pb-7 pt-16"
            style={{ zIndex: 10 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="block w-5 h-px bg-[#C9A33B]" />
              <span
                className="text-[#C9A33B] text-[10px] font-bold tracking-[0.28em] uppercase"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
              >
                Especialista em TEA &amp; TDAH
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif uppercase leading-[0.88] mb-4 text-white"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
            >
              <span className="block text-[2.6rem] sm:text-5xl">Autismo</span>
              <span className="block text-[2.6rem] sm:text-5xl text-[#C9A33B]">&amp; Nutrição</span>
              <span
                className="block text-lg sm:text-xl font-sans font-light text-white/60 mt-2 tracking-wide normal-case"
              >
                Da Teoria à Prática
              </span>
            </h1>

            <p
              className="text-white/80 text-sm leading-relaxed mb-5 max-w-xs"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
            >
              Atendimento especializado em Autismo, TDAH, seletividade alimentar
              e suplementação individualizada para famílias atípicas.
            </p>

            {/* CTAs */}
            <div className="flex gap-2.5">
              <a
                href={CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#C9A33B] text-white font-bold text-xs tracking-widest uppercase rounded-md hover:bg-[#b8922e] transition-colors duration-300"
                style={{ boxShadow: "0 4px 16px rgba(201,163,59,0.45)" }}
              >
                Agendar Consulta
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-white/30 text-white/80 hover:border-[#C9A33B]/60 hover:text-[#C9A33B] transition-all duration-300 text-xs tracking-widest uppercase rounded-md"
              >
                Saiba mais
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 mt-4 text-white/35">
              <MapPin className="w-3 h-3 shrink-0" />
              <span className="text-[10px] tracking-wide">Online · Todo o Brasil e mundo</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="flex justify-center mt-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-white/20 text-[9px] tracking-[0.3em] uppercase">Role para baixo</span>
            <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════
          DESKTOP (≥ 1024px) — card largo, texto sobreposto com degradê localizado
      ═══════════════════════════════════════════════ */}
      <div className="hidden lg:block px-8 xl:px-16 pb-14 pt-2 relative z-10">
        <motion.div
          className="relative mx-auto overflow-hidden"
          style={{
            maxWidth: 1000,
            borderRadius: "20px 24px 18px 22px",
            border: "3px solid rgba(255,255,255,0.14)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 8px 24px rgba(13,58,122,0.5)",
            height: "min(600px, 70vh)",
            minHeight: 520,
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Photo */}
          <Image
            src={CONFIG.fotoHero}
            alt={CONFIG.nome}
            fill
            className="object-cover object-top"
            priority
          />

          {/* Left-to-right gradient — localizado na área do texto (~45% da esquerda) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(5,18,45,0.85) 0%, rgba(5,18,45,0.60) 30%, rgba(5,18,45,0.15) 52%, transparent 65%)",
            }}
          />

          {/* Bottom gradient — ancora a parte inferior */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(5,18,45,0.40) 0%, transparent 35%)",
            }}
          />

          {/* Text block — left side, vertically centered */}
          <div
            className="absolute inset-0 flex flex-col justify-center pl-12 xl:pl-16 pr-4"
            style={{ zIndex: 10, maxWidth: "52%" }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="block w-8 h-px bg-[#C9A33B]" />
              <span
                className="text-[#C9A33B] text-[11px] font-bold tracking-[0.35em] uppercase"
                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
              >
                Especialista em TEA &amp; TDAH
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif uppercase leading-[0.88] mb-6 text-white"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
            >
              <span className="block text-6xl xl:text-7xl">Autismo</span>
              <span className="block text-6xl xl:text-7xl text-[#C9A33B]">&amp; Nutrição</span>
              <span className="block text-2xl xl:text-3xl font-sans font-light text-white/50 mt-3 tracking-wide normal-case">
                Da Teoria à Prática
              </span>
            </h1>

            <p
              className="text-white/78 text-base xl:text-lg leading-relaxed mb-8 max-w-sm"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
            >
              Atendimento especializado em Autismo, TDAH, seletividade alimentar
              e suplementação individualizada para famílias atípicas.
            </p>

            {/* CTAs */}
            <div className="flex gap-3 mb-6">
              <a
                href={CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#C9A33B] text-white font-bold text-sm tracking-widest uppercase rounded-md hover:bg-[#b8922e] hover:shadow-[0_0_30px_rgba(201,163,59,0.5)] transition-all duration-300"
              >
                Agendar Consulta
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/25 text-white/70 hover:border-[#C9A33B]/60 hover:text-[#C9A33B] transition-all duration-300 text-sm tracking-widest uppercase rounded-md"
              >
                Conheça meu trabalho
              </a>
            </div>

            {/* Location + CRN */}
            <div className="flex items-center gap-2 text-white/30">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="text-xs tracking-wide">Online · Todo o Brasil e mundo</span>
              <span className="text-white/15 mx-1">·</span>
              <span className="text-[10px] tracking-widest uppercase text-white/20">{CONFIG.crn}</span>
            </div>
          </div>

          {/* Name badge — bottom right corner */}
          <div
            className="absolute bottom-6 right-6 z-20"
            style={{
              background: "rgba(13,58,122,0.75)",
              border: "1px solid rgba(201,163,59,0.30)",
              padding: "10px 16px",
              backdropFilter: "blur(8px)",
              borderRadius: 6,
            }}
          >
            <p className="text-white font-bold text-sm">{CONFIG.nome}</p>
            <p className="text-[#C9A33B] text-[10px] tracking-widest uppercase mt-0.5">{CONFIG.crn}</p>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="flex justify-center mt-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1.5"
          >
            <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">Role para baixo</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
