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
            <div className=''>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium at, amet illo commodi, reiciendis eum odit modi possimus repellat esse iste qui inventore et eligendi minus, consequatur nulla minima?</h1>
            </div>
            <div className=''>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium at, amet illo commodi, reiciendis eum odit modi possimus repellat esse iste qui inventore et eligendi minus, consequatur nulla minima?</h1>
            </div>
            <div className=''>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium at, amet illo commodi, reiciendis eum odit modi possimus repellat esse iste qui inventore et eligendi minus, consequatur nulla minima?</h1>
            </div>
        </div>
    )
}

export default Home