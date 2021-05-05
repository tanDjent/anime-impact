import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Input,
} from "reactstrap";
import Fischl from "../assets/fischl.png";
import { NavLink, withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      search: "",
    };
    this.toggleNav = () => {
      this.setState({
        isNavOpen: !this.state.isNavOpen,
      });
    };
  }

  render() {
    return (
      <Navbar dark expand='md' fixed='top' className='navbar'>
        <div className='container-fluid nav-wrap position-relative'>
          <NavbarToggler className='hamBurger' onClick={this.toggleNav} />
          <NavbarBrand href='/' className='m-0 mx-3'>
            <img src={Fischl} height='80' width='40' alt='logo' />
          </NavbarBrand>
          <h1 className='website-title'>Anime Impact</h1>
          <Collapse
            className='bg-nav-dark'
            isOpen={this.state.isNavOpen}
            navbar
          >
            <Nav navbar>
              <div className='menu d-flex '>
                <NavItem>
                  <NavLink to='/home'>
                    <Button className='home-button' onClick={this.toggleNav}>
                      Home
                    </Button>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <Dropdown className='dropdown-button'>
                    <Dropdown.Toggle>Anime</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.toggleNav();
                          this.props.history.push(
                            "/anime-impact/anime-manga/TopAnime"
                          );
                        }}
                      >
                        Top Anime
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          this.toggleNav();
                          this.props.history.push(
                            "/anime-impact/anime-manga/SeasonalAnime"
                          );
                        }}
                      >
                        Seasonal Anime
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          this.toggleNav();
                          this.props.history.push(
                            "/anime-impact/anime-manga/TopMovie"
                          );
                        }}
                      >
                        Top Movie
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          this.toggleNav();
                          this.props.history.push(
                            "/anime-impact/anime-manga/TopAiring"
                          );
                        }}
                      >
                        Top Airing
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          this.toggleNav();
                          this.props.history.push(
                            "/anime-impact/anime-manga/TopUpcoming"
                          );
                        }}
                      >
                        Top Upcoming
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </NavItem>

                <NavItem>
                  <Dropdown className='dropdown-button'>
                    <Dropdown.Toggle>Manga</Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.toggleNav();
                          this.props.history.push(
                            "/anime-impact/anime-manga/TopManga"
                          );
                        }}
                      >
                        Top Manga
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          this.toggleNav();
                          this.props.history.push(
                            "/anime-impact/anime-manga/TopOneShots"
                          );
                        }}
                      >
                        Top Oneshots
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          this.toggleNav();
                          this.props.history.push(
                            "/anime-impact/anime-manga/TopLightNovel"
                          );
                        }}
                      >
                        Top Light Novel
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          this.toggleNav();
                          this.props.history.push(
                            "/anime-impact/anime-manga/TopDoujinshi"
                          );
                        }}
                      >
                        Top Doujinshi
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </NavItem>
              </div>

              <NavItem>
                <div className='search-bar d-flex '>
                  <Input
                    className='search-bar-input'
                    id='name'
                    type='text'
                    placeholder='Search'
                    onChange={(event) =>
                      this.setState({ search: event.target.value })
                    }
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        this.toggleNav();
                        this.props.history.push(
                          `/anime-impact/search/${this.state.search}`
                        );
                      }
                    }}
                  />
                  <div className='td' id='s-cover'>
                    <button
                      type='submit'
                      onClick={() => {
                        this.toggleNav();
                        this.props.history.push(
                          `/anime-impact/search/${this.state.search}`
                        );
                      }}
                    >
                      <div id='s-circle'></div>
                      <span></span>
                    </button>
                  </div>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
export default withRouter(Header);
