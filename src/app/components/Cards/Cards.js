'use client'
import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';
import styles from './Cards.module.css'
import Modal from '../Modal/Modal';


export default function Cards({ img, talt, description, title, extLink}) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        console.log("Si funciono")
        setShowModal(true);
    };

    return (
        <div className={styles.cardContainer} onClick={handleOpenModal}>
            <Card onClick={handleOpenModal} sx={{ width: 250, height: 250, backgroundColor: "#3e0071a2", textDecoration: "none" }} >
                <CardActionArea>
                    <Image
                        className=''
                        width={250}
                        height={125}
                        src={img}
                        alt={talt}
                        priority
                        onClick={handleOpenModal}
                    />
                    <CardContent >
                        <Typography sx={{ fontFamily: 'VT323', textAlign: 'center', textDecoration: "none", color: 'white' }} variant="h4" component="div">
                            {title}
                        </Typography>
                        <Typography sx={{ fontFamily: 'VT323', textAlign: 'center', fontSize: "20px", color: 'white' }} variant="body2">
                            {description}
                        </Typography>
                    </CardContent>


                    {showModal && (
                        <Modal className={styles.modal} onClose={() => setShowModal(false)}>
                            <Image
                                className={styles.imagesModal}
                                src={img}
                                alt={talt}
                                priority
                            />
                            <span className={styles.modalText}>{description}</span>
                            <a target="_blank" href={extLink} className={styles.modalStart} >Start</a>
                        </Modal>
                    )}
                </CardActionArea>
            </Card>
        </div>

    );
}