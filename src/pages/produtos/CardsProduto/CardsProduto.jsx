import { useEffect, useState } from 'react'

import './CardsProduto.css'

function CardsProduto({ categorie, dados }) {

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
            {/* <h3>{categorie}</h3> */}
            <div className='categories_container'>
                <div className='title_category'>
                    <h2>{categorie}</h2>
                </div>
                <div className='produtos_container'>
                    {/* {console.log(dados)} */}
                    {
                        dados && dados.map(({ id, name, description, price }) => (
                            <div key={id} className='produto_card'>
                                <figure>
                                    <img src="card.jpg" alt="" />
                                </figure>
                                <p onClick={() => handleName(id)} className={`dish_name ${dishName === id ? 'showFullName' : ''}`}>{name}</p>
                                <div className='ingredient_container'>
                                    <span className={`ingredient ${ingredientIsOpen === id ? 'showIngredient' : ''}`}>{description}
                                    </span>
                                    <span className="mdi mdi-chevron-down arrow_icon"
                                        onClick={() => handleShowIngredient(id)}></span>
                                </div>
                                <p className='produto_price'>{price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CardsProduto