'use client'

import styles from './Navi.module.css'
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

export default function Navi() {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);


    return (

        <motion.div
            ref={ref}
            className={styles.navi}
            animate={{ x, y }}
            transition={{
                type: "spring",
                damping: 3,
                stiffness: 50,
                restDelta: 0.001
            }}
        />
    )
}
