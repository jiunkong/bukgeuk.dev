import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/userIntersectionObserver'
import styles from '/src/styles/Contact.module.css'

const Contact = () => {
    const target = useRef(null)

    useIntersectionObserver(target, styles.animation, true)

    return (
        <div id={styles.contact}>
            <div/>
            <div>
                <div id={styles.title}>
                    Contact
                </div>
                <div id={styles.subtitle1} className={styles.subtitle}>
                    If you want to collaboration with me, contact me anytime!
                </div>
                <div id={styles.subtitle2} className={styles.subtitle}>
                    If you want to<br/>collaboration with me,<br/>contact me anytime!
                </div>
                <div id={styles.container} ref={target}>
                    <div className={`${styles.email} ${styles.element}`}>
                        <span>Email</span>
                        <span>contact@bukgeuk.dev</span>
                    </div>
                    <div className={`${styles.kakaotalk} ${styles.element}`}>
                        <span>Kakaotalk</span>
                        <span>bukgeuk1234</span>
                    </div>
                    <div className={`${styles.discord} ${styles.element}`}>
                        <span>Discord</span>
                        <span>Bukgeuk_#6064</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact