import Image from "next/image"
import Link from "next/link"
import github from '/public/image/github.png'
import blog from '/public/image/tistory.png'
import styles from '/src/styles/Header.module.css'

const Header = () => {
    return (
        <div id={styles.header}>
            <div id={styles.container}>
                <div id={styles.logo}>
                    <div>
                        <Link href="/">
                            Jiun Kong
                        </Link>
                    </div>
                </div>
                <div id={styles.images}>
                    <a target="_blank" href="https://github.com/Bukgeuk" rel="noopener noreferrer">
                        <Image src={github} alt="github" width={25} height={25}/>
                    </a>
                    <a target="_blank" href="https://blog.bukgeuk.dev/" rel="noopener noreferrer">
                        <Image src={blog} alt="blog" width={25} height={25}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header