import React from 'react'

import './ModalForm.css'
import { useModalContext } from '../../context/ModalContext'
import Login from './LoginForm/Login'
import Signup from './SignupForm/Signup'

function ModalForm() {

    const { modalIsOpen, handleOpenModal, modalLogin } = useModalContext()

    // console.log(modalLogin)

    return (
        <div className={`form_overlay ${modalIsOpen ? 'modalOpen' : ''}`}>
            <span className='material-symbols-outlined close-button' onClick={() => handleOpenModal()}>close</span>
            {
                modalLogin ? <Login /> : <Signup />
            }
        </div>
    )
}

export default ModalForm