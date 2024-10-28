import React from 'react'

import { NavLink } from 'react-router-dom'

import "./NavBar.css"

function NavBar() {
    return (
        <header>
            <nav>
                <div>
                    <div className="logo">
                        <img src="#" alt="logo" />
                    </div>
                    <div className='search_input'>
                        <input type="text" />
                        <button>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </button>
                    </div>
                </div>
                <ul className='li_container'>
                    <NavLink><li className='nav_item'> <span className="material-symbols-outlined menu-icon">home</span> <p>Home</p></li></NavLink>
                    <NavLink><li className='nav_item'> <span className='material-symbols-outlined menu-icon'>lunch_dining</span> <p>Cardápio</p></li></NavLink>
                    <NavLink><li className='nav_item'> <span className='material-symbols-outlined menu-icon'>group</span> <p>Sobre nós</p></li></NavLink>
                    <NavLink><li className='nav_item'> <span className='material-symbols-outlined menu-icon'>call</span> <p>Contact</p></li></NavLink>
                </ul>
                <footer className='navBar_footer'>
                    <span>&copy;</span>
                    <h5>Paraiso da gastronomia</h5>
                </footer>
            </nav>
        </header>
    )
}

export default NavBar
