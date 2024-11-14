import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// CSS
import "./OrderContainer.css"

// Components
import CardOrder from './CardOrders/CardOrder'

// Hooks and Contexts
import { useCartProductContext } from '../../context/CartProductContaiener'
import { useFetch } from '../../hooks/UseFetch'
import { useDataBase } from '../../hooks/useRealTimeDatabase'
import { useAuthContext } from '../../context/userAuthContext'


// import { useAuthContext } from "../context/userAuthContext";


function OrderContainer({ isOpen, handleOrderContainer }) {

    const { cartProductId } = useCartProductContext()
    const [productUrl, setProductUrl] = useState('')
    const [emptyOrders, setEmptyOrders] = useState([])
    const [cartItens, setCartItens] = useState([])
    const [amountOrder, setAmountOrder] = useState(1)
    const orders = useRef(null)
    const dataRef = useRef()

    const { user } = useAuthContext()
    const { data, realTimeDocument } = useDataBase()

    realTimeDocument(user ? user.uid : null)


    function handleOrder() {
        toast.error('Seu carrinho está vazio', {
            position: 'top-center', style: {
                fontSize: '1.4rem',
                backgroundColor: '#f77b72',
                color: 'white'
            }
        })

        if (emptyOrders === 0) {
        }
    }

    useEffect(() => {
        if (data && data.length !== emptyOrders) {
            setEmptyOrders(data?.length)
            setCartItens(data)

            console.log('iu')

            // console.log('data')
        }
    }, [data])

    // console.log(emptyOrders)

    // useEffect(() => setEmptyOrders(orders.current?.children.length), [])


    return (
        <div className={`myShoppingCard_container ${isOpen ? 'openOrderContaiener' : ''}`}>
            <ToastContainer />
            <header className='order_title_container'>
                <span className='material-symbols-outlined close_orders_container'
                    onClick={handleOrderContainer}> close</span>
                <h3>Meus pedidos</h3>
            </header>
            <div className='infors-order-container'>
                <main ref={orders} className='orders_container scroll-bar'>
                    {emptyOrders > 0 ? (
                        cartItens?.map(({ id, name, price, image }, i) => (
                            <CardOrder
                                key={id}
                                id={id}
                                name={name}
                                price={price}
                                img={image}
                                dbItemId={i}
                                setAmountOrder={setAmountOrder}
                                amountOrder={amountOrder} />
                        ))
                    ) : (<p>Seu carrinho está vazio</p>)
                    }
                </main>
                <footer className='total_orders'>
                    <div className='orders_fees'>
                        <hr />
                        <div className='fees_container'>
                            <p>Sub total</p>
                            <span>R$259.36</span>
                        </div>
                        <div className='fees_container'>
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
                        <button className='button-style' onClick={handleOrder}>
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