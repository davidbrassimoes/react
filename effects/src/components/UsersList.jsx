import React, { useEffect, useState } from 'react'

export default function UsersList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("static.json")
            .then(response => response.json())
            .then(data => setUsers(data.users))
            .catch(err => console.log('Ocorreu um erro'));
    }, [])

    if (users.length > 0) {
        return (
            <section>
                {
                    users.map(u => <h4 key={u.id} > {u.name} </h4>)
                }
            </section>
        )
    }

    return (
        <h3>loading...</h3>
    )
}
