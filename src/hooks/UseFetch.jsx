import { useState, useEffect } from "react";

export function useFetch(url) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        async function getData() {

            if (data) return

            setLoading(true)

            try {
                const res = await fetch(url)

                if (!res.ok) {
                    throw new Error('erro ao obter dados')
                }

                setData(await res.json())


            } catch (error) {
                setError(error.message)
            }
        }

        setLoading(false)
        getData()

    }, [url, data])


    return { data, loading, error }

}