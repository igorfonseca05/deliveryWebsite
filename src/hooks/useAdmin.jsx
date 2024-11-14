import { db } from "../firebase/config";
import { useEffect, useState } from "react";

import { getDoc, doc } from "firebase/firestore";

export function useAdmin(user) {

    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {

        if (user) {
            async function getAdminDoc() {

                const userDoc = await getDoc(doc(db, "users", user.uid));
                if (userDoc.exists() && userDoc.data().role === "admin") {
                    setIsAdmin(true) // Usuário é administrador
                    return
                }
                setIsAdmin(false); // Usuário não é administrador
            }

            getAdminDoc()
        }

        setIsAdmin(false); // Usuário não é administrador

    }, [user])



    return { isAdmin }

}