type LogoMarkProps = {
  className?: string;
  size?: number;
};

export function LogoMark({ className = "", size = 46 }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="dbmt-mark-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8e7d8" />
          <stop offset="55%" stopColor="#c97a4c" />
          <stop offset="100%" stopColor="#5c2d15" />
        </linearGradient>
      </defs>

      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#dbmt-mark-gradient)" />
      <path
        d="M13 36h20"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <rect x="36" y="24" width="12" height="13" rx="4" fill="rgba(255,255,255,0.88)" />
      <path
        d="M24 34l7-9 8 9"
        stroke="rgba(255,255,255,0.95)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="42" r="4" fill="rgba(255,255,255,0.9)" />
      <circle cx="47" cy="42" r="4" fill="rgba(255,255,255,0.9)" />
      <path
        d="M16 42h31"
        stroke="rgba(255,255,255,0.78)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
