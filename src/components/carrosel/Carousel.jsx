import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    // Configuração do carrossel
    const settings = {
        dots: true,           // Mostra os pontos de navegação
        infinite: true,       // Ativa o looping infinito
        speed: 500,           // Velocidade da transição
        slidesToShow: 3,      // Quantidade de slides visíveis
        slidesToScroll: 1,    // Quantidade de slides que passam ao rolar
        responsive: [         // Configurações para diferentes tamanhos de tela
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            <div><img src="massas.png" alt="Imagem 1" /></div>
            <div><img src="image2.jpg" alt="Imagem 2" /></div>

        </Slider>
    );
};

export default Carousel;
