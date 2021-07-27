import React from 'react';
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';


const Home = () => {
    return (
        <Container>
            <Row className="jumboTron-content">
            <div className="jumboTron">
                <h1>Welcome to Space Stats</h1>
                <Link to="mercury" className="btn">Click Here to Begin</Link>
            </div>
            </Row>
        </Container>
    )
}

export default Home;