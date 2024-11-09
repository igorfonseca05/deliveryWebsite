import { db } from '../firebase/config.js'

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'


import { useEffect, useState } from 'react'

function useAuth() {

    const [error, setError] = useState(null)
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
    async function createUser(user) {
        checkIfCancelled()
        setLoading(true)
        setError('')

        try {

            const res = await createUserWithEmailAndPassword(
                auth,
                user.email,
                user.password
            )

            await updateProfile(user, {
                displayName: user.name,
                photoURL: `${use.url ? use.url : ''}`
            })

            if (!res.ok) {
                throw new Error('Erro ao criar usuário')
            }

            console.log(res)
            setSuccess('Usuário criado com sucesso')
            setLoading(false)

        } catch (error) {
            setError(error.message)
        }

        setLoading(false)
    };

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { auth, error, user, loading, success, createUser }
}

export default useAuth