import React from 'react'

import './Card.css'

function Card({ title, subtitle, imgSource }) {
    return (
        <div className='card_container'>
            <div className='cards_infos_container'>
                <p className='Card_carousel_title'>{title}</p>
                <p className='Card_corousel_subtitle'>{subtitle}</p>
            </div>
            <figure className='figure_container'>
                <img srcSet={`${imgSource + '376w'}`} alt="Imagem 1" />
            </figure>
        </div>
    )
}

export default Card
