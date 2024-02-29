'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'
import styles from './style.module.scss'
import { technologies } from '../../../constants'
import { useRef } from 'react'

const SlidingTechnologiesComponent = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

  return (
    <div ref={container} className={styles.slidingTechnology} id='slider-images'>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {technologies.technologiesOne &&
          technologies.technologiesOne.map((technology, index) => {
            return (
              <div key={index} className={styles.technology} style={{ backgroundColor: technology.color }}>
                <div className={styles.imageContainer}>
                  <Image fill={true} alt={'image'} src={technology.icon} />
                </div>
              </div>
            )
          })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {technologies.technologiesTwo &&
          technologies.technologiesTwo.map((technology, index) => {
            return (
              <div key={index} className={styles.technology} style={{ backgroundColor: technology.color }}>
                <div key={index} className={styles.imageContainer}>
                  <Image fill={true} alt={'image'} src={technology.icon} />
                </div>
              </div>
            )
          })}
      </motion.div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  )
}

export default SlidingTechnologiesComponent
