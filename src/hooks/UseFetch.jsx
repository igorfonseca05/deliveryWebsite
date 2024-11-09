import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        async function getData() {
            setLoading(true);
            setError('');

            try {
                const res = await fetch(url, { signal });

                if (!res.ok) {
                    throw new Error('Erro ao obter dados');
                }

                const jsonData = await res.json();
                setData(jsonData);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        }

        getData();


        return () => controller.abort();
    }, [url]);

    return { data, loading, error };
}

