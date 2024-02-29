'use client'

import { useEffect, useState } from 'react'

import { AnimatePresence } from 'framer-motion'
import ContactComponent from '../../components/Home/Contact'
import Preloader from '../../components/Preloader'
import { resumeArr } from '../../constants/PreloaderContent'

const ResumeContainer = () => {
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
            <AnimatePresence mode='wait'>{isLoading && <Preloader preloaderArr={resumeArr} />}</AnimatePresence>
            <ContactComponent />
        </main>
    )
}

export default ResumeContainer
