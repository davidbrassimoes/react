import React from 'react'

export default function MessageView({ messages }) {
    return (
        <div>
            {
                messages.map((m, i) => (
                    <h4 key={i} > {m} </h4>
                ))
            }
        </div>
    )
}
