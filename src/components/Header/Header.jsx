import React from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Header = () => {
    return (
        <Navbar variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <Image id="header-logo" src="https://ik.imagekit.io/w1xennnidd/starwarslogo_kJhlBS44f6.jpg" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/characters">Characters</Nav.Link>
                    <Nav.Link href="/login">Log in</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;