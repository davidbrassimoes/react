import React from 'react'

export default function PropDrilling() {

    let nome = 'David';

    return (
        <>
            <h1>Na componente PropDrilling</h1>
            <Hello name={nome} />
        </>
    )
}

function Hello(props) {
    return (
        <div>
            <h2>Dentro do Hello</h2>
            <Greetings name={props.name} />
        </div>
    )
}

function Greetings(props) {
    return (
        <p>O meu nome é: {props.name}</p>
    )
}