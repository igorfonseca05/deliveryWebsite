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
                                <div class="carousel-item active sobremesas">
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
                                <div class="carousel-item massas">
                                    <div className='publi-container'>
                                        <div className='publi-text'>
                                            <h1>Massas perfeitas para todos os momentos!</h1>
                                            <p>Se você é fã de uma refeição prática e deliciosa, nossas massas são a escolha ideal!</p>
                                        </div>
                                        <figure>
                                            <img src="massas.png" alt="" />
                                        </figure>
                                    </div>
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
                <section className='section-dishes'>
                    <h1>Pratos do dia</h1>
                    <div className='cards-dishes-container'>
                        <div class="card">
                            <img src="https://via.placeholder.com/300x200" alt="Imagem do Prato" class="card-image" />
                            <div class="card-content">
                                <h2 class="card-title">Strogonoff de Frango</h2>
                                <p class="card-description">Delicioso strogonoff de frango com arroz soltinho, batata palha e molho cremoso.</p>
                                <p class="card-price">R$ 20,00</p>
                                <a href="#" class="card-button">Peça Agora</a>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://via.placeholder.com/300x200" alt="Imagem do Prato" class="card-image" />
                            <div class="card-content">
                                <h2 class="card-title">Strogonoff de Frango</h2>
                                <p class="card-description">Delicioso strogonoff de frango com arroz soltinho, batata palha e molho cremoso.</p>
                                <p class="card-price">R$ 20,00</p>
                                <a href="#" class="card-button">Peça Agora</a>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://via.placeholder.com/300x200" alt="Imagem do Prato" class="card-image" />
                            <div class="card-content">
                                <h2 class="card-title">Strogonoff de Frango</h2>
                                <p class="card-description">Delicioso strogonoff de frango com arroz soltinho, batata palha e molho cremoso.</p>
                                <p class="card-price">R$ 20,00</p>
                                <a href="#" class="card-button">Peça Agora</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default Home