"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            className="lg:w-[340px] flex-shrink-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#C9A33B]" />
              <span className="text-[#C9A33B] text-[11px] font-bold tracking-[0.3em] uppercase">Dúvidas</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0A0A0A] uppercase leading-[0.92] mb-6">
              PERGUNTAS<br />
              <span className="text-[#0D3A7A]">FREQUENTES</span>
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              Se você ainda tem dúvidas, provavelmente alguém já perguntou a mesma coisa. Veja as respostas mais comuns abaixo.
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible>
              {CONFIG.faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#f0ede6]">
                  <AccordionTrigger className="text-left font-bold text-[#1a1a1a] hover:text-[#0D3A7A] hover:no-underline py-5 text-sm md:text-base gap-4">
                    <span className="flex items-start gap-4">
                      <span className="text-[#1B5FBF] font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.pergunta}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4a4a4a] pb-5 leading-relaxed text-sm md:text-base pl-10">
                    {item.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
