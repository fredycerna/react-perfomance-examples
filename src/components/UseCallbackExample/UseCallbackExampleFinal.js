import React, { useState, useCallback } from 'react';

const UseCallbackExampleFinal = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('Manejador de clics ejecutado');
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h2>Uso de useCallback - Ejemplo Final</h2>
            <p>Contador: {count}</p>
            <button onClick={handleClick}>Incrementar</button>
        </div>
    );
};

export default UseCallbackExampleFinal;
