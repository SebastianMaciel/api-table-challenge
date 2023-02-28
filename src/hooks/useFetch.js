import { useState, useEffect } from "react";

const useFetch = (url, setCargando) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .then(() => setCargando(false))
            .catch(error => console.error(error));
    }, [url]);

    return [data];
};

export default useFetch;