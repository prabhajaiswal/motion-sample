/*&import React from 'react'
import  motion from './motionarteffect-img11.png'
import  motion2 from './motionarteffect-img10.png'
function Section4() {
  return (
    <div className='content2'>
        <div className='section1'>

        <h1>Apply On Section</h1>
<h2>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </h2>
      <img src={motion} alt='nothing'/>
        </div>
        
<div className='section2'>
<h1>Apply On Page</h1> 
      <h2>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</h2>
      <img src={motion2} alt='nothing'/>

</div>
    
      

    </div>
  )
}

export default Section4;
*/


import React from 'react';
import motion from './motionarteffect-img11.png';
import motion2 from './motionarteffect-img10.png';
import './Section4.css'; // Import the CSS file

function Section4() {
  return (
    <div className="content2">


<h1>Apply On Any Section Or Enable For </h1>
<h1>Whole Page</h1>

      <div className="section1">
        <h1>Apply On Section</h1>
        <h2>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</h2>
        <img src={motion} alt="Motion Art Effect" />
      </div>
      
      <div className="section2">
        <h1>Apply On Page</h1>
        <h2>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</h2>
        <img src={motion2} alt="Motion Art Effect" />
      </div>
    </div>
  );
}

export default Section4;
