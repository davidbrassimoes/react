import React from 'react'
import { useDispatch } from 'react-redux'

export default function Book(props) {
    const { id, title, author, alreadyRead, description, imageUrl, imageUrlGr } = props.book

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch({
            type: "DELETE_MESSAGE",
            id,
        })
    }

    return (
        <article>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <img src={`livros/${imageUrl}`} alt={description} />
            <p>Já Lido: {alreadyRead ? "Sim" : "Não"} </p>
            <button onClick={handleClick}>delete</button>
        </article>
    )
}
