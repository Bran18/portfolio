'use client'

export function SvgText() {
  return (
    <svg 
      className="w-full h-[100px] opacity-8"
      viewBox="0 0 800 100"
      preserveAspectRatio="xMidYMid meet"
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-7xl font-bold font-geist fill-[#bffff7]"
      >
        
      </text>
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}

