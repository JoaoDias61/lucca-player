import { Crown } from "lucide-react";
import { pietro } from "@/data/pietro";
import { SocialDots } from "./SocialDots";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-2 text-brand">
            <Crown size={16} />
          </div>
          <div>
            <div className="font-bold text-foreground">{pietro.nome}</div>
            <div className="text-xs text-muted tracking-wider uppercase">
              {pietro.posicoes.join(" · ")} — {pietro.cidade}
            </div>
          </div>
        </div>

        <SocialDots />

        <p className="text-xs text-muted tracking-wider">
          © {year} {pietro.nome}
        </p>
      </div>
    </footer>
  );
}
