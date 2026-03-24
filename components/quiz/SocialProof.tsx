import { SocialProofData } from "@/data/questions";

export function SocialProof({ data }: { data: SocialProofData }) {
  return (
    <div className="mt-6 bg-bg-card/60 border border-bg-card rounded-sm p-4 flex gap-3">
      {/* Avatar estilizado */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amethyst/30 border border-amethyst/40 flex items-center justify-center text-xs font-bold text-amethyst-light font-sans">
        {data.name[0]}
      </div>
      <div>
        <p className="font-sans text-xs text-text-muted mb-1">
          {data.name}, {data.age} anos
        </p>
        <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
          &ldquo;{data.text}&rdquo;
        </p>
      </div>
    </div>
  );
}
