import React, { useId } from 'react'

export const Email = () => {
    const id = useId()
    return (
        <div>
            <label htmlFor={id}>email : </label>
            <input type="email" id={id} />
        </div>
    )
}
