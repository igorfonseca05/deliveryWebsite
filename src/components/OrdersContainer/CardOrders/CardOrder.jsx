import React, { useState } from 'react'

import './CardOrder.css'

function CardOrder() {

    const [amountOrder, setAmountOrder] = useState(1)

    function handleAddItem() {
        setAmountOrder(amountOrder + 1)
    }
    function handleDeleteItem() {
        if (amountOrder === 1) return
        setAmountOrder(amountOrder - 1)
    }


    return (
        <div className='card_order'>
            <figure className='food_img_container'>
                <img src="https://www.saborusa.com/wp-content/uploads/2019/10/Calma-tus-antojos-con-deliciosas-y-rapidas-recetas-Foto-destacada.png" alt="img" />
            </figure>
            <div className='second-part-card'>
                <p className='food_name'>Calabresa recheada</p>
                <div className='number_control'>
                    <div className='number_button number_left' onClick={handleDeleteItem}><span className='material-symbols-outlined'>remove</span></div>
                    <div className='number'>{amountOrder}</div>
                    <div className='number_button number_right' onClick={handleAddItem}><span className='material-symbols-outlined'>add</span></div>
                </div>
            </div>
            <div className='food_price_container'>
                <div className='food_price'>R$105,26</div>
                <span className='material-symbols-outlined'>delete</span>
            </div>
        </div>
    )
}

export default CardOrder