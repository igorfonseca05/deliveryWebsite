import React from 'react'
import "./OrderContainer.css"

function OrderContainer() {
    return (
        <div className='myShoppingCard_container'>
            <header className='order_title_container'>
                <span className='material-symbols-outlined close_orders_container'>close</span>
                <h3>Meus pedidos</h3>
            </header>
            <main>
                <div className='orders_container'>
                    <div className='card_order'>
                        <figure className='food_img_container'>
                            <img src="" alt="" />
                        </figure>
                        <div>
                            <p className='food_name'>name</p>
                            <div className='number_control'>
                                <div className='number_left'><span className='material-symbols-outlined'>remove</span></div>
                                <div className='number'></div>
                                <div className='number_right'><span className='material-symbols-outlined'>add</span></div>
                            </div>
                        </div>
                        <div className='food_price_container'>
                            <div className='food_price'></div>
                            <span className='material-symbols-outlined'>delete</span>
                        </div>
                    </div>
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