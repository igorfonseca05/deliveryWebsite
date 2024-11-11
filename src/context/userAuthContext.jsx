import { useState, useEffect, createContext, useContext } from "react";

export const UserAuthContext = createContext()

export function UserAuthContextProvider({ children }) {

    const [user, setUser] = useState(undefined)

    return (
        <UserAuthContext.Provider value={{ user, setUser }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(UseAuthContext)
}