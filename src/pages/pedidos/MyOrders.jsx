import React from 'react'

import OrderHistory from './Orders/OrderHistory'

function MyOrders() {

    const orders = [
        {
            id: 1,
            date: '12/11/2024',
            items: ['Strogonoff de Frango - Mini'],
            total: "28.50",
            status: 'Entregue',
            imageUrl: "4.jpg",
        },
        {
            id: 2,
            date: '10/11/2024',
            items: ['Marmitex Vegetariano', 'Água'],
            total: "22.00",
            status: 'Em Preparação',
            imageUrl: '5.jpg'
        }
    ];



    return (
        <div className='section_container'>
            {orders ? <OrderHistory orders={orders}></OrderHistory> : <h1>OI</h1>}
        </div>
    )
}

export default MyOrders