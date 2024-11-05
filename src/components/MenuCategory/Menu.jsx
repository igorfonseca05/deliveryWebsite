import React from 'react'

// import { PiChefHatFill } from "react-icons/all-files/fa/PiChefHatFill";


import './Menu.css'

function Menu() {

    function handleColor(e) {
        const lis = [...document.querySelector('.menu_category_item_container').children]

        lis.forEach(li => {
            li.classList.remove('ativo')
        })

        e.target.tagName === 'LI' || e.target.tagName === 'SPAN' ? e.target.classList.add('ativo') : ''
    }


    return (
        <div className='Menu_category_container'>
            <ul className='menu_category_item_container'>
                <li className="category_item ativo">
                    <button>
                        <span className="material-symbols-outlined">stockpot</span>
                        Todos
                    </button>
                </li>
                <li className="category_item">
                    <button>
                        <span className="material-symbols-outlined">calendar_month</span>Do dia
                    </button>
                </li>
                <li className="category_item">
                    <button>
                        <span className="material-symbols-outlined">fastfood</span>
                        Combos
                    </button>
                </li>
                <li className="category_item">
                    <button>Especialidade</button>
                </li>
                <li className="category_item">
                    <button>
                        <span className="material-symbols-outlined">dinner_dining</span>
                        Massas
                    </button>
                </li>
                <li className="category_item">
                    <button>
                        <i className="bi bi-cup-straw"></i>
                        Bebidas
                    </button>
                </li>
                <li className="category_item">
                    <button>
                        <span className="material-symbols-outlined">kebab_dining</span>
                        Porções
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Menu