import React, { useState } from 'react'

// import { PiChefHatFill } from "react-icons/all-files/fa/PiChefHatFill";


import './Menu.css'

function Menu() {

    const [dataset, setDataSet] = useState('')

    function handleColor(e) {
        setDataSet(e)
        console.log(e)
    }

    return (
        <div className='Menu_category_container'>
            <ul className='menu_category_item_container'>
                <li className="category_item">
                    <button
                        data-js='Todos'
                        onClick={(e) => handleColor(e.target.dataset.js)}
                        className={`${dataset === 'Todos' ? 'ativo' : ''}`}>
                        <span data-js='Todos' className="material-symbols-outlined">stockpot</span>
                        Todos
                    </button>
                </li>
                <li className="category_item">
                    <button
                        data-js='Do dia'
                        onClick={(e) => handleColor(e.target.dataset.js)}
                        className={`${dataset === 'Do dia' ? 'ativo' : ''}`}>
                        <span data-js='Do dia' className="material-symbols-outlined">calendar_month</span>Do dia
                    </button>
                </li>
                <li className="category_item">
                    <button
                        data-js='Combos'
                        onClick={(e) => handleColor(e.target.dataset.js)}
                        className={`${dataset === 'Combos' ? 'ativo' : ''}`}>
                        <span data-js='Combos' class="mdi mdi-food"></span>
                        Combos
                    </button>
                </li>
                <li className="category_item">
                    <button
                        data-js='Especialidade'
                        onClick={(e) => handleColor(e.target.innerText)}
                        className={`${dataset === 'Especialidade' ? 'ativo' : ''}`}>
                        <span data-js='Especialidade' class="mdi mdi-chef-hat"></span>
                        Especialidade</button>
                </li>
                <li className="category_item">
                    <button
                        data-js='Massas'
                        onClick={(e) => handleColor(e.target.dataset.js)}
                        className={`${dataset === 'Massas' ? 'ativo' : ''}`}>
                        <span data-js='Massas' className="material-symbols-outlined">dinner_dining</span>
                        Massas
                    </button>
                </li>
                <li className="category_item">
                    <button
                        data-js='Bebidas'
                        onClick={(e) => handleColor(e.target.dataset.js)}
                        className={`${dataset === 'Bebidas' ? 'ativo' : ''}`}>
                        <span data-js='Bebidas' class="mdi mdi-cup"></span>
                        Bebidas
                    </button>
                </li>
                <li className="category_item">
                    <button
                        data-js='Porções'
                        onClick={(e) => handleColor(e.target.dataset.js)}
                        className={`${dataset === 'Porções' ? 'ativo' : ''}`} >
                        <span data-js='Porções' className="material-symbols-outlined">kebab_dining</span>
                        Porções
                    </button>
                </li>
            </ul>
        </div >
    )
}

export default Menu