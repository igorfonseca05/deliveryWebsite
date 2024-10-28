import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import "./NavBar.css"

function NavBar() {

    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <nav className='top_navbar'>
                <span className='material-symbols-outlined' onClick={handleClick}>menu</span>
                <div className="logo-top-menu">
                    <img src="logo.svg" alt="logo" />
                </div>
                <div className='search_input'>
                    <input type="text" />
                    <button>
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </button>
                </div>
            </nav>
            <nav className={`lateral_navBar ${isOpen ? 'open' : ''}`}>
                <div className=''>
                    <span className='material-symbols-outlined' onClick={handleClick}>menu</span>
                    <div className="lateral-logo">
                        <img src="logoIcon.svg" alt="logo" />
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
