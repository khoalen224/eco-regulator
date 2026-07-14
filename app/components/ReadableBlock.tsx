"use client";

import { useEffect, useRef } from "react";

interface ReadableBlockProps {
  blockId: string;
  isRead: boolean;
  onRead: (blockId: string) => void;
  heading: string;
  body: string;
  isExample?: boolean; 
  dwellMs?: number; 
}

export function ReadableBlock({
  blockId,
  isRead,
  onRead,
  heading,
  body,
  isExample = false,
  dwellMs = 800,
}: ReadableBlockProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isRead || !ref.current) return;

    let timer: ReturnType<typeof setTimeout> | null = null;
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => onRead(blockId), dwellMs);
        } else if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [isRead, blockId, onRead, dwellMs]);

  return (
    <div
      ref={ref}
      id={`block-${blockId}`}
      className={[
        "relative border-l-2 pl-4 py-2 transition-colors duration-300",
        isExample ? "border-amber-400/70 bg-amber-400/5" : "border-slate-600",
      ].join(" ")}
    >
      <div className="flex items-center gap-2">
        <h4 className="font-semibold text-xs text-slate-100">{heading}</h4>
        {isRead && (
          <span
            className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-emerald-500/90 text-[9px] text-white"
            aria-label="Đã đọc"
            title="Đã đọc"
          >
            ✓
          </span>
        )}
      </div>
      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{body}</p>
    </div>
  );
}
