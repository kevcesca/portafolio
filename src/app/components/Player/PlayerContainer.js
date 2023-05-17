'use client'

import React from 'react'
import Player from './Player';
import "@madzadev/audio-player/dist/index.css";
import styles from './Player.module.css'

export default function PlayerContainer() {
    const tracks = [
        {
            url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
            title: "Madza - Chords of Life",
            tags: ["house"],
        },
        {
            url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
            title: "Madza - Late Night Drive",
            tags: ["dnb"],
        },
        {
            url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
            title: "Madza - Persistence",
            tags: ["dubstep"],
        },
    ];


    return (
        <div className={styles.playerContainer}>
            <Player trackList={tracks} showPlaylist={false} includeTags={false} includeSearch={false}  />
        </div>
    )
}
