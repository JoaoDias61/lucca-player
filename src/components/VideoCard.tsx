"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";
import type { Lance } from "@/data/pietro";

export function VideoCard({ lance }: { lance: Lance }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-brand/40 transition-colors">
      <div className="relative aspect-video bg-black">
        {!playing && (
          <Image
            src={lance.thumbnail}
            alt={lance.titulo}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        )}
        <video
          ref={videoRef}
          src={lance.videoUrl}
          className={`absolute inset-0 w-full h-full object-cover ${
            playing ? "opacity-100" : "opacity-0"
          }`}
          playsInline
          onEnded={() => setPlaying(false)}
          preload="metadata"
        />

        <button
          onClick={toggle}
          aria-label={playing ? "Pausar" : "Tocar"}
          className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors"
        >
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-brand text-background shadow-xl group-hover:scale-110 transition-transform">
            {playing ? <Pause size={26} /> : <Play size={26} className="ml-1" />}
          </span>
        </button>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-foreground">{lance.titulo}</h3>
        <p className="mt-1 text-sm text-muted">{lance.descricao}</p>
      </div>
    </div>
  );
}
