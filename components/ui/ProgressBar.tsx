"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="font-sans text-xs text-text-muted tracking-widest uppercase">
          Pergunta {current} de {total}
        </span>
        <span className="font-sans text-xs text-gold">{percentage}%</span>
      </div>
      <div className="h-[2px] w-full bg-bg-card rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amethyst to-gold rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
