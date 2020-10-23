import React, { useState } from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

const Header = () => {
    const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")) || null);

    let logOut = () => {
        localStorage.setItem("loggedUser", JSON.stringify(null));
        setLoggedUser(null);
    }

    let logged;
    if (!loggedUser) {
        logged =
            <>
                <Nav.Link href="/login">Log in</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
            </>
    } else {
        logged = <Nav.Link href="/login" onClick={() => logOut()}>Log out</Nav.Link>
    }

    return (
        <Navbar variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <Image id="header-logo" src="https://ik.imagekit.io/w1xennnidd/starwarslogo_kJhlBS44f6.jpg" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/characters">Characters</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    {logged}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;