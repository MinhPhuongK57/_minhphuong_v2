'use client'

import { AboutInfoComponent, EarthComponent } from '../../components/Home/AboutMe'
import {
  ContactComponent,
  DescriptionComponent,
  SlidingImagesComponent,
  SlidingTechnologiesComponent,
} from '../../components/Home'
import { useEffect, useState } from 'react'

import { AnimatePresence } from 'framer-motion'
import LandingComponent from '../../components/Landing'
import Preloader from '../../components/Preloader'
import ProjectsComponent from '../../components/Home/Projects'
import { homeArr } from '../../constants/PreloaderContent'
import { home_landing } from '../../constants/Home'
import styles from './style.module.scss'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'

const HomeContainer = () => {
  useSmoothScroll()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    ;(async () => {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const bodyElement = document.querySelector('body') as HTMLElement
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll()

        setTimeout(() => {
          setIsLoading(false)
          bodyElement.style.cursor = 'default'
          window.scrollTo(0, 0)
        }, 2000)
      }
    })()
  }, [])
  return (
    <main className={styles.home__container}>
      <AnimatePresence mode='wait'>{isLoading && <Preloader preloaderArr={homeArr} />}</AnimatePresence>
      <LandingComponent
        srcImg={home_landing.srcImg}
        firstTitleSlide={home_landing.firstTitleSlide}
        secondTitleSlide={home_landing.secondTitleSlide}
        firstTitle={home_landing.firstTitle}
        secondTitle={home_landing.secondTitle}
      />
      <DescriptionComponent />
      <div className={styles.about__earthContainer}>
        <EarthComponent />
        <AboutInfoComponent />
      </div>
      <ProjectsComponent />
      <SlidingImagesComponent />
      <SlidingTechnologiesComponent />
      <ContactComponent />
    </main>
  )
}

export default HomeContainer
