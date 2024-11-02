import React from 'react'

import './CardOrder.css'

function CardOrder() {
    return (
        <div className='card_order'>
            <figure className='food_img_container'>
                {/* <img src="massas.png" alt="img" /> */}
            </figure>
            <div className='second-part-card'>
                <p className='food_name'>Calabresa recheada</p>
                <div className='number_control'>
                    <div className='number_button number_left'><span className='material-symbols-outlined'>remove</span></div>
                    <div className='number'>1</div>
                    <div className='number_button number_right'><span className='material-symbols-outlined'>add</span></div>
                </div>
            </div>
            <div className='food_price_container'>
                <div className='food_price'>79</div>
                <span className='material-symbols-outlined'>delete</span>
            </div>
        </div>
    )
}

export default CardOrder