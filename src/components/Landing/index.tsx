'use client'

import { useLayoutEffect, useRef } from 'react'

import Image from 'next/image'
import { LandingProps } from '../../types/Landing'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { slideUp } from './animations'
import styles from './style.module.scss'

const LandingComponent = ({ srcImg, firstTitleSlide, secondTitleSlide, firstTitle, secondTitle }: LandingProps) => {
  const firstText = useRef(null)
  const secondText = useRef(null)
  const slider = useRef(null)
  let xPercent = 0
  let direction = -1

  useLayoutEffect(() => {
    const documentVar = typeof document !== 'undefined' && document.documentElement
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: documentVar as HTMLElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => (direction = e.direction * -1),
        },
        x: '-800px',
      })
      requestAnimationFrame(animate)
    }
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0
    } else if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate)
    xPercent += 0.1 * direction
  }

  return (
    <motion.main variants={slideUp} initial='initial' animate='enter' className={styles.landing}>
      <Image src={`/${srcImg}`} fill={true} alt='background' />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}> {firstTitleSlide} - </p>
          <p ref={secondText}> {secondTitleSlide} </p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z'
            fill='white'
          />
        </svg>
        <p>{firstTitle}</p>
        <p>{secondTitle}</p>
      </div>
    </motion.main>
  )
}

export default LandingComponent
