import React from 'react'
import PlayerContainer from '../Player/PlayerContainer'
import styles from './Footer.module.css'
import Image from 'next/image'

import linkedin from './174857.png'
import github from './38401.png'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialMedia}>
                <a target="_blank" href="https://www.linkedin.com/in/kevinceresc/">
                    <Image
                        className={styles.logos}
                        height={50}
                        width={50}
                        src={linkedin}
                        alt="Linkedin logo"
                        priority
                    />
                    <p>Linkedin</p>
                </a>
                <a target="_blank" href="https://github.com/kevcesca">
                    <Image
                        className={styles.logos}
                        height={50}
                        width={50}
                        src={github}
                        alt="GitHub logo"
                        priority
                    />
                    <p>GitHub</p>
                </a>
            </div>

            <div className={styles.footerText}>
                <p>Kevin Cerón </p>
                <p> | </p>
                <p> 2023</p>
            </div>
        </footer>
    )
}
