import { MessageCircle, Mail } from "lucide-react";
import { pietro } from "@/data/pietro";

export function Contact() {
  const waLink = `https://wa.me/${pietro.contato.whatsapp}?text=${encodeURIComponent(
    pietro.contato.mensagemWhatsApp,
  )}`;

  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="relative rounded-[32px] bg-brand p-10 md:p-16 overflow-hidden">
          <div className="absolute inset-0 dots-pattern opacity-30" />

          <div className="relative text-center">
            <span className="text-background/70 text-xs tracking-[0.4em] uppercase font-semibold">
              Contato
            </span>
            <h2 className="mt-3 text-5xl md:text-7xl font-black text-background leading-[0.9]">
              <span className="block">VAMOS</span>
              <span className="block">CONVERSAR?</span>
            </h2>

            <p className="mt-6 text-background/80 text-lg max-w-xl mx-auto">
              É olheiro, treinador ou jornalista? Entre em contato com os
              responsáveis pelo {pietro.apelido}.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-brand font-bold tracking-widest text-sm hover:bg-surface-2 transition-colors"
              >
                <MessageCircle size={18} />
                WHATSAPP
              </a>
              <a
                href={`mailto:${pietro.contato.email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-background text-background font-bold tracking-widest text-sm hover:bg-background hover:text-brand transition-colors"
              >
                <Mail size={18} />
                EMAIL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
