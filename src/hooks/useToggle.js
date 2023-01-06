import { useState } from 'react'

export default function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue)
    function toggle(any) {
        setValue(typeof any === "boolean" ? setValue(any) : !value)
    }
    return [value, toggle]
}
