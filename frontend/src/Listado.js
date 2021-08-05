import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Card, CardContent, CardHeader, Grid } from "@material-ui/core";

const encuestasDummy = [
  { id: "titulo1", title: "titulo1", description: "descripcion1" },
  { id: "titulo2", title: "titulo2", description: "descripcion2" },
  { id: "titulo3", title: "titulo3", description: "descripcion3" },
  { id: "titulo4", title: "titulo1", description: "descripcion1" },
  { id: "titulo5", title: "titulo2", description: "descripcion2" },
  { id: "titulo6", title: "titulo3", description: "descripcion3" },
  { id: "titulo7", title: "titulo1", description: "descripcion1" },
  { id: "titulo8", title: "titulo2", description: "descripcion2" },
  { id: "titulo9", title: "titulo3", description: "descripcion3" },
];
const Listado = () => {
  const [encuestas, setEncuestas] = useState([]);
  const [status, setStatus] = useState("idle");
  const link = "https://ctacddpzo7.execute-api.us-east-1.amazonaws.com/dev/all";

  const getEncuestas = () => {
    console.log("CONSULTANDO ENCUESTAS");
    setStatus("loading");
    fetch(link)
      .then((response) => console.log(response.json()))
      .catch((err) => console.log(err));
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
      <Button
        className="BotonListado"
        variant="contained"
        color="primary"
        block
        onClick={getEncuestas}>
        Refrescar listado
      </Button>
      {encuestas.map((encuesta) => {
        return (
          <Card className="Card" key={encuesta.id}>
            <CardHeader title={encuesta.title} />
            <CardContent>
              <p>{encuesta.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Listado;
