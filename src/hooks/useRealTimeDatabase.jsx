import { db } from "../firebase/config";
import { collection, addDoc, doc, setDoc, updateDoc, getDoc, onSnapshot, arrayUnion, arrayRemove } from "firebase/firestore";

import { useEffect, useState } from "react";

import { useAuthContext } from "../context/userAuthContext";
import { serverTimestamp } from "firebase/database";

export function useDataBase() {

    const [data, setData] = useState(null)

    const [cartItens, setItensCart] = useState([])

    async function createUserdocument(dados, userId) {

        if (userId && dados) {
            try {
                const userDocument = await doc(db, 'users', userId)

                const userInfo = {
                    nome: dados.displayName,
                    userId: dados.uid,
                    email: dados.emailVerified,
                    phone: dados.phoneNumber,
                    metaDados: { ...dados.metadata },
                    email: dados.email,
                    myCart: [],
                    // date: new Date().toISOString()
                }

                await setDoc(userDocument, userInfo, { merge: true })
            } catch (error) {
                console.log(error)
            }
        }
    }

    async function updateDoc(cartItens, quantity, userId) {

        if (userId) {

            const item = {
                myCart: quantity
            }

            try {
                await setDoc(doc(db, 'users', userId), item, { merge: true });

            } catch (error) {
                console.log(error.message)
            }
        }

    }

    function realTimeDocument(userId) {

        useEffect(() => {
            if (userId) {

                const unsubscribe = onSnapshot(doc(db, 'users', userId), { includeMetadataChanges: true }, (doc) => {
                    if (doc.exists()) {
                        setData(doc.data().myCart)
                    } else {
                        console.log('Dados não encontrados')
                    }
                })

                return () => unsubscribe()
            }

        }, [userId])
    }

    async function removeCartItem(itemToRemove, userId) {

        if (userId) {
            const item = {
                myCart: arrayRemove(itemToRemove)
            }

            try {
                await setDoc(doc(db, 'users', userId), item, { merge: true });

            } catch (error) {
                console.log(error.message)
            }
        }

    }


    return { createUserdocument, data, updateDoc, realTimeDocument, removeCartItem }
}
