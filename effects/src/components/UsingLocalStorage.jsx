import React, { useEffect, useState } from 'react'

export default function UsingLocalStorage() {

    const [user, setUser] = useState('user 1');

    useEffect(() => {

        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            setUser(storedUser);
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('user', user);
    }, [user])


    return (
        <select value={user} onChange={(e) => setUser(e.target.value)} >
            <option >user 1</option>
            <option >user 2</option>
            <option >user 3</option>
            <option >user 4</option>
            <option >user 5</option>
        </select>
    )
}
