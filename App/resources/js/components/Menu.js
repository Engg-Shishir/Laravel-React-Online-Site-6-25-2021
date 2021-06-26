import React, {Component, Fragment} from 'react';
import {Nav, Navbar,NavDropdown} from "react-bootstrap";
import NavLogo from '../../images/logo.svg';
import "../../css/style.css";
import {NavLink} from "react-router-dom";
class Menu extends Component {
    render() {
        return (
            <Fragment>
                <Navbar className="navbar fixed-top" bg="dark" varient="dark" expand="lg">
                    <Navbar.Brand to="/"><img className="nav-logo" src={NavLogo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="nav-font"  to="/">Home</NavLink>
                        <NavLink className="nav-font"  to="/courseplan">Course Plan</NavLink>
                        <NavLink className="nav-font"  to="/registration">Registration</NavLink>
                        <NavLink className="nav-font" to="/freeclass">Free Class</NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default Menu;




<NavDropdown title="Dropdown" id="basic-nav-dropdown">
<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown>