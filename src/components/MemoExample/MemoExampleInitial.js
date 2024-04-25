import React, { useState } from 'react';
import MemoizedComponentInitial from './MemoizedComponentInitial';

const MemoExampleInitial = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="example-container">
            <h2 className="example-title">Uso de memo - Ejemplo Inicial</h2>
            <p className="example-description">Contador: {count}</p>
            <button className="example-button" onClick={() => setCount(count + 1)}>Incrementar contador</button>
            <MemoizedComponentInitial />
        </div>
    );
};

export default MemoExampleInitial;
