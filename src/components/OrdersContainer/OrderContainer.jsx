import React, { useEffect, useRef, useState } from 'react'
import "./OrderContainer.css"
import CardOrder from './CardOrders/CardOrder'

import { useCartProductContext } from '../../context/CartProductContaiener'
import { useFetch } from '../../hooks/UseFetch'

import { useDataBase } from '../../hooks/useRealTimeDatabase'
import { useAuthContext } from '../../context/userAuthContext'
// import { useAuthContext } from "../context/userAuthContext";


function OrderContainer({ isOpen, handleOrderContainer }) {

    const { cartProductId } = useCartProductContext()
    const [productUrl, setProductUrl] = useState('')
    const [emptyOrders, setEmptyOrders] = useState([])
    const orders = useRef(null)

    const { user } = useAuthContext()
    const { data, realTimeDocument } = useDataBase()

    realTimeDocument(user ? user.uid : null)

    useEffect(() => {
        setEmptyOrders(data?.length)
    }, [data])

    // console.log(emptyOrders)

    // useEffect(() => setEmptyOrders(orders.current?.children.length), [])



    return (
        <div className={`myShoppingCard_container ${isOpen ? 'openOrderContaiener' : ''}`}>
            <header className='order_title_container'>
                <span className='material-symbols-outlined close_orders_container'
                    onClick={handleOrderContainer}> close</span>
                <h3>Meus pedidos</h3>
            </header>
            <div className='infors-order-container'>
                <main ref={orders} className='orders_container scroll-bar'>
                    {emptyOrders ? (<p>Seu carrinho está vazio</p>) : (<CardOrder />)}
                </main>
                <footer className='total_orders'>
                    <div className='orders_fees'>
                        <hr />
                        <div className='fess_container'>
                            <p>Sub total</p>
                            <span>R$259.36</span>
                        </div>
                        <div className='fess_container'>
                            <p>Taxa de entrega</p>
                            <span>R$9.00</span>
                        </div>
                    </div>
                    <hr />
                    <div className='order_total'>
                        <p>Total</p>
                        <span>R$268.36</span>
                    </div>
                    <div className='order_button'>
                        <button className='button-style'>
                            <p>Fazer pedido</p>
                            <span className='material-symbols-outlined'>chevron_right</span>
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default OrderContainer