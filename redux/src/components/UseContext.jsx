import React, { useContext } from 'react'

const appContext = React.createContext();

export default function UseContext() {
    return (
        <appContext.Provider value={{ name: 'David' }} >
            <div>
                <Hello />
            </div>
        </appContext.Provider>
    )
}

function Hello() {
    return (
        <div>
            <h2>Dentro do Hello</h2>
            <Greetings />
        </div>
    )
}

function Greetings() {

    const context = useContext(appContext)

    return (
        <p>O meu nome é: {context.name}</p>
    )
} 