'use client'

import React from 'react'
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import styles from './Credits.module.css'

import arcade from './arcade.gif'
import toast from './toast.gif'
import citybg from './citybg.gif'
import spaceship from './spaceship.gif'
import spacebg from './spacebg.gif'


export default function Credits() {
    const constraintsRef = useRef(null);

    return (
        <div className={styles.creditContainer} id="credits">

            <h2 className={styles.title}>Credits</h2>
            <motion.div className={styles.imgBackground} ref={constraintsRef}>
                <motion.div className={styles.credit} drag dragConstraints={constraintsRef} whileHover={{ scale: 1.2 }}>
                    <h4>Gif by Pixel Jeff</h4>
                    <Image
                        className=''
                        height={50}
                        src={arcade}
                        alt="Pixelart Background"
                        priority
                    />
                    <a target="_blank" href='https://www.instagram.com/pixeljeff_design/'>Instagram</a>
                </motion.div>

                <motion.div className={styles.credit} drag dragConstraints={constraintsRef} whileHover={{ scale: 1.2 }}>
                    <h4>Character by Kapua</h4>
                    <Image
                        className=''
                        height={50}
                        src={toast}
                        alt="Pixelart Character"
                        priority
                    />
                    <a target="_blank" href='https://toastydoodles.tumblr.com/post/157382543881/art-blog-twitter-my-entry-for-the-court'>tumblr</a>
                </motion.div>

                <motion.div className={styles.credit} drag dragConstraints={constraintsRef} whileHover={{ scale: 1.2 }}>
                    <h4>Gif by J O</h4>
                    <Image
                        className=''
                        height={50}
                        src={citybg}
                        alt="Pixelart Background"
                        priority
                    />
                    <a target="_blank" href='https://www.pixilart.com/untamedmonster'>Pixilart</a>
                </motion.div>

                <motion.div className={styles.credit} drag dragConstraints={constraintsRef} whileHover={{ scale: 1.2 }}>
                    <h4>Gif by kirokaze</h4>
                    <Image
                        className=''
                        height={50}
                        src={spaceship}
                        alt="Pixelart Background"
                        priority
                    />
                    <a target="_blank" href='https://www.deviantart.com/kirokaze/gallery'>DEVIANTART</a>
                </motion.div>

                <motion.div className={styles.credit} drag dragConstraints={constraintsRef} whileHover={{ scale: 1.2 }}>
                    <h4>Gif by pxsprite</h4>
                    <Image
                        className=''
                        height={50}
                        src={spacebg}
                        alt="Pixelart Background"
                        priority
                    />
                    <a target="_blank" href='https://www.artstation.com/pxsprite'>Artstation</a>
                </motion.div>
            </motion.div>
        </div>

    )
}
