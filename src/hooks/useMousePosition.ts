'use client'

import { useEffect, useState } from 'react'

import { MousePosition } from '../types/MousePosition'

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: null, y: null })

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      window.addEventListener('mousemove', updateMousePosition)
      return () => window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return mousePosition
}
