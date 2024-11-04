
import { createContext, useContext, useState } from 'react'

export const ModalContext = createContext()

export function ModalContextProvider({ children }) {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalLogin, setModalLogin] = useState(false)

    function handleOpenModal(formToOpen = '') {
        if (formToOpen === 'login') {
            setModalLogin(!modalLogin)
            setModalIsOpen(!modalLogin)
            return
            // setModalIsOpen(!modalLogin)
        }
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <ModalContext.Provider value={{ modalIsOpen, handleOpenModal, modalLogin }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider

export function useModalContext() {
    return useContext(ModalContext)
}
