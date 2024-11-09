import { useState, useEffect, useContext, createContext } from "react";

export const CartProductContext = createContext()

export function CartProductContextProvider({ children }) {


    const [cartProductId, setCartProductId] = useState('')

    console.log(cartProductId)

    return (
        <CartProductContext.Provider value={{ cartProductId, setCartProductId }}>
            {children}
        </CartProductContext.Provider>
    )
}

export function useCartProductContext() {
    return useContext(CartProductContext)
}