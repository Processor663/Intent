import React from "react";
import styles from './imageDesigner.module.css'



let ImageDesigner = ({image}) => {
  return (
    <div className={styles.wrapper} >
        <img  src={image} alt="img"/>
    </div>
  );
}

export default ImageDesigner;
