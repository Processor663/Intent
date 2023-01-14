
import React from 'react';
import styles from './SubscribeButton.module.css'
import SearchButton from './searchButton';


function SubscribeButton() {
  return (
    <>
    <div className={styles.wrapper}>
      <h3>Subscribe now</h3>
      <SearchButton />
    </div>
    
    </>
  );
}

export default SubscribeButton;