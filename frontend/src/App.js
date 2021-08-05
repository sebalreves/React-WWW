import "./App.css";
import Header from "./Header";
import Formulario from "./Formulario";
import Listado from "./Listado";
import {Container, Grid} from "@material-ui/core";

function App() {
  return (
    <Container>
        <Grid container spacing="3">
            <Header />
            <Formulario />
            <Listado />
        </Grid>
    </Container>
  );
}

export default App;
