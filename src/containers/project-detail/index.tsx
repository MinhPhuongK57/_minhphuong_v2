'use client'

import { useEffect, useState } from 'react'

import { AnimatePresence } from 'framer-motion'
import ContactComponent from '../../components/Home/Contact'
import Preloader from '../../components/Preloader'

const ProjectDetailContainer = ({ projectArray }: any) => {
    const [isLoading, setIsLoading] = useState(true)
    const projectArr = projectArray
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
            <ContactComponent />
        </main>
    )
}

export default ProjectDetailContainer
