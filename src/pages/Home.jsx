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

    let { dataset } = useMenuContext()

    const [category, setCategory] = useState([])
    const [res, setRes] = useState([])

    const [url, setUrl] = useState('http://localhost:3000/cardapio')


    let categorias = new Set()

    // const url = 'http://localhost:3000/cardapio'
    const { data } = useFetch(url)


    useEffect(() => {

        dataset === "Especialidade" ? dataset = 'especialidade da casa' : ''
        dataset === "Do dia" ? dataset = 'cardapio do dia' : ''

        if (dataset === 'Todos') {
            setUrl('http://localhost:3000/cardapio')
            return
        }

        setUrl(`http://localhost:3000/cardapio?category=` + dataset.toLowerCase())

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

    // console.log(res)


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