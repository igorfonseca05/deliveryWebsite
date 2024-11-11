import { db } from '../firebase/config.js'

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'


import { useEffect, useState } from 'react'

export function useAuth() {

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)

    const [user, setUser] = useState(null)


    //  implementado função de cleanUp
    const [cancelled, setCancelled] = useState(false)

    function checkIfCancelled() {
        if (cancelled) {
            return
        }
    }

    const auth = getAuth()

    // Função para criar usuario
    async function createUser({ name, email, password }) {
        checkIfCancelled()
        setLoading(true)
        setError('')

        // console.log(user)

        try {

            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )

            await updateProfile(auth.currentUser, {
                displayName: name
            })


            if (!res) {
                throw new Error('Erro ao criar usuário')
            }

            setUser(res.user)
            setSuccess('Usuário criado com sucesso')
            setLoading(false)

        } catch (error) {
            setError(error.message)
            console.log(error)
        }

        setLoading(false)
    };

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { auth, error, user, loading, success, createUser, setSuccess, setError }
}
