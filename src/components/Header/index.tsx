'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { AnimatePresence } from 'framer-motion'
import Magnetic from '../../common/Magnetic'
import NavComponent from './nav'
import Rounded from '../../common/RoundedButton'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import navLinks from '../../constants/NavLinks/index'
import styles from './style.module.scss'
import { usePathname } from 'next/navigation'

const HeaderContainer = () => {
  const header = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()
  const button = useRef(null)
  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  useLayoutEffect(() => {
    const documentVar = typeof document !== 'undefined' && document.documentElement
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(button.current, {
        scrollTrigger: {
          trigger: documentVar as HTMLElement,
          start: 0,
          end: window.innerHeight,
          onLeave: () => {
            gsap.to(button.current, { scale: 1, duration: 0.25, ease: 'power1.out' })
          },
          onEnterBack: () => {
            gsap.to(button.current, {
              scale: 0,
              duration: 0.25,
              ease: 'power1.out',
              onComplete: () => {
                setIsActive(false)
              },
            })
          },
        },
      })
    }
  }, [])

  const removeCharacter = (textCharacter: string) => {
    const textReplace = textCharacter.replace('/', '')
    return textReplace
  }

  return (
    <nav className={styles.navContainer}>
      <div ref={header} className={styles.header}>
        <a href='/' className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>copyR</p>
            <p className={styles.firstName}>minh</p>
            <p className={styles.lastName}>phuong</p>
          </div>
        </a>
        <div className={styles.nav}>
          {navLinks.map((data, idx) => (
            <Magnetic key={idx}>
              <div className={styles.el}>
                <a href={`/${data.href}`}>{data.title}</a>
                <div
                  className={
                    removeCharacter(`${pathname}`) === data.href ? `${styles.indicatorActive}` : `${styles.indicator}`
                  }
                ></div>
              </div>
            </Magnetic>
          ))}
        </div>
        <Magnetic>
          <div className={styles.header__mobilePathname}>
            <p>{pathname === '/' ? 'home' : removeCharacter(`${pathname}`)}</p>
            <div className={styles.indicator}></div>
          </div>
        </Magnetic>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive)
          }}
          className={`${styles.button}`}
        >
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
        </Rounded>
      </div>
      <AnimatePresence mode='wait'>{isActive && <NavComponent />}</AnimatePresence>
    </nav>
  )
}

export default HeaderContainer
