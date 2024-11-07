import { useState, useEffect, useContext, createContext } from "react";

export const MenuContext = createContext()

export function MenuContextProvider({ children }) {

    const [dataset, setDataSet] = useState('Todos')

    return (
        <MenuContext.Provider value={{ dataset, setDataSet }}>
            {children}
        </MenuContext.Provider>
    )
}

export function useMenuContext() {
    return useContext(MenuContext)
}