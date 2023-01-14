import React from 'react';
import styles from './WeDo.module.css'
import ImageDesigner from '../../imageDesigner/imageDesignerReverse';


function WeDo({heading, para, image}) {
  return (
    <>
 
      <div className={styles.wrapper}>

        <div className={styles.divider}>
            <div className={styles.imageDesigner} data-aos="flip-left">
                    <ImageDesigner image={image} />
                    
            </div>

            <div data-aos="fade-right" className={styles.reverseTop}>
                <h1>{heading}</h1>

                <p>{para}</p>

            </div>
           
        </div>

       
       
      </div>
    
     
     
    </>
  );
}

export default WeDo;