import "./App.css";
import Header from "./Header";
import Formulario from "./Formulario";
import Listado from "./Listado";
import {Container, createTheme, Grid, ThemeProvider} from "@material-ui/core";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                light: '#757ce8',
                main: '#3f50b5',
                dark: '#002884',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
        },
    });

  return (
    <ThemeProvider theme={theme}>
        <Container>
            <Grid container spacing="3">
                <Header />
                <Formulario />
                <Listado />
            </Grid>
        </Container>
    </ThemeProvider>
  );
}

export default App;
