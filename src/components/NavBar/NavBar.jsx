import React, { useEffect, useState, useRef, useMemo } from 'react'

import { NavLink } from 'react-router-dom'

import "./NavBar.css"

import Logo from '../logo/Logo'

import { useDebounce } from '../../hooks/useDebouce'
import OrderContainer from '../OrdersContainer/OrderContainer'
import { useModalContext } from '../../context/ModalContext'
import { toast } from 'react-toastify'
import { useAuthContext } from '../../context/userAuthContext'
import { useDataBase } from '../../hooks/useRealTimeDatabase'

import { signOut } from 'firebase/auth'
import { useAuth } from '../../hooks/useAuth'

function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [OrderisOpen, setOrderIsOpen] = useState(false)
    const [narrowMenu, setNorrowMenu] = useState(null)
    const [toggleElement, setToggleElement] = useState(false)
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [amountItensCart, setAmountItensCart] = useState(0)
    const { user } = useAuthContext()
    const { auth } = useAuth()

    const { data, realTimeDocument } = useDataBase()

    const lis = useRef()
    const login_buttons = useRef()

    const { handleOpenModal, modalIsOpen } = useModalContext()

    realTimeDocument(user ? user.uid : null)


    function handleClick() {
        setIsOpen(!isOpen)
    }

    function avoidScrollBody() {
        if (isOpen || OrderisOpen || modalIsOpen) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = ''
        }
    }
    avoidScrollBody()

    function handleHovering(value = '') {
        // setScreenSize(window.innerWidth)
        if (screenSize >= 768) {
            setToggleElement(value)
        } else {
            setToggleElement(true)
        }
    }

    function handleOrderContainer() {
        setOrderIsOpen(!OrderisOpen)
    }

    function handleOrderContainer() {
        setOrderIsOpen(!OrderisOpen)
    }

    useEffect(() => {
        const allTrigger = [...lis.current.children, ...login_buttons.current.children]

        function addClickEvent() {
            // console.log('po')
            setIsOpen(false)
        }

        allTrigger?.forEach(item => {
            item.addEventListener('click', addClickEvent)
        })

        return () => {
            allTrigger?.forEach(item => {
                item.removeEventListener('click', addClickEvent)
            });
        }
    }, [])


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

    useEffect(() => {
        handleHovering()
    }, [screenSize])

    useEffect(() => {

        function handleScroll() {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])


    const memorizedOrderContainer = useMemo(() => (
        <OrderContainer isOpen={OrderisOpen} handleOrderContainer={handleOrderContainer} />
    ), [OrderisOpen])

    useEffect(() => {
        if (data) {
            setAmountItensCart(data.length)
        }
    }, [data])


    return (
        <header>
            <nav className={`top_navbar ${!isVisible ? 'top_navbar_hidden' : ''}`}>
                <span className='material-symbols-outlined menu_icon' onClick={handleClick}>menu</span>
                <img src="logo.svg" alt="" />
                <div className="logo-top-menu">
                    <div className='search_input search-top-menu'>
                        <div className='input-iconSearch-container'>
                            <input type="text" placeholder='Buscar' id='search' name='search' />
                            <button>
                                <span className="material-symbols-outlined">
                                    search
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='cart_and_infosUser_container'>
                        <div className='cart_itens_indicador'>
                            <span className='material-symbols-outlined cart_icon' onClick={handleOrderContainer}>shopping_cart</span>
                            {amountItensCart > 0 ? (
                                <span className='indicator'>{amountItensCart}</span>
                            ) : (
                                <span className='indicator' style={{ display: 'none' }}></span>
                            )}
                        </div>

                        {memorizedOrderContainer}
                        {user ?
                            <div className='user_infos_container'>
                                <figure>
                                    <img src="https://i.pinimg.com/736x/2f/15/f2/2f15f2e8c688b3120d3d26467b06330c.jpg" alt="" />
                                </figure>
                                <span style={{ textTransform: 'capitalize' }}>{user.displayName}</span>
                                <span className='mdi mdi-chevron-down'></span>
                            </div>
                            : ''
                        }
                    </div>
                </div>
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
                        <input name='search' className={`${toggleElement ? '' : 'hideInput'}`} type="text" placeholder='Buscar' />
                        <button>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </button>
                    </div>
                    <div className='menu_title_container menu_piece'>
                        <span className={`title_lateral_menu ${toggleElement ? 'showTitle' : ''}`}>Menu</span>
                        <ul ref={lis} className='li_container'>
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
                            {user ? (
                                <NavLink to={'/favoritos'}>
                                    <li className='nav_item'>
                                        <span className='material-symbols-outlined list-icon'>favorite</span>
                                        <p className={`${toggleElement ? 'showTextMenu' : 'hideTextMenu'}`}>Favoritos</p>
                                    </li>
                                </NavLink>
                            ) : ('')}
                            <NavLink>
                                <li className='nav_item'>
                                    <span className='material-symbols-outlined list-icon'>group</span>
                                    <p className={` ${toggleElement ? 'showTextMenu' : 'hideTextMenu'}`}>Sobre nós</p>
                                </li>
                            </NavLink>
                            <NavLink>
                                <li className='nav_item' onClick={() => toast.success('oi')}>
                                    <span className='material-symbols-outlined list-icon'>call</span>
                                    <p className={`${toggleElement ? 'showTextMenu' : 'hideTextMenu'}`}>Contact</p>
                                </li>
                            </NavLink>
                        </ul>
                        <hr />
                    </div>
                    <div className='menu_acccount_container menu_piece'>
                        <span className={`title_lateral_menu ${toggleElement ? 'showTitle' : ''}`}>Account</span>
                        {user ? (
                            <div ref={login_buttons} className='buttons_container'>
                                <button className='button' onClick={() => signOut(auth)}>
                                    <span className={`material-symbols-outlined buttonIcon buttonSignOut ${toggleElement ? 'marginIcon' : ''}`}>logout</span>
                                    <p className={` buttonText ${toggleElement ? 'showTextMenu' : 'hideTextMenu'}`}>Sair</p>
                                    {/* {toggleElement ? "Entrar" : ''} */}
                                </button>
                            </div>
                        ) : (
                            <div ref={login_buttons} className='buttons_container'>
                                <button className='button' onClick={() => handleOpenModal('login')}>
                                    <span className={`material-symbols-outlined buttonIcon ${toggleElement ? 'marginIcon' : ''}`}>login</span>
                                    <p className={` buttonText ${toggleElement ? 'showTextMenu' : 'hideTextMenu'}`}>Entrar</p>
                                    {/* {toggleElement ? "Entrar" : ''} */}
                                </button>
                                <NavLink>
                                    <button className='button-signUp' onClick={() => handleOpenModal('cadastro')}>
                                        <span className={`material-symbols-outlined buttonIcon ${toggleElement ? 'marginIcon' : ''}`}>person_add</span>
                                        <p className={` buttonText ${toggleElement ? 'showTextMenu' : 'hideTextMenu'}`}>Cadastrar</p>
                                        {/* {toggleElement ? "Cadastrar" : ''} */}
                                    </button>
                                </NavLink>
                            </div>
                        )}
                        <hr />
                    </div>
                </div>

                <footer className='navBar_footer'>
                    <span>&copy;</span>
                    <p>Paraiso da gastronomia</p>
                </footer>
            </nav>
            <div className={`overlay ${isOpen || OrderisOpen ? 'showOverlay' : ''}`} id="overlay"></div>
        </header>
    )
}

export default NavBar
