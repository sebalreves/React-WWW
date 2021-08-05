import React, {useState} from "react";
import "./App.css";
import {Button, Card, CardActions, CardContent, CardHeader, Grid, TextField} from "@material-ui/core";
import {faHandMiddleFinger} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
        <Grid item xs="6">
            <Card className="Card">
                <CardHeader title="Registrar nueva encuesta" />
                <CardContent>
                    <form>
                        <TextField type="text"
                                   label="Titulo"
                                   value={titulo}
                                   fullWidth
                                   variant="outlined"
                                   margin="normal"
                                   onChange={(e) => setTitulo(e.currentTarget.value)}/>

                        <TextField type="text"
                                   label="Descripción"
                                   value={descripcion}
                                   fullWidth
                                   variant="outlined"
                                   margin="normal"
                                   onChange={(e) => setDescripcion(e.currentTarget.value)}/>


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
                        endIcon={<FontAwesomeIcon icon={faHandMiddleFinger}/>}
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
