import React from 'react'

export function CornerSquares({
  color = '#000000',
  size = 'w-2 h-2',
}: {
  color?: string
  size?: string
}) {
  return (
    <>
      <div className={`absolute -top-1 -left-1 ${size} z-10`} style={{ backgroundColor: color }} />
      <div className={`absolute -top-1 -right-1 ${size} z-10`} style={{ backgroundColor: color }} />
      <div className={`absolute -bottom-1 -left-1 ${size} z-10`} style={{ backgroundColor: color }} />
      <div className={`absolute -bottom-1 -right-1 ${size} z-10`} style={{ backgroundColor: color }} />
    </>
  )
}

export default CornerSquares
