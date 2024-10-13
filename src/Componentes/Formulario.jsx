// Form.js
import React, { useState } from 'react';

// El manejo de formularios se puede hacer con estado para controlar sus entradas.
const Form = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <form>
            <label>Escribe algo:</label>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <p>Texto ingresado: {inputValue}</p>
        </form>
    );
};

export default Form;