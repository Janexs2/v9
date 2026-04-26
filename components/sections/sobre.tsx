"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import Image from "next/image"

const credenciais = [
  "13 anos de experiência em nutrição clínica funcional",
  "Mãe atípica — mãe do Frederico (TEA)",
  "Pós-graduada em TEA, TDAH e Seletividade Alimentar",
  "Formada na 1ª turma da 1ª pós do Brasil na área",
  "Mentoria internacional — Portugal",
  "Academia Nutrição e Autismo",
]

export function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden pr-8">
        <span className="text-[10rem] md:text-[16rem] font-serif font-bold text-[#0D3A7A]/[0.03] leading-none select-none">
          JOICE
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* Label */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-10 h-px bg-[#C9A33B]" />
          <span className="text-[#C9A33B] text-[11px] font-bold tracking-[0.3em] uppercase">
            Quem está por trás
          </span>
        </motion.div>

        {/* ── DESKTOP: Editorial layout ── */}
        <div className="hidden lg:flex gap-14 lg:gap-20 items-start">

          {/* Photo col — with editorial organic treatment */}
          <motion.div
            className="w-[300px] flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Decorative gold dot accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border-2 border-[#C9A33B]/30 z-10 pointer-events-none" />
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%",
                  boxShadow: "0 20px 40px -15px rgba(27,95,191,0.18), -6px 16px 32px rgba(0,0,0,0.08)",
                  border: "4px solid white",
                  transform: "rotate(-1deg)",
                }}
              >
                <div className="aspect-[3/4] bg-[#e8e3da]">
                  <Image
                    src={CONFIG.fotoPessoal}
                    alt={CONFIG.nome}
                    width={300}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="bg-[#0D3A7A] px-5 py-4 mt-2" style={{ transform: "rotate(-1deg)" }}>
                <p className="text-white font-bold">{CONFIG.nome}</p>
                <p className="text-[#C9A33B] text-xs tracking-widest uppercase mt-0.5">{CONFIG.crn}</p>
              </div>
            </div>
          </motion.div>

          {/* Text col */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-block bg-[#C9A33B] text-white px-4 py-1.5 text-xs font-bold tracking-[0.25em] uppercase mb-6">
              MUITO PRAZER!
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0F1F35] uppercase leading-[0.95] mb-8">
              ME CHAMO<br />
              <span className="text-[#0D3A7A]">JOICE LIERMANN</span><br />
              MAZZINI.
            </h2>

            {/* Credentials */}
            <div className="mb-8">
              {credenciais.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-3 border-b border-[#DCE4EE] last:border-0"
                >
                  <div className="w-5 h-5 bg-[#C9A33B] flex items-center justify-center flex-shrink-0 text-white text-[10px] font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="text-[#0F1F35] text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* Bio */}
            <div className="space-y-4 text-[#0F1F35]/70 text-sm md:text-base leading-relaxed">
              <p>
                Sou nutricionista clínica funcional há 13 anos, formada pela Universidade do Vale do Itajaí (UNIVALI), mãe atípica, pós-graduada em nutrição funcional e terapia alimentar no autismo (TEA), TDAH e Seletividade alimentar.
              </p>
              <p className="border-l-4 border-[#C9A33B] pl-4 text-[#0F1F35] font-medium">
                Minha missão é ajudar famílias atípicas a encontrarem mais qualidade de vida através da alimentação e da nutrição funcional personalizada.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── MOBILE: Editorial card photo ── */}
        <div className="lg:hidden overflow-hidden">
          <motion.div
            className="mb-8"
            style={{ width: "75%", margin: "0 auto 32px auto" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="overflow-hidden aspect-[3/4]"
              style={{
                borderRadius: "55% 45% 60% 40% / 50% 55% 45% 50%",
                boxShadow: "10px 14px 36px rgba(27,95,191,0.20)",
                border: "4px solid white",
              }}
            >
              <Image
                src={CONFIG.fotoPessoal}
                alt={CONFIG.nome}
                width={260}
                height={347}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="inline-block bg-[#C9A33B] text-white px-4 py-1.5 text-xs font-bold tracking-[0.25em] uppercase mb-6">
              MUITO PRAZER!
            </div>

            <h2 className="font-serif text-3xl text-[#0F1F35] uppercase leading-[0.95] mb-8">
              ME CHAMO<br />
              <span className="text-[#0D3A7A]">JOICE LIERMANN</span><br />
              MAZZINI.
            </h2>

            <div className="mb-8">
              {credenciais.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-3 border-b border-[#DCE4EE] last:border-0"
                >
                  <div className="w-5 h-5 bg-[#C9A33B] flex items-center justify-center flex-shrink-0 text-white text-[10px] font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="text-[#0F1F35] text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-[#0F1F35]/70 text-sm leading-relaxed">
              <p>
                Sou nutricionista clínica funcional há 13 anos, formada pela Universidade do Vale do Itajaí (UNIVALI), mãe atípica, pós-graduada em nutrição funcional e terapia alimentar no autismo (TEA), TDAH e Seletividade alimentar.
              </p>
              <p className="border-l-4 border-[#C9A33B] pl-4 text-[#0F1F35] font-medium">
                Minha missão é ajudar famílias atípicas a encontrarem mais qualidade de vida através da alimentação e da nutrição funcional personalizada.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
