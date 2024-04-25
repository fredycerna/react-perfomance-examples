import React, { useState } from 'react';
import MemoizedComponentFinal from './MemoizedComponentFinal';

const MemoExampleFinal = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Uso de memo - Ejemplo Final</h2>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar contador</button>
            <MemoizedComponentFinal />
        </div>
    );
};

export default MemoExampleFinal
