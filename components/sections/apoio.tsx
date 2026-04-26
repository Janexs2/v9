"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import Image from "next/image"

export function Apoio() {
  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1B5FBF]/30 to-transparent hidden lg:block" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-10 h-px bg-[#C9A33B]" />
          <span className="text-[#C9A33B] text-[11px] font-bold tracking-[0.3em] uppercase">
            Uma história real
          </span>
        </motion.div>

        {/* ── DESKTOP: Editorial asymmetric float layout ── */}
        <div className="hidden lg:block relative">
          {/* First photo — floats right with organic shape */}
          <motion.div
            className="float-right ml-10 mb-6 relative flex-shrink-0"
            style={{ width: 320 }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                boxShadow: "0 20px 40px -15px rgba(27,95,191,0.18), 8px 16px 32px rgba(0,0,0,0.10)",
                border: "4px solid white",
                transform: "rotate(1.5deg)",
              }}
            >
              <div className="aspect-[4/5] bg-[#DCE4EE]">
                <Image
                  src={CONFIG.fotoComFilho}
                  alt="Dra. Joice Mazzini com seu filho Frederico"
                  width={320}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="mt-3 text-center" style={{ transform: "rotate(1.5deg)" }}>
              <p className="text-[#0D3A7A] font-bold text-sm">Joice &amp; Frederico</p>
              <p className="text-[#C9A33B] text-xs tracking-wider uppercase">Mãe e filho atípicos</p>
            </div>
          </motion.div>

          {/* Story text flows around */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0F1F35] uppercase leading-[0.95] mb-8">
              VOCÊ NÃO ESTÁ{" "}
              <span className="text-[#1B5FBF]">SOZINHA(O)</span>{" "}
              NESSA JORNADA
            </h2>

            <div className="space-y-5 text-[#0F1F35]/70 text-base md:text-lg leading-relaxed">
              <p>
                Em 2018, meu filho <strong className="text-[#0F1F35]">Frederico</strong> recebeu o diagnóstico de Transtorno do Espectro Autista. Naquele momento, me senti exatamente como você pode estar se sentindo agora: perdida, assustada, com mil perguntas e poucas respostas.
              </p>
              <p>
                Como nutricionista, eu esperava que o conhecimento técnico me desse segurança. Mas a realidade foi outra. Pouco se falava sobre nutrição e suplementação no autismo no Brasil. As crises, os comportamentos desafiadores, a seletividade alimentar intensa do Frederico — tudo me mostrou que havia algo além do diagnóstico sendo ignorado.
              </p>
            </div>
          </motion.div>

          <div className="clear-both" />

          {/* Second photo — floats left, smaller and different shape */}
          <motion.div
            className="float-left mr-10 mt-2 mb-6"
            style={{ width: 220 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "45% 55% 40% 60% / 55% 40% 60% 45%",
                boxShadow: "0 20px 40px -15px rgba(201,163,59,0.20), -8px 12px 28px rgba(0,0,0,0.08)",
                border: "4px solid white",
                transform: "rotate(-1.2deg)",
              }}
            >
              <div className="aspect-square bg-[#DCE4EE]">
                <Image
                  src={CONFIG.fotoFilho}
                  alt="Frederico"
                  width={220}
                  height={220}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-5 text-[#0F1F35]/70 text-base md:text-lg leading-relaxed pt-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p>
              Busquei formação fora do Brasil, estudei em Portugal, aprofundei nos protocolos de neurosuplementação e fui investigando, testando e ajustando com o próprio Frederico. O que aconteceu foi transformador: comportamentos que eram atribuídos &quot;ao autismo&quot; melhoraram significativamente quando as causas orgânicas foram tratadas.
            </p>
            <p className="text-[#0F1F35] font-semibold border-l-4 border-[#C9A33B] pl-5">
              Foi o Frederico quem me ensinou que nutrição e autismo caminham juntos. Hoje, carrego essa experiência de mãe dentro de cada consulta — porque eu sei, de verdade, o que você está vivendo.
            </p>
          </motion.div>

          <div className="clear-both" />
        </div>

        {/* ── MOBILE: Editorial floating organic cards ── */}
        <div className="lg:hidden overflow-hidden" style={{ padding: "24px 0" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl text-[#0F1F35] uppercase leading-[0.95] mb-8 text-center">
              VOCÊ NÃO ESTÁ{" "}
              <span className="text-[#1B5FBF]">SOZINHA(O)</span>{" "}
              NESSA JORNADA
            </h2>
          </motion.div>

          <div className="space-y-5 text-[#0F1F35]/70 text-base leading-relaxed mb-8">
            <p>
              Em 2018, meu filho <strong className="text-[#0F1F35]">Frederico</strong> recebeu o diagnóstico de Transtorno do Espectro Autista. Naquele momento, me senti exatamente como você pode estar se sentindo agora: perdida, assustada, com mil perguntas e poucas respostas.
            </p>
          </div>

          {/* Main photo — organic floating card */}
          <motion.div
            className="mb-8"
            style={{ marginLeft: "10%", width: "78%" }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="overflow-hidden aspect-[4/5]"
              style={{
                borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                boxShadow: "8px 12px 32px rgba(27,95,191,0.22)",
                border: "4px solid white",
              }}
            >
              <Image
                src={CONFIG.fotoComFilho}
                alt="Dra. Joice Mazzini com seu filho Frederico"
                width={280}
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-[#0D3A7A] font-bold text-sm text-center mt-3">Joice &amp; Frederico</p>
            <p className="text-[#C9A33B] text-xs tracking-wider uppercase text-center">Mãe e filho atípicos</p>
          </motion.div>

          <div className="space-y-5 text-[#0F1F35]/70 text-base leading-relaxed mb-8">
            <p>
              Como nutricionista, eu esperava que o conhecimento técnico me desse segurança. Mas a realidade foi outra. Pouco se falava sobre nutrição e suplementação no autismo no Brasil.
            </p>
          </div>

          {/* Secondary photo — smaller, offset right */}
          <motion.div
            className="mb-8"
            style={{ marginLeft: "auto", marginRight: "12%", width: "52%" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="overflow-hidden aspect-square"
              style={{
                borderRadius: "45% 55% 40% 60% / 55% 40% 60% 45%",
                boxShadow: "-6px 10px 24px rgba(201,163,59,0.18)",
                border: "4px solid white",
              }}
            >
              <Image
                src={CONFIG.fotoFilho}
                alt="Frederico"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <div className="space-y-5 text-[#0F1F35]/70 text-base leading-relaxed">
            <p>
              Busquei formação fora do Brasil, estudei em Portugal, aprofundei nos protocolos de neurosuplementação e fui investigando, testando e ajustando com o próprio Frederico.
            </p>
            <p className="text-[#0F1F35] font-semibold border-l-4 border-[#C9A33B] pl-5">
              Foi o Frederico quem me ensinou que nutrição e autismo caminham juntos. Hoje, carrego essa experiência de mãe dentro de cada consulta — porque eu sei, de verdade, o que você está vivendo.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
