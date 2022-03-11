import React from 'react'
import { useSelector } from 'react-redux'
import Book from './Book';

export default function BookList(props) {
    const books = useSelector(state => state.books);
    console.log(books);
    return (
        <section className='grid'>
            {
                books.map(book => (
                    <Book
                        key={book.id}
                        book={book}
                    />
                ))
            }
        </section>
    )
}
