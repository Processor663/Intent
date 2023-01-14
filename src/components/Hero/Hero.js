import React from "react";
import styles from './Hero.module.css'
import ImageDesigner from '../imageDesigner/imageDesigner'
import SubscribeButton from '../subscribeButton/SubscribeButton'
import image from '../assets/image8.svg'




let Hero = () => {
  return (
    <>
    <div className= {styles.hero} >
        <div className={styles.hero1} >
          <div className={styles.subhero1}>
            <h1>
            Get <span style={{color:'#0073E5'}}>scholarship updates</span> on top schools direct to your inbox
            </h1>
            <p className="mt-5">
            Sign up to our email list and be the first to get on-the-go, freshly dropped,
             hot-hot scholarship updates on top
             class universities in the US, UK, Germany, etc direct to your inbox. No stress.
            </p>
          </div>
          <div className={styles.ImageDesigner} >
           <ImageDesigner image={image}/>
          </div>

        </div>
         <SubscribeButton />

    </div>



    </>
  );
}

export default Hero;
