import React, { useState } from "react";
import "./App.css";
const Formulario = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const enviarEncuesta = () => {
    console.log("Enviando encuesta");
    let body = {
      titulo: titulo,
      descripcion: descripcion,
    };
    console.log(body);
  };
  return (
    <div className="formulario">
      <p>Registrar nueva encuesta</p>
      <input
        type="text"
        placeholder="titulo"
        value={titulo}
        onChange={(e) => setTitulo(e.currentTarget.value)}
      />
      <input
        type="text"
        placeholder="descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.currentTarget.value)}
      />
      <button
        onClick={() => {
          setDescripcion("");
          setTitulo("");
        }}>
        Clear
      </button>
      <button onClick={enviarEncuesta}>Enviar</button>
    </div>
  );
};

export default Formulario;
