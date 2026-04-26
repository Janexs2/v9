"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Youtube, Check } from "lucide-react"

const conteudos = [
  "Vídeos educativos sobre autismo e TDAH",
  "Dicas práticas de alimentação e nutrição",
  "Receitas adaptadas para crianças atípicas",
  "Depoimentos de famílias atendidas",
  "Orientações sobre suplementação",
  "Respostas para suas dúvidas frequentes",
]

export function YouTubeSection() {
  return (
    <section className="py-20 md:py-32 bg-[#0D3A7A] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9A33B]" />
            <span className="text-[#C9A33B] text-[11px] font-bold tracking-[0.3em] uppercase">Conteúdo gratuito</span>
            <div className="w-10 h-px bg-[#C9A33B]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white uppercase leading-[0.92]">
            CONTEÚDO EXCLUSIVO<br />
            NO{" "}
            <span className="text-[#FF0000]">YOUTUBE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px border border-white/8">
          {/* Video */}
          <motion.div
            className="aspect-video bg-[#0D3A7A]/20"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${CONFIG.youtubeVideoId}`}
              title="Canal YouTube — Autismo e Nutrição"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="bg-[#0D3A7A]/20 p-8 md:p-10 flex flex-col"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 bg-[#FF0000] flex items-center justify-center flex-shrink-0">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <p className="text-white font-bold">Acesse o canal e encontre:</p>
            </div>

            <div className="space-y-3 mb-8 flex-1">
              {conteudos.map((c, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                  <div className="w-4 h-4 bg-[#1B5FBF]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#1B5FBF]" />
                  </div>
                  <span className="text-white/60 text-sm">{c}</span>
                </div>
              ))}
            </div>

            <a
              href={CONFIG.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#FF0000] text-white font-bold text-sm tracking-widest uppercase rounded-md hover:bg-[#cc0000] transition-colors duration-300"
            >
              <Youtube className="w-4 h-4" />
              Acessar o Canal
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
