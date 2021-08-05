import React from "react";
import "./App.css";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandMiddleFinger} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
      <AppBar position="static" color="primary">
          <Toolbar>
              <FontAwesomeIcon icon={faHandMiddleFinger}/>
              <Typography variant="h6" >
                  Encuestas del ramo ql
              </Typography>
              <FontAwesomeIcon icon={faHandMiddleFinger}/>
          </Toolbar>
      </AppBar>
  );
};

export default Header;
