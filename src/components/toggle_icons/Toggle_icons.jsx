import React from 'react';
import overlay_icon from "./images/overlay_icon.svg";
import share_icon from "./images/share_icon.svg";
import "./toggle_icons.css";

const Toggle_icons = ({ toggleMapOverlay }) => {
  return (
    <div className='toggle_ico_container'>  
      <div className="map_overlay_icon" onClick={toggleMapOverlay}>
        <img src={overlay_icon} alt="overlay_icon" />
      </div>
      <div className="share-icon">
        <img src={share_icon} alt="share_icon" />
      </div>
      <div className="txt-3d-toggle">
        <div className="txt-3d">
          <span>3D</span>
        </div>
        <div className="toggle-symbol">
          
        </div>
      </div>
    </div>
  )
}

export default Toggle_icons