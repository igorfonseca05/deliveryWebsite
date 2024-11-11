import { db } from "../firebase/config";
import { collection, addDoc, doc, setDoc, updateDoc } from "firebase/firestore";

import { useEffect, useState } from "react";

import { useAuthContext } from "../context/userAuthContext";

export function useDataBase() {

    const [dado, setMessage] = useState('')

    async function createUserCollection(dados, path) {

        try {
            const docRef = await addDoc(collection(db, path), {
                name: dados.displayName,
                email: dados.email
            })

            console.log(docRef)

            setMessage('dado criado')
            console.log('documento criado', docRef.id)
        } catch (error) {
            console.log(error)
        }
    }

    async function myCart(dados, userId) {

        try {
            const addCartFieldToDocument = await doc(db, 'users', userId)

            const cartField = {
                ...dados
            }

            await setDoc(addCartFieldToDocument, cartField, { merge: true })

            // setMessage('dado criado')
            // console.log('documento criado', docRef.id)
        } catch (error) {
            console.log(error)
        }
    }



    return { dado, createUserCollection, myCart }

}