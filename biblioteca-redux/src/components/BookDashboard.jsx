import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BookList from './BookList';

export default function BookDashboard() {
    const dispatch = useDispatch();

    /*     useEffect(() => {
            fetch("data.json")
                .then(resp => resp.json())
                .then(data => {
                    dispatch({
                        type: "READ_BOOKS",
                        payload: data.books,
                    })
                })
                .catch(() => console.log('Ocorreu um erro...'));
        }, [])
     */
    // igual ao que está em cima mas com async await em vez de .then
    useEffect(() => {
        (async function () {
            try {
                const resp = await fetch("data.json");
                const data = await resp.json();
                dispatch({
                    type: "READ_BOOKS",
                    payload: data.books,
                });
            } catch (error) {
                console.log('Ocorreu um erro...');
            }
        })(); //IIFE
    }, [])

    return (
        <div><BookList /></div>
    )
}
