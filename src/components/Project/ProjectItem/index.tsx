import Image from 'next/image'
import React from 'react'
import { projects } from '../../../constants'
import styles from './style.module.scss'

const ProjectItemComponent = () => {
  return (
    <div className={styles.projectItem__container}>
      {projects.map((project, idx) => {
        return (
          <a key={idx} href={`/project/${project.slug}`}>
            <div className={styles.boxContainer}>
              <div className={styles.boxContainer__title}>{project.name}</div>
              <Image
                src='/images/background/home.png'
                className={`${styles.boxContainer__thumbnail}`}
                alt={`${project.image}`}
                height={400}
                width={400}
              />
              <div className={styles.boxContainer__description}>{project.description}</div>
              <div className={styles.boxContainer__tags}>
                {project.tags.map((tag, idx) => {
                  return (
                    <div key={idx} className={styles.boxContainer__tags__tag}>
                      <p>{tag.name}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default ProjectItemComponent
