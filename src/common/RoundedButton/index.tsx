'use client'

import { useEffect, useRef } from 'react'

import Magnetic from '../Magnetic'
import React from 'react'
import gsap from 'gsap'
import styles from './style.module.scss'

const Rounded = ({ children, backgroundColor = '#6b6b6b', ...attributes }: any) => {
  const circle = useRef<HTMLDivElement>(null)
  let timeline = useRef<gsap.core.Timeline | null>(null)
  let timeoutId: NodeJS.Timeout | null = null
  useEffect(() => {
    if (timeline.current === null) {
      timeline.current = gsap.timeline({ paused: true })
      timeline.current
        .to(circle.current, { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' }, 'enter')
        .to(circle.current, { top: '-150%', width: '125%', duration: 0.25 }, 'exit')
    }
  }, [circle])

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId)
    if (timeline.current) {
      timeline.current.tweenFromTo('enter', 'exit')
    }
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (timeline.current) {
        timeline.current.play()
      }
    }, 300)
  }

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: 'hidden' }}
        onMouseEnter={() => {
          manageMouseEnter()
        }}
        onMouseLeave={() => {
          manageMouseLeave()
        }}
        {...attributes}
      >
        {children}
        <div ref={circle} style={{ backgroundColor }} className={styles.circle}></div>
      </div>
    </Magnetic>
  )
}

export default Rounded
