import React from 'react';
import HowItWorks from './HowItWorks/HowItWorks';
import HowItWorksReversed from './HowItWorks/HowItWorksReversed';
import WriteUps from './WriteUps'
import Image0 from '../assets/Image_ subscribe.svg';
import Image1 from '../assets/Image_ subscribe (1).svg';
import Image2 from '../assets/image 23.svg'




function HowItWorksContainer() {
  return (
    <>
    <h1 className='mb-5 mt-5 text-center'>How it works...</h1>
    <HowItWorks 
     para={WriteUps[0].para} 
     heading={WriteUps[0].heading} 
     image={Image0}/>

    <HowItWorksReversed
     para={WriteUps[1].para} 
     heading={WriteUps[1].heading} 
     image={Image1} />

    <HowItWorks 
     para={WriteUps[2].para} 
     heading={WriteUps[2].heading} 
     image={Image2}/>
    
    
    </>
   

  );
}

export default HowItWorksContainer;
