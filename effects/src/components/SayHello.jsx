import { useEffect, useState } from "react";

export default function SayHello() {

    const greetings = ['bom dia', 'bonjour', 'aloha', 'good morning'];

    const [index, setIndex] = useState(0);

    const updateTitle = () => {
        setIndex(Math.floor(Math.random() * greetings.length));
    }

    useEffect(() => {
        document.title = greetings[index];
    })


    return (
        <section>
            <div>SayHello</div>
            <button onClick={updateTitle} >Dizer Ola</button>
        </section>
    )
}

