import React from 'react'

export function CornerSquares({
  color = '#000000',
  size = 'w-2.5 h-2.5 sm:w-3 sm:h-3',
  offset = '18px',
  className = '',
}: {
  color?: string
  size?: string
  offset?: string
  className?: string
}) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <span
        className={`absolute ${size} z-30 pointer-events-none`}
        style={{ backgroundColor: color, top: `-${offset}`, left: `-${offset}` }}
      />
      <span
        className={`absolute ${size} z-30 pointer-events-none`}
        style={{ backgroundColor: color, top: `-${offset}`, right: `-${offset}` }}
      />
      <span
        className={`absolute ${size} z-30 pointer-events-none`}
        style={{ backgroundColor: color, bottom: `-${offset}`, left: `-${offset}` }}
      />
      <span
        className={`absolute ${size} z-30 pointer-events-none`}
        style={{ backgroundColor: color, bottom: `-${offset}`, right: `-${offset}` }}
      />
    </div>
  )
}

export default CornerSquares
