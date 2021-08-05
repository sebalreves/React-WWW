import React from "react";
import "./App.css";
import {Grid} from "@material-ui/core";
const Header = () => {
  return (
    <Grid item xs="12">
        <div className="header">
            <p>Encuestas</p>
        </div>
    </Grid>
  );
};

export default Header;
