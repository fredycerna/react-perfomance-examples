import React from 'react';

const MemoExampleInitial = () => {
    const Component = () => {
        console.log('Renderizando Component');
        return <div>Ejemplo con memo</div>;
    };

    return (
        <div>
            <h2>Uso de memo - Estado inicial</h2>
            <Component />
        </div>
    );
};

export default MemoExampleInitial;
