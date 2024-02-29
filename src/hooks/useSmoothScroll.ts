'use client'

import { useEffect, useRef } from 'react'

import Lenis from '@studio-freight/lenis'

export const useSmoothScroll = () => {
  const refCog = useRef<{ lenis: Lenis | null; requestAnimation: number | null }>({
    lenis: null,
    requestAnimation: null,
  })

  const raf = (time: DOMHighResTimeStamp) => {
    if (refCog.current.lenis) {
      refCog.current.lenis.raf(time)
      refCog.current.requestAnimation = requestAnimationFrame(raf)
    }
  }

  useEffect(() => {
    const initLenis = () => {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        refCog.current.lenis = new Lenis({
          wrapper: window,
          duration: 2.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothTouch: true,
          touchMultiplier: 2,
          infinite: false,
        })

        refCog.current.requestAnimation = requestAnimationFrame(raf)
        refCog.current.lenis.start()
      }
    }

    initLenis()

    return () => {
      refCog.current.requestAnimation && cancelAnimationFrame(refCog.current.requestAnimation)
      refCog.current.lenis && refCog.current.lenis.stop()
      refCog.current.lenis && refCog.current.lenis.destroy()
    }
  }, [])
}
