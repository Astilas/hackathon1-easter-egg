import React from 'react';
import HardcoreModal from './HardcoreModal';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  render() {
    return (
      <Container>
         <h2>Roulegg</h2>
        <Row>
          <Col lg="6">
            <Link to="/character">
              <Button className="gamebutton mx-auto" color="info">Niveau Noob</Button>
            </Link>
          </Col>
          <Col lg="6">
            <HardcoreModal />
          </Col>
        </Row>
      </Container>
    );
  }
}