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
        speed: 800,           // Velocidade da transição
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
                <div className='card'>
                    <Card
                        title={"Refeição Completa em Minutos!"}
                        subtitle={'Peça hoje e receba no conforto da sua casa. Qualidade e sabor que surpreendem!'}
                        imgSource={"banner-1024.png"}
                        imgSource2={"banner-320.png"}
                        imgSource3={"banner-640.png"}
                        imgSource4={"banner-1024.png"} />
                </div>
                <div className='card'>
                    <Card
                        title={"Promoções Exclusivas Todos os Dias!"}
                        subtitle={'Aproveite pratos deliciosos com descontos especiais. Não perca!'}
                        imgSource={"sorvete.webp"} />
                </div>
                <div className='card'>
                    <Card
                        title={"Sabores Caseiros Feitos com Carinho!"}
                        subtitle={'Sinta o gostinho de comida caseira em cada refeição. Feito com ingredientes frescos e muito amor.'}
                        imgSource={"sorvete.webp"} />
                </div>
                <div className='card'>
                    <Card
                        title={"Faça seu Pedido em Poucos Cliques!"}
                        subtitle={'Com nosso sistema prático, escolher e pedir ficou mais fácil do que nunca!'}
                        imgSource={"sorvete.webp"} />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
