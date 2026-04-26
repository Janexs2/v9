"use client"

import { CONFIG } from "@/lib/config"

export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-card">
        <div className="hero-image-wrapper">
          <img 
            src="https://i.imgur.com/PKkhMU3.png" 
            alt="Dra. Joice Mazzini" 
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Autismo &amp; Nutrição
          </h1>
          <p className="hero-subtitle">
            Atendimento especializado em Autismo, TDAH, seletividade alimentar e suplementação individualizada para famílias atípicas.
          </p>
          <a 
            href={CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  )
}
