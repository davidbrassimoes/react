import React from 'react'
import { useParams } from 'react-router-dom'
import { getInvoice } from '../data'

export default function Invoice() {

    let params = useParams()
    let invoice = getInvoice(parseInt(params.invoiceId, 10))

    return (
        <main>
            <h2>Amount: {invoice.amount}</h2>
            <p>Name: {invoice.name}</p>
            <p>Due: {invoice.due}</p>
        </main>
    )
}
