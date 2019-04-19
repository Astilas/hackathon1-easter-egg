import React, { Component } from 'react';
import Slider from 'react-slick';
import CarouselCard2 from './CarouselCard2';


export default class TheaterSlider extends Component {
 render() {
   return (
     <div className="container theaterslidercontainer">
       <Slider {...this.props.settings2}>
         {this.props.slide.map((egg, index) => [
           // eslint-disable-next-line react/no-array-index-key
           <CarouselCard2 key={index} egg={egg} handleClick2={this.props.handleClick2}/>
         ])}
       </Slider>
     </div>
   );
 }
}