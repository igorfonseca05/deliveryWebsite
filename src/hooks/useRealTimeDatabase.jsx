import { db } from "../firebase/config";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

import { useEffect, useState } from "react";

import { useAuthContext } from "../context/userAuthContext";

export function useDataBase(user) {

    // const { user } = useAuthContext()

    const [dado, setMessage] = useState('')

    async function createUserCollection() {

        try {
            const docRef = await addDoc(collection(db, 'users'), {
                name: 'igor'
            })

            setMessage('dado criado')
            console.log('documento criado', docRef.id)
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => createUserCollection(), [user])

    return { dado, createUserCollection }

}