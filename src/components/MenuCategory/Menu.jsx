import React, { useState } from 'react'

// import { PiChefHatFill } from "react-icons/all-files/fa/PiChefHatFill";


import './Menu.css'

import { useMenuContext } from '../../context/MenuContext'

function Menu() {

    const { dataset, setDataSet } = useMenuContext()


    return (
        <div className='Menu_category_container'>
            <ul className='menu_category_item_container'>
                <li className="category_item">
                    <button
                        data-js='Todos'
                        onClick={(e) => setDataSet(e.target.dataset.js)}
                        className={`${dataset === 'Todos' ? 'ativo' : ''}`}>
                        <span data-js='Todos' className="material-symbols-outlined">stockpot</span>
                        Todos
                    </button>
                </li>
                <li className="category_item">
                    <button
                        data-js='Do dia'
                        onClick={(e) => setDataSet(e.target.dataset.js)}
                        className={`${dataset === 'Do dia' ? 'ativo' : ''}`}>
                        <span data-js='Do dia' className="material-symbols-outlined">calendar_month</span>Do dia
                    </button>
                </li>
                <li className="category_item">
                    <button
                        data-js='Combos'
                        onClick={(e) => setDataSet(e.target.dataset.js)}
                        className={`${dataset === 'Combos' ? 'ativo' : ''}`}>
                        <span data-js='Combos' className="mdi mdi-food"></span>
                        Combos
                    </button>
                </li>
                <li className="category_item">
                    <button
                        data-js='Especialidade'
                        onClick={(e) => setDataSet(e.target.innerText)}
                        className={`${dataset === 'Especialidade' ? 'ativo' : ''}`}>
                        <span data-js='Especialidade' className="mdi mdi-chef-hat"></span>
                        Especialidade</button>
                </li>
                <li className="category_item">
                    <button
                        data-js='Massas'
                        onClick={(e) => setDataSet(e.target.dataset.js)}
                        className={`${dataset === 'Massas' ? 'ativo' : ''}`}>
                        <span data-js='Massas' className="material-symbols-outlined">dinner_dining</span>
                        Massas
                    </button>
                </li>
                <li className="category_item">
                    <button
                        data-js='Bebidas'
                        onClick={(e) => setDataSet(e.target.dataset.js)}
                        className={`${dataset === 'Bebidas' ? 'ativo' : ''}`}>
                        <span data-js='Bebidas' className="mdi mdi-cup"></span>
                        Bebidas
                    </button>
                </li>
                <li className="category_item">
                    <button
                        data-js='Porções'
                        onClick={(e) => setDataSet(e.target.dataset.js)}
                        className={`${dataset === 'Porções' ? 'ativo' : ''}`} >
                        <span data-js='Porções' className="material-symbols-outlined">kebab_dining</span>
                        Porções
                    </button>
                </li>
                <li className="category_item">
                    <button
                        data-js='Sobremesas'
                        onClick={(e) => setDataSet(e.target.dataset.js)}
                        className={`${dataset === 'Sobremesas' ? 'ativo' : ''}`} >
                        <span data-js='Sobremesas' className="material-symbols-outlined">icecream</span>
                        Sobremesas
                    </button>
                </li>
            </ul>
        </div >
    )
}

export default Menu