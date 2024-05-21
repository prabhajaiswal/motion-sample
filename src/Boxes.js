import React from 'react';
import './Boxes.css';

const Boxes = () => {
    return (
        <div className="container">
            <div className="box">
                <img src="motionarteffect-img9.png" alt="Light Weight" className="icon" />
                <h2>Light Weight</h2>
                <p>Motion Art for Elementor is designed to be lightweight.</p>
            </div>
            <div className="box">
                <img src="motionarteffect-img7.png" alt="100% Responsive" className="icon" />
                <h2>100% Responsive</h2>
                <p>Create a consistent visual experience across all devices.</p>
            </div>
            <div className="box">
                <img src="motionarteffect-img9.png" alt="User Friendly Interface" className="icon" />
                <h2>User Friendly Interface</h2>
                <p>Ensure a smooth experience for both applicants and administrators.</p>
            </div>
        </div>
    );
}

export default Boxes;
