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
            <h1 className='title_section'>Escolha entre as categorias</h1>
            <div className='produtos'>
                <Menu />
            </div>

        </div>
    )
}

export default Home