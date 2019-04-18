import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import CarouselCard2 from './CarouselCard2';



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
     eggs: []
   };
   this.getEgg = this.getEgg.bind(this);
 }

 componentDidMount() {
   this.getEgg();
 }

 getEgg() {
   axios.get('http://easteregg.wildcodeschool.fr/api/eggs')
     .then(response => response.data)
     .then(data => this.setState({ eggs: data }));
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
   const { eggs } = this.state;
   const slide2 = slicing(eggs);
   return (
     <div className="container theaterslidercontainer">
       <Slider {...settings}>
         {slide2.map((egg, index) => (
           // eslint-disable-next-line react/no-array-index-key
           <CarouselCard2 key={index} egg={egg} />
         ))}
       </Slider>
     </div>
   );
 }
}