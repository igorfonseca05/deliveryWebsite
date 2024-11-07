import { useEffect, useState } from 'react'

import './CardsProduto.css'

function CardsProduto({ id, name, description, price }) {

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
                    <img src="card.jpg" alt="" />
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
                <p className='produto_price'>{price}</p>
                <button>add carrinho</button>
            </div>

        </>
    )
}

export default CardsProduto