
import { createContext, useContext, useState } from 'react'

export const ModalContext = createContext()

export function ModalContextProvider({ children }) {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalLogin, setModalLogin] = useState(null)

    function handleOpenModal(formToOpen = '') {

        // console.log(formToOpen)

        if (formToOpen === 'login') {
            setModalLogin(true)
            setModalIsOpen(true)
            return
            // setModalIsOpen(!modalLogin)
        } else if (formToOpen === 'cadastro') {
            setModalLogin(false)
            setModalIsOpen(true)
            return
        }
        setModalIsOpen(!modalIsOpen)
        // setModalIsOpen(false)
    }

    // handleOpenModal('login')

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
