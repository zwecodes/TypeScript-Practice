import { useState, useEffect } from 'react';

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<T | boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json)
            } catch (err) {
                setError("Something went wrong");
            }
            setLoading(false);
        };

        fetchData();
    }, [url]);

    return { data, loading, error};
}


