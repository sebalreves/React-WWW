import React from "react";
import "./App.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Encuestas</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
