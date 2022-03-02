import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';

export default function MessageView({ messages }) {

    let dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch({
            type: "DELETE_MESSAGE",
            index,
        })
    }
    return (
        <div>
            {
                messages.map((m, i) => (
                    <h4 key={i} onClick={handleDelete} > {m} </h4>
                ))
            }
        </div>
    )
}
