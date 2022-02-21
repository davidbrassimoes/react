import React from 'react'
import Book from './Book'

export default function BookList(props) {

    console.log(props.books);
    return (
        <div>
            <section className='grid'>

                {
                    props.books.map((b, index) => (
                        <Book book={b} key={index} onDelete={props.onDelete} />
                    ))
                }

            </section>

        </div>
    )
}
