// import { useEffect, useState } from "react";

import { useEffect, useState } from "react"

// export const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await fetch(url);
//                 const result = await response.json();
//                 setData(result)
//             }
//             catch (error) {
//                 setError(error.message)
//             }
//             finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, [url]);


//     return { data, error, loading };
// }





export const useFetch = (url) => {
    const [data, setData] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = () => {
            try {
                setTimeout(() => {
                    setData("Succsess fully fetch")
                    setLoading(false)
                }, 5000)
            }
            catch (error) {
                setError("Somthing went wrong")
            }
        }
        fetchData();
    }, [url])
    return { data, error, loading }
}