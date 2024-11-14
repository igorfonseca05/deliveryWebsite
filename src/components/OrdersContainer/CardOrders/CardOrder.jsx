import React, { useEffect, useState } from 'react'

import './CardOrder.css'

import { useFetch } from '../../../hooks/UseFetch'
import { useDataBase } from '../../../hooks/useRealTimeDatabase'
import { useAuthContext } from '../../../context/userAuthContext'

function CardOrder({ id, name, price, img, dbItemId, setAmountOrder, amountOrder }) {



    const [itemId, setItemId] = useState(null)
    const [urlItemToRemove, setUrlItemToRemove] = useState('')
    const [removeEffect, setRemovedEffect] = useState(false)

    const { user } = useAuthContext()
    const { removeCartItem, updateQuantity, realTimeDocument } = useDataBase()
    const { data } = useFetch(urlItemToRemove)




    useEffect(() => {
        if (itemId) {
            setUrlItemToRemove('http://localhost:3000/cardapio/' + itemId)
            return
        }

    }, [itemId])


    useEffect(() => {
        if (data) {
            // console.log(data)
            removeCartItem(data, user.uid)

            // console.log('aqui')
        }
    }, [data])


    function handleAddItem() {
        setAmountOrder(amountOrder === 1 ? null : amountOrder + 1)
    }
    function handleDeleteItem() {
        // if (amountOrder === 1) return
        setAmountOrder(amountOrder === 1 ? null : amountOrder - 1)
    }


    function handleRemoveCart(id) {
        setItemId(id)
        setRemovedEffect(!removeEffect)
    }

    return (
        <div className={`card_order`}>
            <figure className='food_img_container'>
                <img src={img} alt="img" />
            </figure>
            <div className='second-part-card'>
                <p className='food_name'>{name}</p>
                <div className='number_control'>
                    <div className='number_button number_left'
                        onClick={() => setAmountOrder(amountOrder === 1 ? 1 : amountOrder - 1)}>
                        <span className='material-symbols-outlined'>remove</span>
                    </div>
                    <div className='number'>{amountOrder}</div>
                    <div className='number_button number_right'
                        onClick={() => setAmountOrder(amountOrder >= 1 ? amountOrder + 1 : 1)}>
                        <span className='material-symbols-outlined'>add</span>
                    </div>
                </div>
            </div>
            <div className='food_price_container'>
                <div className='food_price'>R${price}</div>
                <span style={{ cursor: 'pointer', userSelect: 'none' }} className='material-symbols-outlined'
                    onClick={() => handleRemoveCart(id)}>delete</span>
            </div>
        </div>
    )
}

export default CardOrder