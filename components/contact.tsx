import styles from '../styles/Contact.module.css'

const Contact = () => {
    return (
        <div id={styles.contact}>
            <div>
                <div id={styles.title}>
                    Contact
                </div>
                <div id={styles.subtitle}>
                    If you want to collaboration with me, contact me anytime!
                </div>
                <div id={styles.container}>
                    <div className={styles.email}>
                        <span>Email</span>
                        <span>contact@bukgeuk.dev</span>
                    </div>
                    <div className={styles.kakaotalk}>
                        <span>Kakaotalk</span>
                        <span>bukgeuk1234</span>
                    </div>
                    <div className={styles.discord}>
                        <span>Discord</span>
                        <span>Bukgeuk_#6064</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact