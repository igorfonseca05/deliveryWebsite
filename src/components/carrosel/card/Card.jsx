import React from 'react'

import './Card.css'

function Card({ title, subtitle, imgSource }) {
    return (
        <div className='card_container'>
            {/* <div className='cards_infos_container'>
                <p className='Card_carousel_title'>{title}</p>
                <p className='Card_corousel_subtitle'>{subtitle}</p>
            </div> */}
            <figure className='figure_container'>
                {/* <img src={imgSource} alt="Imagem 1" /> */}
                <img
                    src="banner mobile.png"
                    srcset="banner mobile.png 320w, banner mobile.png 640w, banner mobile.png 1024w"
                    alt="Descrição da imagem"
                />
            </figure>
        </div>
    )
}

export default Card
