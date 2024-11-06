import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import './Home.css'

import Carousel from '../components/carrosel/Carousel'
import Menu from '../components/MenuCategory/Menu'

// Usando custom hook

import { useFetch } from '../hooks/UseFetch'
import CardsProduto from './produtos/CardsProduto/CardsProduto'

function Home() {

    const url = 'http://localhost:3000/cardapio'

    const { data } = useFetch(url)

    // console.log(data)

    return (
        <div className='section_container section-hero'>
            <div className='slider_container'>
                <Carousel />
            </div>
            <div className='produtos'>
                <h1 className='title_section'>Escolha entre as categorias</h1>
                <Menu />
                <h2>card</h2>
                <div className='produtos_container'>
                    {data && data.map((item, index) => (
                        <CardsProduto key={index} name={item.name} description={item.description} price={item.price} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Home