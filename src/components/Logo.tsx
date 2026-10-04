type LogoProps = {
  className?: string;
  /** Cor do texto "Full Cycle" */
  tone?: 'dark' | 'light';
};

export function LogoMark({ className = 'size-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="20" className="fill-primary" />
      <circle
        cx="20"
        cy="20"
        r="15"
        fill="none"
        strokeWidth="1.5"
        strokeDasharray="70 24.25"
        strokeLinecap="round"
        transform="rotate(-50 20 20)"
        className="stroke-gold"
      />
      <g
        transform="translate(10 10) scale(0.8333)"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
        <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" />
      </g>
    </svg>
  );
}

export function Logo({ className = '', tone = 'dark' }: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-lg font-bold ${tone === 'dark' ? 'text-primary' : 'text-white'}`}
        >
          Full Cycle
        </span>
        <span
          className={`mt-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] ${
            tone === 'dark' ? 'text-earth' : 'text-neutral-400'
          }`}
        >
          Consultoria ambiental
        </span>
      </span>
    </span>
  );
}
