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
            <img src="https://media.giphy.com/media/19U2aQ323iGtO/giphy.gif" alt="image" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/xT77XWum9yH7zNkFW0/source.gif" alt="" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/vQqeT3AYg8S5O/giphy.gif" alt="" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/ZyGzqTUWvSeOI/giphy.gif" alt="image" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/source.gif" alt="image" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/UomxhEuY8oQ1O/200w_d.gif" alt="image" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/4Xey144ccwIBq/giphy.gif" alt="image" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/zGnnFpOB1OjMQ/giphy.gif" alt="image" />
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <img src="https://media.giphy.com/media/9zXWAIcr6jycE/200w_d.gif" alt="image" />
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