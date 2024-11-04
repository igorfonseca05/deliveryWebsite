import React from 'react'

import './ModalForm.css'
import { useModalContext } from '../../context/ModalContext'
import Login from './LoginForm/Login'

function ModalForm() {

    const { modalIsOpen, handleOpenModal, modalLogin } = useModalContext()

    // console.log(modalLogin)

    return (
        <div className={`form_overlay ${modalIsOpen ? 'modalOpen' : ''}`}>
            <span className='material-symbols-outlined close-button' onClick={() => handleOpenModal()}>close</span>
            {
                modalLogin ? <Login /> :
                    (<div className=' signUp_form_container'>

                    </div>)
            }
        </div>
    )
}

export default ModalForm