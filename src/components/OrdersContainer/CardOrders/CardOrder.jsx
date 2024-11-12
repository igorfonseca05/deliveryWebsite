import React, { useEffect, useState } from 'react'

import './CardOrder.css'

import { useFetch } from '../../../hooks/UseFetch'
import { useDataBase } from '../../../hooks/useRealTimeDatabase'
import { useAuthContext } from '../../../context/userAuthContext'

function CardOrder({ id, name, price, img }) {

    const [amountOrder, setAmountOrder] = useState(1)

    const [itemId, setItemId] = useState(null)
    const [urlItemToRemove, setUrlItemToRemove] = useState('')

    const { user } = useAuthContext()
    const { removeCartItem } = useDataBase()
    const { data } = useFetch(urlItemToRemove)


    useEffect(() => {
        if (!itemId) {
            return
        }

        setUrlItemToRemove('http://localhost:3000/cardapio/' + itemId)

    }, [itemId])


    useEffect(() => {
        if (!data) return

        console.log(data)
        removeCartItem(data, user.uid)
    }, [data])


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
                <img src={img} alt="img" />
            </figure>
            <div className='second-part-card'>
                <p className='food_name'>{name}</p>
                <div className='number_control'>
                    <div className='number_button number_left' onClick={handleDeleteItem}><span className='material-symbols-outlined'>remove</span></div>
                    <div className='number'>{amountOrder}</div>
                    <div className='number_button number_right' onClick={handleAddItem}><span className='material-symbols-outlined'>add</span></div>
                </div>
            </div>
            <div className='food_price_container'>
                <div className='food_price'>R${price}</div>
                <span style={{ cursor: 'pointer', userSelect: 'none' }} className='material-symbols-outlined'
                    onClick={() => setItemId(id)}>delete</span>
            </div>
        </div>
    )
}

export default CardOrder