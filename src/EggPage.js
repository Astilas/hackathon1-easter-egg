import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Carousel1 from './Carousel1';
import Carousel2 from './Carousel2';
import Carousel3 from './Carousel3';
import Carousel4 from './Carousel4';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { threadId } from 'worker_threads';

let classNames = require('classnames');

function slicing(arr) {
  const size = 1;
  const finalarr = [];
  for (let i = 0; i < arr.length; i += size) {
    finalarr.push(arr.slice(i, i + size));
  }
  return finalarr;
}
const initialSettings = {
  dots: false,
  infinite: true,
  speed: 5,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 100,
  arrows: false,
  pauseOnHover: false,
  vertical: false,
  initialSlide: 0,
  row: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eggs: [],
      character: [],
      settings1: initialSettings,
      settings2: initialSettings,
      settings3: initialSettings,
      settings4: initialSettings,
      idCard1: '',
      idCard2: '',
      idCard3: '',
      idCard4: '',
    };
    this.getEggs = this.getEggs.bind(this);
    this.getCharacter = this.getCharacter.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
  }

  componentDidMount() {
    this.getEggs();
    this.getCharacter();
  }

  getEggs() {
    axios.get('http://easteregg.wildcodeschool.fr/api/eggs')
      .then(response => response.data)
      .then(data => this.setState({ eggs: data.slice(0, 30) }));
  }
  getCharacter() {
    axios.get('http://easteregg.wildcodeschool.fr/api/characters/random')
      .then(response => response.data)
      .then(data => this.setState({ character: data }));
  }


  handleClick1(image) {
    this.setState({
      settings1: { ...this.state.settings1, autoplay: !this.state.settings1.autoplay },
      idCard1: image
    })
  }


  handleClick2(image) {
    this.setState({
      settings2:
        { ...this.state.settings2, autoplay: !this.state.settings2.autoplay },
      idCard2: image
    })
  }

  handleClick3(image) {
    this.setState({
      settings3:
        { ...this.state.settings3, autoplay: !this.state.settings3.autoplay },
      idCar3: image
    })
  }

  handleClick4(image) {
    this.setState({
      settings4:
        { ...this.state.settings4, autoplay: !this.state.settings4.autoplay },
      idCard4: image
    })
  }


  render() {
    let eggClass = classNames({
      'eggnodisplay': this.state.idCard1 !== this.state.idCard2 || this.state.idCard1 === '',
      'eggimage': (this.state.idCard1 === this.state.idCard2) && (this.state.idCard2 === this.state.idCard3) && (this.state.idCard1 === this.state.idCard4),
    })
    const { eggs } = this.state;
    const slide = slicing(eggs);
    return (
      <Container>
         <h2>Roulegg</h2>
        <Row>
          <Col lg="3">
            <div className="carousel">
              <Carousel1
                slide={slide}
                settings1={this.state.settings1}
                handleClick1={this.handleClick1} />
            </div>
          </Col>
          <Col lg="3">
            <div className="carousel">
              <Carousel2
                slide={slide}
                settings2={this.state.settings2}
                handleClick2={this.handleClick2} />
            </div>
          </Col>
          <Col lg="3">
            <div className="carousel">
              <Carousel3
                slide={slide}
                settings3={this.state.settings3}
                handleClick3={this.handleClick3} />
            </div>
          </Col>
          <Col lg="3">
            <div className="carousel">
              <Carousel4
                slide={slide}
                settings4={this.state.settings4}
                handleClick4={this.handleClick4} />
            </div>
          </Col>
        </Row>
        <button className="btn btn-black">bouton</button>
        <Link to="/character">
          <img className={eggClass} src={this.state.character.image} alt="egg" />
        </Link>

      </Container>
    );
  }
}


export default Home;