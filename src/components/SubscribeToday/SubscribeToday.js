import React from 'react';
import styles from './SubscribeToday.module.css'
import SearchButton from '../subscribeButton/searchButton';
// import stylesSearchButton from '../subscribeButton/SubscribeButton.module.css';




function SubscribeToday() {
  return (
    <div className={styles.SubscribeToday}>
        <div className={styles.SubscribeTodaySubDiv1}>
            <h1>Subscribe Today!</h1>
            <p>
            Subscribe  today and join thousands of students and 
            young people on our email list who receive timely scholarship updates.
            </p>
        </div>
        <div className={styles.SubscribeTodaySubDiv2}>
            <SearchButton />

        </div>
       

        
        

      
       
        
     
    
    </div>
  );
}

export default SubscribeToday;
