import React from 'react'

export default function Book(props) {

    const { id, title, author, alreadyRead, description, imageUrl } = props.book;

    const handleDelete = () => {
        props.onDelete(id)
    }

    return (
        <article>
            <h2> {title} </h2>
            <h2> {author} </h2>
            <img src={`livros/${imageUrl}`} alt={title} />
            <p>Already Read: {alreadyRead ? "sim" : "não"} </p>
            <button onClick={handleDelete} >Delete</button>
        </article>
    )
}
