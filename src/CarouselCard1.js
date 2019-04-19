import React from 'react';
import { Card, CardImg } from 'reactstrap';



const CarouselCard1 = (props) => (
  <div className="container">
    {
      props.character.map(({ name, image, id }) => (

        <Card key={id} className="moviecard">
          <CardImg className="cardimage mx-auto"
            top width="100%"
            max-height="100%"
            max-width="100%"
            src={image} alt={name}
            onClick={() => {
              props.handleClick1(image);
            }}
          />
          
        </Card>

      ))
    }
  </div>

);

export default CarouselCard1;