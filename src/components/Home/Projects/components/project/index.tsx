'use client'

import { HomeProjectProps } from '../../../../../types/Home/Project'
import React from 'react'
import styles from './style.module.scss'

const ProjectComponent: React.FC<HomeProjectProps> = ({ slug, index, title, status, manageModal }) => {
  return (
    <a className={styles.projectLink} href={`/project/${slug}`} target='_blank'>
      <div
        onMouseEnter={(e) => {
          manageModal(true, index, e.clientX, e.clientY)
        }}
        onMouseLeave={(e) => {
          manageModal(false, index, e.clientX, e.clientY)
        }}
        className={styles.project}
      >
        <h2>{title}</h2>
        <p>{status}</p>
      </div>
    </a>
  )
}

export default ProjectComponent
