import { useEffect, useState } from 'react'

import './CardsProduto.css'

import { useDataBase } from '../../../hooks/useRealTimeDatabase'
import { useAuthContext } from '../../../context/userAuthContext'

import { useFetch } from '../../../hooks/UseFetch'

function CardsProduto(
    { id,
        name,
        description,
        price,
        image,
        setProductId,
        isAdmin,
        setItemFavoriteId
    }) {


    const [dishName, setDishName] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [ingredientIsOpen, setIngredientIsOpen] = useState('')

    function handleName(id) {
        if (!isOpen) {
            setDishName(id)
            setIsOpen(!isOpen)
        } else {
            setIsOpen(!isOpen)
            setDishName("")
        }
    }

    function handleShowIngredient(id) {
        if (!isOpen) {
            setIngredientIsOpen(id)
            setIsOpen(!isOpen)
        } else {
            setIsOpen(!isOpen)
            setIngredientIsOpen('')
        }
    }

    function handleCart(id) {
        if (!isAdmin) {
            setProductId(id)

        }
    }

    function handleFavorite(id) {
        if (!isAdmin) {
            setItemFavoriteId(id)

        }
    }

    return (
        <>
            <div className='produto_card'>
                <figure>
                    <span className='material-symbols-outlined favorite_icon' onClick={() => handleFavorite(id)}>favorite</span>
                    {image ?
                        <img src={image} alt="" /> :
                        <img src="5.jpg" alt="comida" />}
                </figure>
                <p className={`dish_name ${dishName === id ? 'showFullName' : ''}`}
                    onClick={() => handleName(id)}>
                    {name}
                </p>
                <div className='ingredient_container'>
                    <span className={`ingredient ${ingredientIsOpen === id ? 'showIngredient' : ''}`}>
                        {description}
                    </span>
                    <span className="mdi mdi-chevron-down arrow_icon"
                        onClick={() => handleShowIngredient(id)}></span>
                </div>
                <div className='price_and_cart_container'>
                    <p className='produto_price'>R${price}</p>
                    {!isAdmin ? <button onClick={() => handleCart(id)}><span className="mdi mdi-cart-plus"></span></button> : null}
                </div>
            </div>

        </>
    )
}

export default CardsProduto