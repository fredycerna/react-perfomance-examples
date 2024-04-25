import React, { useState } from 'react';

const MemoizedComponentInitial = () => {
    const [value, setValue] = useState(0);

    const incrementValue = () => {
        setValue(value + 1);
    };

    console.log('Renderizando MemoizedComponentInitial');

    return (
        <div>
            <p>Valor interno: {value}</p>
            <button onClick={incrementValue}>Incrementar valor interno</button>
        </div>
    );
};

export default MemoizedComponentInitial;
