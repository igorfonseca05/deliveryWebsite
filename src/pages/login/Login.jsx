import React from 'react'

import './Login.css'

function Login() {
    return (
        <div className='section_container'>
            <main className='form_container'>
                <div>
                    <h1>paraiso</h1>
                </div>
                <form action="">
                    <div class="input-field">
                        <input
                            required=""
                            autocomplete="off"
                            type="password"
                            name="text"
                            id="password"
                        />
                        <label for="username">Password</label>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Login