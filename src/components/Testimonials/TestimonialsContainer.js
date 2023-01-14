import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Testimonial from './Testimonial/Testimonial';
import styles from './TestimonialsContainer.module.css'
import WriteUps from './WriteUps';

function TestimonialsContainer() {
  let CarouselList = WriteUps.map(WriteUp => { 

    return (
      <Carousel.Item>
            <div className={styles.wrapper}>

      <Testimonial 
            name={WriteUp.name} 
            course={WriteUp.course}
            content={WriteUp.content}/>
      </div>

      </Carousel.Item> 
    )
  }

)


  return (
    <Carousel>
        {CarouselList}       
    </Carousel>
  );
}

export default TestimonialsContainer;