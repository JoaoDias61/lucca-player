"use client";

import { motion } from "framer-motion";
import { pietro } from "@/data/pietro";
import { SocialDots } from "./SocialDots";
import { HeroCarousel } from "./HeroCarousel";

export function Hero() {
  return (
    <section id="topo" className="relative bg-background dots-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 pb-12">
        <div className="relative rounded-[32px] bg-surface overflow-hidden">
          <div className="relative px-6 md:px-12 pt-8 md:pt-12 pb-10 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h1 className="font-black text-brand leading-[0.9] tracking-tight text-6xl md:text-8xl">
                <span className="block">LUCCA</span>
              </h1>

              <p className="mt-6 max-w-md text-muted text-base leading-relaxed">
                {pietro.bio}
              </p>

              <a
                href="#contato"
                className="mt-8 inline-flex items-center justify-center px-8 py-3 border-2 border-brand text-brand font-bold tracking-[0.25em] text-sm hover:bg-brand hover:text-background transition-colors"
              >
                FALE COMIGO
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group/hero relative"
            >
              <div className="absolute inset-4 md:inset-6 bg-brand rounded-3xl dots-pattern" />

              <div className="relative p-6 md:p-10 flex items-center justify-center">
                <div className="relative w-full aspect-[4/3] max-h-[420px]">
                  <HeroCarousel
                    images={pietro.fotos.hero}
                    alt={pietro.apelido}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative px-6 md:px-12 pb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="text-muted text-sm tracking-wider">
              www.luccabarros.com
            </div>
            <SocialDots />
          </div>
        </div>
      </div>
    </section>
  );
}
