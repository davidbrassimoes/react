import { useState } from "react";

export default function FuncComp() {

    const [nome, setNome] = useState('');

    const handleChange = (e) => {
        setNome(e.target.value)
    }

    return (
        <>
            <h2>O meu nome é: {nome} </h2>
            <input type="text" value={nome} onChange={handleChange} />
        </>
    )
}
