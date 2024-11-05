import React from 'react'

// import { PiChefHatFill } from "react-icons/all-files/fa/PiChefHatFill";


import './Menu.css'

function Menu() {
    return (
        <div className='Menu_category_container'>
            <ul className='menu_category_item_container'>
                <li className="menu_category_item">
                    <span class="material-symbols-outlined">stockpot</span>Todos</li>
                <li className="menu_category_item">Do dia</li>
                <li className="menu_category_item">Combos</li>
                <li className="menu_category_item">Especialidade</li>
                <li className="menu_category_item">Massas</li>
                <li className="menu_category_item">Bebidas</li>
                <li className="menu_category_item">Porções</li>
            </ul>
        </div>
    )
}

export default Menu