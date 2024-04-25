import React, { useState } from 'react';
import MemoizedComponentFinal from './MemoizedComponentFinal';
import '../../App.css';

const MemoExampleFinal = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="example-container">
            <h2 className="example-title">Uso de memo - Ejemplo Final</h2>
            <p className="example-description">Contador: {count}</p>
            <button className="example-button" onClick={() => setCount(count + 1)}>Incrementar contador</button>
            <MemoizedComponentFinal />
        </div>
    );
};

export default MemoExampleFinal;
