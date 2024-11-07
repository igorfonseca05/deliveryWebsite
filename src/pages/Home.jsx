import React, { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom'

import './Home.css'

import Carousel from '../components/carrosel/Carousel'
import Menu from '../components/MenuCategory/Menu'

// Usando custom hook

import { useFetch } from '../hooks/UseFetch'
import CardsProduto from './produtos/CardsProduto/CardsProduto'

import { useMenuContext } from '../context/MenuContext'

function Home() {

    const { dataset } = useMenuContext()

    const [category, setCategory] = useState([])
    const [res, setRes] = useState([])

    const [selected, setSelected] = useState([])

    let categorias = new Set()

    const url = 'http://localhost:3000/cardapio'
    const { data } = useFetch(url)


    useEffect(() => {

        dataset.toLowerCase()

        dataset === "especialidade" ? 'especialidade da casa' : ''
        dataset === "do dia" ? 'cardapio do dia' : ''

        const item = data?.filter(item => item.category === dataset)

        console.log(dataset, data)

    }, [dataset])


    useEffect(() => {
        data && data.map(({ category }) => (categorias.add(category)))
        setCategory(categorias)
    }, [data])

    useEffect(() => {
        [...category].forEach((item) => {
            let arr = [...data]?.filter((prato) => prato.category === item)
            setRes(prev => [...prev, arr])
        })

    }, [category])

    // console.log(selected)

    return (
        <div className='section_container section-hero'>
            <div className='slider_container'>
                <Carousel />
            </div>
            <div className='produtos'>
                <h1 className='title_section'>Escolha entre as categorias</h1>
                <Menu />
                {
                    [...category]?.map((item, i) => (
                        <CardsProduto key={i} categorie={item} dados={res[i]} />
                    ))
                }

            </div>

        </div>
    )
}

export default Home