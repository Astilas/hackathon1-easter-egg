import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Congrats extends Component {
  render() {
    return (
      <div>
        <h1 className="congrats">
          Congrats !!!
        </h1>
        <Row>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/19U2aQ323iGtO/giphy.gif" alt="iio" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/xT77XWum9yH7zNkFW0/source.gif" alt="uuu" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/vQqeT3AYg8S5O/giphy.gif" alt="u" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/ZyGzqTUWvSeOI/giphy.gif" alt="uu" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/source.gif" alt="imfd" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/UomxhEuY8oQ1O/200w_d.gif" alt="imag" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/4Xey144ccwIBq/giphy.gif" alt="ima" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/zGnnFpOB1OjMQ/giphy.gif" alt="i" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/9zXWAIcr6jycE/200w_d.gif" alt="im" />
          </Col>
          {/* <Col lg="4" md="4" sm="12" xs="12">
            <img src="" alt="image" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="" alt="image" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="" alt="image" />
          </Col> */}
        </Row>
      </div>
    )

  }
}

export default Congrats;