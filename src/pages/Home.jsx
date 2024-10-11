import React from 'react'

import { NavLink } from 'react-router-dom'

import './Home.css'

import ResponsiveMenu from '../components/ResponsiveMenu'
import Modal from '../components/Modal'

function Home() {
    return (
        <div>
            <header className='bg-body-tertiary'>
                <ResponsiveMenu />
            </header>
            <main>
                <section className='hero_section'>
                    <Modal />
                    <div className='carrosel-container'>
                        <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className='publi-container'>
                                        <div className='publi-text'>
                                            <h1>Sobremesas Irresistíveis <br />para Adoçar Seu Dia!</h1>
                                            <p>Delicie-se com nossas sobremesas feitas com carinho, perfeitas para finalizar sua refeição com um toque doce e especial.</p>
                                        </div>
                                        <figure>
                                            <img src="https://static.vecteezy.com/system/resources/thumbnails/017/394/920/small_2x/sweet-strawberry-ice-cream-generative-ai-png.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="massas.png" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..." />
                                    <h1>Meu nome é gal</h1>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default Home