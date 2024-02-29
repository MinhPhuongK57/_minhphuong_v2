'use client'

import {useEffect, useState} from 'react'

import {AnimatePresence} from 'framer-motion'
import ContactComponent from '../../components/Home/Contact'
import LandingComponent from '../../components/Landing'
import Preloader from '../../components/Preloader'
import SkeletonComponent from '../../components/Skeleton'
import {testArr} from '../../constants/PreloaderContent'
import {test_landing} from '../../constants/Test'
import {work_landing} from '../../constants/Work'

const TestContainer = () => {
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
    <main className=''>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader preloaderArr={testArr} />}
      </AnimatePresence>
      <LandingComponent
        srcImg={test_landing.srcImg}
        firstTitleSlide={test_landing.firstTitleSlide}
        secondTitleSlide={test_landing.secondTitleSlide}
        firstTitle={test_landing.firstTitle}
        secondTitle={test_landing.secondTitle}
      />
      <SkeletonComponent/>
    </main>
  )
}

export default TestContainer
