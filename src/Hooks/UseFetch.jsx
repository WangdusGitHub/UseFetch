import { useState, useEffect } from 'react'

function UseFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                setError(null)
                const res = await fetch(url);

                if(!res.ok) {
                    throw new Error(` error: ${res.status}`)
                }
                // console.log(await res.json());
                setData(await res.json());
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();    
    }, [url])

  return {data, isLoading, error};
}

export default UseFetch;