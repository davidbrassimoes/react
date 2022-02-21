import React, { useState } from 'react'
import BookList from './BookList'
import { data } from '../data'


export default function BookDashboard() {

    const [books, setBooks] = useState(data.books)

    const handleDelete = (id) => {
        console.log('qq coisa', id);
        setBooks(books.filter(b => b.id !== id))
    }

    return (
        <>
            <BookList books={books} onDelete={handleDelete} />
        </>
    )
}
