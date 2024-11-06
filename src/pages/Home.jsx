import React, { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom'

import './Home.css'

import Carousel from '../components/carrosel/Carousel'
import Menu from '../components/MenuCategory/Menu'

// Usando custom hook

import { useFetch } from '../hooks/UseFetch'
import CardsProduto from './produtos/CardsProduto/CardsProduto'

function Home() {

    const [category, setCategory] = useState([])
    const [res, setRes] = useState([])

    const url = 'http://localhost:3000/cardapio'

    const { data } = useFetch(url)


    useEffect(() => {
        let categorias = new Set()

        data && data.map(({ category }) => (categorias.add(category)))

        setCategory(categorias)
    }, [data])

    // console.log([...data])

    useEffect(() => {

        let arr

        [...category] && [...category].forEach((item) => {
            arr = [...data]?.filter((prod) => item = prod.category)
        })

        setRes(arr)

    }, [category])

    return (
        <div className='section_container section-hero'>
            <div className='slider_container'>
                <Carousel />
            </div>
            <div className='produtos'>
                <h1 className='title_section'>Escolha entre as categorias</h1>
                <Menu />
                <h2></h2>
                <div className='produtos_container'>
                    {res && res.map((item, index) => (
                        // console.log()
                        <CardsProduto key={index} name={item.name} description={item.description} price={item.price} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Home