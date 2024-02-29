'use client'

import AboutInfoDescriptionComponent from './Description'
import AboutTitleComponent from './Titles'
import { data } from '../../../../constants/AboutMe'
import styles from './style.module.scss'
import { useState } from 'react'

const AboutInfoComponent = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  return (
    <div className={styles.container}>
      <AboutTitleComponent data={data} setSelectedProject={setSelectedProject} />
      <AboutInfoDescriptionComponent data={data} selectedProject={selectedProject} />
    </div>
  )
}

export default AboutInfoComponent
