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
                <span className='material-symbols-outlined menu_icon' onClick={handleClick}>menu</span>
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
                <div className='logo_and_icon_container'>
                    <span className='material-symbols-outlined menu_icon' onClick={handleClick}>menu</span>
                    {/* <div className="lateral-logo">
                        <img src="logoIcon.svg" alt="logo" />
                        </div> */}
                </div>
                <div className='menu_title_container menu_piece'>
                    <span className='title_lateral_menu'>Menu</span>
                    <ul className='li_container'>
                        <NavLink><li className='nav_item'> <span className="material-symbols-outlined list-icon">home</span> <p>Home</p></li></NavLink>
                        <NavLink><li className='nav_item'> <span className='material-symbols-outlined list-icon'>lunch_dining</span> <p>Cardápio</p></li></NavLink>
                        <NavLink><li className='nav_item'> <span className='material-symbols-outlined list-icon'>group</span> <p>Sobre nós</p></li></NavLink>
                        <NavLink><li className='nav_item'> <span className='material-symbols-outlined list-icon'>call</span> <p>Contact</p></li></NavLink>
                    </ul>
                    <hr />
                </div>
                <div className='menu_acccount_container menu_piece'>
                    <span className='title_lateral_menu'>Account</span>
                    <div className='buttons_container'>
                        <button className='button'>Sign in</button>
                        <button>Sign up</button>
                    </div>
                    <hr />
                </div>

                <footer className='navBar_footer'>
                    <span>&copy;</span>
                    <h5>Paraiso da gastronomia</h5>
                </footer>
            </nav>
        </header>
    )
}

export default NavBar
