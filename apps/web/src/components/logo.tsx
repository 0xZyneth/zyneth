export function ZynethLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top-left quadrant - leaf shape */}
      <path d="M0 0 H45 V45 H45 C45 20.147 24.853 0 0 0 Z" fill="#22c55e" />
      {/* Top-right quadrant - leaf shape */}
      <path
        d="M55 0 H100 V0 C75.147 0 55 20.147 55 45 V45 H100 V0 Z"
        fill="#22c55e"
      />
      {/* Bottom-left quadrant - leaf shape */}
      <path
        d="M0 55 V100 H45 V55 C20.147 55 0 75.147 0 100 V55 Z"
        fill="#22c55e"
      />
      {/* Bottom-right quadrant - leaf shape */}
      <path
        d="M55 55 V55 H100 V100 H55 C55 75.147 75.147 55 100 55 Z"
        fill="#22c55e"
      />
    </svg>
  )
}

export function ZynethLogoFull({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <ZynethLogo className="w-8 h-8" />
      <span className="text-xl font-bold text-white tracking-tight">
        Zyneth
      </span>
    </div>
  )
}
