import React from 'react'

export function CornerSquares({
  color = '#000000',
  size = 'w-2.5 h-2.5 sm:w-3 sm:h-3',
  className = '',
}: {
  color?: string
  size?: string
  className?: string
}) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <span
        className={`absolute -top-1.5 -left-1.5 ${size} z-30 pointer-events-none`}
        style={{ backgroundColor: color }}
      />
      <span
        className={`absolute -top-1.5 -right-1.5 ${size} z-30 pointer-events-none`}
        style={{ backgroundColor: color }}
      />
      <span
        className={`absolute -bottom-1.5 -left-1.5 ${size} z-30 pointer-events-none`}
        style={{ backgroundColor: color }}
      />
      <span
        className={`absolute -bottom-1.5 -right-1.5 ${size} z-30 pointer-events-none`}
        style={{ backgroundColor: color }}
      />
    </div>
  )
}

export default CornerSquares
