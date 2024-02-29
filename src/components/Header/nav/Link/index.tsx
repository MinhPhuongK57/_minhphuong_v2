import { scale, slide } from '../../animations';

import Link from 'next/link';
import Magnetic from '../../../../common/Magnetic'
import { motion } from 'framer-motion';
import styles from './style.module.scss';

const LinkComponent = ({data, isActive, setSelectedIndicator}: any) => {
  
    const { title, href, index} = data;
  
    return (  
      <motion.div 
        className={styles.link} 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className={styles.indicator}>
        </motion.div>
          <Magnetic>
          <Link href={href}>{title}</Link>  
          </Magnetic>
      </motion.div>
    )
}

export default LinkComponent