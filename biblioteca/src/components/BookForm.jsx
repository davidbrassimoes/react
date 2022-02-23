import React, { useState } from 'react'

export default function BookForm(props) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [alreadyRead, setAlreadyRead] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        let id = new Date().getTime();

        let newBook = {
            id,
            title,
            author,
            alreadyRead,
            imageUrl,
        };

        props.onFormSubmit(newBook);

        setTitle('');
        setAuthor('');
        setImageUrl('');
        setAlreadyRead(false);
    }

    const handleChange = () => {

    }


    return (
        <section className="acrescentar">
            <form id="addBook">
                <div>
                    <label htmlFor="title">title</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="author">author</label>
                    <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="imgUrl">image URL</label>
                    <input type="text" id="imgUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="alreadyRead">already read</label>
                    <input type="checkbox" id="alreadyRead" checked={alreadyRead} onChange={(e) => setAlreadyRead(e.target.checked)} />
                </div>
                <input type="submit" onClick={handleSubmit} />
            </form>
        </section>
    )
}
