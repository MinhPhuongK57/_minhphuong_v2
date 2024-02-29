import Magnetic from '../../../../common/Magnetic'
import { socials } from '../../../../constants'
import styles from './style.module.scss'

const NavFooterComponent = () => {
    return (
        <div className={styles.footer}>
            <div>
                <span>
                    <h3>socials</h3>
                </span>
                <div className={styles.footer_link}>
                    {socials.map((social, idx) => {
                        return (
                            <a href={social.ref} target='_blank' key={idx}>
                                <Magnetic>
                                    <p>{social.title}</p>
                                </Magnetic>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NavFooterComponent
