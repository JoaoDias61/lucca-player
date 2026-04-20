import { Shield } from "lucide-react";
import { pietro } from "@/data/pietro";

export function Timeline() {
  return (
    <section id="times" className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-brand text-xs tracking-[0.4em] uppercase font-semibold">
            Trajetória
          </span>
          <h2 className="mt-3 text-5xl md:text-6xl font-black leading-[0.95]">
            <span className="block">TIMES E</span>
            <span className="block text-brand">CATEGORIAS</span>
          </h2>
        </div>

        <ol className="relative border-l-2 border-brand/30 ml-4 md:ml-8 space-y-8">
          {pietro.times.map((time) => (
            <li key={time.nome} className="pl-8 md:pl-12 relative">
              <span className="absolute -left-[13px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-brand ring-4 ring-surface">
                <Shield size={12} className="text-background" />
              </span>

              <div className="bg-background border border-white/5 rounded-2xl p-6 hover:border-brand/40 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-foreground">{time.nome}</h3>
                  <span className="text-sm font-medium text-brand">
                    {time.periodo}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{time.categoria}</p>
                <p className="mt-3 text-foreground/80">{time.destaque}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
