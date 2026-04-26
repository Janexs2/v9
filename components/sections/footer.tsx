"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A]">

      {/* CTA block */}
      <div className="bg-[#1B5FBF] py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "256px",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#0A0A0A]/50 text-[11px] font-bold tracking-[0.4em] uppercase mb-5">
              Dê o próximo passo
            </p>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0A0A0A] uppercase leading-[0.92] mb-7">
              SEU FILHO MERECE<br />
              UM ACOMPANHAMENTO<br />
              ESPECIALIZADO
            </h3>
            <p className="text-[#0A0A0A]/65 text-lg mb-10 max-w-lg mx-auto">
              Você não precisa testar tudo sozinha(o). Receba orientação segura, individualizada e acolhedora.
            </p>
            <a
              href={CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-md hover:bg-[#0D3A7A] transition-colors duration-300"
            >
              Agende Sua Consulta Agora
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-10 px-6 md:px-12 lg:px-16 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#1B5FBF]/30 flex items-center justify-center rounded-sm">
              <span className="text-xs font-bold text-[#1B5FBF] font-serif">JM</span>
            </div>
            <div>
              <p className="text-white/70 text-sm font-semibold">{CONFIG.nome}</p>
              <p className="text-white/25 text-xs tracking-wide">{CONFIG.crn}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <a
              href={CONFIG.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:border-[#1B5FBF]/50 hover:text-[#1B5FBF] transition-all duration-300 rounded-md"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={CONFIG.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:border-[#FF0000]/50 hover:text-[#FF0000] transition-all duration-300 rounded-md"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          <p className="text-white/20 text-xs text-center sm:text-right">
            Nutrição Funcional &copy; 2025 · Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
