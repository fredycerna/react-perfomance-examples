import React, { useState } from 'react';

const MemoizedComponentFinal = React.memo(() => {
    const [value, setValue] = useState(0);

    const incrementValue = () => {
        setValue(value + 1);
    };

    console.log('Renderizando MemoizedComponentFinal');

    return (
        <div>
            <p>Valor interno: {value}</p>
            <button onClick={incrementValue}>Incrementar valor interno</button>
        </div>
    );
});

export default MemoizedComponentFinal;
