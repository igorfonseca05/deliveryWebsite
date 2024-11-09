import { db } from '../firebase/firebase'

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useEffect, useState } from 'react'

export function useAuth() {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)


    //  implementado função de cleanUp
    const [cancelled, setCancelled] = useState(false)

    function cancelled() {
        if (cancelled) {
            return
        }
    }

    const auth = getAuth()

    async function createUser(user) {
        cancelled()
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

            setSuccess('Usuário criado com sucesso')
            setLoading(false)

        } catch (error) {
            setError(error.message)
        }

    }



}