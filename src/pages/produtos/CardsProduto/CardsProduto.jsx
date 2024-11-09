import { useEffect, useState } from 'react'

import './CardsProduto.css'

import { useCartProductContext } from '../../../context/CartProductContaiener'

function CardsProduto({ id, name, description, price, image }) {

    const { setCartProductId } = useCartProductContext()

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

    // console.log(dados)

    return (

        <>
            <div className='produto_card'>
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
                    <button onClick={() => setCartProductId(id)}><span className="mdi mdi-cart-plus"></span></button>
                </div>
            </div>

        </>
    )
}

export default CardsProduto