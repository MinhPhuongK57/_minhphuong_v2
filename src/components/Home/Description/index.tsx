'use client'

import { motion, useInView } from 'framer-motion'
import { opacity, slideUp } from './animations'

import Rounded from '../../../common/RoundedButton'
import about_me from '../../../constants/AboutMe'
import styles from './style.module.scss'
import { useRef } from 'react'

const DescriptionComponent = () => {
  const description = useRef(null)
  const isInView = useInView(description)
  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {about_me.phase.split(' ').map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span variants={slideUp} custom={index} animate={isInView ? 'open' : 'closed'} key={index}>
                  {word}
                </motion.span>
              </span>
            )
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? 'open' : 'closed'}>
          {about_me.subPhase}
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button}>
            <p>About me</p>
          </Rounded>
        </div>
      </div>
    </div>
  )
}

export default DescriptionComponent
