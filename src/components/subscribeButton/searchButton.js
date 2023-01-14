import React from 'react';
import styles from './SubscribeButton.module.css'

function searchButton() {
  return (
    <>
 
      <div className={styles.subwrapper} >
        <input  type="text" placeholder='Enter Your Email Address'/>
        <button> Subscribe Button </button>
      </div>
    
     
     
    </>
  );
}

export default searchButton;