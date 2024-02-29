'use client'

import { useEffect, useState } from 'react'

import { AnimatePresence } from 'framer-motion'
import ContactComponent from '../../components/Home/Contact'
import LandingComponent from '../../components/Landing'
import Preloader from '../../components/Preloader'
import { ProjectItemComponent } from '../../components/Project'
import { projectArr } from '../../constants/PreloaderContent'
import { work_landing } from '../../constants/Work'

const ProjectContainer = () => {
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
        <AnimatePresence mode='wait'>{isLoading && <Preloader preloaderArr={projectArr} />}</AnimatePresence>
        <LandingComponent
          srcImg={work_landing.srcImg}
          firstTitleSlide={work_landing.firstTitleSlide}
          secondTitleSlide={work_landing.secondTitleSlide}
          firstTitle={work_landing.firstTitle}
          secondTitle={work_landing.secondTitle}
        />
        <ProjectItemComponent />
        <ContactComponent />
      </main>
    )
}

export default ProjectContainer
