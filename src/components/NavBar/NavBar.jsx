import React, { useEffect, useState, useRef } from 'react'

import { NavLink } from 'react-router-dom'

import "./NavBar.css"


import Logo from '../logo/Logo'

import { useDebounce } from '../../hooks/useDebouce'

function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [narrowMenu, setNorrowMenu] = useState(null)

    const [toggleElement, setToggleElement] = useState(false)

    const [screenSize, setScreenSize] = useState(window.innerWidth)

    // const [isGratherThan, setIsGratherThan] = useState(window.innerWidth >= 768 || screenSize === window.screen.width)

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

        const isGratherThan = screenSize >= 768 || screenSize === window.screen.width

        function getScreenSize() {

            if (isGratherThan) {
                setNorrowMenu(true)
                setIsOpen(false)
            } else {
                setNorrowMenu(false)
                // isOpen(tru)
            }
        }

        getScreenSize()
    }, [screenSize])


    useEffect(() => {

        const debounceResize = useDebounce(() => setScreenSize(window.innerWidth), 100)

        window.addEventListener('resize', debounceResize)

        return () => {
            window.removeEventListener('resize', debounceResize)
        }

    }, [])


    function handleHovering(value = '') {
        // setScreenSize(window.innerWidth)
        if (screenSize >= 768) {
            setToggleElement(value)
        } else {
            setToggleElement(true)
        }
    }

    useEffect(() => {
        handleHovering()
    }, [screenSize])

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
            ${narrowMenu ? 'narrow_lateral_navBar' : ''}`}
                onMouseEnter={() => handleHovering(true)}
                onMouseLeave={() => handleHovering(false)}
            >

                <div className="sideMenu_content">
                    <div className='logo_and_icon_container'>
                        <Logo changeLogo={toggleElement} />
                        <span className='material-symbols-outlined menu_icon' onClick={handleClick}>menu</span>
                        {/* <div className="lateral-logo">
                        <img src="logoIcon.svg" alt="logo" />
                        </div> */}
                    </div>
                    <div className='search_input'>
                        <input className={`${toggleElement ? '' : 'hideInput'}`} type="text" placeholder='Buscar' />
                        <button>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </button>
                    </div>
                    <div className='menu_title_container menu_piece'>
                        <span className='title_lateral_menu'>Menu</span>
                        <ul className='li_container'>
                            <NavLink to={'/'}>
                                <li className='nav_item'>
                                    <span className="material-symbols-outlined list-icon">home</span>
                                    <p className={`${toggleElement ? 'showTextMenu' : 'hideTextMenu'}`}>Home</p>
                                </li>
                            </NavLink>
                            <NavLink to={'/produtos'}>
                                <li className='nav_item'>
                                    <span className='material-symbols-outlined list-icon'>lunch_dining</span>
                                    <p className={`${toggleElement ? 'showTextMenu' : 'hideTextMenu'}`}>Cardápio</p>
                                </li>
                            </NavLink>
                            <NavLink>
                                <li className='nav_item'>
                                    <span className='material-symbols-outlined list-icon'>group</span>
                                    <p className={` ${toggleElement ? 'showTextMenu' : 'hideTextMenu'}`}>Sobre nós</p>
                                </li>
                            </NavLink>
                            <NavLink>
                                <li className='nav_item'>
                                    <span className='material-symbols-outlined list-icon'>call</span>
                                    <p className={`${toggleElement ? 'showTextMenu' : 'hideTextMenu'}`}>Contact</p>
                                </li>
                            </NavLink>
                        </ul>
                        <hr />
                    </div>
                    <div className='menu_acccount_container menu_piece'>
                        <span className='title_lateral_menu'>Account</span>
                        <div className='buttons_container'>
                            <button className='button'>
                                <span className={`material-symbols-outlined buttonIcon ${toggleElement ? 'marginIcon' : ''}`}>login</span>
                                <p className={` buttonText ${toggleElement ? 'showTextMenu' : 'hideTextMenu'}`}>Entrar</p>
                                {/* {toggleElement ? "Entrar" : ''} */}
                            </button>
                            <button className='button-signUp'>
                                <span className={`material-symbols-outlined buttonIcon ${toggleElement ? 'marginIcon' : ''}`}>person_add</span>
                                <p className={` buttonText ${toggleElement ? 'showTextMenu' : 'hideTextMenu'}`}>Cadastrar</p>
                                {/* {toggleElement ? "Cadastrar" : ''} */}
                            </button>
                        </div>
                        <hr />
                    </div>
                </div>

                <footer className='navBar_footer'>
                    <span>&copy;</span>
                    <p>Paraiso da gastronomia</p>
                </footer>
            </nav>
            <div className={`overlay ${isOpen ? 'showOverlay' : ''}`} id="overlay"></div>
        </header>
    )
}

export default NavBar
