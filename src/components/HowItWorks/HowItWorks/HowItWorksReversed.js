import React from 'react';
import styles from './HowItWorks.module.css'





function HowItWorksReversed({heading, para, image}) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.divider}>
            <div className={styles.dividerSub2Reversed }>
                <img src={image} alt='img' />
            </div>

            <div className={styles.dividerSub1Reversed }>
                <h3>{heading}</h3>
                <p className='mt-4'>{para}</p>
              

            </div>
            
           


        </div>
    
    
    </div>
   

  );
}

export default HowItWorksReversed;
