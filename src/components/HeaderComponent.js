import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Fischl from "../assets/fischl.png";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
function Header(props) {
  const THEME = createMuiTheme({
    palette: {
      primary: {
        light: "#5679cb",
        main: "#157dc5",
        dark: "#272727",
      },
    },
  });
  return (
    <MuiThemeProvider theme={THEME}>
      <AppBar
        position='sticky'
        top={0}
        classes={{ root: "navbar" }}
        // style={{ background: "transparent" }}
      >
        <Toolbar>
          <div className='brand-title'>
            <span className='img-container'>
              <img src={Fischl} alt='logo' />
            </span>
            <h1 className='my-class'>Anime Impact</h1>
          </div>
          <div className='menu'>
            <Button style={{ marginLeft: "50px" }}>Home</Button>
            <Button>Anime</Button>
            <Button>Manga</Button>
          </div>
          <div className='search-bar'>
            <input type='text' name='' id='' />
          </div>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
}
export default Header;
