'use client'

import React from 'react'
import { useRef } from "react";
import { motion } from "framer-motion";


import styles from './Archer.module.css'



export default function Archer() {
    const constraintsRef = useRef(null);

    return (

    <motion.div className={styles.imgBackground} ref={constraintsRef}>
        <motion.div className={styles.character} drag="y" dragConstraints={constraintsRef} whileHover={{ scale: 1.2 }} />
        <motion.div className={styles.fire} drag dragConstraints={constraintsRef}/>
        <motion.div className={styles.fire} drag dragConstraints={constraintsRef}/>
        <motion.div className={styles.fire} drag dragConstraints={constraintsRef}/>
        
        <motion.div className={styles.fireI} drag dragConstraints={constraintsRef}/>
        <motion.div className={styles.fireI} drag dragConstraints={constraintsRef}/>
        <motion.div className={styles.fireI} drag dragConstraints={constraintsRef}/>
        <motion.div className={styles.characterI} drag="y" dragConstraints={constraintsRef} whileHover={{ scale: 1.2 }} />
    </motion.div>
    )
}
