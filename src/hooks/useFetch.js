import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function useFetch(url, params = { method: "get" }, dependencies = []) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState()
    useEffect(() => {
        axios[params.method](url, params?.body)
            .then(res => {
                setData(res.data)
            })
            .catch(err => setErr(err.message))
            .finally(() => {
                setLoading(false)
            })
        return () => {
            setData(undefined)
            setErr(undefined)
            setLoading(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.body, params.method, url, ...dependencies])
    return [loading, err, data]
}
