import React, { Component } from "react";
import Footer from "./components/FooterComponent";
import Header from "./components/HeaderComponent";
import Home from "./components/HomeComponent";
import axios from "axios";
import {
  SeasonalAnime,
  weekday,
  AiringToday,
  TopAiring,
  TopUpcoming,
  AllTimeTop,
  Quote,
  Anime,
} from "./shared";
// Routes : /
class App extends Component {
  constructor(props) {
    super(props);
    this.animeIdHandler = this.animeIdHandler.bind(this);
    this.state = {
      day: weekday[new Date().getDay()],
      seasonalAnime: [],
      airingToday: [],
      topAiring: [],
      topUpcoming: [],
      allTimeTop: [],
      quote: [],
      error: null,
      animeId: null,
      anime: {},
    };
  }
  animeIdHandler(id) {
    this.setState({
      animeId: id,
    });
  }

  fetchList(key, api, payloadKey = "anime") {
    return axios
      .get(api)
      .then((result) => {
        this.setState({
          [key]: result.data[payloadKey],
        });
      })
      .catch((error) =>
        this.setState({
          error,
        })
      );
  }

  componentDidMount() {
    Promise.all(
      [
        {
          api: AiringToday + this.state.day,
          key: "airingToday",
          payloadKey: this.state.day,
        },
        { api: SeasonalAnime, key: "seasonalAnime" },
        { api: TopAiring, key: "topAiring", payloadKey: "top" },
        { api: TopUpcoming, key: "topUpcoming", payloadKey: "top" },
        { api: AllTimeTop, key: "allTimeTop", payloadKey: "top" },
        { api: Quote, key: "quote", payloadKey: "data" },
      ].map(({ api, key, payloadKey = "anime" }) =>
        this.fetchList(key, api, payloadKey)
      )
    );
  }

  componentDidUpdate() {
    if (this.state.animeId) {
      axios
        .get(Anime + this.state.animeId)
        .then((result) => {
          this.setState({
            anime: result.data,
          });
        })
        .catch((error) =>
          this.setState({
            error,
          })
        );
    }
  }
  render() {
    return (
      <>
        <Header />
        <Home
          airingToday={this.state.airingToday}
          seasonalAnime={this.state.seasonalAnime.slice(0, 25)}
          topAiring={this.state.topAiring.slice(0, 5)}
          topUpcoming={this.state.topUpcoming.slice(0, 5)}
          allTimeTop={this.state.allTimeTop.slice(0, 5)}
          quote={this.state.quote}
          animeIdHandler={this.animeIdHandler}
        />
        <Footer />
      </>
    );
  }
}
export default App;
