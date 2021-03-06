import React, { useState } from "react";
import "./App.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@material-ui/core";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Formulario = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const enviarEncuesta = () => {
    console.log("Enviando encuesta");
    if (titulo === "" || descripcion === "") {
      alert("Los campos título y descripción son obligatorios");
      return;
    }
    let body = {
      title: titulo,
      desc: descripcion,
    };

    let link =
      "https://ctacddpzo7.execute-api.us-east-1.amazonaws.com/dev/create";

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch(link, requestOptions)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  return (
    <Grid item xs="6">
      <Card className="Card">
        <CardHeader title="Registrar nueva encuesta" />
        <CardContent>
          <form>
            <TextField
              type="text"
              label="Titulo"
              value={titulo}
              fullWidth
              variant="outlined"
              margin="normal"
              onChange={(e) => setTitulo(e.currentTarget.value)}
            />

            <TextField
              type="text"
              label="Descripción"
              value={descripcion}
              fullWidth
              variant="outlined"
              margin="normal"
              onChange={(e) => setDescripcion(e.currentTarget.value)}
            />
          </form>
        </CardContent>
        <CardActions>
          <Button
            variant="text"
            color="primary"
            size="small"
            onClick={() => {
              console.log("LIMPIANDO INPUT");
              setDescripcion("");
              setTitulo("");
            }}>
            Limpiar
          </Button>

          <Button
            endIcon={<FontAwesomeIcon icon={faSave} />}
            variant="contained"
            color="primary"
            onClick={enviarEncuesta}>
            Enviar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Formulario;
