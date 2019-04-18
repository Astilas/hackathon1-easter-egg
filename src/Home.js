import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Carousel1 from './Carousel1';
import Carousel2 from './Carousel2';
import axios from 'axios';


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
  speed: 2,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 80,
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
      settings1 : initialSettings,
      settings2 : initialSettings,
        
      };
    this.getCharacters = this.getCharacters.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }
  
  componentDidMount() {
    this.getCharacters();
  }
 
  getCharacters() {
    axios.get('http://easteregg.wildcodeschool.fr/api/characters')
      .then(response => response.data)
      .then(data => this.setState({ characters: data.slice(0, 10) }));
  }
 

  handleClick1(){
    this.setState ({
      settings1:
      {...this.state.settings1, autoplay: !this.state.settings1.autoplay }
    
    })
  }


  handleClick2(){
    this.setState ({
      settings2:
      {...this.state.settings2, autoplay: !this.state.settings2.autoplay }
    
    })
  }


  render() {

    const { characters } = this.state;
    const slide = slicing(characters);
    return(
      <Container>
       <h2> CarouselCard </h2>
        <Carousel1 slide={slide} settings1={this.state.settings1} handleClick1={this.handleClick1}/>
        <Carousel2 slide={slide} settings2={this.state.settings2} handleClick2={this.handleClick2}/>
    </Container>
    );
  }
}


export default Home;