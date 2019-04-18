import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Carousel1 from './Carousel1';
import Carousel2 from './Carousel1';
import axios from 'axios';

function slicing(arr) {
  const size = 1;
  const finalarr = [];
  for (let i = 0; i < arr.length; i += size) {
    finalarr.push(arr.slice(i, i + size));
  }
  return finalarr;
 }

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      characters1 :[],
      characters2: []
    }
  }

  componentDidMount() {
    this.getInfo();
  }
  
  getInfo() {
    axios.get("http://easteregg.wildcodeschool.fr/api/characters")
      .then(response => response.data)
      .then(data => this.setState({
        characters1: data, characters2: data
      }));
  }



  render() {
    const {  characters1 } = this.state;

    const slide = slicing(characters1);
    return(
      <Container>
       <h2> CarouselCard </h2>
        <Carousel1 />
        <Carousel2 />
        { /*Carousel2 characters2={this.state.characters2} /> */}
    </Container>
    );
  }
}


export default Home;