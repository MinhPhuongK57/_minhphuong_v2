import React, { useState } from 'react'

import Curve from './Curve'
import LinkComponent from './Link'
import NavFooterComponent from './Footer'
import { menuSlide } from '../animations'
import { motion } from 'framer-motion'
import navLinks from '../../../constants/NavLinks'
import styles from './style.module.scss'
import { usePathname } from 'next/navigation'

const NavComponent = () => {
    const pathname = usePathname()
    const [selectedIndicator, setSelectedIndicator] = useState(pathname)

    return (
        <motion.div variants={menuSlide} initial='initial' animate='enter' exit='exit' className={styles.menu}>
            <div className={styles.body}>
                <div
                    onMouseLeave={() => {
                        setSelectedIndicator(pathname)
                    }}
                    className={styles.nav}
                >
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {navLinks.map((data, index) => {
                        return (
                            <LinkComponent
                                key={index}
                                data={{ ...data, index }}
                                isActive={selectedIndicator == data.href}
                                setSelectedIndicator={setSelectedIndicator}
                            />
                        )
                    })}
                </div>
                <NavFooterComponent />
            </div>
            <Curve />
        </motion.div>
    )
}

export default NavComponent
