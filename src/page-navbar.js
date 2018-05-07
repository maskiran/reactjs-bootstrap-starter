import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const PageNavbar = (props) => {
return (
    <Navbar fixedTop inverse fluid>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#/">Brand</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem eventKey={1} href="#/hello1">
                Link
            </NavItem>
            <NavItem eventKey={2} href="#/hello2">
                Link
            </NavItem>
        </Nav>
    </Navbar>
);
}

export default PageNavbar;
