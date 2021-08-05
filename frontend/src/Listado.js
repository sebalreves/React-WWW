import React, { useState, useEffect } from "react";
import "./App.css";
import {Grid} from "@material-ui/core";

const encuestasDummy = [
  { id: "titulo1", title: "titulo1", description: "descripcion1" },
  { id: "titulo2", title: "titulo2", description: "descripcion2" },
  { id: "titulo3", title: "titulo3", description: "descripcion3" },
];
const Listado = () => {
  const [encuestas, setEncuestas] = useState([]);
  const [status, setStatus] = useState("idle");

  const getEncuestas = () => {
    console.log("CONSULTANDO ENCUESTAS");
    setStatus("loading");
    setTimeout(() => {
      setEncuestas(encuestasDummy);
      setStatus("success");
    }, 1000);
  };

  //cargar listado al cargar la pagina
  useEffect(() => {
    console.log("USEEFFECT");
    getEncuestas();
  }, []);

  if (status === "idle" || status === "loading") {
    return <p>Cargando</p>;
  }
  return (
    <Grid item xs="6">
      <div className="listado">
        {encuestas.map((encuesta) => {
          return (
            <>
              <p>{encuesta.title}</p>
              <p>{encuesta.description}</p>
            </>
          );
        })}
        <button onClick={getEncuestas}>Refrescar listado</button>
      </div>
    </Grid>
  );
};

export default Listado;
