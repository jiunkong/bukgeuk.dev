import Image from 'next/image'
import styles from '../styles/Skills.module.css'

import c from '../public/image/c.png'
import cpp from '../public/image/cpp.png'
import js from '../public/image/js.png'
import ts from '../public/image/ts.png'
import nodejs from '../public/image/nodejs.png'
import java from '../public/image/java.png'
import kotlin from '../public/image/kotlin.png'
import python from '../public/image/python.png'
import reactImg from '../public/image/react.png'
import nextjs from '../public/image/nextjs.png'

const Skills = () => {
    return (
        <div id={styles.skills}>
            <div id={styles.container}>
                <div id={styles.title}>
                    Skills
                </div>
                <div id={styles.subtitle}>
                    What I&apos;ve ever studied
                </div>
                <div id={styles.list}>
                    <div>
                        <Image src={c} alt="c"/>
                    </div>
                    <div>
                        <Image src={cpp} alt="cpp"/>
                    </div>
                    <div>
                        <Image src={js} alt="javascript"/>
                    </div>
                    <div>
                        <Image src={ts} alt="typescript"/>
                    </div>
                    <div>
                        <Image src={nodejs} alt="nodejs"/>
                    </div>
                    <div>
                        <Image src={java} alt="java"/>
                    </div>
                    <div>
                        <Image src={kotlin} alt="kotlin"/>
                    </div>
                    <div>
                        <Image src={python} alt="python"/>
                    </div>
                    <div>
                        <Image src={reactImg} alt="react"/>
                    </div>
                    <div>
                        <Image src={nextjs} alt="nextjs"/>
                    </div>
                    <span>
                        <span>... etc</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Skills