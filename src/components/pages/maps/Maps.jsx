import React from "react";
import "./maps.css";
// import SideBar from "../../sideBar/SideBar";
// import Footer from "../../footer/Footer"
import LawEnforcement from "./LawEnforcement/LawEnforcement";
const Maps = () => {
  return (
    <div className="mapsParent">
      {/* <div className="sidebar"> */}
        {/* <SideBar /> */}
      {/* </div> */}
      <div className="mapsBody">
        <div className="bodyPart">
          <LawEnforcement/>  
        </div>
        {/* <div className="footer"> */}
        {/* <Footer /> */}
      {/* </div> */}
      </div>

    </div>
  );
};

export default Maps;
