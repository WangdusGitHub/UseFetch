import { useState, useEffect } from "react";

export default function UseFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            const data = fetch(url);
            setData(data);
            setLoading(false);
        }
        catch (error) {
            setError(error);
            setLoading(false);
        }
    }, [url])


    return {
        data: data,
        loading: false,
        error: false
    }
}
