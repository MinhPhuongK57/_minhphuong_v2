'use client'

import React, { useEffect, useState } from 'react'

import { AboutInfoDescriptionProps } from '../../../../../types/AboutInfo/Description'
import styles from './style.module.scss'

const AboutInfoDescriptionComponent: React.FC<AboutInfoDescriptionProps> = ({ data, selectedProject }) => {
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      return window.innerWidth
    }
    return 0
  })

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])
  const crop = (string: string) => {
    const trimmedString = string.trim()
    const spaceIndex = trimmedString.indexOf(' ')
    return spaceIndex !== -1 ? trimmedString.substring(0, spaceIndex) : trimmedString
  }

  const shouldUseFiftyPercentClipPath = () => {
    if (typeof window !== 'undefined') {
      return windowWidth <= 1024 || windowWidth <= 768 || windowWidth <= 500
    }
  }

  return (
    <div className={styles.descriptions}>
      {typeof window !== 'undefined' &&
        data.map((project, idx) => {
          const { title, description } = project
          const clipPathInsetZeroPercent = 'inset(0 0 0)'
          const clipPathInsetFiftyPercent = 'inset(50% 0 50%)'
          const clipPathStyles = {
            clipPath:
              shouldUseFiftyPercentClipPath() || selectedProject == idx
                ? clipPathInsetZeroPercent
                : clipPathInsetFiftyPercent,
          }
          return (
            <div key={idx} className={styles.description} style={clipPathStyles}>
              <p>{crop(title)}</p>
              <p>{description}</p>
            </div>
          )
        })}
    </div>
  )
}

export default AboutInfoDescriptionComponent
