import React, { useState, useEffect } from "react";
import "./App.css";

const encuestasDummy = [
  { id: "titulo1", title: "titulo1", description: "descripcion1" },
  { id: "titulo2", title: "titulo2", description: "descripcion2" },
  { id: "titulo3", title: "titulo3", description: "descripcion3" },
];
const Listado = () => {
  const [encuestas, setEncuestas] = useState([]);
  const [status, setStatus] = useState("idle");

  //cargar listado
  useEffect(() => {
    setStatus("loading");
    setTimeout(() => {
      setEncuestas(encuestasDummy);
      setStatus("success");
    }, 1000 * 3);
  }, []);

  if (status === "idle" || status === "loading") {
    return <p>Cargando</p>;
  }
  return (
    <>
      <div className="listado">
        {encuestas.map((encuesta) => {
          return (
            <>
              <p>{encuesta.title}</p>
              <p>{encuesta.description}</p>
            </>
          );
        })}
      </div>
      )
    </>
  );
};

export default Listado;
