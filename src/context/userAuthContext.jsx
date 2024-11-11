import { useState, useEffect, createContext, useContext } from "react";

export const UserAuthContext = createContext()

export function UserAuthContextProvider({ children, value }) {

    // const [user, setUser] = useState('')

    // useEffect(() => console.log(user), user)

    return (
        <UserAuthContext.Provider value={value}>
            {children}
        </UserAuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(UserAuthContext)
}