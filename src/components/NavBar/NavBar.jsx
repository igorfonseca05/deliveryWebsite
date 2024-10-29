import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'

import "./NavBar.css"
import { SiVonage } from 'react-icons/si'

import { useDebounce } from '../../hooks/useDebouce'

function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [narrowMenu, setNorrowMenu] = useState(false)

    function handleClick() {
        setIsOpen(!isOpen)
    }

    function avoidScrollBody() {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }

    avoidScrollBody()


    useEffect(() => {

        function getScreenSize(e) {
            let screenSize = e.target.innerWidth;

            console.log(e.target)

            if (screenSize >= 768 || screenSize === 1360) {
                setNorrowMenu(!narrowMenu)
            } else {
                setNorrowMenu(false)
            }
        }

        function verifyScreenSizeOnce() {
            window.addEventListener('resize', useDebounce((e) => getScreenSize(e), 100))
        }

        verifyScreenSizeOnce()

        return () => { window.removeEventListener('resize', useDebounce((e) => getScreenSize(e), 10000)) }

    }, [])


    return (
        <header>
            <nav className='top_navbar'>
                <span className='material-symbols-outlined menu_icon' onClick={handleClick}>menu</span>
                <div className="logo-top-menu">
                    <img src="logo.svg" alt="logo" />
                </div>
                {/* <div className='search_input'>
                    <input type="text" />
                    <button>
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </button>
                </div> */}
            </nav>
            <nav className={`lateral_navBar
             ${isOpen ? 'open' : ''} 
            ${narrowMenu ? 'narrow_lateral_navBar' : ''}`}>

                <div className="sideMenu_content">
                    <div className='logo_and_icon_container'>
                        <div className='logo_container'><img className='logo_company' src="logoIcon.svg" alt="" /></div>
                        <span className='material-symbols-outlined menu_icon' onClick={handleClick}>menu</span>
                        {/* <div className="lateral-logo">
                        <img src="logoIcon.svg" alt="logo" />
                        </div> */}
                    </div>
                    <div className='search_input'>
                        <input type="text" placeholder='Buscar' />
                        <button>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </button>
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
                </div>

                <footer className='navBar_footer'>
                    <span>&copy;</span>
                    <h5>Paraiso da gastronomia</h5>
                </footer>
            </nav>
            <div class={`overlay ${isOpen ? 'showOverlay' : ''}`} id="overlay"></div>
        </header>
    )
}

export default NavBar
