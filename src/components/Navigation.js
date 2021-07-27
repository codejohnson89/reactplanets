import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar expand="lg" id="Navigation">
          <Container>
            <Navbar.Brand href="/">THE PLANETS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Link to="mercury" className="nav-link">mercury</Link>
                <Link to="venus" className="nav-link">venus</Link>
                <Link to="earth" className="nav-link">earth</Link>
                <Link to="mars" className="nav-link">mars</Link>
                <Link to="jupiter" className="nav-link">jupiter</Link>
                <Link to="saturn" className="nav-link">saturn</Link>
                <Link to="uranus" className="nav-link">uranus</Link>
                <Link to="neptune" className="nav-link">neptune</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Navigation;