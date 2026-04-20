import { User, Ruler, Weight, Footprints, Target, Calendar } from "lucide-react";
import { pietro } from "@/data/pietro";

const fichaTecnica = [
  { icon: Calendar, label: "Idade", value: `${pietro.idade} anos` },
  { icon: Ruler, label: "Altura", value: pietro.altura },
  { icon: Weight, label: "Peso", value: pietro.peso },
  { icon: Footprints, label: "Pé dominante", value: pietro.peDominante },
  { icon: Target, label: "Posições", value: pietro.posicoes.join(", ") },
  { icon: User, label: "Nascimento", value: `${pietro.anoNascimento}` },
];

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <div>
            <span className="text-brand text-xs tracking-[0.4em] uppercase font-semibold">
              Sobre
            </span>
            <h2 className="mt-3 text-5xl md:text-6xl font-black text-foreground leading-[0.95]">
              <span className="block">CONHEÇA O</span>
              <span className="block text-brand">{pietro.apelido.toUpperCase()}</span>
            </h2>
            <p className="mt-6 text-muted text-lg leading-relaxed max-w-md">
              {pietro.bio}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {fichaTecnica.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-surface border border-white/5 rounded-2xl p-5 hover:border-brand/40 transition-colors"
              >
                <Icon className="text-brand" size={22} />
                <div className="mt-4 text-[10px] uppercase tracking-[0.2em] text-muted font-semibold">
                  {label}
                </div>
                <div className="mt-1 text-lg font-bold text-foreground">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
