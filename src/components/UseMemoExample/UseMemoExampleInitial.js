import React, { useState } from 'react';

const ExpensiveCalculation = () => {
    console.log('Realizando cálculo costoso');
    // Simulación de cálculo costoso
    return Math.random() * 1000;
};

const UseMemoExampleInitial = () => {
    const [count, setCount] = useState(0);

    const result = ExpensiveCalculation();

    return (
        <div>
            <h2>Uso de useMemo - Ejemplo Inicial</h2>
            <p>Resultado: {result}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
};

export default UseMemoExampleInitial;
