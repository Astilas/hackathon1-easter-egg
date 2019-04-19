import React, { Component } from 'react';
import Slider from 'react-slick';
import CarouselCard4 from './CarouselCard4';


export default class TheaterSlider extends Component {
 render() {
   return (
     <div className="container theaterslidercontainer">
       <Slider {...this.props.settings4}>
         {this.props.slide.map((egg, index) => (
           <CarouselCard4 key={index} egg={egg} handleClick4={this.props.handleClick4}/>
         ))}
       </Slider>
     </div>
   );
 }
}