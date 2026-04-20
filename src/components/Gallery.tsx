import { VideoCard } from "./VideoCard";
import { pietro } from "@/data/pietro";

export function Gallery() {
  return (
    <section id="lances" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="text-brand text-xs tracking-[0.4em] uppercase font-semibold">
              Galeria
            </span>
            <h2 className="mt-3 text-5xl md:text-6xl font-black leading-[0.95]">
              <span className="block">MELHORES</span>
              <span className="block text-brand">LANCES</span>
            </h2>
          </div>
          <p className="text-muted max-w-sm">
            Clique no play pra assistir aos destaques do {pietro.apelido} em campo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pietro.lances.map((lance) => (
            <VideoCard key={lance.id} lance={lance} />
          ))}
        </div>
      </div>
    </section>
  );
}
