import { useState, useEffect, createContext, useContext } from "react";

export const UserAuthContext = createContext()

export function UserAuthContextProvider({ children, value }) {

    return (
        <UserAuthContext.Provider value={value}>
            {children}
        </UserAuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(UserAuthContext)
}