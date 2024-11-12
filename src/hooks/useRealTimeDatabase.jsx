import { db } from "../firebase/config";
import { collection, addDoc, doc, setDoc, updateDoc } from "firebase/firestore";

import { useEffect, useState } from "react";

import { useAuthContext } from "../context/userAuthContext";

export function useDataBase() {

    const [dado, setMessage] = useState('')


    async function createUserdocument(dados, cartItens, userId) {

        try {
            const addCartFieldToDocument = await doc(db, 'users', userId)

            const cartField = {
                nome: dados.displayName,
                myCart: [...cartItens]
            }
            // 
            console.log(cartField)

            // await setDoc(addCartFieldToDocument, cartField, { merge: true })

            // setMessage('dado criado')
            // console.log('documento criado', docRef.id)
        } catch (error) {
            console.log(error)
        }
    }



    return { dado, createUserdocument }

}