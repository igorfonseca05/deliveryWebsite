import React from 'react'

import './AboutUs.css'

function AboutUs() {
    return (
        <div className='section_container'>
            <header className="header_about_us">
                <figure>
                    <img src="blackLogo.svg" alt="" />
                </figure>
            </header>
            <section className="intro">
                <div className="container">
                    <h1>Sobre Nós</h1>
                    <p className='text_sobre_nos'>Bem-vindo ao Paraíso da Gastronomia, o seu local de confiança para saborear marmitex de qualidade em Cruzeiro, São Paulo. Fundado por Leandro Uchoa, nosso compromisso é proporcionar uma experiência gastronômica saborosa, prática e acessível para o seu dia a dia. qui, cada marmitex é preparado com ingredientes frescos e selecionados, com o carinho e a dedicação que você merece. Nosso cardápio é pensado para oferecer opções equilibradas, deliciosas e que atendem às suas necessidades, seja para o almoço no trabalho ou para a refeição em casa.</p>
                    <p className='text_sobre_nos'>No Paraíso da Gastronomia, nossa missão é garantir a satisfação de nossos clientes com o melhor em qualidade, sabor e atendimento. Venha nos visitar e descubra o prazer de comer bem!</p>
                    <div className="features">
                        <div className="feature">
                            <h3>Qualidade no Sabor</h3>
                            <p>Pratos feitos com ingredientes frescos, garantindo um sabor inconfundível em cada refeição.</p>
                        </div>
                        <div className="feature">
                            <h3>Praticidade e Agilidade</h3>
                            <p>Marmitex prontos para levar, com um serviço rápido e eficiente para sua conveniência.</p>
                        </div>
                        <div className="feature">
                            <h3>Atendimento Personalizado</h3>
                            <p>Atendimento cordial e atento, sempre focado em proporcionar a melhor experiência para você.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="media">
                <div className="container">
                    <div className="image">
                        <h2>Onde nos encontrar</h2>
                    </div>
                    <div style={{ marginTop: '2rem' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.259205852605!2d-44.94054222546217!3d-22.558376625510743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9df6c43ceaef5d%3A0x35dd57423878f4dd!2sR.%20Eroni%20do%20Santos%20Goulart%2C%2024%20-%20Jardim%20Paraiso%2C%20Cruzeiro%20-%20SP%2C%2012721-295!5e1!3m2!1spt-BR!2sbr!4v1731684403898!5m2!1spt-BR!2sbr"
                            width="731"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs