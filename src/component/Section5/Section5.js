import React from 'react'
import motion from './motionarteffect-img8.png';
import motion2 from './motionarteffect-img9.png';
import motion3 from './motionarteffect-img7.png';
import motion1 from './motionarteffect-img7.png';

import './Section5.css'
function Section5() {
  return (
    <div className='anshu'>
            
       

        <div className='row1'>
        <h1>Supported by All Popular Browsers</h1>
       <h2>Rest assured, Motion Art is designed to be compatible </h2><h2>with all major web browsers.</h2>
          <img src={motion} alt='no'/>
        </div>
    

<div className='row2'>
  
    <h1>An All-Round Plugin With Powerful</h1><h1> Features</h1>
<h4>Whether you're a seasoned web designer or just starting out, Motion Art for </h4>
<h4>Elementor seamlessly integrates with the Elementor platform, providing you</h4><h4> with a seamless and intuitive experience.</h4>

    



</div>




<div className="container">
            <div className="box">
                <img src={motion2} alt="Light Weight" className="icon" />
                <h2>Light Weight</h2>
                <p>Motion Art for Elementor is designed to be lightweight.</p>
            </div>
            <div className="box">
                <img src={motion1} alt="100% Responsive" className="icon" />
                <h2>100% Responsive</h2>
                <p>Create a consistent visual experience across all devices.</p>
            </div>
            <div className="box">
                <img src={motion3}  alt="User Friendly Interface" className="icon" />
                <h2>User Friendly Interface</h2>
                <p>Ensure a smooth experience for both applicants and administrators.</p>
            </div>
        </div>




        <footer>
        <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        <div className="footer-links">
            <a href="#56">Documentation</a>
            <a href="#65
            ">Support</a>
        </div>
    </footer>
    </div>
  )
}

export default Section5;
