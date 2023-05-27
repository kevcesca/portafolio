import React from 'react'
import styles from './Landing.module.css'
import character from './kapua-n-gigi-ds-talk-big.gif'
import Image from 'next/image'

export default function Landing() {
    return (
        <div className={styles.landing} id="about">
            <Image
                    src={character}
                    alt="Character"
                    className={styles.character}
                    priority
            />

            <div className={styles.console}>
                <p className={styles.landingText}>
                    Kevin Cerón's portfolio showcases his work in website and application development. Visitors can also learn about his education, experience, and skills in development. Kevin is available for new projects and willing to answer questions. Contact him if you're interested in working together.
                </p>
            </div>
        </div>
    )
}
