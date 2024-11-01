import React from 'react'

import './Card.css'

function Card({ imgSource }) {
    return (
        <div className='card_container'>
            <p>opa</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repudiandae molestiae pariatur officiis odio earum praesentium vel consequuntur obcaecati dicta tempore, ab ratione. Recusandae odit provident inventore impedit, dolorem vero.</p>
            <img src={imgSource} alt="Imagem 1" />
        </div>
    )
}

export default Card
