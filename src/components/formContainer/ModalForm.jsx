import React from 'react'

import './ModalForm.css'
import { useModalContext } from '../../context/ModalContext'

function ModalForm() {

    const { modalIsOpen, handleOpenModal } = useModalContext()

    return (
        <div className={`form_overlay ${modalIsOpen ? 'open' : ''}`}>
            <span className='material-symbols-outlined close-button' onClick={handleOpenModal}>close</span>
        </div>
    )
}

export default ModalForm