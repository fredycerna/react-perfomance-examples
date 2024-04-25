import React, { useState } from 'react';
import MemoizedComponentInitial from './MemoizedComponentInitial';

const MemoExampleInitial = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Uso de memo - Ejemplo Inicial</h2>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar contador</button>
            <MemoizedComponentInitial />
        </div>
    );
};

export default MemoExampleInitial;
