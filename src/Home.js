import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Carousel1 from './Carousel1';
import Carousel2 from './Carousel2';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
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
      characters: [],
      egg: [],
      settings1: initialSettings,
      settings2: initialSettings,
      idCard1: '',
      idCard2: '',
    };
    this.getCharacters = this.getCharacters.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
    this.getEggs();
  }

  getCharacters() {
    axios.get('http://easteregg.wildcodeschool.fr/api/characters')
      .then(response => response.data)
      .then(data => this.setState({ characters: data }));
  }
  getEggs() {
    axios.get('http://easteregg.wildcodeschool.fr/api/eggs/random')
      .then(response => response.data)
      .then(data => this.setState({ egg: data }));
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


  render() {
    let eggClass = classNames({
      'eggnodisplay': this.state.idCard1 !== this.state.idCard2 || this.state.idCard1 === '',
      'eggimage': this.state.idCard1 === this.state.idCard2,
      image: true
    })
    const { characters } = this.state;
 
    const slide = slicing(characters);

    // console.log(slide)
    // const arrReverse = reversed(slide);
    // console.log(arrReverse)

    return (
      <Container>
        <h1>Roulegg<img className="logo" src={logo} alt="logo"/></h1>
        <Row>
          <Col lg="6">
            <div className="carousel">
              <Carousel1
                slide={slide}
                settings1={this.state.settings1}
                handleClick1={this.handleClick1} />
            </div>
          </Col>
          <Col lg="6">
            <div className="carousel">
              <Carousel2 className="carousel2"
                slide={slide}
                settings2={this.state.settings2}
                handleClick2={this.handleClick2} 
                
                />
            </div>
          </Col>
        </Row>

        <Button className="mx-auto restartbutton" refresh="true" onClick={() => window.location.reload()} outline color="secondary">Restart</Button>
        <Link to="/egg">
          <img className={eggClass} src={this.state.egg.image} alt="egg" />
        </Link>

        <Link to="/congrats">
            <img className="float" src="https://www.rocketprices.com/images/rocket%20league/items/XboxOne-Golden-Egg.png" alt="golden-egg" />
          </Link>
      </Container>
    );
  }
}


export default Home;