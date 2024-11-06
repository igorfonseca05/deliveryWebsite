import React from 'react'

import { NavLink } from 'react-router-dom'

import './Home.css'

import Carousel from '../components/carrosel/Carousel'
import Menu from '../components/MenuCategory/Menu'

function Home() {
    return (
        <div className='section_container section-hero'>
            <div className='slider_container'>
                <Carousel />
            </div>
            <div className='produtos'>
                <h1 className='title_section'>Escolha entre as categorias</h1>
                <Menu />
                <div className='produtos_container'>
                    <div className='produto_card'>
                        <figure>
                            <img src="card.jpg" alt="" />
                        </figure>
                        <p>Nome prato</p>
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque natus eveniet in quod cumque, reiciendis, earum aut excepturi voluptate</span>
                        <p>R$47.50</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home