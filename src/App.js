import React from 'react';
import './App.css';
import Encabezamiento from './Componentes/Encabezamiento.jsx'
import Formulario from './Componentes/Formulario.jsx';
import Contador from './Componentes/Contador.jsx';
import Saludo from './Componentes/Saludo.jsx';

// Componente principal con JSX
function App() {
  return (
    <div className="App">
      <Encabezamiento />
      <Saludo nombre="Estudiante" />
      <Contador />
      <Formulario />
    </div>
  );
}

export default App;