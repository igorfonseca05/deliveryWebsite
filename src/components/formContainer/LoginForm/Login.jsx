import { useEffect, useRef, useState } from 'react'

import './Login.css'

import { useAuth } from '../../../hooks/useAuth'


import { useModalContext } from '../../../context/ModalContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import { useRef } from 'react'

function Login() {

    const [showPassword, setShowPassword] = useState(false)
    const { userLogin, loading, error, success, setError, setSuccess } = useAuth()
    const { handleOpenModal } = useModalContext()
    const inputRef = useRef(null)
    const form = useRef(null)

    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    })

    function handleUserCredentials(e) {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value
        })
    }

    function handleFormLogin(e) {
        e.preventDefault()

        userLogin(userCredentials)
    }

    const focusOnEmail = () => {
        inputRef.current?.focus();
    }

    useEffect(() => {
        focusOnEmail()
    }, [])

    useEffect(() => {
        error && toast.error(error, { position: 'top-left' })
        // error && toast.success(success, { position: 'top-left' })
        success && handleOpenModal()
        success && form.current.reset()
        setSuccess('')
        setError('')
        // console.log('oi')

    }, [error, success])

    return (
        <div className={`form_container_login_and_signIn login_form`}>
            <ToastContainer />
            <div className='padding_container'>
                <div className="form_container">
                    <div className='logo_login'>
                        <img src="logoIcon.svg" alt="" />
                    </div>
                    <div className='form_heading'>
                        <h1>Bem vindo de volta!</h1>
                        <p>Acesse sua conta para acompanhar e gerenciar seus pedidos de forma fácil e rápida!</p>
                    </div>
                    <form ref={form} onSubmit={handleFormLogin}>
                        <div className="input-field">
                            <input
                                onChange={handleUserCredentials}
                                required=""
                                // autoComplete="off"
                                typeof="email"
                                name="email"
                                id="email"
                                placeholder='Email'
                                ref={inputRef}
                            />
                            <label htmlFor="email" id='email'>Email</label>
                        </div>
                        <div className="input-field">
                            <input
                                onChange={handleUserCredentials}
                                required=""
                                autoComplete="off"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                placeholder='Senha'
                            />
                            <label htmlFor="username" id='password'>Password</label>
                            {showPassword ? (
                                <span onClick={() => setShowPassword(!showPassword)}
                                    className='material-symbols-outlined password-visibility' >visibility_off</span>
                            ) : (
                                <span onClick={() => setShowPassword(!showPassword)}
                                    className='material-symbols-outlined password-visibility' >visibility</span>
                            )}
                        </div>
                        <div className="btn-container">
                            <button className="btn" disabled={loading}>Entrar</button>
                            <div className="acc-text">
                                Novo aqui ?
                                <span
                                    style={{ color: "#0000ff", cursor: "pointer", marginLeft: '0.5rem' }}
                                    onClick={() => handleOpenModal('cadastro')}
                                >Criar Conta</span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='image-login-container'>
                    <div>
                        <img src="logo.svg" alt="" />
                    </div>
                </div>
            </div>
            {/* <div><h2>po</h2></div> */}
        </div>
    )
}

export default Login