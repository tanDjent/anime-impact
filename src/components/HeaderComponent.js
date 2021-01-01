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
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      searchBUtton: "search",
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
        <div className='container-fluid'>
          <NavbarToggler onClick={this.toggleNav} />
          <NavbarBrand href='/' className='ml-auto'>
            <img src={Fischl} height='80' width='40' alt='logo' />
          </NavbarBrand>
          <h2>Anime Impact</h2>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
              <div className='menu d-flex w-50'>
                <NavItem>
                  <NavLink to='/home'>
                    <Button className='home-button'>Home</Button>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <Dropdown className='dropdown-button'>
                    <Dropdown.Toggle>Anime</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href='#'>Top Anime</Dropdown.Item>
                      <Dropdown.Item href='#'>Seasonal Anime</Dropdown.Item>
                      <Dropdown.Item href='#'>Surprise Me!</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </NavItem>

                <NavItem>
                  <Dropdown className='dropdown-button'>
                    <Dropdown.Toggle>Manga</Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href='#'>Top Manga</Dropdown.Item>
                      <Dropdown.Item href='#'>Surprise Me!</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </NavItem>
              </div>
              <NavItem>
                <div className='search-bar d-flex '>
                  <Input type='text' placeholder='Search' />
                  <Button
                    className='search-button'
                    onMouseOver={() => {
                      this.setState({
                        searchBUtton: "arrow",
                      });
                    }}
                    onMouseLeave={() => {
                      this.setState({
                        searchBUtton: "search",
                      });
                    }}
                  >
                    <span
                      className={
                        this.state.searchBUtton === "search"
                          ? "fas fa-search"
                          : "fas fa-arrow-right"
                      }
                    ></span>
                  </Button>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
export default Header;
