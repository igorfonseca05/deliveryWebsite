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
    const [titleDishes, setTitleDishes] = useState(dataset)
    const [url, setUrl] = useState('http://localhost:3000/cardapio')

    // const [OrderisOpen, setOrderIsOpen] = useState(false)


    let categorias = new Set()

    const { data, loading, error } = useFetch(url)

    // console.log(data)

    useEffect(() => {

        dataset === "Especialidade" ? dataset = 'especialidade da casa' : ''
        dataset === "Do dia" ? dataset = 'cardapio do dia' : ''

        if (dataset === 'Todos') {
            setUrl('http://localhost:3000/cardapio')
            setTitleDishes(dataset)
            return
        }

        setUrl(`http://localhost:3000/cardapio?category=` + dataset.toLowerCase())
        setTitleDishes(dataset)

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



    return (
        <div className='section_container section-hero'>
            <div className='slider_container'>
                <Carousel />
            </div>
            <div className='produtos'>
                <div className='products_infos_container'>
                    <h1 className='title_section'>Categorias</h1>
                    <Menu />
                    {/* <OrderContainer isOpen={OrderisOpen} handleOrderContainer={handleOrderContainer} /> */}
                    {/* <div className='title_category'>
                        <h2>{titleDishes}</h2>
                    </div> */}
                    {loading ?
                        <>
                            <p>Loading...</p>
                        </>
                        :
                        <div className='produtos_container'>
                            {
                                data?.map(({ name, price, description, id, image }, i) => (
                                    // <CardsProduto key={i} categorie={item} dados={res[i]} />
                                    <CardsProduto
                                        key={i}
                                        id={id}
                                        name={name}
                                        description={description}
                                        price={price}
                                        image={image} />
                                ))
                            }
                        </div>
                    }
                </div>
                {/* <div className='user_location_container'>
                    <h2>oi</h2>
                </div> */}
            </div>

        </div>
    )
}

export default Home