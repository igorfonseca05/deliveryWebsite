import React, { useEffect, useMemo, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../../../hooks/useAuth'
import { useModalContext } from '../../../context/ModalContext';

import './Signup.css'

function Signup() {

    const [user, setUser] = useState({ name: '', email: '', password: '' })
    const form = useRef(null)
    const inputNameRef = useRef(null)
    const {
        createUser,
        error,
        success,
        loading,
        user: usuario,
        setSuccess
    } = useAuth()
    const { handleOpenModal } = useModalContext()

    // FUNCTIONS

    function handleUser(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function handleUserData(e) {
        e.preventDefault()
        createUser(user)
    }

    function handleInputRef() {
        inputNameRef.current?.focus()
    }

    handleInputRef()

    // HOOKS

    useEffect(() => {
        error && toast.error(error, { position: 'top-left' })
        success && toast.success(success, { position: 'top-left' })
        success && form.current.reset()
        setSuccess('')
        success && setTimeout(() => handleOpenModal('login'), 5000)

        // console.log('oi')

    }, [error, success])


    return (
        <div className={`form_container_login_and_signIn`}>
            <ToastContainer />
            <div className='padding_container'>
                <div className='image-signUp-container'>
                    <div>
                        <img src="logo.svg" alt="" />
                    </div>
                </div>
                <div className="form_container">
                    <div className='logo_login'>
                        <img src="logoIcon.svg" alt="" />
                    </div>
                    <div className='form_heading'>
                        <h1>Vamos começar!</h1>
                        <p>Complete suas informações para que possamos levar seu pedido até você!</p>
                    </div>
                    <form ref={form} onSubmit={handleUserData}>
                        <div className="input-field">
                            <input
                                required=""
                                autoComplete="off"
                                type="text"
                                name="name"
                                id="name"
                                onChange={(e) => handleUser(e)}
                                placeholder='Nome'
                                ref={inputNameRef}
                            />
                            <label htmlFor="name" id='name'>Nome</label>
                        </div>
                        <div className="input-field">
                            <input
                                required=""
                                autoComplete="off"
                                type='email'
                                name="email"
                                id="email"
                                onChange={(e) => handleUser(e)}
                                placeholder='Email'
                            />
                            <label htmlFor="email" id='email'>Email</label>
                        </div>
                        <div className="input-field">
                            <input
                                required=""
                                autoComplete="off"
                                type='password'
                                name="password"
                                id="password"
                                onChange={(e) => handleUser(e)}
                                placeholder='Senha'
                            />
                            <label htmlFor="password" id='password'>Senha</label>
                            <span className='material-symbols-outlined password-visibility'>visibility</span>
                        </div>
                        <div className="btn-container">
                            <button className="btn button_loader_container" disabled={loading}>Criar conta
                                {loading ? <div className="loader"></div> : ''}
                            </button>
                            <div className="acc-text">
                                Já possui conta?
                                <span style={{ color: "#0000ff", cursor: "pointer" }}>Entrar</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div><h2>po</h2></div> */}
        </div>
    )
}

export default Signup