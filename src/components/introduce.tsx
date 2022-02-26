import styles from '/src/styles/Introduce.module.css'

const Introduce = () => {
    return (
        <div id={styles.introduce}>
            <div>
                <div id={styles.container}>
                    <div>Hi,</div>
                    <div>I&apos;m <strong>Jiun Kong</strong>,</div>
                    <div>A Student Developer</div>
                    <div id={styles.subtext1} className={styles.subtext}>High School Student / Full-Stack Developer</div>
                    <div id={styles.subtext2} className={styles.subtext}>High School Student /<br/>Full-Stack Developer</div>
                </div>
            </div>
        </div>
    )
}

export default Introduce