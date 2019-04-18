import React, { Component } from 'react';
import Slider from 'react-slick';
import CarouselCard1 from './CarouselCard1';

export default class TheaterSlider extends Component {
  render() {
    return (
      <div className="container theaterslidercontainer">
        <Slider {...this.props.settings1}>
          {this.props.slide.map((character, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CarouselCard1
              key={index}
              character={character}
              handleClick1={this.props.handleClick1}
              triggerParentUpdate={this.props.triggerParentUpdate} />
          ))}
        </Slider>
      </div>
    );
  }
}