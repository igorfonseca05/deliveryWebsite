import { useState } from 'react'

import './CardsProduto.css'

function CardsProduto({ categorie, name, description, price }) {

    const [dishName, setDishName] = useState(false)
    const [ingredientIsOpen, setIngredientIsOpen] = useState(false)

    function handleName() {
        setDishName(!dishName)
    }

    function handleShowIngredient() {
        setIngredientIsOpen(!ingredientIsOpen)
    }

    return (

        <>
            {/* <h3>{categorie}</h3> */}
            <div className='produto_card'>
                <figure>
                    <img src="card.jpg" alt="" />
                </figure>
                <p onClick={handleName} className={`dish_name ${dishName ? 'showFullName' : ''}`}>{name}</p>
                <div className='ingredient_container'>
                    <span className={`ingredient ${ingredientIsOpen ? 'showIngredient' : ''}`}>{description}
                    </span>
                    <span className="mdi mdi-chevron-down arrow_icon"
                        // style={{ transform: `${ingredientIsOpen ? 'rotate(40deg)' : ''} ` }}
                        onClick={handleShowIngredient}></span>
                </div>
                <p className='produto_price'>{price}</p>
            </div>
        </>
    )
}

export default CardsProduto