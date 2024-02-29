'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'
import { sliderImages } from '../../../constants'
import styles from './style.module.scss'
import { useRef } from 'react'

const SlidingImagesComponent = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

  return (
    <div ref={container} className={styles.slidingImages} id='slider-images'>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {sliderImages.sliderImageOne &&
          sliderImages.sliderImageOne.map((project, index) => {
            return (
              <div key={index} className={styles.project} style={{ backgroundColor: project.color }}>
                <div className={styles.imageContainer}>
                  <Image fill={true} alt={'image'} src={project.src} />
                </div>
              </div>
            )
          })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {sliderImages.sliderImageTwo &&
          sliderImages.sliderImageTwo.map((project, index) => {
            return (
              <div key={index} className={styles.project} style={{ backgroundColor: project.color }}>
                <div key={index} className={styles.imageContainer}>
                  <Image fill={true} alt={'image'} src={project.src} />
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

export default SlidingImagesComponent
