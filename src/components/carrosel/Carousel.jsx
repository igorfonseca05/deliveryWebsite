import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './card/Card';

import './Carousel.css'

const Carousel = () => {
    // Configuração do carrossel
    const settings = {
        dots: true,           // Mostra os pontos de navegação
        infinite: true,       // Ativa o looping infinito
        speed: 500,           // Velocidade da transição
        slidesToShow: 1,      // Quantidade de slides visíveis
        slidesToScroll: 1,    // Quantidade de slides que passam ao rolar
        autoplay: false, // Ativa o autoplay
        autoplaySpeed: 3000,
        responsive: [         // Configurações para diferentes tamanhos de tela
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className='carousel_container'>
            <Slider {...settings}>
                <div className='card'><Card imgSource={"massas.png"} /></div>
                <div className='card'><Card imgSource={"doce.png"} /></div>
            </Slider>
        </div>
    );
};

export default Carousel;
