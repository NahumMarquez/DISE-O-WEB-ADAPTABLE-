// Counter.js
import React, { useState } from 'react';

// Un componente que utiliza estado para manejar un contador
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Has hecho clic {count} veces</p>
            <button onClick={increment}>Incrementar</button>
        </div>
    );
};

export default Counter;