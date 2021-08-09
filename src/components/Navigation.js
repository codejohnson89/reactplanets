import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {

  const removeShow = () => {
    if(window.innerWidth < 991 ){
      let showMenu = document.querySelector('.show');
      showMenu.classList.remove('show');
    }
  }

    return (
        <Navbar expand="lg" id="Navigation">
          <Container>
            <Navbar.Brand href="/">THE PLANETS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Link to="mercury" className="nav-link" onClick={removeShow}>mercury</Link>
                <Link to="venus" className="nav-link" onClick={removeShow}>venus</Link>
                <Link to="earth" className="nav-link" onClick={removeShow}>earth</Link>
                <Link to="mars" className="nav-link" onClick={removeShow}>mars</Link>
                <Link to="jupiter" className="nav-link" onClick={removeShow}>jupiter</Link>
                <Link to="saturn" className="nav-link" onClick={removeShow}>saturn</Link>
                <Link to="uranus" className="nav-link" onClick={removeShow}>uranus</Link>
                <Link to="neptune" className="nav-link" onClick={removeShow}>neptune</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Navigation;