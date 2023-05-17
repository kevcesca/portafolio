'use client'
import { Grid } from '@mui/material'
import React from 'react'
import styles from './ProjectSelector.module.css'
import Cards from '../Cards/Cards'

import pkeShop from './pokeshop.png'
import bpStudio from './bradpariis.png'
import alisados from './alisados.png'
import pokestadium from './pokemonstadium.png'
import dveritas from './dveritas.png'
import ejercicios from './ejercicios.png'

export default function ProjectSelector() {
    return (
        <div className={styles.selector}>
            <h1>Choose a project</h1>
            <Grid container>

                <Grid item xs={12} md={6} lg={3} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <Cards
                        img={pkeShop}
                        talt="Poke-shop"
                        description="An e-commerce platform that simulates a store where you can purchase Pokémon. Here, you can log in and add products to your shopping cart. Purchase orders are stored in FireBase, and the project's structure is built using React.js."
                        title="Poke-shop"
                        extLink="https://pokeshop-react.netlify.app/"
                    />

                    <Cards
                        img={alisados}
                        talt="Alisados"
                        description="Alisados is a venture by Ludmila Medina, and this is her website where you can explore the products and services that she offers for hair treatments. This site was built using the Next.js framework."
                        title="Alisados"
                        extLink="https://alisados-l-m.vercel.app/"
                    />

                    <Cards
                        img={pokestadium}
                        talt="Pokemon Web"
                        description="This is a Pokémon battle simulator that operates with the same formula as the Pokémon battles seen in Nintendo's official video games. Additionally, there is also a simple Pokédex featuring the first 150 Pokémon. This web application was created using CSS, HTML, and JavaScript."
                        title="Pokemon Web"
                        extLink="https://pokemonstadiumweb.netlify.app"
                    />
                </Grid>

                <Grid item lg={6} display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: "15px", display: { xs: 'none', sm: 'none', md: 'flex' } }}>                </Grid>

                <Grid item xs={12} md={6} lg={3} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <Cards
                        img={bpStudio}
                        talt="BP Studio"
                        description="This is the website of music producer Brad Paris. It is a static website where you can view the musician's information and how to contact him. This site uses HTML, CSS, and Bootstrap."
                        title="BP Studio"
                        extLink="https://bpstudio.netlify.app/index.html"
                    />

                    <Cards
                        img={dveritas}
                        talt="DVeritas"
                        description="Dveritas is a social network where users can safely, anonymously, and respectfully share their ideas. This web application was built using React for the frontend and Spring Boot for the backend."
                        title="Dveritas"
                        extLink="https://dveritas.netlify.app/"
                    />

                    <Cards
                        img={ejercicios}
                        talt="Logical Exercises"
                        description="A website where I wanted to demonstrate the functionality of the programming logic exercises assigned to me for the Generation bootcamp. The site is built with React and contains exercises in Java and JavaScript."
                        title="Some Exercises"
                        extLink="https://ejerciciosjskevinceron.netlify.app/"
                    />
                </Grid>
            </Grid>
        </div>
    )
}
