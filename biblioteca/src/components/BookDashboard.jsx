import React, { useState } from 'react'
import BookList from './BookList'
import { data } from '../data'
import BookForm from './BookForm'


export default function BookDashboard() {

    const [books, setBooks] = useState(data.books)

    const handleDelete = (id) => {
        console.log('qq coisa', id);
        setBooks(books.filter(b => b.id !== id))
    }
    const handleAddBook = (book) => {
        console.log(book);
        setBooks([book, ...books])
    }

    return (
        <>
            <BookForm onFormSubmit={handleAddBook} />
            <BookList books={books} onDelete={handleDelete} />
        </>
    )
}
