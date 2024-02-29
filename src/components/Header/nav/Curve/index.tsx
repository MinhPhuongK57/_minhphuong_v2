import React from 'react'
import curve from './animations'
import { motion } from 'framer-motion'
import styles from './styles.module.scss'

const Curve = () => {
    return (
        <svg className={styles.svgCurve}>
            <motion.path variants={curve} initial='initial' animate='enter' exit='exit'></motion.path>
        </svg>
    )
}

export default Curve
