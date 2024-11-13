import React, { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom'

import './Home.css'

import Carousel from '../components/carrosel/Carousel'
import Menu from '../components/MenuCategory/Menu'

// Usando custom hook

import { useFetch } from '../hooks/UseFetch'
import CardsProduto from './produtos/CardsProduto/CardsProduto'

import { useMenuContext } from '../context/MenuContext'
import { useModalContext } from '../context/ModalContext'

// import { useDataBase } from '../hooks/useRealTimeDatabase'

// Autenticação

import { useAuthContext } from '../context/userAuthContext'
import { useDataBase } from '../hooks/useRealTimeDatabase'
import { useAdmin } from '../hooks/useAdmin'
import BoasVindas from '../components/admin/BoasVindasContaiener/BoasVindas'


function Home() {

    let { dataset } = useMenuContext()
    const [category, setCategory] = useState([])
    const [res, setRes] = useState([])
    const [titleDishes, setTitleDishes] = useState(dataset)
    const [url, setUrl] = useState('http://localhost:3000/cardapio')
    let categorias = new Set()
    const { data, loading, error } = useFetch(url)

    // Obtendo Url Item Base de dados
    const [itemCartURL, setItemCartURL] = useState('')
    const [productId, setProductId] = useState(null)

    //  Obtendo Dado
    const { data: cartItem } = useFetch(`${productId ? itemCartURL : null}`)
    const { user } = useAuthContext()

    //  Array de itens do carrinho
    const [cart, setCart] = useState([])

    const { realTimeDocument, data: itens, updateDoc } = useDataBase()
    const { handleOpenModal } = useModalContext()

    const { isAdmin } = useAdmin(user)

    realTimeDocument(user ? user.uid : null)


    useEffect(() => {
        const root = document.documentElement

        if (isAdmin) {
            const rootStyle = getComputedStyle(root)

            root.style.setProperty('--cor-principal', '#ffac33')
            root.style.setProperty('--cor-principal-hover', '#ff9800')

            // console.log(mainColor)
        } else {
            root.style.setProperty('--cor-principal', '#4CAF50')
            root.style.setProperty('--cor-principal-hover', '#388E3C')
        }

    }, [isAdmin])


    useEffect(() => {
        if (itens) {
            setCart([...itens])
        }

    }, [itens])

    useEffect(() => {
        if (cart.length === 0) {
            return
        }

        if (cart && cart?.length !== itens?.length && user) {
            updateDoc(cart, user.uid)
            // console.log('oi')
        }
    }, [cart])


    // Adcionando o Item do banco ao array de itens do carrinho
    useEffect(() => {
        const itemAlreadyAdded = cart.some(item => item?.id === cartItem?.id)

        if (!cartItem) {
            return
        }

        if (itemAlreadyAdded) {
            console.log('item já adicionado ao carrinho')
            return
        }

        setCart(prev => [...prev, cartItem])

    }, [cartItem])


    // obtendo URL do produto Clicado
    useEffect(() => {
        if (productId === 0) {
            return
        }

        const itemUrl = 'http://localhost:3000/cardapio/' + productId
        setItemCartURL(itemUrl)
        // console.log('4')
    }, [productId])

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

    // console.log(user)

    return (
        <div className='section_container section-hero' onLoad={() => user ? null : handleOpenModal('login')}>
            <div className='slider_container'>
                {!isAdmin ? <Carousel /> : <BoasVindas adminName={user?.displayName} />}

            </div>
            <div className='produtos'>
                <div className='products_infos_container'>
                    {!isAdmin ?
                        <h1 className='title_section'>Categorias</h1> :
                        <h1 className='title_section'>Produtos Cadastrados</h1>}
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
                                        setProductId={setProductId}
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