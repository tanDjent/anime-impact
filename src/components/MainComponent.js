import React, { Component } from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";

// Routes : /

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    );
  }
}
export default Main;
