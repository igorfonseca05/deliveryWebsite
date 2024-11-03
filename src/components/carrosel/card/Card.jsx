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
                {/* <img src={imgSource} alt="Imagem 1" /> */}
                <img
                    src="sor5.png"
                    srcset="sor-320.png 320w, sor-640.png 640w, sor5.png 1024w"
                    alt="Descrição da imagem"
                />
            </figure>
        </div>
    )
}

export default Card
