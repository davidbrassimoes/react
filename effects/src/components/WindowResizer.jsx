import { useEffect, useState } from "react"

export default function WindowResizer() {

    const [size, setSize] = useState(getSize());

    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }

    const { width, height } = size; // destructuring de objeto, importante é para lembrar

    useEffect(() => {
        function handleResize() {
            setSize(getSize());
        }

        window.addEventListener('resize', handleResize, false);

        return () => window.removeEventListener('resize', handleResize, false);
        // este return para fechar processos é executado antes do useEffect e quando a componente sai


    }, []) // com array vazia, é executado no 1º render


    return (
        <div>Width: {width} , Height: {height} </div>
    )
}
