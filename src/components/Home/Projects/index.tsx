'use client'

import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import { Link } from '@chakra-ui/react'
import ProjectComponent from './components/project'
import Rounded from '../../../common/RoundedButton'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import projects from '../../../constants/Projects'
import styles from './style.module.scss'

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: { scale: 1, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
}

const ProjectsComponent = () => {
  const [modal, setModal] = useState({ active: false, index: 0 })
  const { active, index } = modal
  const modalContainer = useRef<HTMLDivElement>(null)
  const cursor = useRef<HTMLDivElement>(null)
  const cursorLabel = useRef<HTMLDivElement>(null)

  const xMoveContainer = useRef<gsap.TweenVars | undefined>({})
  const yMoveContainer = useRef<gsap.TweenVars | undefined>({})
  const xMoveCursor = useRef<gsap.TweenVars | undefined>({})
  const yMoveCursor = useRef<gsap.TweenVars | undefined>({})
  const xMoveCursorLabel = useRef<gsap.TweenVars | undefined>({})
  const yMoveCursorLabel = useRef<gsap.TweenVars | undefined>({})

  useEffect(() => {
    if (modalContainer.current) {
      xMoveContainer.current = gsap.quickTo(modalContainer.current, 'left', { duration: 0.8, ease: 'power3' })
      yMoveContainer.current = gsap.quickTo(modalContainer.current, 'top', { duration: 0.8, ease: 'power3' })
      xMoveCursor.current = gsap.quickTo(cursor.current, 'left', { duration: 0.5, ease: 'power3' })
      yMoveCursor.current = gsap.quickTo(cursor.current, 'top', { duration: 0.5, ease: 'power3' })
      xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'left', { duration: 0.45, ease: 'power3' })
      yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'top', { duration: 0.45, ease: 'power3' })
    }
  })

  const moveItems = (x: number, y: number) => {
    if (modalContainer.current && cursor.current && cursorLabel.current) {
      gsap.to(modalContainer.current, { left: x, top: y, duration: 0.8, ease: 'power3' })
      gsap.to(cursor.current, { left: x, top: y, duration: 0.5, ease: 'power3' })
      gsap.to(cursorLabel.current, { left: x, top: y, duration: 0.45, ease: 'power3' })
    }
  }

  const manageModal = (active: boolean, index: number, x: number, y: number) => {
    moveItems(x, y)
    setModal({ active, index })
  }

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY)
      }}
      className={styles.projects}
    >
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <ProjectComponent
              slug={project.slug}
              index={index}
              status={project.statusWebsite}
              title={project.name}
              manageModal={manageModal}
              key={index}
            />
          )
        })}
      </div>
      <Link href='/project'>
                <Rounded>
                  <p>More Work</p>
                </Rounded>
      </Link>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial='initial'
          animate={active ? 'enter' : 'closed'}
          className={styles.modalContainer}
        >
          <div style={{ top: index * -100 + '%' }} className={styles.modalSlider}>
            {projects.map((project, index) => {
              const { image, color } = project
              return (
                <div className={styles.modal} style={{ backgroundColor: color }} key={`modal_${index}`}>
                  <Image src={image} width={500} height={0} alt='Images' />
                </div>
              )
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial='initial'
          animate={active ? 'enter' : 'closed'}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial='initial'
          animate={active ? 'enter' : 'closed'}
        >
          View
        </motion.div>
      </>
    </main>
  )
}

export default ProjectsComponent
