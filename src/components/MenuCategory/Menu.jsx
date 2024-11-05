import React from 'react'

import './Menu.css'

function Menu() {
    return (
        <div className='Menu_category_container'>
            <ul className='menu_category_item_container'>
                <li className="menu_category_item">Todos</li>
                <li className="menu_category_item">Cardapio do dia</li>
                <li className="menu_category_item">Combos</li>
                <li className="menu_category_item">Especialidade da casa</li>
                <li className="menu_category_item">Massas</li>
                <li className="menu_category_item">BEBIDAS</li>
                <li className="menu_category_item">Porções</li>
            </ul>
        </div>
    )
}

export default Menu