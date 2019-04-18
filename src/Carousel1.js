/*import React, { Component } from 'react';
import Slider from "react-slick";
import { Container } from 'reactstrap';
import CarouselCard1 from './CarouselCard1';
import { Card, CardImg } from 'reactstrap';


class Carousel1 extends Component {

  render() {
    const settings = {
      dots: true,
     infinite: true,
     speed: 1500,
     slidesToShow: 4,
     slidesToScroll: 4,
     autoplay: true,
     autoplaySpeed: 6000,
     arrows: true,
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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };

    return (

      <Container>
        <h2> CarouselCard </h2>
        <Slider {...settings}>
          <div>
            {
              this.props.slide && this.props.slide.map(singleItem => (
                <Card>
                  <CardImg 
                    top width="100%" 
                    src={singleItem.image} 
                    alt="Card image cap"
                  />
                  {singleItem.id}
                </Card>
              ))
            }
          </div>
        </Slider>
      </Container>
    );
  }


}



export default Carousel1;*/



import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import CarouselCard1 from './CarouselCard1';



function slicing(arr) {
 const size = 1;
 const finalarr = [];
 for (let i = 0; i < arr.length; i += size) {
   finalarr.push(arr.slice(i, i + size));
 }
 return finalarr;
}

export default class TheaterSlider extends Component {
 constructor(props) {
   super(props);
   this.state = {
     characters: []
   };
   this.getCharacters = this.getCharacters.bind(this);
 }

 componentDidMount() {
   this.getCharacters();
 }

 getCharacters() {
   axios.get('http://easteregg.wildcodeschool.fr/api/characters')
     .then(response => response.data)
     .then(data => this.setState({ characters: data }));
 }

 render() {
   const settings = {
     dots: false,
     infinite: true,
     speed: 1,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 1,
     arrows: true,
     pauseOnHover: true,
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
           dots: true
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
   };
   const { characters } = this.state;
   const slide = slicing(characters);
   return (
     <div className="container theaterslidercontainer">
       <Slider {...settings}>
         {slide.map((character, index) => (
           // eslint-disable-next-line react/no-array-index-key
           <CarouselCard1 key={index} character={character} />
         ))}
       </Slider>
     </div>
   );
 }
}