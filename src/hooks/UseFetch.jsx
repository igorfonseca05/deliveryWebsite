import { useState, useEffect } from "react";

export function useFetch(url) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    // console.log(url)

    useEffect(() => {
        async function getData() {

            // if (data) return

            setLoading(true)

            try {
                const res = await fetch(url)

                if (!res.ok) {
                    throw new Error('erro ao obter dados')
                }

                setData(await res.json())

                setLoading(false)

            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        getData()

    }, [url])


    return { data, loading, error }

}