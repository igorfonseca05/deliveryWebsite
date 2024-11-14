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

    // const { amountOrder } = useCartProductContext()
    const [productUrl, setProductUrl] = useState('')
    const [emptyOrders, setEmptyOrders] = useState([])
    const [cartItens, setCartItens] = useState([])
    const [totalAmountOrder, setTotalAmountOrder] = useState(0)
    const [lastTotalAmount, setLastTotalAmount] = useState(0)
    let [subTotal, setSubTotal] = useState(0)
    const orders = useRef(null)
    const dataRef = useRef()

    const [total, setTotal] = useState(0)

    const { user } = useAuthContext()
    const { data: dbCartItens, realTimeDocument, updateQuantity } = useDataBase()

    realTimeDocument(user ? user.uid : null)


    function handleOrder() {
        if (emptyOrders === 0) {
            toast.error('Seu carrinho está vazio', {
                position: 'top-center', style: {
                    fontSize: '1.4rem',
                    backgroundColor: '#f77b72',
                    color: 'white'
                }
            })

            return
        }

    }

    useEffect(() => {
        setLastTotalAmount(totalAmountOrder)
        // console.log(totalAmountOrder)
        if (totalAmountOrder === lastTotalAmount || totalAmountOrder === 1) return


        dbCartItens?.map((item) => {
            if (item.id === subTotal) {

                setTotal(prev => {

                    let addItemPrice = prev + (Number(item.price));
                    let removeItemPrice = prev - (Number(item.price));

                    const count = {
                        addPrice: addItemPrice,
                        removePrice: removeItemPrice,
                    }[totalAmountOrder <= lastTotalAmount ? 'removePrice' : 'addPrice']

                    // console.log(count)
                    // console.log(count, item.price, (totalAmountOrder - 1))
                    return count
                })
            }
        })

    }, [totalAmountOrder, subTotal])


    useEffect(() => {
        if (dbCartItens && dbCartItens.length !== emptyOrders) {
            setEmptyOrders(dbCartItens?.length)
            setCartItens(dbCartItens)

            const num = dbCartItens?.reduce((total, item) => {
                return total = Number(total) + Number(item.price)
            }, 0)

            setTotal(num)
        }
    }, [dbCartItens])

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
                                setTotalAmountOrder={setTotalAmountOrder}
                                setSubTotal={setSubTotal}
                            />
                        ))
                    ) : (<p>Seu carrinho está vazio</p>)
                    }
                </main>
                <footer className='total_orders'>
                    <div className='orders_fees'>
                        <hr />
                        <div className='fees_container'>
                            <p>Sub total</p>
                            <span>R${total}.00</span>
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