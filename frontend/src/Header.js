import React from "react";
import "./App.css";
import {AppBar, Grid, Toolbar, Typography} from "@material-ui/core";
const Header = () => {
  return (
      <AppBar position="static">
          <Toolbar>
              <Typography variant="h6" >
                  Encuestas del ramo ql
              </Typography>
          </Toolbar>
      </AppBar>
  );
};

export default Header;
