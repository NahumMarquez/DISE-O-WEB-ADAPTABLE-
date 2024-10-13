// saludo
import React from 'react';

// Un componente que recibe props para mostrar un saludo personalizado
const UserGreeting = ({ name }) => {
    return <h2>¡Hola,Bienvenidos{name}!</h2>;
};

export default UserGreeting;