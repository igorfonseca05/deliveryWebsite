import React from 'react'
import "./OrderContainer.css"
import CardOrder from './CardOrders/CardOrder'

function OrderContainer({ isOpen, handleOrderContainer }) {
    return (
        <div className={`myShoppingCard_container ${isOpen ? 'openOrderContaiener' : ''}`}>
            <header className='order_title_container'>
                <span className='material-symbols-outlined close_orders_container'
                    onClick={handleOrderContainer}> close</span>
                <h3>Meus pedidos</h3>
            </header>
            <main>
                <div className='orders_container'>
                    <CardOrder />
                    <CardOrder />
                    <CardOrder />
                </div>
            </main>
            <footer className='total_orders'>
                <div className='orders_fees'></div>
                <div className='order_total'></div>
                <div className='order_button'></div>
            </footer>
        </div>
    )
}

export default OrderContainer