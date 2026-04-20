import { Camera, MessageCircle } from "lucide-react";
import { pietro } from "@/data/pietro";

function IconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-9 h-9 rounded-full border border-brand/40 text-brand hover:bg-brand hover:text-background transition-colors"
    >
      {children}
    </a>
  );
}

export function SocialDots() {
  const wa = `https://wa.me/${pietro.contato.whatsapp}`;

  return (
    <div className="flex items-center gap-3">
      <IconButton href={pietro.redesSociais.instagram} label="Instagram">
        <Camera size={16} />
      </IconButton>

      <IconButton href={pietro.redesSociais.youtube} label="YouTube">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
        </svg>
      </IconButton>

      <IconButton href={wa} label="WhatsApp">
        <MessageCircle size={16} />
      </IconButton>
    </div>
  );
}
