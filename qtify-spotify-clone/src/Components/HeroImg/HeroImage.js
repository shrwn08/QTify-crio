import React from 'react'
import Headphone from '../Assets/Headphone.png';
import './heroImage.css'
function HeroImage() {
  return (
    <div className="headphone-container">
          <img src={Headphone} alt="headphone" className="headphone-img" />
        </div>
    
  )
}

export default HeroImage