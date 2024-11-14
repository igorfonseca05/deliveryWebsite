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

import { useAdmin } from '../../hooks/useAdmin'

function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [OrderisOpen, setOrderIsOpen] = useState(false)
    const [narrowMenu, setNorrowMenu] = useState(null)
    const [toggleElement, setToggleElement] = useState(false)
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const [isVisible, setIsVisible] = useState(true)
    const [amountItensCart, setAmountItensCart] = useState(0)

    const lis = useRef()
    const login_buttons = useRef()

    const { user } = useAuthContext()
    const { auth } = useAuth()
    const { data, realTimeDocument } = useDataBase()
    const { handleOpenModal, modalIsOpen } = useModalContext()

    const { isAdmin } = useAdmin(user)

    // console.log(dado)

    realTimeDocument(user ? user.uid : null)

    const handleClick = () => setIsOpen(!isOpen)

    useEffect(() => {
        if (!data) return
        setAmountItensCart(data.length)
    }, [data])

    useEffect(() => {
        document.body.style.overflowY = isOpen || OrderisOpen || modalIsOpen ? 'hidden' : ''

    }, [OrderisOpen, isOpen, modalIsOpen])


    function handleHovering(value = '') {
        setToggleElement(screenSize >= 768 ? value : true)
    }

    function handleOrderContainer() {
        setOrderIsOpen(!OrderisOpen)
    }

    function handleOrderContainer() {
        setOrderIsOpen(!OrderisOpen)
    }

    useEffect(() => {
        const allTrigger = [...lis.current.children, ...login_buttons.current.children]

        const addClickEvent = () => setIsOpen(false)

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


    // useEffect(() => {

    //     function handleScroll() {
    //         const currentScrollY = window.scrollY

    //         if (currentScrollY > lastScrollY) {
    //             setIsVisible(false)
    //         } else {
    //             setIsVisible(true)
    //         }

    //         setLastScrollY(currentScrollY)
    //     }

    //     window.addEventListener('scroll', useDebounce(() => handleScroll, 1000))

    //     return () => {
    //         window.removeEventListener('scroll', useDebounce(() => handleScroll, 1000))
    //     }
    // }, [lastScrollY])


    const memorizedOrderContainer = useMemo(() => (
        <OrderContainer isOpen={OrderisOpen} handleOrderContainer={handleOrderContainer} />
    ), [OrderisOpen])


    return (
        <header>
            <nav className={`top_navbar ${!isVisible ? 'top_navbar_hidden' : ''}`}>
                <span className='material-symbols-outlined menu_icon' onClick={handleClick}>menu</span>
                <figure className='logo_top_menu_container'>
                    <img src="blackLogo.svg" alt="" />
                </figure>
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
                    {!isAdmin &&
                        <div className='cart_itens_indicador'>
                            <span className='material-symbols-outlined cart_icon' onClick={handleOrderContainer}>shopping_cart</span>
                            {amountItensCart > 0 ? (
                                <span className='indicator'>{amountItensCart}</span>
                            ) : (
                                <span className='indicator' style={{ display: 'none' }}></span>
                            )}
                        </div>
                    }
                    {memorizedOrderContainer}
                    {user ?
                        <div className='user_infos_container'>
                            <figure className='user_image_container'>
                                <img className='user_img' src="https://i.pinimg.com/736x/2f/15/f2/2f15f2e8c688b3120d3d26467b06330c.jpg" alt="" />
                            </figure>
                            <span style={{ textTransform: 'capitalize' }}>{user.displayName}</span>
                            <span className='mdi mdi-chevron-down'></span>
                        </div>
                        : ''
                    }
                </div>
                {/* <div className="logo-top-menu">
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
                        {!isAdmin &&
                            <div className='cart_itens_indicador'>
                                <span className='material-symbols-outlined cart_icon' onClick={handleOrderContainer}>shopping_cart</span>
                                {amountItensCart > 0 ? (
                                    <span className='indicator'>{amountItensCart}</span>
                                ) : (
                                    <span className='indicator' style={{ display: 'none' }}></span>
                                )}
                            </div>
                        }
                        {memorizedOrderContainer}
                        {user ?
                            <div className='user_infos_container'>
                                <figure className='user_image_container'>
                                    <img className='user_img' src="https://i.pinimg.com/736x/2f/15/f2/2f15f2e8c688b3120d3d26467b06330c.jpg" alt="" />
                                </figure>
                                <span style={{ textTransform: 'capitalize' }}>{user.displayName}</span>
                                <span className='mdi mdi-chevron-down'></span>
                            </div>
                            : ''
                        }
                    </div>
                </div> */}
            </nav>
            <nav className={`lateral_navBar
             ${isOpen ? 'open' : ''} 
            ${narrowMenu ? 'narrow_lateral_navBar' : ''}`}
                onMouseEnter={useDebounce(() => handleHovering(true), 100)}
                onMouseLeave={useDebounce(() => handleHovering(false), 100)}
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
                            {user &&
                                <>
                                    <NavLink to={'/favoritos'}>
                                        <li className='nav_item'>
                                            {amountItensCart === 0 ? (
                                                <span className='indicator indicador_menu'>1</span>
                                            ) : (
                                                <span className='indicator' style={{ display: 'none' }}></span>
                                            )}
                                            <span className='material-symbols-outlined list-icon'>favorite</span>
                                            <p className={`${toggleElement ? 'showTextMenu' : 'hideTextMenu'}`}>Favoritos</p>
                                        </li>
                                    </NavLink>
                                    <NavLink to={'/favoritos'}>
                                        <li className='nav_item'>
                                            {amountItensCart === 0 ? (
                                                <span className='indicator indicador_menu'>1</span>
                                            ) : (
                                                <span className='indicator' style={{ display: 'none' }}></span>
                                            )}
                                            <span className='material-symbols-outlined list-icon'>orders</span>
                                            <p className={`${toggleElement ? 'showTextMenu' : 'hideTextMenu'}`}>Meus pedidos</p>
                                        </li>
                                    </NavLink>
                                </>
                            }
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
                            {isAdmin &&
                                <NavLink to={'/settings'}>
                                    <li className='nav_item'>
                                        <span className='material-symbols-outlined list-icon'>Settings</span>
                                        <p className={`${toggleElement ? 'showTextMenu' : 'hideTextMenu'}`}>Configurações</p>
                                    </li>
                                </NavLink>
                            }
                        </ul>
                        <hr />
                    </div>
                    <div className='menu_acccount_container menu_piece'>
                        <span className={`title_lateral_menu ${toggleElement ? 'showTitle' : ''}`}>Account</span>
                        {user ? (
                            <div ref={login_buttons} className='buttons_container'>
                                <button className='button'
                                    onClick={() => {
                                        signOut(auth)
                                        handleOpenModal('login')
                                    }}>
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
