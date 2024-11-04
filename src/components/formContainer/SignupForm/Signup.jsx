import React from 'react'
import './Signup.css'

function Signup() {
    return (
        <div className={`form_container_login_and_signIn`}>
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
                    <form>
                        <div className="input-field">
                            <input
                                required=""
                                autoComplete="off"
                                typeof="text"
                                name="name"
                                id="name"
                            // placeholder='Email'
                            />
                            <label htmlFor="name">Nome</label>
                        </div>
                        <div className="input-field">
                            <input
                                required=""
                                autoComplete="off"
                                typeof="email"
                                name="email"
                                id="email"
                            // placeholder='Email'
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input
                                required=""
                                autoComplete="off"
                                typeof="password"
                                name="text"
                                id="password"
                            />
                            <label htmlFor="username">Senha</label>
                            <span className='material-symbols-outlined password-visibility'>visibility</span>
                        </div>
                        <div className="btn-container">
                            <button className="btn">Criar conta</button>
                            <div className="acc-text">
                                Já posui conta ?
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