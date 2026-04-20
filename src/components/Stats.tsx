"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Goal, Handshake, CalendarCheck, Trophy } from "lucide-react";
import { pietro } from "@/data/pietro";

const iconMap = {
  goal: Goal,
  assist: Handshake,
  games: CalendarCheck,
  trophy: Trophy,
};

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.4, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section id="estatisticas" className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="text-brand text-xs tracking-[0.4em] uppercase font-semibold">
              Números
            </span>
            <h2 className="mt-3 text-5xl md:text-6xl font-black leading-[0.95]">
              <span className="block">EM CAMPO</span>
            </h2>
          </div>
          <p className="text-muted max-w-sm">
            Os números refletem o trabalho duro nos treinos e nos jogos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pietro.estatisticas.map((stat, i) => {
            const Icon = iconMap[stat.icone];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl bg-background border border-white/5 p-6 md:p-8 hover:border-brand/40 transition-colors"
              >
                <Icon className="text-brand" size={26} />
                <div className="mt-6 text-5xl md:text-6xl font-black text-foreground tracking-tight">
                  <Counter to={stat.valor} />
                </div>
                <div className="mt-1 text-muted text-sm uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
