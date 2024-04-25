import React from 'react';

const MemoExampleFinal = () => {
    const Component = React.memo(() => {
        console.log('Renderizando Component');
        return <div>Ejemplo con memo</div>;
    });

    return (
        <div>
            <h2>Uso de memo - Estado final</h2>
            <Component />
        </div>
    );
};

export default MemoExampleFinal;
