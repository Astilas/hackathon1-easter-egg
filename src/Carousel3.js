import React, { Component } from 'react';
import Slider from 'react-slick';
import CarouselCard3 from './CarouselCard3';


export default class TheaterSlider extends Component {
 render() {
   return (
     <div className="container theaterslidercontainer">
       <Slider {...this.props.settings3}>
         {this.props.slide.map((egg, index) => (
           <CarouselCard3 key={index} egg={egg} handleClick3={this.props.handleClick3}/>
         ))}
       </Slider>
     </div>
   );
 }
}