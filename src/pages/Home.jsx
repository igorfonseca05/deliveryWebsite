import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import './Home.css'

import Carousel from '../components/carrosel/Carousel'
import Menu from '../components/MenuCategory/Menu'

function Home() {

    const [dishName, setDishName] = useState(false)
    const [ingredientIsOpen, setIngredientIsOpen] = useState(false)

    function handleName() {
        setDishName(!dishName)
    }

    function handleShowIngredient() {
        setIngredientIsOpen(!ingredientIsOpen)
    }

    return (
        <div className='section_container section-hero'>
            <div className='slider_container'>
                <Carousel />
            </div>
            <div className='produtos'>
                <h1 className='title_section'>Escolha entre as categorias</h1>
                <Menu />
                <div className='produtos_container'>
                    <div className='produto_card'>
                        <figure>
                            <img src="card.jpg" alt="" />
                        </figure>
                        <p onClick={handleName} className={`dish_name ${dishName ? 'showFullName' : ''}`}>Prato de macarrão asdfasdfa</p>
                        <div className='ingredient_container'>
                            <span className={`ingredient ${ingredientIsOpen ? 'showIngredient' : ''}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque natus eveniet in quod cumque, reiciendis, earum aut excepturi voluptate
                            </span>
                            <span className="mdi mdi-chevron-down arrow_icon"
                                // style={{ transform: `${ingredientIsOpen ? 'rotate(40deg)' : ''} ` }}
                                onClick={handleShowIngredient}></span>
                        </div>
                        <p className='produto_price'>R$47.50</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home