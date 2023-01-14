import React from 'react';
import Styles from './Testimonial.module.css'
import image from '../../assets/Rectangle 3.png'
// Rectangle 3(1).png
// Rectangle 3(3).png
// Rectangle 3(5).png'




function Testimonial({name, course, content}) {
  return (
    <div className={Styles.wrapper}>
        <div>
            <img src={image} alt="img" />
            <h6 className='mt-3'>{name}</h6>
            <small>{course}</small>
        </div>
        <div className='mt-5'>
            <p>{content}</p>
        </div>
    
    </div>
   

  );
}

export default Testimonial;
