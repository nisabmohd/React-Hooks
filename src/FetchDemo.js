import React, { useState } from 'react'
import useFetch from './hooks/useFetch'

export default function FetchDemo() {
    const [count, setCount] = useState(0)
    const [loading, err, data] = useFetch('https://jsonplaceholder.typicode.com/posts', { method: 'get' }, [count])
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Fetch again</button>
            {loading && <p>Loading...</p>}
            {err && <p style={{ color: 'red' }}>{err}</p>}
            {!err && !loading && data && <p>{JSON.stringify(data)}</p>}
        </div>
    )
}
