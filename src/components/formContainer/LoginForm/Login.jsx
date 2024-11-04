import React from 'react'

import './Login.css'

function Login() {
    return (
        <div className='login_form_container'>
            <div className='padding_container'>
                <div className='image-login-container'>
                    <div>
                        <img src="logo.svg" alt="" />
                    </div>
                </div>
                <div className="form_container">
                    <div className='logo_login'>
                        <img src="logoIcon.svg" alt="" />
                    </div>
                    <div className='form_heading'>
                        <h1>Bem vindo de volta!</h1>
                        <p>Complete suas informações para que possamos levar seu pedido até você!</p>
                    </div>
                    <form>
                        <div className="input-field">
                            <input
                                required=""
                                autoComplete="off"
                                type="email"
                                name="email"
                                id="email"
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input
                                required=""
                                autoComplete="off"
                                type="password"
                                name="text"
                                id="password"
                            />
                            <label htmlFor="username">Password</label>
                            <span className='material-symbols-outlined password-visibility'>visibility</span>
                        </div>
                        <div className="btn-container">
                            <button className="btn">Entrar</button>
                            <div className="acc-text">
                                New here ?
                                <span style={{ color: "#0000ff", cursor: "pointer" }}>Create Account</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div><h2>po</h2></div> */}
        </div>
    )
}

export default Login