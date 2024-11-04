
import { createContext, useContext, useState } from 'react'

export const ModalContext = createContext()

export function ModalContextProvider({ children }) {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    function handleOpenModal() {
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <ModalContext.Provider value={{ modalIsOpen, handleOpenModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider

export function useModalContext() {
    return useContext(ModalContext)
}
