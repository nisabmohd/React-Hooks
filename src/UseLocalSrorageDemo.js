import React from 'react'
import useLocalStorage from './hooks/useLocalStorage'

export default function UseLocalSrorageDemo() {
    const [value, setValue] = useLocalStorage('name', '')
    return (
        <>
            <div>{value}</div>
            <input type="text" onChange={e => setValue(e.target.value)} />
        </>
    )
}
