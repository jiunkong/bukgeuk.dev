import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import Introduce from '../components/introduce'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Jiun Kong</title>
            </Head>
            <Header/>
            <div id={styles.section}>
                <Introduce/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
        </>
    )
}

export default Home
