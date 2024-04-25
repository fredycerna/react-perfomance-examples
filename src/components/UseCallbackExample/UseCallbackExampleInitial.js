import React, { useState } from 'react';

const UseCallbackExampleInitial = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log('Manejador de clics ejecutado');
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Uso de useCallback - Ejemplo Inicial</h2>
            <p>Contador: {count}</p>
            <button onClick={handleClick}>Incrementar</button>
        </div>
    );
};

export default UseCallbackExampleInitial;
