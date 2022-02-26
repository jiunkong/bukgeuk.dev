import Image from 'next/image'
import styles from '../styles/Projects.module.css'

import project1 from '../public/image/project1.png'
import project2 from '../public/image/project2.png'
import project3 from '../public/image/project3.png'

const Projects = () => {
    return (
        <div id={styles.projects}>
            <div>
                <div id={styles.title}>
                    Projects
                </div>
                <div id={styles.subtitle}>
                    What I&apos;ve ever created
                </div>
                <div id={styles.container}>
                    <div>
                        <a target="_blank" href="https://github.com/bukgeuk-penguin/mollu-lang" rel="noopener noreferrer">
                            <Image src={project1} alt="mollang"/>
                            <div className={styles.description}>
                                <div>Mol?lang</div>
                                <div>Esoteric language based on mollu meme</div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://github.com/Bukgeuk/stellascript-ide" rel="noopener noreferrer">
                            <Image src={project2} alt="stellascript"/>
                            <div className={styles.description}>
                                <div>StellaScript</div>
                                <div>Block coding language run on console</div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://github.com/Bukgeuk/Hangul-IME" rel="noopener noreferrer">
                            <Image src={project3} alt="hanglish decorder"/>
                            <div className={styles.description}>
                                <div>Hanglish Decorder</div>
                                <div>Translate English written by hangul typing layout into Korean</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects