"use client";

interface SectionProgressProps {
  read: number;
  total: number;
  percent: number;
}

export function SectionProgress({ read, total, percent }: SectionProgressProps) {
  if (total === 0) return null;
  const complete = percent === 100;

  return (
    <div className="flex items-center gap-2 ml-auto shrink-0" title={`${read}/${total} khối đã đọc`}>
      <div className="w-16 h-1.5 rounded-full bg-slate-700 overflow-hidden">
        <div
          className={["h-full rounded-full transition-all duration-500", complete ? "bg-emerald-500" : "bg-sky-500"].join(" ")}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className={["text-[10px] tabular-nums", complete ? "text-emerald-400" : "text-slate-400"].join(" ")}>
        {read}/{total}
      </span>
    </div>
  );
}
