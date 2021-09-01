import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import logo from "./../../assets/img/logo.png";

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <img src={logo} alt="logo" width="200" height="200"></img>
      &nbsp;&nbsp;
      <h1>Anime App</h1>
    </Toolbar>
  </AppBar>
);

export default Header;
