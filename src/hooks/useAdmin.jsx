import { db } from "../firebase/config";
import { useEffect, useState } from "react";

import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export function useAdmin(user) {

    const [isAdmin, setIsAdmin] = useState(false)

    async function getAdminDoc() {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().role === "admin") {
            setIsAdmin(true) // Usuário é administrador
            return
        } else {
            setIsAdmin(false); // Usuário não é administrador
        }

        setIsAdmin(false); // Usuário não é administrador
    }

    async function getUsersData() {
        const usersSnapshot = await getDocs(collection(db, 'users'));
        const users = usersSnapshot.docs.map((item) => {
            // console.log(item.data())
        })
    }


    useEffect(() => {
        if (user) {
            getAdminDoc()
            getUsersData()
            console.log('oi')
        }

    }, [user])



    return { isAdmin }

}