'use client'

import React from 'react'
import Rounded from '../../common/RoundedButton'
import styles from './style.module.scss'

const NotFoundComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>404 Not Found</div>
      <a href='/home'>
        <Rounded>
          <p>Back to Home</p>
        </Rounded>
      </a>
    </div>
  )
}

export default NotFoundComponent
