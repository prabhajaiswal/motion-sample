import React from 'react'
import motion1 from './motionarteffect-img1.png'
import motion2 from './motionarteffect-img2.png'
import motion3 from './motionarteffect-img3.png'
import motion4 from './motionarteffect-img5.png'
import img from './motionarteffect-img4.png'
import './Section2.css'
function Section2() {
  return (


    <>
    
      <div className='anshika'>
      <h2>Trusted by thousands of users around the world</h2>

      </div>
       
        <div className='kukkur'>
        <img src={motion1} alt='no'/>
       
        <img src={img} alt='not'/>
        <span>4.5 Score, 9 Reviews</span>
   <img src={motion2} alt='no'/>
   <img src={img} alt='not'/>
   <span>4.5 Score, 9 Reviews</span>


   <img src={motion3} alt='no'/>
   <img src={img} alt='not'/>

   <span>4.5 Score, 9 Reviews</span>
    </div>
    


    <div className='sec'>
    <div className='sec1'>
    <h1>Turn Your Cursor Into A Colorful Magic 
    </h1><h1>Wand & Charm Your Visitors</h1>
    <h3>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</h3>
    <button className="gradient-button">
        Purchase From Envato
        <span className="arrow">→</span>
    </button>
    </div>

<div className='sec2'>

<img src={motion4} alt='no '/>
</div>
</div>

</>
   
  )
}

export default Section2
