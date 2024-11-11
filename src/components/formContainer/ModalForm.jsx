import React, { useEffect, useState } from 'react'

import './ModalForm.css'
import { useModalContext } from '../../context/ModalContext'
import Login from './LoginForm/Login'
import Signup from './SignupForm/Signup'

import { useAuth } from '../../hooks/useAuth'

function ModalForm() {

    const [changeForm, setChangeForm] = useState(false)
    const { modalIsOpen, handleOpenModal, modalLogin } = useModalContext()

    const { success } = useAuth()

    useEffect(() => {
        setChangeForm(!changeForm)
    }, [success])

    // console.log(modalLogin)

    return (
        <div className={`form_overlay ${modalIsOpen ? 'modalOpen' : ''}`}>
            <span className='material-symbols-outlined close-button' onClick={() => handleOpenModal()}>close</span>
            {
                modalLogin || changeForm ? <Login /> : <Signup />
            }
        </div>
    )
}

export default ModalForm