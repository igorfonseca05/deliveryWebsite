import React from 'react'

import './ModalForm.css'
import { useModalContext } from '../../context/ModalContext'

function ModalForm() {

    const { modalIsOpen, handleOpenModal, modalLogin } = useModalContext()

    return (
        <div className={`form_overlay ${modalIsOpen ? 'modalOpen' : ''}`}>
            <span className='material-symbols-outlined close-button'>close</span>
            {
                modalLogin ?
                    (<div className='login_form_container'>
                        <div className='image-login-container'><img src="logo.svg" alt="" /></div>
                        <form>
                            <div class="input-field">
                                <input
                                    required=""
                                    autocomplete="off"
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                                <label for="email">Email</label>
                            </div>
                        </form>
                    </div>) :
                    (<div className=' signUp_form_container'>

                    </div>)
            }
        </div>
    )
}

export default ModalForm