import React from 'react';
import styles from './HowItWorks.module.css'





function HowItWorks({heading, para, image}) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.divider}>
            <div className={styles.dividerSub1}>
                <h3>{heading}</h3>
                <p className='mt-4'>{para}</p>
              

            </div>
            
            <div className={styles.dividerSub2}>
                <img src={image} alt='img' />
             
                
                
               

            </div>


        </div>
    
    
    </div>
   

  );
}

export default HowItWorks;
