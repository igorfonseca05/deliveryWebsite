import { db } from '../firebase/config.js'

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useDataBase } from './useRealTimeDatabase.jsx'

import { useEffect, useState } from 'react'

export function useAuth() {

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)
    const { dados, createUserdocument } = useDataBase()

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

            // setUser(res.user)
            await signOut(auth)
            setSuccess('Usuário criado com sucesso. Por favor, faça login!')
            setLoading(false)

        } catch (error) {

            let systemError

            if (error.message.includes('Password should be at least 6 characters')) {
                systemError = 'A senha deve possuir no minimo 6 caracteres'
            }

            setError(systemError)
            console.log(error.message)

        } finally {
            setLoading(false)
        }

    };


    async function userLogin({ email, password }) {
        checkIfCancelled()
        setLoading(true)
        setError('')
        setSuccess('')

        try {

            const res = await signInWithEmailAndPassword(auth, email, password)

            if (!res) {
                throw new Error('Erro ao fazer login')
            }

            setSuccess('Bem vindo')
            setUser(res.user)
            createUserdocument(res.user, res.user.uid)

        } catch (error) {

            let systemError

            if (error.message.includes('auth/invalid-credential')) {
                systemError = 'Email não cadastrado, crie uma conta!'
            }

            setError(systemError)


        }

        setLoading(false)
    }

    function logOut() {
        signOut(auth)
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        error,
        user,
        loading,
        success,
        createUser,
        setSuccess,
        setError,
        userLogin,
        logOut
    }
}
