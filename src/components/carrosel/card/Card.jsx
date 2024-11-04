import React from 'react'

import './Card.css'

function Card({ title, subtitle, imgSource, imgSource2, imgSource3, imgSource4 }) {

    // console.log(imgSource2)

    return (
        <div className='card_container'>
            {/* <div className='cards_infos_container'>
                <p className='Card_carousel_title'>{title}</p>
                <p className='Card_corousel_subtitle'>{subtitle}</p>
            </div> */}
            {/* <button className='button_bunner'>Peça já o seu</button> */}
            <figure className='figure_container'>
                {/* <img src={imgSource} alt="Imagem 1" /> */}
                <img
                    src={imgSource}
                    srcSet={`${imgSource2} 320w, ${imgSource3} 840w, ${imgSource4} 1200w`}
                    sizes="(max-width: 320px) 100vw, (max-width: 640px) 100vw, 100vw"
                    alt="Descrição da imagem"
                />
            </figure>
        </div>
    )
}

export default Card
