import React from 'react';
import { Card, CardImg } from 'reactstrap';

const CarouselCard2 = (props) => (
 <div className="container">
   {
       props.egg.map(({ name, image, id }) => (

           <Card key={id} className="moviecard" >
             <CardImg className="cardimage mx-auto" 
              top width="100%" 
              max-height="100%" 
              max-width="100%" 
              src={image} alt={name} 
              onClick={props.handleClick2}/>
           </Card>

       ))
     }
 </div>

);

export default CarouselCard2;