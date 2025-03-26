import { useState, useEffect, useContext, createContext } from "react";

export const CartProductContext = createContext()

export function CartProductContextProvider({ children }) {


    const [amountOrder, setAmountOrder] = useState(1)

    // console.log(cartProductId)

    return (
        <CartProductContext.Provider value={{ amountOrder, setAmountOrder }}>
            {children}
        </CartProductContext.Provider>
    )
}

export function useCartProductContext() {
    return useContext(CartProductContext)
}