// src/components/ResponsiveMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './ResponsiveMenu.css'; // Importando o CSS

const ResponsiveMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Função para alternar o estado da sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="logo.svg" alt="" />
                </Link>
                {/* Botão de menu hamburger */}
                <div className="menu-icon" onClick={toggleSidebar}>
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </div>
                {/* Menu links para telas grandes */}
                <ul className={isSidebarOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={toggleSidebar}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={toggleSidebar}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-links" onClick={toggleSidebar}>
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={toggleSidebar}>
                            Contact
                        </Link>
                    </li>
                    {/* Menu de Login e Sign Up */}
                    <li className="nav-item">
                        <Link to="/login" className="nav-links" onClick={toggleSidebar}>
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className=" btn nav-links nav-links-signup" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default ResponsiveMenu;
