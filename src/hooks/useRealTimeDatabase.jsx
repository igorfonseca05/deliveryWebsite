import { db } from "../firebase/config";
import { collection, addDoc, doc, setDoc, updateDoc, getDoc, onSnapshot, arrayUnion, arrayRemove } from "firebase/firestore";

import { useEffect, useState } from "react";

import { useAuthContext } from "../context/userAuthContext";
import { serverTimestamp } from "firebase/database";

import { useFetch } from "./UseFetch";

export function useDataBase() {

    const [data, setData] = useState(null)
    const [userData, setUserData] = useState(null)

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

                if ((await getDoc(userDocument)).exists()) return
                await setDoc(userDocument, userInfo, { merge: true })

            } catch (error) {
                console.log(error)
            }
        }
    }

    async function updateDoc(cartItens, userId) {

        if (userId && cartItens) {

            const item = {
                myCart: arrayUnion(...cartItens)
            }

            // console.log('addCartItem')

            try {
                await setDoc(doc(db, 'users', userId), item, { merge: true });

            } catch (error) {
                console.log(error.message)
            }
        }

    }
    async function updateQuantity(itemId, quantity, userId) {

        if (userId) {

            const docRef = await getDoc(doc(db, 'users', userId))
            const itemQuantity = docRef.data().myCart.quantity

            if (docRef.exists() && itemQuantity !== quantity) {
                const item = [
                    {
                        ...docRef.data(),
                        myCart: {
                            ...docRef.data().myCart,
                            [`${itemId}`]: {
                                ...docRef.data().myCart[itemId],
                                quantity
                            }
                        }
                    }
                ]
                console.log('oi')

                try {
                    // await setDoc(doc(db, 'users', userId), item, { merge: true });
                } catch (error) {
                    console.log(error.message)
                }
            }
        }

    }

    function realTimeDocument(userId) {

        useEffect(() => {
            if (userId) {

                const unsubscribe = onSnapshot(doc(db, 'users', userId), { includeMetadataChanges: true }, (doc) => {
                    if (doc.metadata.hasPendingWrites) {
                        return; // Ignora gravações locais pendentes
                    }

                    if (doc.exists()) {
                        setData(doc.data().myCart)
                        setUserData(doc.data())
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

            console.log('gravação 3')

            try {
                await setDoc(doc(db, 'users', userId), item, { merge: true });

            } catch (error) {
                console.log(error.message)
            }
        }

    }

    async function update(userId, data, fieldName = '') {
        if (userId && data) {

            const item = {
                [fieldName]: arrayUnion(data)
            }

            console.log('oi')

            try {
                await setDoc(doc(db, 'users', userId), item, { merge: true });

            } catch (error) {
                console.log(error.message)
            }
        }
    }



    return {
        createUserdocument,
        data,
        updateDoc,
        realTimeDocument,
        removeCartItem,
        updateQuantity,
        update,
        userData
    }
}
