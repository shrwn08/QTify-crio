import React from 'react'
import Qtify from '../Assets/Qtify-removebg-preview.png'
import './logo.css'
function Logo() {
  return (
    <div className="logo-container">
          <img src={Qtify} alt="logo" className="logo-image" />
        </div>
  )
}

export default Logo