import React from 'react'

import { NavLink } from 'react-router-dom'

import './Home.css'

import Carousel from '../components/carrosel/Carousel'

function Home() {
    return (
        <div className='section_container section-hero'>
            <div className='slider_container'>
                <Carousel />
            </div>

        </div>
    )
}

export default Home