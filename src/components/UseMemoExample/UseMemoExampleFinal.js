import React, { useState, useMemo } from 'react';
import './UseMemoExample.css';

const ExpensiveCalculation = () => {
    console.log('Realizando cálculo costoso');
    // Simulación de cálculo costoso
    return Math.random() * 1000;
};

const UseMemoExampleFinal = () => {
    const [count, setCount] = useState(0);

    const result = useMemo(() => ExpensiveCalculation(), []);

    return (
        <div className="example-container">
            <h2 className="example-title">useMemo - Ejemplo Final</h2>
            <p className="example-description">Resultado: {result}</p>
            <p className="example-description">Counter: {count}</p>
            <button className="example-button" onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
};

export default UseMemoExampleFinal;
