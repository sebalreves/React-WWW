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

const Formulario = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const enviarEncuesta = () => {
    console.log("Enviando encuesta");
    if (title === "" || desc === "") {
      alert("Los campos título y descripción son obligatorios");
      return;
    }
    let body = {
      title: title,
      desc: desc,
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
              value={title}
              fullWidth
              variant="outlined"
              margin="normal"
              onChange={(e) => setTitle(e.currentTarget.value)}
            />

            <TextField
              type="text"
              label="Descripción"
              value={desc}
              fullWidth
              variant="outlined"
              margin="normal"
              onChange={(e) => setDesc(e.currentTarget.value)}
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
              setDesc("");
              setTitle("");
            }}>
            Limpiar
          </Button>

          <Button variant="contained" color="primary" onClick={enviarEncuesta}>
            Enviar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Formulario;
