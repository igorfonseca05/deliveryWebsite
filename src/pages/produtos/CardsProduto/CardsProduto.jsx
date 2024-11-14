import { useEffect, useState } from 'react'

import './CardsProduto.css'

import { useCartProductContext } from '../../../context/CartProductContaiener'

import { useFetch } from '../../../hooks/UseFetch'
import { useDataBase } from '../../../hooks/useRealTimeDatabase'
import { useAuthContext } from '../../../context/userAuthContext'
import { useAdmin } from '../../../hooks/useAdmin'

function CardsProduto({ id, name, description, price, image, setProductId }) {


    const [dishName, setDishName] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [ingredientIsOpen, setIngredientIsOpen] = useState('')

    const [editPrice, setEditPrice] = useState(false)


    const { setCartProductId } = useCartProductContext()
    const { user } = useAuthContext()
    const { isAdmin } = useAdmin(user)

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

    function handlePrice() {

    }

    return (
        <>
            <div className='produto_card' onClick={() => setProductId(id)}>
                <figure>
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
                    {!isAdmin ? <button onClick={() => setCartProductId(id)}><span className="mdi mdi-cart-plus"></span></button> : null}
                </div>
            </div>

        </>
    )
}

export default CardsProduto