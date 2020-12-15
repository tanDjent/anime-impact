import React, { Component } from "react";
import Footer from "./components/FooterComponent";
import Header from "./components/HeaderComponent";
import Home from "./components/HomeComponent";
import axios from "axios";
import { SeasonalAnime } from "./shared";
// Routes : /

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(SeasonalAnime)
      .then((result) => {
        this.setState({
          hits: result.data.anime,
          isLoading: false,
        });
      })
      .catch((error) =>
        this.setState({
          error,
          isLoading: false,
        })
      );
  }
  render() {
    return (
      <>
        <Header />
        {!this.isLoading && <Home seasonalAnime={this.state.hits} />}
        <Footer />
      </>
    );
  }
}
export default App;
