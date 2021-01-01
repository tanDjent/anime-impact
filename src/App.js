import React, { Component } from "react";
import Footer from "./components/FooterComponent";
import Header from "./components/HeaderComponent";
import Home from "./components/HomeComponent";
import AnimeManga from "./components/AnimeManga";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  SeasonalAnime,
  weekday,
  AiringToday,
  TopAiring,
  TopUpcoming,
  AllTimeTop,
  Quote,
} from "./shared";

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
      quote: null,
      error: null,
      anime: {},
    };
  }
  animeIdHandler() {}

  fetchList(key, api, payloadKey = "anime", completeData = false) {
    return axios
      .get(api)
      .then((result) => {
        this.setState({
          [key]: completeData ? result.data : result.data[payloadKey],
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

  componentDidUpdate() {}
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route
            path='/home'
            component={() => (
              <Home
                airingToday={this.state.airingToday}
                seasonalAnime={this.state.seasonalAnime.slice(0, 25)}
                topAiring={this.state.topAiring.slice(0, 5)}
                topUpcoming={this.state.topUpcoming.slice(0, 5)}
                allTimeTop={this.state.allTimeTop.slice(0, 5)}
                quote={this.state.quote}
              />
            )}
          />
          <Route path='/anime/:id' component={() => <AnimeManga />} />
          <Route path='/manga/:id' component={() => <AnimeManga />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </>
    );
  }
}
export default App;
