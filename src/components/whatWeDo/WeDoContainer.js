import React from 'react';
import WeDo from './WeDo/WeDo';
import WeDoReverse from './WeDo/WeDoReverse';
import WriteUp from './WriteUps';
import Image0 from '../assets/image10.svg';
import Image1 from '../assets/image17.svg';
import Image2 from '../assets/image14.svg'
import Image3 from '../assets/image15.svg';
import Image4 from '../assets/image16.svg';






function WeDoContainer() {
   
  return (
    <>
    
         <WeDo 
        para={WriteUp[0].para} 
        heading={WriteUp[0].heading} 
        image={Image0} />
        <WeDoReverse 
         para={WriteUp[1].para} 
         heading={WriteUp[1].heading} 
         image={Image1}/>
        <WeDo 
         para={WriteUp[2].para} 
         heading={WriteUp[2].heading} 
         image={Image2}/>
        <WeDoReverse 
         para={WriteUp[3].para} 
         heading={WriteUp[3].heading} 
         image={Image3}/> 
        <WeDo 
         para={WriteUp[4].para} 
         heading={WriteUp[4].heading} 
         image={Image4}/>

    </>


 

  );
}

export default WeDoContainer;