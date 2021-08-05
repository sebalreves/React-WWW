import "./App.css";
import Header from "./Header";
import Formulario from "./Formulario";
import Listado from "./Listado";
import { Container, Grid } from "@material-ui/core";

function App() {
  document.title = "¿y el quiz 2?";
  return (
    <>
      <Header />
      <Container className="Container">
        <Grid container spacing="3">
          <Formulario />
          <Listado />
        </Grid>
      </Container>
    </>
  );
}

export default App;
