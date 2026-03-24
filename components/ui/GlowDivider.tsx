export function GlowDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center py-6 ${className}`}>
      <div className="gold-line flex-1" />
      <div className="mx-4 text-gold text-lg opacity-70">✦</div>
      <div className="gold-line flex-1" />
    </div>
  );
}

export function VenusSymbol({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="20" cy="18" r="15" stroke="#C9A96E" strokeWidth="1.5" />
      <line x1="20" y1="33" x2="20" y2="50" stroke="#C9A96E" strokeWidth="1.5" />
      <line x1="12" y1="43" x2="28" y2="43" stroke="#C9A96E" strokeWidth="1.5" />
    </svg>
  );
}
