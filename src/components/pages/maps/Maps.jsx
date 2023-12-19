import React, { useState } from "react";
import './maps.css';
import InformTable from "./InformationTable/InformTable";
import SelectDispatch from "./selectDispatch/SelectDispatch";
import DragBox from "./DragBox/DragBox";
import Toggle_icons from "../../toggle_icons/Toggle_icons";
import MapOverlay from "./mapOverlays/MapOverlay";
// import LawEnf from "./LawEnforcement/LawEnf";


const Maps = () => {
  const [showLawEnf, setShowLawEnf] = useState(false);
  const [showMapOverlay, setShowMapOverlay] = useState(false);
  const [showToggleIcons, setShowToggleIcons] = useState(true);

  const handleLawEnfClick = () => {
      setShowLawEnf(!showLawEnf);
  };

  const toggleMapOverlay = () => {
    setShowMapOverlay(!showMapOverlay);
    setShowToggleIcons(!showToggleIcons); // Toggle visibility of Toggle_icons
  };


    return (
        <div className="dragFR">
            <div className="dispatcherCard">
                <InformTable />
                <SelectDispatch onLawEnfClick={handleLawEnfClick}/>
                <DragBox />
            </div>
            {/* <div className="LF_card">
              {showLawEnf && <LawEnf />}
            </div> */}
            {/* <div className="toggle-icons">
              <Toggle_icons />
            </div> */}
            {showToggleIcons && (
        <div className="toggle-icons">
          <Toggle_icons toggleMapOverlay={toggleMapOverlay} />
        </div>
      )}
      <div className="map-overlay-container">
        {showMapOverlay && <MapOverlay />}
      </div>
       </div>
    )
}
  
export default Maps